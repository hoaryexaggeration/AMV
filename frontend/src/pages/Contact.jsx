import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto px-6 space-y-16">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
