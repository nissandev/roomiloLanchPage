import React from "react";
import "./initialloader.css";

const InitialLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container">
        <div className="loader"></div>
        <div className="loader">Roo..</div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default InitialLoader;
