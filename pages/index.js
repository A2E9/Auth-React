import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Landing from "./landing";
import { useState } from "react";
export default function Home() {



  const [column, setColumn] = useState([]);

  return (
    <div className="container">

      <main className="center">
        <h1 className="title">
          Welcome to <a href="https://valentyn.live">__!</a>
        </h1>

        <p className="description">
          Visit site - - - {' '}
          <code className="code">
          <a href="https://valentyn.live">HERE</a>
          </code>
        </p>

      </main>

    </div>
);

}

// const Navigation = () => (
//   <nav>
//     <Link to="/login">Landing</Link>
//     <Link to="/home">Home</Link>
//     <Link to="/dashboard">Dashboard</Link>
//     <Link to="/analytics">Analytics</Link>
//     <Link to="/admin">Admin</Link>
//   </nav>
// );
