import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Ongridfaq.css";

const Ongridfaq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Which solar company is best for on-grid solar installation?",
      answer:
        "Rana Solar Power is one of the trusted solar companies providing MNRE-approved on-grid solar installation with professional service and affordable pricing."
    },
    {
      question:
        "How to connect with solar installers via Rana Solar Power for on-grid solar installation?",
      answer:
        "You can click on the Get Quote button, fill in your details, and our energy advisor will contact you to guide you through the complete installation process."
    },
    {
      question:
        "What types of solar panels I can get with Rana Solar Power Energy for my on-grid solar power installation?",
      answer:
        "We provide high-efficiency Mono PERC, Bifacial, and Tier-1 solar panels with long-term performance warranty."
    },
    {
      question:
        "Are there any government incentives for installing an on-grid solar system in India?",
      answer:
        "Yes, the Government of India provides subsidies under the PM Surya Ghar Yojana scheme for eligible residential consumers."
    },
    {
      question: "Can I use an on-grid solar system during power outages?",
      answer:
        "Standard on-grid systems automatically shut down during power outages for safety reasons unless integrated with battery backup."
    },
    {
      question: "How long do grid-connected solar PV systems last?",
      answer:
        "On-grid solar systems typically last 25–30 years with minimal maintenance and performance warranty coverage."
    },
    {
      question: "Do on-grid solar systems require batteries?",
      answer:
        "No, standard on-grid systems do not require batteries. They are directly connected to the utility grid."
    },
    {
      question:
        "How much electricity can an on-grid solar system generate every day?",
      answer:
        "Electricity generation depends on system capacity and sunlight availability. A 3kW system can generate around 12–15 units per day on average."
    },
    {
      question: "How much does an on-grid solar system cost in India?",
      answer:
        "The cost depends on system capacity, panel type, and installation requirements. Contact Rana Solar Power for an accurate quotation."
    }
  ];

  return (
    <section className="Ongridfaq-section">
      <div className="Ongridfaq-container">
        
        <div className="Ongridfaq-header">
          <span className="Ongridfaq-badge">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="Ongridfaq-heading">
            On-Grid Solar <span>FAQ</span>
          </h2>
        </div>

        <div className="Ongridfaq-wrapper">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`Ongridfaq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="Ongridfaq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="Ongridfaq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              <div className="Ongridfaq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ongridfaq;