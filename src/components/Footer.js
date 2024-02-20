// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 0.5rem;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Namit Kumar Singh - Portfolio. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
