import React from "react";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive visa solutions tailored to your specific needs and destination requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Work Visa", desc: "Professional assistance for work permits and employment visas worldwide.", icon: "briefcase" },
          { title: "Student Visa", desc: "Guidance for students pursuing education abroad with proper documentation.", icon: "book" },
          { title: "Residence Visa", desc: "Support for permanent residency applications and long-term stays.", icon: "home" },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={100 * (i + 1)}
          >
            <div className="bg-[#0a3d3a] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <i data-feather={service.icon} className="text-[#0a3d3a] w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
            <a href="#" className="text-[#0a3d3a] font-medium inline-flex items-center mt-4">
              Learn more <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
            
