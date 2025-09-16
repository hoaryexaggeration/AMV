import React from "react";

const testimonials = [
  { name: "Sarah Johnson", visa: "Canada Work Visa", img: "http://static.photos/people/200x200/1", text: "The team at All Masters Visa made my Canadian work visa process incredibly smooth." },
  { name: "Michael Chen", visa: "US Student Visa", img: "http://static.photos/people/200x200/2", text: "The mock interview session gave me the confidence I needed to succeed." },
  { name: "Priya Patel", visa: "UK Family Visa", img: "http://static.photos/people/200x200/3", text: "Their team broke down the documentation process into manageable steps." },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from people who successfully obtained visas with our assistance.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
            <div className="flex items-center mb-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.visa}</p>
              </div>
            </div>
            <p className="text-gray-600">"{t.text}"</p>
            <div className="flex mt-4 text-yellow-400">
              {Array.from({ length: 5 }).map((_, j) => (
                <i key={j} data-feather="star" className="w-4 h-4 fill-current"></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
