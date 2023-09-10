import "./Skills.css";
import { skillList } from "./../../assets/skillsSet";
import Header from "../Header/Header";
import SkillsCard from "./SkillsCard";
import FooterLink from "../FooterLink/FooterLink";
import skillsVector from "./../../assets/skills_vector.png";
// import React from 'react'

const Skills = () => {
  const content = skillList.map(({ skillName, skillUrl }, ind) => (
    <SkillsCard key={ind} skillName={skillName} skillUrl={skillUrl} />
  ));
  return (
    <div className="component-wrapper">
      {/* <div className="container"> */}
        <div className="skillspage__background">
          <Header
            heading="My Skills"
            details="Creativity and quest for excellence in my world and beyond, are my driving forces"
            className="skills-heading"
          />
          <div className="main_content">{content}</div>
          <FooterLink
            phrase="Get in &nbsp;"
            link="touch"
            linkAddress="/contact"
          />
        </div>
        {/* Background vector image for about page */}
        <div className="vector__frame">
          <img
            src={skillsVector}
            alt="vector image"
            className="skills__vector"
          />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
