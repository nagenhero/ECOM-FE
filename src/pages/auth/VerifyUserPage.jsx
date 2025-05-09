import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const VerifyUserPage = () => {
  const [isPending, setPending] = useState(true);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log("hello", sessionId, t);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {isPending ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Spinner animation="border" variant="danger" />
          <p>Just wait...</p>
        </div>
      ) : (
        <p>Loading complete</p>
      )}
    </div>
  );
};
