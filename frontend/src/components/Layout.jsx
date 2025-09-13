import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a3d3a] text-white flex flex-col">> {/* Padding for fixed navbar */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
