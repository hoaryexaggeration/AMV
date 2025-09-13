import React from "react";

export default function Hero() {
  return (
    <section className="relative text-white rounded-lg shadow-lg overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-r from-brand to-brand-light">
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 py-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
            All Matters Visa
          </h1>
          <p className="mt-6 text-lg drop-shadow-md">
            Your Trusted Partner in Visa Facilitation –{" "}
            <span className="font-semibold">90%+ success rate</span>.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/services"
              className="bg-white text-brand px-6 py-3 rounded font-semibold shadow hover:bg-gray-100"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-brand"
            >
              Contact Us
            </a>
          </div>
        </div>

        <img
          src="/logo.png"
          alt="AMV Logo"
          className="mt-10 md:mt-0 w-60 h-60 rounded-full shadow-lg bg-white p-6"
        />
      </div>
    </section>
  );
}
