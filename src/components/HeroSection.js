import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/background-image.jpg";
import profilePicture from "../assets/profile-picture.jpg";

const HeroContainer = styled.section`
  background: url(${heroBackground}) center/cover no-repeat;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ContentContainer = styled.div`
  z-index: 1;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <Overlay />
      <ContentContainer>
        <ProfileImage src={profilePicture} alt="Profile" />
        <h2>Namit Kumar Singh</h2>
        <p>MERN Stack Developer</p>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
