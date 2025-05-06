import React, { useEffect, useState } from "react";
import { UserSignInForm } from "../../components/forms/UserSignInForm";
import { Spinner } from "react-bootstrap";

const SignInPage = () => {
  const [showLoader, setShowLoader] = useState(false);

  return showLoader ? (
    <div className="vh-100  d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
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
        <UserSignInForm setShowLoader={setShowLoader} />
      </div>
    </div>
  );
};

export default SignInPage;
