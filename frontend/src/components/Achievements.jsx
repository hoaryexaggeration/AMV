import React from "react";

export default function Achievements() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand to-brand-light text-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-5xl font-bold">90%+</h3>
          <p className="mt-2">Visa approval success rate</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">10+ Years</h3>
          <p className="mt-2">Industry experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">5000+</h3>
          <p className="mt-2">Happy clients worldwide</p>
        </div>
      </div>
    </section>
  );
}
