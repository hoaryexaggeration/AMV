/**import React from "react";

export default function Hero() {
  return (
    <section className="relative text-white rounded-lg shadow-lg overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-r from-brand to-brand-light">
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 py-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
            All Matters Visa
          </h1>
          <p className="mt-6 text-lg drop-shadow-md">
            Your Trusted Partner in Visa Facilitation –{" "}
            <span className="font-semibold">90%+ success rate</span>.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/services"
              className="bg-white text-brand px-6 py-3 rounded font-semibold shadow hover:bg-gray-100"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-brand"
            >
              Contact Us
            </a>
          </div>
        </div>

        <img
          src="/logo.png"
          alt="AMV Logo"
          className="mt-10 md:mt-0 w-60 h-60 rounded-full shadow-lg bg-white p-6"
        />
      </div>
    </section>
  );
}
**/
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#0a3d3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Global Visa Solution
            </h1>
            <p className="text-xl mb-8">
              Trusted by thousands to make international travel and relocation
              seamless and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#0a3d3a] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0a3d3a] px-6 py-3 rounded-md font-medium transition">
                Learn More
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="hidden md:block">
            <div className="relative h-96 w-full rounded-xl overflow-hidden">
              <img
                src="http://static.photos/travel/1024x576/1"
                alt="Travel"
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 bg-[#0a3d3a] opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
