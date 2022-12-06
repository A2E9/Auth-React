import React from "react";
import Link from "next/link";
import CustButton from "../ui/Button";
import { useAuth } from "../../context/StateContext";
import altogic from "../../helpers/client";
function Header() {
  const { user, isAuth, setIsAuth, signOut } = useAuth();

  return (
    <section id="header">
      <div className="header-container">
        <div>
          <Link href="/">
            <h2>Main-Site</h2>
          </Link>
        </div>
        <div className="buttons">
          {!user && (
            <>
              <CustButton
                className="bttn "
                buttonValue="Register"
                type="submit"
                href="/auth/register"
              />
              <CustButton
                className="bttn "
                buttonValue="Login"
                type="submit"
                href="/auth/login"
              />
            </>
          )}

          {user && (
            <>
              <CustButton
                className={(user.role) ? "bttn bg-purple-500" : "bttn bg-red-500"}
                buttonValue="Admin"
                type="submit"
                href="/admin"
                onClick={""}
              />
              <CustButton
                className="bttn "
                buttonValue="Profile"
                type="submit"
                href="/profile"
                onClick={""}
              />
              <CustButton
                className="bttn "
                buttonValue="Logout"
                type="submit"
                onClick={() => signOut()}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
