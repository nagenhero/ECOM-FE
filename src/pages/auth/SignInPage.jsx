import React from "react";
import { UserSignInForm } from "../../components/forms/UserSignInForm";

const SignInPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
        background: "#66CDAA",

        color: "#fff",
        padding: "2rem",
      }}
    >
      <div className="w-25 card p-3 shadow-lg">
        <UserSignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
