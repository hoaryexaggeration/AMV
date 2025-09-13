import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="bg-[#0a3d3a] border-t py-10 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-[#0369a1]">All Matters Visa</h3>
          <p className="mt-2 text-slate-#E0E0E0">
            Your trusted partner in visa facilitation. Fast, accurate, and
            professional services for individuals and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#0369a1]">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="text-slate-600 hover:text-[#0369a1]">Home</Link></li>
            <li><Link to="/services" className="text-slate-#E0E0E0 hover:text-[#0369a1]">Services</Link></li>
            <li><Link to="/partnership" className="text-slate-#E0E0E0 hover:text-[#0369a1]">Partnership</Link></li>
            <li><Link to="/contact" className="text-slate-600 hover:text-[#0369a1]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-#E0E0E0">Contact</h4>
          <p className="mt-3 text-slate-600">📞 +254 720 296 981</p>
          <p className="text-slate-600">✉️ allmattersvisa@gmail.com</p>
          <p className="text-slate-600">📍 Nairobi, Kenya</p>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-#E0E0E0 text-sm">
        © {new Date().getFullYear()} All Matters Visa. All rights reserved.
      </div>
      <div className="absolute bottom-4 right-4">
    <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
  </div>
    </footer>
  );
}
