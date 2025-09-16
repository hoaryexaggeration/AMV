import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import feather from "feather-icons";


import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    feather.replace();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
     
      <Hero />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
