import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activateNewUserApi } from "../../features/users/userAxios";
import axios from "axios";
import { toast } from "react-toastify";
import { clickAction } from "../../features/users/userAction";
import { useDispatch } from "react-redux";

export const VerifyUserPage = () => {
  const [isPending, setPending] = useState(true);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("hello", sessionId, t);

  const handleOnClick = async () => {
    await dispatch(clickAction(navigate, sessionId, t));

    // const response = await axios.post(
    //   "http://localhost:9004/api/v1/auth/verify-user?sessionId=" +
    //     sessionId +
    //     "&token=" +
    //     t
    // );

    // toast[response.data.status](response.data.message);
    // if (response.data.status == "success") {
    //   navigate("/signin");
    // }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "85vh", background: "#66CDAA" }}
    >
      <Card style={{ width: "500px", height: "auto" }}>
        <Card.Img
          variant="top"
          src="https://socialapps.tech/sites/default/files/nodeicon/plugins_email-verification-plugin.png"
          style={{
            height: "160px",
            objectFit: "contain",
            padding: "1rem",
            background: "#4b4e52",
          }}
        />
        <Card.Body>
          <Card.Title>
            <h1 className="mb-5">Verify you email</h1>
          </Card.Title>
          <Card.Text>
            Welcome to SNSS Shopping! Please verify your email adress by
            clicking the button below
          </Card.Text>
          <Button
            onClick={handleOnClick}
            className="w-100 p-2 "
            variant="primary"
            style={{ marginTop: "70px" }}
          >
            Verify your email
          </Button>
        </Card.Body>
      </Card>
    </div>
    // <div
    //   className="d-flex justify-content-center align-items-center gap-3 p-3 bg-light rounded shadow-lg"
    //   style={{ height: "80vh" }}
    // >
    //   <button className="btn btn-primary btn-lg" onClick={handleOnClick}>
    //     Verify
    //   </button>
    // </div>
  );
};
