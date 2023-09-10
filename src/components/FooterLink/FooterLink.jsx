import { Link } from "react-router-dom";
import "./FooterLink.css";
import PropTypes  from "prop-types";
// import React from "react";

const FooterLink = ({ phrase, link, linkAddress }) => {
  return (
    <div className="footer">
      {phrase}
      <Link to={linkAddress} className="footer-link-element">
        {link}
      </Link>
    </div>
  );
};
FooterLink.propTypes = {
  phrase: PropTypes.string,
  link: PropTypes.string,
  linkAddress: PropTypes.string,
};
export default FooterLink;
