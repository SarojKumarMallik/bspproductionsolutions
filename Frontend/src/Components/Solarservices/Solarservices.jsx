import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiZap,
  FiSun,
  FiArrowUpRight
} from "react-icons/fi";
import "./Solarservices.css";

const services = [
  {
    icon: <FiHome />,
    title: "Residential Rooftop",
    desc: "Cut electricity bills with high-efficiency home solar installations."
  },
  {
    icon: <FiBriefcase />,
    title: "Commercial Solar",
    desc: "Scalable solar solutions designed for offices and enterprises."
  },
  {
    icon: <FiZap />,
    title: "On-Grid Systems",
    desc: "Feed excess power back to the grid and earn energy credits."
  },
  {
    icon: <FiSun />,
    title: "Off-Grid Systems",
    desc: "Battery-backed power systems for remote and rural locations."
  }
];

const Solarservices = () => {
  return (
    <section className="Solarservices">
      <div className="Solarservices_container">
        {/* ===== HEADER ===== */}
        <div className="Solarservices_header">
          <div className="Solarservices_heading">
            <span className="Solarservices_tag">OUR EXPERTISE</span>
            <h2 className="Solarservices_title">
              Comprehensive <span>Solar Services</span>
            </h2>
            <p className="Solarservices_desc">
              Tailored energy solutions for every need — from residential rooftops
              to utility-scale commercial solar plants.
            </p>
          </div>

          <Link to="/services" className="Solarservices_cta">
            View All Services <FiArrowUpRight />
          </Link>
        </div>

        {/* ===== CARDS ===== */}
        <div className="Solarservices_grid">
          {services.map((item, index) => (
            <div className="Solarservices_card" key={index}>
              <div className="Solarservices_iconWrap">
                <div className="Solarservices_icon">{item.icon}</div>
              </div>

              <h4 className="Solarservices_cardTitle">{item.title}</h4>
              <p className="Solarservices_cardDesc">{item.desc}</p>

              <span className="Solarservices_cardLine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solarservices;
