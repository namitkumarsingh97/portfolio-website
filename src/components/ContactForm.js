import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 48%;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    margin-right: 1rem;
    flex: 0 0 30%;
  }

  input,
  textarea,
  input[type="file"] {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
`;

const AttachmentInput = styled.input`
  margin-top: 1rem;
`;

const SendButton = styled.button`
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ResponsiveInputGroup = styled(InputGroup)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-right: 0;
      margin-bottom: 0.5rem;
      flex: 0 0 100%;
    }

    input,
    textarea,
    input[type="file"] {
      width: 100%;
    }
  }
`;

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    userWhatsAppNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      message: "",
      userWhatsAppNumber: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
    handleClear();
  };

  return (
    <FormContainer>
      <ResponsiveInputGroup>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </ResponsiveInputGroup>

      <ResponsiveInputGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </ResponsiveInputGroup>

      <ResponsiveInputGroup>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </ResponsiveInputGroup>

      <ResponsiveInputGroup>
        <label htmlFor="userWhatsAppNumber">WhatsApp Number</label>
        <input
          type="text"
          id="userWhatsAppNumber"
          name="userWhatsAppNumber"
          value={formData.userWhatsAppNumber}
          onChange={handleChange}
        />
      </ResponsiveInputGroup>

      <ResponsiveInputGroup>
        <label htmlFor="attachment">Attachment</label>
        <AttachmentInput type="file" id="attachment" name="attachment" />
      </ResponsiveInputGroup>

      <SendButton type="submit" onClick={handleSubmit}>
        Send
      </SendButton>
    </FormContainer>
  );
};

export default ContactForm;
