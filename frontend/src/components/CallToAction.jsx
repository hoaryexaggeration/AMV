import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-[#0369a1] text-white py-16 text-center rounded-lg mt-16">
      <h2 className="text-3xl font-bold">Start Your Visa Journey Today</h2>
      <p className="mt-4 text-lg">
        Contact us now and let our experts handle the paperwork while you plan your travel.
      </p>
      <a
        href="/contact"
        className="mt-6 inline-block bg-white text-[#0369a1] px-6 py-3 rounded font-semibold shadow hover:bg-gray-100"
      >
        Get in Touch
      </a>
    </section>
  );
}
