import "./Contact.css";
import Header from "./../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import github from "./../../assets/github.png";
import twitter from "./../../assets/twitter.png";
import youtube from "./../../assets/youtube.png";
import linkedin from "./../../assets/linkedin.png";
import facebook from "./../../assets/facebook.png";
import contactVector from "./../../assets/contact_anime.png";
// import React from 'react'

const Contact = () => {
  // const pageHeight = document.getElementById("contact__page").scrollHeight + "px"
  // const myStyle = {
  //   height: pageHeight
  // }
  {
    /* email body - I am trying to implement textarea with auto height */
  }
  function setHeight(fieldId) {
    document.getElementById(fieldId).style.height =
      document.getElementById(fieldId).scrollHeight + "px";
  }
  return (
    <div className="component-wrapper">
      <div id="contact__page" className="contactpage__background">
        <Header
          heading="Get In Touch"
          details="I am open to collaborate with you and share my skills. I am looking forward to a successful collaboration."
        />
        {/* Form section */}
        <div className="form__container">
          <form
            className="contact__form"
            action="https://formspree.io/f/xvojrjzj"
            method="POST"
          >
            {/* email address input */}
            <label>
              Your_email:
              <input
                id="Your_email"
                type="email"
                placeholder="your email address"
                name="from"
                className="input__box email__address"
              />
            </label>
            <label>
              Your_message:
              <textarea
                onKeyUp={() => setHeight("textArea")}
                onKeyDown={() => setHeight("textArea")}
                id="Your_message"
                name="message"
                placeholder="enter your message here"
                className="input__box email__body"
              ></textarea>
            </label>
            {/* submit button */}
            <button type="submit" className="contact__btn">
              Send email
            </button>
          </form>
        </div>
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
        <div className="vector__frame">
          <img src={contactVector} alt="contact vector" />
        </div>
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
