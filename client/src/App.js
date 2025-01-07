import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurWork from "./pages/OurWork.js";
import Services from "./pages/Services.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourWork" element={<OurWork />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
