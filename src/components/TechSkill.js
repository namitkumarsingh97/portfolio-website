import React, { useState } from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  margin: 0.5rem;
  text-align: center;

  img {
    width: 50px; /* Adjust the size as needed */
    height: 50px; /* Adjust the size as needed */
  }

  p {
    margin-top: 0.5rem;
    font-size: 14px; /* Adjust the font size for smaller screens */
  }

  @media (max-width: 768px) {
    img {
      width: 40px; /* Adjust the size for smaller screens */
      height: 40px; /* Adjust the size for smaller screens */
    }

    p {
      font-size: 12px; /* Adjust the font size for even smaller screens */
    }
  }
`;

const TechSkill = ({ iconSrc, skillName, onClick }) => {
  return (
    <SkillContainer>
      <img src={iconSrc} alt={`${skillName} Icon`} />
      <p>{skillName}</p>
    </SkillContainer>
  );
};

export default TechSkill;
