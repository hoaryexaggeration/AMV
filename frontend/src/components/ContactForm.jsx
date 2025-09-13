import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="bg-white border shadow rounded-lg p-8 max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-3 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-3 rounded"
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full border p-3 rounded"
      ></textarea>
      <button className="bg-[#0369a1] text-white px-6 py-3 rounded w-full hover:bg-[#0e7db1]">
        Send Message
      </button>
    </form>
  );
}
