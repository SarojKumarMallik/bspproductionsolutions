import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
