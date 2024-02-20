import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  overflow-y: auto;
  margin: 0px;
  padding: 0px;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactMe />
      <Footer />
    </AppContainer>
  );
};

export default App;
