import React from "react";
import "../Aboutbreadcrum/Aboutbreadcrum";
import about from "../../assets/img/about.webp";
import { Link } from "react-router-dom";
const Ongridbreadcrum = () => {
  return (
    <section className="Contactbreadcrum">
      {/* Background Image */}
      <img
        src={about}
        alt="Contact Background"
        className="Contactbreadcrum-bg"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div className="Contactbreadcrum-overlay"></div>

      {/* Content */}
      <div className="Contactbreadcrum-content">
        <h1>On-Grid Solar System Installation</h1>

        <div className="Contactbreadcrum-breadcrumb">
          <Link to="/" className="home">
            Home
          </Link>
          <span className="separator"> / </span>
          <Link to="/services" className="home">
            Services
          </Link>
          <span className="separator"> / </span>
          <span className="active">On Grid Solar System</span>
        </div>
      </div>
    </section>
  );
};

export default Ongridbreadcrum;
