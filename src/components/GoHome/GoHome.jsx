import "./GoHome.css";
import homeIconBlack from "./../../assets/home_black.png";
import homeIconWhite from "./../../assets/home_white.png";
import { useNavigate, useLocation } from "react-router-dom";

// import React from "react";

const GoHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blackBtn = location.pathname === "/";
  return (
    <div>
      <button onClick={ () => navigate('/') } className="go-home-btn">
          <img
            src={blackBtn ? homeIconBlack : homeIconWhite}
            alt="return home button"
            className={`go-home-icon background-${
              blackBtn ? "white" : "gradient"
            }`}
          />
        </button>
        <p className="home-text">Home</p>
    </div>
  );
};

export default GoHome;
