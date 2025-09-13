import React from "react";
import { Briefcase, GraduationCap, Plane, FileText, Globe, Book } from "lucide-react";

const services = [
  { icon: <Plane className="w-8 h-8 text-[#0369a1]" />, title: "Tourist Visas", desc: "Single & multiple entry applications." },
  { icon: <Briefcase className="w-8 h-8 text-[#0369a1]" />, title: "Work Permits", desc: "Short and long-term permits." },
  { icon: <GraduationCap className="w-8 h-8 text-[#0369a1]" />, title: "Student Visas", desc: "University & exchange programs." },
  { icon: <FileText className="w-8 h-8 text-[#0369a1]" />, title: "Passports", desc: "New, renewals, replacements." },
  { icon: <Globe className="w-8 h-8 text-[#0369a1]" />, title: "Business Visas", desc: "Investor & business visas." },
  { icon: <Book className="w-8 h-8 text-[#0369a1]" />, title: "Document Legalization", desc: "Authentication & embassy processing." },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative py-20 px-6"
      style={{
        backgroundImage: "url('/images/services-bg.jpg')", // optional background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/50"></div> {/* overlay for readability */}

      <div className="relative container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0369a1]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-cyan-100/90 rounded-xl shadow p-6 hover:shadow-lg transition relative z-10"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-[#0369a1]">{s.title}</h3>
              <p className="mt-3 text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
