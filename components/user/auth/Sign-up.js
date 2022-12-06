import React from "react";
import { useRef, useState } from "react";
import altogic from "../../../helpers/client";
import { useRouter } from "next/router";
import CustButton from "../../ui/Button";
import toast, { Toaster } from "react-hot-toast";
//ErrorMessage
import ErrorMessage from "../../ui/ErrorMessage";

const Sign_up = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const passwordConfirmRef = useRef();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    let email = emailRef.current.value;
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) {
      return setMessage("Passwords do not match");
    }else
    if (password.length < 6) {
      return setMessage("Password must be at least 6 characters");
    }else
    // if (username.length < 3) {
    //   return setMessage("Username must be at least 3 characters");
    // }else
    // if (username.length > 20) {
    //   return setMessage("Username must be less than 20 characters");
    // }
    // else
    {
      setMessage("");
    }

    let user = await altogic.auth
      .signUpWithEmail(email, password, username )
      .then((response) => {
        if (response.user) {
          toast.success("Check your email to verify your account.");
          router.push("/auth/login");
        } else if (response.errors.status === 400) {
          toast.error(response.errors.items[0].message);
        } else if (response.errors.status === 500) {
          toast.error(response.errors.items[0].message);
        } else {
          toast.error(response.errors.items[0].message);
        }

        // if (response.errors) {
        //   setMessage(response.errors);
        //   console.log(response.errors);
        //   // toast.error(response.errors);
        //   setLoading(false);
        // } else {
        //   toast.success("Check your email to verify your account.");
        // }
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
        setLoading(false);
      });

    } catch (error) {
      setMessage(error.message);
      console.log(error.message);
      setLoading(false);
    }
setMessage("");
    // if (user.status >= 200 && user.status <= 300) {
    //   toast.success("Check your email to verify your account.");
    //   // router.push("/auth/sign-in");
    // } else if (user.status === 400) {
    //   toast.error("Email already exists");
    // } else if (user.status === 500) {
    //   toast.error("Internal server error");
    // } else {
    //   toast.error("Something went wrong");
    // }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //  const handleSubmit =  () => {
  //   const user = altogic.auth.signUpWithEmail("reiareja.vl@gmail.com", "password", "username");
  //   setLoading(true);
  //   console.log(user);

  //   let email = emailRef.current.value;
  //   let username = usernameRef.current.value;
  //   let password = passwordRef.current.value;

  //   // console.log(user);
  //   try {
  //     console.log("000");
  //     // let passwordConfirm = passwordConfirmRef.current.value;

  //     // const res = await altogic.post("/api/auth/signup", {
  //     //   email,
  //     //   username,
  //     //   password,
  //     //   // passwordConfirm,
  //     // });

  //     // const  user  = await altogic.auth.signUpWithEmail(
  //     //   email,
  //     //   password,
  //     //   username
  //     // );

  //     // console.log(user);
  //     console.log("email "+email);
  //     console.log("email c v "+emailRef.current.value);
  //     console.log("email c "+emailRef.current);
  //     console.log("emailref "+emailRef);
  //     if (user) {
  //       // router.push("/");
  //       console.log("user", user);
  //     } else {
  //       // setError(errors[0].message);
  //       // console.log("Error: " + errors[0].message);
  //       console.log("Error1: ");
  //     }
  //     console.log(res.data);
  //   } catch (err) {
  //     // setError(err.response.data.message);
  //     // console.log("Error: " + err.response.data.message);
  //     console.log(err);
  //     // console.log(user);
  //     console.log("email "+email);
  //     console.log("email c v "+emailRef.current.value);
  //     console.log("email c "+emailRef.current);
  //     console.log("emailref "+emailRef);
  //     setLoading(false);
  //   }

  //   console.log("111");
  //   setLoading(false);
  // };

  // async function handleSubmit() {
  //   setLoading(true);
  //   try {
  //     let email = emailInputElement.current.value;
  //     let password = passwordInputElement.current.value;
  //     let username = usernameInputElement.current.value;
  //     const { user, errors } = await altogic.auth.signUpWithEmail(
  //       email,
  //       password,
  //       username
  //     );
  //     if (user) {
  //       router.push("/auth/verification-sent");
  //     } else {
  //       setMessage(errors.items[0].message);
  //     }
  //   } catch (error) {
  //     setMessage(error.message.toString());
  //   }

  //   setLoading(false);
  // }

  return (
    <section id="signup" className="center">
      <main id="authorize">
        <div className="auth-container">
          <h2 className="title">Sign Up</h2>
          {/* Username, Email, Password */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group ">

              <div className="email credits">
                <label htmlFor="email">Email*</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
              </div>

              <div className="username credits">
                <label htmlFor="username">Username*</label>
                <input
                  className="input"
                  type="text"
                  name="username"
                  id="username"
                  ref={usernameRef}
                />
              </div>

              <div className="password credits">
                <label htmlFor="password">Password*</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                />
              </div>

              {/* repeat password */}

              <div className="passwordConf credits">

                <label htmlFor="passwordConf">Confirm Password*</label>
                <input
                  className="input"
                  type="password"
                  name="passwordConf"
                  id="passwordConf"
                  ref={passwordConfirmRef}
                />
              </div>

              <div className="error-message">
                <ErrorMessage message={message} />
              </div>

              <div className="submit">
                <CustButton
                  className="bttn pl-5 pr-5"
                  loading={loading}
                  buttonValue="Sign Up"
                  type="submit"
                />
              </div>
            </div>
          </form>
              <div>
                <p className="text-center">
                  Already have an account?{" "}
                  <a href="/auth/login" className="link">
                    Login
                  </a>
                </p>
              </div>
        </div>
      </main>
    </section>
  );
};

export default Sign_up;
