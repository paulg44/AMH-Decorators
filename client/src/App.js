import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./assets/css/media.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
