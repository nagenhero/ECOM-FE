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
              className="bg-dark text-light"
              style={{
                minHeight: "80vh",
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
