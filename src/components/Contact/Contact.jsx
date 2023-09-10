import "./Contact.css";
import Header from "./../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import github from "./../../assets/github.png";
import twitter from "./../../assets/twitter.png";
import youtube from "./../../assets/youtube.png";
import linkedin from "./../../assets/linkedin.png";
import facebook from "./../../assets/facebook.png";
import ContactForm from "./ContactForm";
// import contactVector from "./../../assets/contact_anime.png";
// import React from 'react'

const Contact = () => {
  
  return (
    <div className="component-wrapper">
      <div id="contact__page" className="contactpage__background">
        <Header
          heading="Get In Touch"
          details="I am open to collaborate with you and share my skills. I am looking forward to a successful collaboration."
        />
        <ContactForm />
        {/* social icons */}
        <div className="socials">
          <a href="https://github.com/lcim" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonard-mbibi-9b57149/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkein" className="social-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCcQiOUaMLkJpCi2OfiQsVWQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="YouTube" className="social-icon" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100007507664789"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://twitter.com/NoSecondChance7"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
        </div>
        {/* <div className="vector__frame">
          <img src={contactVector} alt="contact vector" />
        </div> */}
        <FooterLink
          phrase="Read more &nbsp;"
          link="about me"
          linkAddress="/about"
        />
      </div>
    </div>
  );
};

export default Contact;
