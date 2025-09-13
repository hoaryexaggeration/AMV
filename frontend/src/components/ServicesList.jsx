import React from "react";

const services = [
  { title: "Tourist Visas", desc: "Single & multiple entry applications." },
  { title: "Work Permits", desc: "Short and long-term permits." },
  { title: "Student Visas", desc: "University & exchange programs." },
  { title: "Passports", desc: "New, renewals, replacements." },
  { title: "Business Visas", desc: "Investor & business visas." },
  { title: "Document Legalization", desc: "Authentication & embassy processing." },
];

export default function ServicesList() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">All Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#0369a1]">{s.title}</h3>
            <p className="mt-3 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
