import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="mt-20 bg-gradient-to-r from-[#0369a1] to-[#0ea5a4] py-16 px-6 rounded-lg text-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-5xl font-bold">90%+</h3>
          <p className="mt-2">Approval success rate</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">10+ Years</h3>
          <p className="mt-2">Professional experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">24/7</h3>
          <p className="mt-2">Client support</p>
        </div>
      </div>
    </section>
  );
}
