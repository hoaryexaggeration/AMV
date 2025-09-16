import React from "react";

const CTA = () => {
  return (
    <div className="bg-[#0a3d3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Visa Journey?</h2>
          <p className="text-lg mb-6">Our experts are ready to guide you through every step of the visa application process.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#0a3d3a] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#0a3d3a] px-6 py-3 rounded-md font-medium transition">
              Call Us Now
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="hidden md:block">
          <div className="relative h-64 w-full rounded-xl overflow-hidden">
            <img
              src="http://static.photos/office/640x360/1"
              alt="Office"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-[#0a3d3a] opacity-30 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
