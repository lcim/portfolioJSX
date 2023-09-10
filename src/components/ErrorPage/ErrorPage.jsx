import { Link } from "react-router-dom";
import "./ErrorPage.css";
// import React from "react";

const ErrorPage = () => {
  return (
    <div className="error__page">
      <p>Error! Page not found. Make sure you typed correctly</p>
      <p>
        Return to the <Link to="/">Home</Link> page
      </p>
    </div>
  );
};

export default ErrorPage;
