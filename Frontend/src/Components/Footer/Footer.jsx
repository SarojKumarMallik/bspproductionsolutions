import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer-hero-wrapper">
      {/* CTA BAR */}
      <div className="Footer-hero-cta">
        <div className="Footer-hero-cta-content">
          <h2 className="Footer-hero-cta-title">
            Ready to Switch to Solar?
          </h2>
          <p className="Footer-hero-cta-subtitle">
            Talk to our experts for a free site inspection and customized cost estimation.
          </p>
        </div>

        <div className="Footer-hero-cta-actions">
          <Link to="/contact">
  <button className="Footer-hero-cta-btn">
    Contact BSP Project Solutions
  </button>
</Link>

          <button className="Footer-hero-cta-call">
            <FaPhoneAlt /> &nbsp;Call: 8018970154
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="Footer-hero-main">
        <div className="Footer-hero-container">
          {/* BRAND */}
          <div className="Footer-hero-col Footer-hero-brand">
            <div className="Footer-hero-logo">
              <span className="Footer-hero-sun">☀</span> Solam
            </div>

            <p className="Footer-hero-desc">
             Professional solar installation & energy solutions provider. Powering homes and businesses across Odisha with clean, renewable energy.
            </p>

            <div className="Footer-hero-contact">
              <FaEnvelope /> bspprojectsolutions@gmail.com
            </div>
            <div className="Footer-hero-contact">
              <FaPhoneAlt /> 8018970154
            </div>
          </div>

          {/* EXPLORE */}
          <div className="Footer-hero-col">
            <h4 className="Footer-hero-title">Quick Links</h4>
            <ul className="Footer-hero-links">
              <li>About</li>
              <li>Leadership Team</li>
              <li>Our Services</li>
              <li>Recent Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="Footer-hero-col">
            <h4 className="Footer-hero-title">Services</h4>
            <ul className="Footer-hero-links">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>On-Grid Systems</li>
              <li>Off-Grid Systems</li>
              <li>AMC Support</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="Footer-hero-col">
            <h4 className="Footer-hero-title">Visit Us</h4>
            <p className="Footer-hero-address">
              Near Sadar Police Station,
              <br />
              Kendrapara, Odisha
            </p>

            <div className="Footer-hero-socials">
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
              <span><FaInstagram /></span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="Footer-hero-bottom">
          <p>
  © Copyrights are Reserved by{" "}
  <a
    href="https://www.bspprojectsolutions.co.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    bspprojectsolutions
  </a>{" "}
  | Developed by{" "}
  <a
    href="https://www.instagram.com/creovatetechnologies/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Creovate Technologies
  </a>
</p>

        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        className="Footer-hero-scroll"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
