import React from "react";

const ServicesPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Hero Section */}
      <div
        className="text-white"
        style={{ backgroundColor: "#0a3d3a" }}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your Passport to the World
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl">
              Expert visa services for work, study, and travel in over 50
              countries worldwide.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:max-w-xl">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">📍</span>
                </div>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="block w-full pl-10 pr-12 py-4 border border-transparent rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0a3d3a] focus:border-[#0a3d3a]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    className="bg-white text-[#0a3d3a] px-6 py-2 rounded-r-md text-sm font-medium h-full hover:bg-gray-100"
                  >
                    Check Visa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <img
          src="http://static.photos/travel/1024x576/1"
          alt="Hero Travel"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className="text-base font-semibold tracking-wide uppercase"
              style={{ color: "#0a3d3a" }}
            >
              Services
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Visa Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We handle all types of visa applications with precision and care.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💼",
                title: "Work Visa",
                desc: "Professional assistance for employment visas, work permits, and job search visas.",
              },
              {
                icon: "📘",
                title: "Study Visa",
                desc: "Student visa processing for universities, colleges, and language schools worldwide.",
              },
              {
                icon: "🌍",
                title: "Tourist Visa",
                desc: "Hassle-free tourist and visitor visa applications for your dream vacation.",
              },
              {
                icon: "🏠",
                title: "Residence Visa",
                desc: "Permanent residency and citizenship applications for your new home abroad.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Visa",
                desc: "Family reunification visas for spouses, children, and dependent relatives.",
              },
              {
                icon: "🔄",
                title: "Visa Renewal",
                desc: "Extension and renewal services for all types of visas and permits.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 ease-in-out rounded-lg bg-white p-8 shadow-md hover:shadow-lg"
              >
                <div
                  className="flex items-center justify-center h-12 w-12 rounded-md"
                  style={{ backgroundColor: "#e6f0ef", color: "#0a3d3a" }}
                >
                  <span className="text-xl">{service.icon}</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Destinations Section */}
<div className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2
        className="text-base font-semibold tracking-wide uppercase"
        style={{ color: "#0a3d3a" }}
      >
        Destinations
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Popular Visa Destinations
      </p>
    </div>

    {/* Mobile: horizontal scroll with snap | Desktop: grid */}
    <div className="mt-10">
      {/* Mobile Carousel */}
      <div className="flex space-x-4 overflow-x-auto pb-4 sm:hidden snap-x snap-mandatory">
        {[
          {
            country: "United States",
            desc: "Work, study, and tourist visas for the US.",
            image: "http://static.photos/usa/640x360/1",
          },
          {
            country: "Canada",
            desc: "Student, work, and permanent residence visas.",
            image: "http://static.photos/canada/640x360/1",
          },
          {
            country: "United Kingdom",
            desc: "Skilled worker, student, and family visas.",
            image: "http://static.photos/uk/640x360/1",
          },
          {
            country: "Australia",
            desc: "Skilled migration, student, and tourist visas.",
            image: "http://static.photos/australia/640x360/1",
          },
          {
            country: "Germany",
            desc: "EU Blue Card, student, and work visas.",
            image: "http://static.photos/germany/640x360/1",
          },
          {
            country: "France",
            desc: "Talent passport, student, and work visas.",
            image: "http://static.photos/france/640x360/1",
          },
          {
            country: "Japan",
            desc: "Engineer, student, and working holiday visas.",
            image: "http://static.photos/japan/640x360/1",
          },
        ].map((dest, idx) => (
          <div
            key={idx}
            className="flex-none w-64 relative rounded-xl overflow-hidden h-56 shadow-md snap-center"
          >
            <img
              src={dest.image}
              alt={dest.country}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold">{dest.country}</h3>
              <p className="text-sm">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            country: "United States",
            desc: "Work, study, and tourist visas for the US.",
            image: "http://static.photos/usa/640x360/1",
          },
          {
            country: "Canada",
            desc: "Student, work, and permanent residence visas.",
            image: "http://static.photos/canada/640x360/1",
          },
          {
            country: "United Kingdom",
            desc: "Skilled worker, student, and family visas.",
            image: "http://static.photos/uk/640x360/1",
          },
          {
            country: "Australia",
            desc: "Skilled migration, student, and tourist visas.",
            image: "http://static.photos/australia/640x360/1",
          },
          {
            country: "Germany",
            desc: "EU Blue Card, student, and work visas.",
            image: "http://static.photos/germany/640x360/1",
          },
          {
            country: "France",
            desc: "Talent passport, student, and work visas.",
            image: "http://static.photos/france/640x360/1",
          },
          {
            country: "Japan",
            desc: "Engineer, student, and working holiday visas.",
            image: "http://static.photos/japan/640x360/1",
          },
        ].map((dest, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden h-56 shadow-md group"
          >
            <img
              src={dest.image}
              alt={dest.country}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold">{dest.country}</h3>
              <p className="text-sm">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>




      {/* Testimonials */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className="text-base font-semibold tracking-wide uppercase"
              style={{ color: "#0a3d3a" }}
            >
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                visa: "Student Visa to Canada",
                text: "GlobalVisa made my study visa process so smooth. I got my visa in just 3 weeks!",
                image: "http://static.photos/people/200x200/1",
              },
              {
                name: "Michael Chen",
                visa: "Work Visa to Germany",
                text: "As an engineer, I needed help with the complex German work visa. Their expertise was invaluable.",
                image: "http://static.photos/people/200x200/2",
              },
              {
                name: "Amina Rahman",
                visa: "Family Visa to UK",
                text: "Reuniting with my husband in the UK seemed impossible until GlobalVisa guided us.",
                image: "http://static.photos/people/200x200/3",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p style={{ color: "#0a3d3a" }}>{testimonial.visa}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#0a3d3a" }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your visa journey?</span>
            <span className="block text-gray-200">
              Get a free consultation today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#0a3d3a] bg-white hover:bg-gray-100"
              >
                Book Consultation
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
        {/* CTA Image */}
        <img
          src="http://static.photos/travel/1024x576/2"
          alt="Consultation"
          className="w-full h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
