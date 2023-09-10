import "./Skills.css";
import PropTypes from 'prop-types'
// import React from "react";

const SkillsCard = ({ skillUrl, skillName }) => {
  return (
    <div className="skill">
      <img src={skillUrl} alt="skill image" className="skill-img" />
      <p>{skillName}</p>
    </div>
  );
};

SkillsCard.propTypes = {
    skillName: PropTypes.string,
    skillUrl: PropTypes.string
}
export default SkillsCard;
