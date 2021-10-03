import React from "react";
import AboutSection from "../components/AboutSection";
import Contactbanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <Contactbanner />
    </div>
  );
}

export default Home;
