import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import logo from "../assets/logo.png"; // Ensure you have a logo image in the specified path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        
<Link to="/">
  <img
    src={logo}
    alt="AMV Logo"
    className="w-20 h-20 object-contain bg-[#0a3d3a] rounded-full"
  />
</Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="hover:text-[#0369a1]">
              Home
            </Link>
          </li>

          {/* Hover Dropdown (desktop only) */}
          <li className="relative group">
            <span className="hover:text-[#0369a1] cursor-pointer flex items-center gap-1">
              Services ▼
            </span>
            <ul className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li>
                <Link to="/services/tourist" className="block px-4 py-2 hover:bg-[#f0f9ff] hover:text-[#0369a1]">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link to="/services/student" className="block px-4 py-2 hover:bg-[#f0f9ff] hover:text-[#0369a1]">
                  Student Visa
                </Link>
              </li>
              <li>
                <Link to="/services/work" className="block px-4 py-2 hover:bg-[#f0f9ff] hover:text-[#0369a1]">
                  Work Permit
                </Link>
              </li>
              <li>
                <Link to="/services/passport" className="block px-4 py-2 hover:bg-[#f0f9ff] hover:text-[#0369a1]">
                  Passports
                </Link>
              </li>
              <li>
                <Link to="/services/legalization" className="block px-4 py-2 hover:bg-[#f0f9ff] hover:text-[#0369a1]">
                  Document Legalization
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/partnership" className="hover:text-[#0369a1]">
              Partnership
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#0369a1]">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/partner" className="bg-[#0369a1] text-white px-4 py-2 rounded hover:bg-[#0ea5a4]">
              Partner Portal
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#0369a1] focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <Link to="/" className="block hover:text-[#0369a1]" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="cursor-pointer hover:text-[#0369a1]">
                  Services
                </summary>
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link to="/services/tourist" onClick={() => setOpen(false)}>
                      Tourist Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/student" onClick={() => setOpen(false)}>
                      Student Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/work" onClick={() => setOpen(false)}>
                      Work Permit
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/passport" onClick={() => setOpen(false)}>
                      Passports
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/legalization" onClick={() => setOpen(false)}>
                      Document Legalization
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/partnership" className="block hover:text-[#0369a1]" onClick={() => setOpen(false)}>
                Partnership
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-[#0369a1]" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/partner" className="block bg-[#0369a1] text-white px-4 py-2 rounded hover:bg-[#0ea5a4]" onClick={() => setOpen(false)}>
                Partner Portal
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
