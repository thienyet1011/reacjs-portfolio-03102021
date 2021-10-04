import React from "react";
import styled from "styled-components";
import AboutSection from "../components/AboutSection";
import Contactbanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";

const HomeStyle = styled.div`
  animation: fadeIn 450ms;
  
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

function Home() {
  return (
    <HomeStyle>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <Contactbanner />
    </HomeStyle>
  );
}

export default Home;
