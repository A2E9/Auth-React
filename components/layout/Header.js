import React from "react";
import Link from "next/link";
import CustButton from "../ui/Button";
function Header() {

   
  return (
    <section id="header">
      <div className="header-container">
        <div>
        <Link href="/">
          <h2>Main-Site</h2>
        </Link>
        </div>
        <div className="buttons">
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
        </div>
      </div>
    </section>
  );
}

export default Header;
