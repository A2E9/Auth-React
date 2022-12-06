import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import altogic from "../helpers/client";
import { useRouter } from "next/router";

const Context = createContext({
  user: null,
  session: null,
  allSessionsList: null,
});

export const StateContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const [allSessionsList, setAllSessionsList] = useState(null);
  // const [authState, setAuthState] = useState({ token: "" });

  const router = useRouter();

  useEffect(() => {
    const session = altogic.auth.getSession();
    const user = altogic.auth.getUser();
    
    setSession(session);
    setUser(user);
    if (user && session) {
      getAllSessionsFromAltogic();
    } else {
      altogic.auth.clearLocalData();
    }
  }, [isAuth]);

  function authStateChanged(newSession, newUser) {
    setSession(newSession);
    setUser(newUser);
    altogic.auth.setSession(newSession);
    altogic.auth.setUser(newUser);
  }

  async function signOut() {
    await altogic.auth.signOut();
    setUser();
    setIsAuth(false);
    router.replace("/");
  }

  async function getAllSessionsFromAltogic() {
    //This line returns all active sessions of a user.
    const { sessions } = await altogic.auth.getAllSessions();
    if (sessions) {
      setAllSessionsList(sessions);
      return sessions;
    }
  }

  async function profilePicChanged(profilePictureUrl, deleted) {
    let result;
    setIsAuth(true);
    if (!deleted) {
      //Change the profile picture url.
      result = await altogic.db.model("users").object(user._id).update({
        profilePicture: profilePictureUrl,
      });
    } else {
      //Unset the profile picture url field.
      result = await altogic.db
        .model("users")
        .object(user._id)
        .updateFields([{ field: "profilePicture", updateType: "unset" }]);
    }
    authStateChanged(session, result.data);
  }

  return (
    <Context.Provider
      value={{
        session,
        user,
        isAuth,
        allSessionsList,
        authStateChanged,
        getAllSessionsFromAltogic,
        profilePicChanged,
        setAllSessionsList,
        setIsAuth,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
