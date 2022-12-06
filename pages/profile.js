import React from "react";
import { StateContext, useAuth } from "../context/StateContext";

const Profile = () => {
  const { user, session } = useAuth([]);
  return (
    <div className="center">
      {user && (
        <>
          <h2>Profile</h2>

          {/* <p className={user.role ? "text-purple-500" : "hidden"}>
            Role: {user.role}
          </p>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Registered: {user.signUpAt}</p> */}

          
          {Object.keys(user).map((key, index) => {
            if (user[key])
            return (
              <div key={index}>
                <p >
                  <span className="text-red-300">{key}</span>: {user[key]}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
export default Profile;
