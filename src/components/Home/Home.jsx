import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
// import React from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const currentLocation = useLocation();
  const isModal = currentLocation.pathname === '/#/' ? "true" : "false"

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 2400)
  },[isModal])

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="home__container">
      {showModal && <Modal closeModal={closeModal} />}
      <div className="intro">
        <h2>Welcome To My Portfolio</h2>
        <p className="brief">
          I&apos;m Leo, presently a frontend and soon fullstack developer
        </p>
      </div>
      <div className="head__btns">
        <Link to="about" className="btn btn__black" >
        <p className="btn-text">More about me ...</p></Link>
        <Link to="contact" className="btn btn__orange" >
        <p className="btn-text">connect with me?</p></Link>
      </div>
      <div className="splash__image">
        <img src={homeAnime} alt="animated image" className="home__animated" />
      </div>
    </div>
  );
};

export default Home;