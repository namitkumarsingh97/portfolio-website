import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import DynamicCode from "./DynamicCode";

const ContactContainer = styled.section`
  background-color: #f0f0f0;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`;

const Header = styled.div`
  background-color: #333;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const ResponsiveContactForm = styled(ContactForm)`
  width: 100%;
  box-sizing: border-box;
`;

const ResponsiveDynamicCode = styled(DynamicCode)`
  width: 100%;
  box-sizing: border-box;
`;

const customMediaQuery = `@media (min-width: 480px)`;

const ContactMe = () => {
  const handleSubmitForm = (formData) => {
    const url = "http://localhost:3000/data";
    console.info(formData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form data sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  return (
    <ContactContainer id="contact">
      <Header>
        <h2>Contact Me</h2>
        <p>
          In order to discuss the project in more detail, Please fill out the
          below form.
        </p>
      </Header>

      <ResponsiveContactForm onSubmit={handleSubmitForm} />
      <ResponsiveDynamicCode />

      <CustomStyles />
    </ContactContainer>
  );
};

const CustomStyles = styled.div`
  ${customMediaQuery} {
    background-color: red;
    color: white;
  }
`;

export default ContactMe;
