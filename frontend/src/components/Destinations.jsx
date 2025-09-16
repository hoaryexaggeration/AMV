import React from "react";

const destinations = [
  { name: "United States", tag: "Work, Study, Travel", img: "http://static.photos/cityscape/640x360/1" },
  { name: "Canada", tag: "Express Entry, Study", img: "http://static.photos/cityscape/640x360/2" },
  { name: "United Kingdom", tag: "Work, Study, Visit", img: "http://static.photos/cityscape/640x360/3" },
  { name: "Australia", tag: "Skilled Migration, Study", img: "http://static.photos/cityscape/640x360/4" },
];

const Destinations = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in visas for these top destinations with high approval rates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-48 group" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
              <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-90">{d.tag}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-40">
                <button className="bg-white text-[#0a3d3a] px-4 py-2 rounded-md font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
