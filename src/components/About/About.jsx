import Header from "../Header/Header";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";
import aboutImage from "./../../assets/about_anime.gif";
import FooterLink from "../FooterLink/FooterLink";
// import React from "react";

const About = () => {
  return (
    <div className="component-wrapper">
      {/* About Background */}
      <div className="aboutpage__background">
        <Header
          heading="About Me"
          details="web developer | YouTuber | Microsoft 365 Admin | Desktop Support | BitDefender Security solutions | hotel software deployments | RFID electronic locks installation and maintenance | General IT "
        />
        <div className="main_content">
          <div className="about__main">
            <div className="about__main-left">
              <h3 className="about__main-left-subheading">Developer:</h3>
              <p className="about__main-left-details">
                October 2023 will mark my second year into web development. I
                started my IT career with desktop support; later Microsoft
                windows server administrator, and Cisco networking. My passion
                for programming eventually brought me to web development. The
                fruits have been delightful. See my&nbsp;
                <a
                  className="about__link"
                  href='https://lcim.github.io/flash-typer/'
                  target="_blank"
                  rel="noreferrer"
                >
                  flash-typer
                </a>
                &nbsp;app.
              </p>
              <h3 className="about__main-left-subheading">YouTuber:</h3>
              <p className="about__main-left-details">
                I have released videos on YouTube that teach, entertain, promote
                peace, and will continue to improve on them. See one of my
                &nbsp;
                <a
                  href="https://youtu.be/Sjs8Ax6wh0Q"
                  className="my-youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube videos
                </a>
                .
              </p>
              <h3 className="about__main-left-subheading">Desktop Support:</h3>
              <p className="about__main-left-details">
                I have been involved in several hardware and software
                deployment, troubleshooting, and maintenance.&nbsp;
                <a
                  href="mailto:lcim1104@gmail.com"
                  className="my-email"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email me
                </a>
                .
              </p>
            </div>
            <div className="about__main-right">
              {/* <h3 className="about__main-right-subheading"></h3> */}
              <img
                src={aboutImage}
                alt="about image"
                className="about__image"
              />
            </div>
          </div>
        </div>
        <FooterLink
          phrase="checkout my &nbsp;"
          link="projects"
          linkAddress="/projects"
        />
          {/* Background vector image for about page */}
          <div className="vector__frame">
            <img
              src={aboutVector}
              alt="background picture"
              className="about__vector"
            />
          </div>
      </div>
    </div>
  );
};

export default About;
