import React from "react";
import "./Aboutbreadcrum.css";
import about from "../../assets/img/about.webp";

const AboutBreadcrumb = () => {
  return (
    <section
      className="about-breadcrumb"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Overlay */}
      <div className="about-breadcrumb-overlay"></div>

      {/* Content */}
      <div className="about-breadcrumb-content">
        <h1>About Us</h1>
        <p>Powering Tomorrow with Renewable Solar Energy</p>
      </div>
    </section>
  );
};

export default AboutBreadcrumb;
