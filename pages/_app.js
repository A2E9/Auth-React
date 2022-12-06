import "../scss/css/style.css";
import { StateContext } from "../context/StateContext";
import Layout from "../components/layout/Layout";
import "../node_modules/primeflex/primeflex.css";
import { Toaster } from "react-hot-toast";
import altogic from "../helpers/client";
// import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
// import "../../node_modules/primeflex/primeflex.css";
// import Home from "../components/Home";
// import { useState, useEffect, use } from "react";
// import { useAuth } from "../context/StateContext";

function MyApp({ Component, pageProps }) { //FIX ROUTING, HYDRATION; VALIDATE USER IN LOCAlSTORAGE, ADMIN-ROLE; 
  let user = altogic.auth.getUser()
  let session = altogic.auth.getSession()
  let promise; 
  let dbUser;
  // if(user) {promise = altogic.auth.getUserFromDB().then(console.log(user))}
  // console.log(promise.user)
  // .then((userI) => {
  //   if (userI.errors) {
  //     console.log(userI.errors.items[0].message);
  //   } else {
  //     // setIsAuth(true);
  //     // router.replace("/home");
  //     console.log("ddddd")
  //   }
  // });
  

  if (pageProps.protected && !user) {
    return (
      <StateContext>
        <Layout>
          <p className="center text-red-400">
            You must be logged in to access this page!
          </p>
        </Layout>
      </StateContext>
    );
  }

  if (
    pageProps.protected &&
    user &&
    pageProps.userTypes &&
    pageProps.userTypes.indexOf(user.role) === -1
  ) {
    return (
      <StateContext>
        <Layout>
          <p className="center text-red-400">Sorry you dont have access.</p>
        </Layout>
      </StateContext>
    );
  }
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
