import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import toast, { Toast } from "react-hot-toast";

function ErrorMessage({ message }) {

  // const [error, setMessage] = useState("");
  // if (response.status >= 200 && response.status <= 300) {
  //   toast.success("Check your email to verify your account.");
  //   // router.push("/auth/sign-in");
  // } else if (response.status === 400) {
  //   toast.error("Email already exists");
  // } else if (response.status === 500) {
  //   toast.error("Internal server error");
  // } else {
  //   toast.error("Something went wrong");
  // }


  return (
    message && (
      <p className="text-red-500">
        {/* <FontAwesomeIcon
          className="w-1rem"
          icon={faXmarkCircle}
          style={{ fontSize: 10, color: "red" }}
          color="red"
        ></FontAwesomeIcon>{" "} */}
        {message}
      </p>
    )
  );
}

export default ErrorMessage;