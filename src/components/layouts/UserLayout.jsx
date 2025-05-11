import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Header } from "./Header";
import Footer from "./Footer";
import UserSideBar from "./UserSideBar";
import { AuthRoute } from "../auth/AuthRoute";

export const UserLayout = ({ children, pageTitle }) => {
  return (
    <AuthRoute>
      <div>
        {/* header  */}
        <Header />

        <Container
          fluid
          style={{
            minHeight: "80vh",
          }}
        >
          <Row>
            <Col
              md={3}
              xl={2}
              style={{
                padding: "0px",
              }}
            >
              <div
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1745282480794-10427e218c76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",

                  // Ensures no repeating of the image
                }}
              >
                <Col
                  className="text-light fs-4"
                  style={{
                    minHeight: "100vh",

                    background: "rgba(64, 58, 58, 0.4)", // semi-transparent dark

                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(20px)", // Safari support
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
                    padding: "20px",
                  }}
                >
                  <div className="p-3">
                    <div>Welcome Back</div>
                  </div>
                  <hr />
                  <UserSideBar
                    style={{
                      minHeight: "80vh",
                    }}
                  />
                </Col>
              </div>
            </Col>
            <Col>
              <div className="p-2">
                <h3>{pageTitle}</h3>
              </div>
              <hr />
              <main className="main mb-3">{children}</main>
            </Col>
          </Row>
        </Container>
        <Footer />

        {/* footer  */}
      </div>
    </AuthRoute>
  );
};
