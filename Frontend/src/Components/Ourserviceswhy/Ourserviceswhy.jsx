import React from "react";
import { Link } from "react-router-dom";
import "./Ourserviceswhy.css";

const Ourserviceswhy = () => {
  const services = [
    { name: "On Grid Solar System", icon: "☀️", link: "/" },
    { name: "Off Grid Solar System", icon: "🔋", link: "/" },
    { name: "Hybrid Solar System", icon: "⚡", link: "/" },
    { name: "Residential", icon: "🏠", link: "/" },
    { name: "Industrial", icon: "🏭", link: "/" },
    { name: "Solar AMC", icon: "🔧", link: "/" },
  ];

  const reasons = [
    {
      title: "On-Grid Solar Quotation",
      description:
        "We send detailed quotation before installation with pricing, warranty & product info.",
      icon: "📄",
      highlight: true,
    },
    {
      title: "Experienced Installation Partners",
      description:
        "Trusted installation experts ensuring quality & reliable service.",
      icon: "👥",
    },
    {
      title: "Time-Saving Process",
      description:
        "No need to contact multiple vendors — we manage everything.",
      icon: "⏱️",
    },
    {
      title: "24/7 Support",
      description:
        "Continuous after-sales support and expert energy guidance.",
      icon: "🛟",
    },
    {
      title: "Zero Spam Calls",
      description:
        "We respect your privacy — no unnecessary follow-ups.",
      icon: "🚫",
    },
  ];

  return (
    <section className="Ourserviceswhy-wrapper">
      <div className="Ourserviceswhy-container">

        {/* LEFT SIDE */}
        <div className="Ourserviceswhy-left">
          <span className="Ourserviceswhy-badge">
            WHAT WE OFFER
          </span>
          <h2 className="Ourserviceswhy-title">
            Our Services
          </h2>
          <p className="Ourserviceswhy-sub">
            Smart solar solutions designed for homes & businesses.
          </p>

          <div className="Ourserviceswhy-services">
            {services.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="Ourserviceswhy-service"
              >
                <span className="Ourserviceswhy-icon">
                  {item.icon}
                </span>
                <span className="Ourserviceswhy-name">
                  {item.name}
                </span>
                <span className="Ourserviceswhy-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="Ourserviceswhy-right">
          <span className="Ourserviceswhy-badge Ourserviceswhy-gold">
            WHY RANA SOLAR
          </span>

          <h2 className="Ourserviceswhy-title">
            Why Choose Us for{" "}
            <span>On-Grid Installation?</span>
          </h2>

          <div className="Ourserviceswhy-reasons">
            {reasons.map((item, index) => (
              <div
                key={index}
                className={`Ourserviceswhy-reason ${
                  item.highlight ? "Ourserviceswhy-highlight" : ""
                }`}
              >
                <div className="Ourserviceswhy-reason-icon">
                  {item.icon}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="Ourserviceswhy-cta"
          >
            Connect with Energy Advisors →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Ourserviceswhy;