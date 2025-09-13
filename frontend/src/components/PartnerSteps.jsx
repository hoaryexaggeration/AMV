import React from "react";

const steps = [
  { step: "1", title: "Sign Agreement", desc: "Formalize your partnership with AMV." },
  { step: "2", title: "Access Portal", desc: "Get your login credentials to manage referrals." },
  { step: "3", title: "Earn Commission", desc: "Receive payouts monthly with full reporting." },
];

export default function PartnerSteps() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((s, i) => (
          <div key={i} className="bg-white border rounded-xl shadow p-6">
            <div className="text-4xl font-bold text-[#0ea5a4]">{s.step}</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0369a1]">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
