import React from "react";
import img1 from "../../assets/o.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div style={{ position: "relative" }}>
        <img
          src={img1}
          alt="My Image"
          style={{ width: "100%" }}
          className=" filter blur-sm"
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 className="text-8xl font-bold text-white mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-8xl font-bold text-white mb-6">
            Your one-stop shop for the best products online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
