import React from "react";
import Link from "next/link";
import CustButton from "../ui/Button";
import { useAuth } from "../../context/StateContext";
import altogic from "../../helpers/client";
function Header() {
  const {user, isAuth,setIsAuth, signOut} = useAuth();

  return (
    <section id="header">
      <div className="header-container">
        <div>
          <Link href="/">
            <h2>Main-Site</h2>
          </Link>
        </div>
        <div className="buttons">
          {!isAuth && (
            <>
              <CustButton
                className="btn btn-primary "
                buttonValue="Login"
                type="submit"
                href="/auth/login"
              />
              <CustButton
                className="btn btn-primary"
                buttonValue="Register"
                type="submit"
                href="/auth/register"
              />
            </>
          )}

          {isAuth && (
            <>
              <CustButton
                className="btn btn-primary "
                buttonValue="Logout"
                
                type="submit"
                onClick={() => signOut() }
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
