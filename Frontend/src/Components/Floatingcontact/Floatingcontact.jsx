import React, { useState } from "react";
import "./Floatingcontact.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Floatingcontact = () => {
  const [open, setOpen] = useState(true);

  const whatsappNumber = "919775353642"; // Replace with your WhatsApp number
  const callNumber = "9775353642"; // Replace with your call number

  const message =
    "Hello! I am interested in installing a solar system. Please guide me.";

  return (
    <div className={`floating-contact-wrapper ${open ? "open" : "closed"}`}>
      
      {/* Arrow Toggle */}
      <div
        className="floating-toggle-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${callNumber}`}
        className="floating-btn call"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
};

export default Floatingcontact;