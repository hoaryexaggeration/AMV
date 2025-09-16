import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
