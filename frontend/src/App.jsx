import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import PartnerPortal from "./pages/PartnerPortal";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<PartnerPortal />} />
      </Routes>
    </Layout>
  );
}

export default App;
