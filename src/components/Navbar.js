import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 1.5rem;
  top: 0;
  z-index: 1000;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <NavbarContainer>
      <h1 onClick={scrollToTop} style={{ cursor: "pointer" }}>
        Portfolio Website
      </h1>
      <div>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
