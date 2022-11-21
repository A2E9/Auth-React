import React from "react";
import { useRef, useState } from "react";
import altogic from "../../../helpers/client";
import { useRouter } from "next/router";
import CustButton from "../../ui/Button";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../../ui/ErrorMessage";
import { useAuth } from "../../../context/StateContext";

const Sign_in = (props) => {
  const {
    session,
    user,
    isAuth,
    allSessionsList,
    authStateChanged,
    getAllSessionsFromAltogic,
    profilePicChanged,
    setAllSessionsList,
    setIsAuth,
  } = useAuth();

  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    let email_username = emailRef.current.value;
    let password = passwordRef.current.value;

    let response = await altogic.auth
      .signInWithEmail(email_username, password)
      .then((userI) => {
        if (userI.errors) {
          toast.error(userI.errors.items[0].message);
        } else {
          setIsAuth(true);
          router.replace("/home");
        }
      });
    console.log(isAuth);
    console.log(user);

    // altogic.auth.signOut().then((value) => {console.log(value)});

    setLoading(false);
  };

  return (
    <section id="signup" className="center">
      <main id="authorize">
        <div className="auth-container">
          <h2 className="title">Sign In</h2>
          {/* Username, Email, Password */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group ">
              <div className="email credits">
                <label htmlFor="emailUser">Email or Username</label>
                <input
                  className="input"
                  type="text"
                  name="emailUser"
                  id="emailUser"
                  ref={emailRef}
                />
              </div>

              <div className="password credits">
                <label htmlFor="password">Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                />
              </div>

              <div className="submit">
                <CustButton
                  className="btn pl-5 pr-5"
                  loading={loading}
                  buttonValue="Sign In"
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div>
            <p className="text-center">
              Does not have an account?{" "}
              <a href="/auth/register" className="link">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Sign_in;
