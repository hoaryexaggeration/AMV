import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50"
      style={{ backgroundColor: "#0a3d3a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="AMV Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">
                AMV Global
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-white px-3 py-2 text-sm font-medium hover:underline"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white px-3 py-2 text-sm font-medium hover:underline"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 text-sm font-medium hover:underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white px-3 py-2 text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <Link
              to="/consultation"
              className="bg-white text-[#0a3d3a] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a3d3a]">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link
              to="/"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
