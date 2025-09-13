import { useState } from "react";

const faqs = [
  { q: "How long does a visa take?", a: "Processing usually takes 5-15 business days depending on the type." },
  { q: "What documents do I need?", a: "Basic requirements include passport, application form, and photos. Extra documents depend on visa type." },
  { q: "Do you guarantee approval?", a: "We ensure accurate documentation, but final approval rests with the embassy." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mt-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg p-4 bg-white shadow">
            <button
              className="w-full flex justify-between items-center font-semibold text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span>{open === i ? "-" : "+"}</span>
            </button>
            {open === i && <p className="mt-3 text-slate-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
