/**import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="bg-[#0a3d3a] border-t py-10 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
       // {/* About }
        <div>
          <h3 className="text-xl font-bold text-[#0369a1]">All Matters Visa</h3>
          <p className="mt-2 text-slate-#E0E0E0">
            Your trusted partner in visa facilitation. Fast, accurate, and
            professional services for individuals and businesses.
          </p>
        </div>

        //{/* Quick Links }
        <div>
          <h4 className="text-lg font-semibold text-[#0369a1]">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="text-slate-600 hover:text-[#0369a1]">Home</Link></li>
            <li><Link to="/services" className="text-slate-#E0E0E0 hover:text-[#0369a1]">Services</Link></li>
            <li><Link to="/partnership" className="text-slate-#E0E0E0 hover:text-[#0369a1]">Partnership</Link></li>
            <li><Link to="/contact" className="text-slate-600 hover:text-[#0369a1]">Contact</Link></li>
          </ul>
        </div>

        //{/* Contact Info }
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
**/
import React, { useEffect } from "react";
import feather from "feather-icons";
import logo from "../assets/logof.png";

const Footer = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">All Matters Visa</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all visa and immigration needs worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white">
                  <i data-feather={icon} className="w-5 h-5"></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Work Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Student Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tourist Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Permanent Residency</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <i data-feather="map-pin" className="w-4 h-4 mr-2"></i> 123 Visa St, Global City
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <i data-feather="mail" className="w-4 h-4 mr-2"></i> info@allmattersvisa.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <i data-feather="phone" className="w-4 h-4 mr-2"></i> +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All Matters Visa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
               <div className="flex items-center mt-4 md:mt-0">
            <img src={logo} alt="All Masters Visa" className="h-10 w-auto" />
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
