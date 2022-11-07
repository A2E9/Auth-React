import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import  altogic  from "../helpers/client";

const Context = createContext({
  user: null,
  session: null,
  allSessionsList: null,
});

export const StateContext = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     setUser(user);
  //   }
  //   setLoading(false);
  // }, []);

  // const login = (user) => {
  //   setUser(user);
  //   localStorage.setItem("user", JSON.stringify(user));
  //   toast.success("Login success");
  // };

  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  //   toast.success("Logout success");
  // };

  // return (
  //   <Context.Provider value={{ user, setUser, login, logout }}>
  //     {children}
  //   </Context.Provider>
  // );

  const [isAuth, setIsAuth] = useState(false);
  const [session, setSession] = useState();
  const [user, setUser] = useState();
  const [allSessionsList, setAllSessionsList] = useState(null);

  useEffect(() => {
    // Get the session and user from local storage.
    const session = altogic.auth.getSession();
    const user = altogic.auth.getUser();
    setSession(session);
    setUser(user);
    if (user && session) {
      //If there is a user, set the session and user in context.
      getAllSessionsFromAltogic(); //Get all sessions of the user.
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

  const value = {
    session,
    user,
    allSessionsList,
    authStateChanged,
    getAllSessionsFromAltogic,
    profilePicChanged,
    setAllSessionsList,
    setIsAuth,
  };

  return <Context.Provider value={{value}}>
    {children}
  </Context.Provider> 
};

export const useAuth = () => {
  return useContext(Context);
};
