import React from "react";
import styled from "styled-components";
import TechSkill from "./TechSkill";
import javascriptIcon from "../assets/javascript-icon.png";
import reactIcon from "../assets/react-icon.png";
import cssIcon from "../assets/css-icon.png";
import htmlIcon from "../assets/html-icon.png";
import sassIcon from "../assets/sass-icon.png";
import nodeJsIcon from "../assets/nodejs-icon.png";
import resumeIcon from "../assets/resume-icon.png";
import myResumePdf from "../data/Namit_Singh_React_Resume.pdf";

const AboutContainer = styled.section`
  background-color: #fff;
  padding: 2rem;
`;

const BioContainer = styled.div`
  margin-bottom: 2rem;
`;

const TechSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const AboutSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = myResumePdf;
    link.target = "_blank";
    link.download = "Namit_Singh_React_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AboutContainer id="about">
      <h2>About Me</h2>

      <BioContainer>
        <p>
          MERN Stack Developer with expertise in tech skills - React.js, Redux,
          JavaScript, Sass, CSS, Html, basic understanding of Node.js and
          MongoDB, experienced in working with cross functional teams.
        </p>
      </BioContainer>

      <h3>Tech Skills</h3>
      <TechSkillsContainer>
        <TechSkill iconSrc={javascriptIcon} skillName="JavaScript" />
        <TechSkill iconSrc={reactIcon} skillName="React.js" />
        <TechSkill iconSrc={htmlIcon} skillName="HTML" />
        <TechSkill iconSrc={cssIcon} skillName="CSS" />
        <TechSkill iconSrc={sassIcon} skillName="SASS" />
        <TechSkill iconSrc={nodeJsIcon} skillName="Node.js" />
      </TechSkillsContainer>

      <h3>Resume</h3>
      <TechSkillsContainer
        onClick={downloadResume}
        style={{ cursor: "pointer" }}
      >
        <TechSkill iconSrc={resumeIcon} />
      </TechSkillsContainer>
    </AboutContainer>
  );
};

export default AboutSection;
