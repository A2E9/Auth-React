import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Auth App Auth App Auth App</title>
        <meta name="description" content="Generated by valentyn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header></Header>
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
