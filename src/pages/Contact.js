import React from "react";
import styled from "styled-components";
import ContactSection from "../components/ContactSection";
import Map from "../components/Map";

const ContactStyle = styled.div`
  animation: fadeIn 450ms;
  
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

function Contact() {
  return (
    <ContactStyle>
      <ContactSection />
      <Map />
    </ContactStyle>
  );
}

export default Contact;
