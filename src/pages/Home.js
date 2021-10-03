import React from "react";
import AboutSection from "../components/AboutSection";
import Contactbanner from "../components/Contactbanner";
import HeroSection from "../components/HeroSection";
import Footer from "../components/layout/Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
