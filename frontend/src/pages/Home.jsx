import React from "react";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    
      <main className="space-y-20 bg-[#0a3d3a]">
      <Hero />
      <section className="container mx-auto px-6"></section>
      <ServicesGrid />
      <WhyChooseUs />
      <FAQ />
      <CallToAction />
    </main>
  );
}
