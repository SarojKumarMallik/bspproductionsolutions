import React from "react";
import {
  FaFileInvoice,
  FaUserTie,
  FaMapMarkedAlt,
  FaSolarPanel,
  FaPlug
} from "react-icons/fa";
import "./Howtoinstall.css";

const Howtoinstall = () => {
  const steps = [
    {
      icon: <FaFileInvoice />,
      title: "Submit Request For Solar System Quotation",
      description:
        "Click on the “Get Quote” and request solar quotations by filling up the quotation form. Enter your name, phone number, electricity consumption details, etc., and submit the form."
    },
    {
      icon: <FaUserTie />,
      title: "Discuss With Our Energy Advisor",
      description:
        "Our energy advisor will contact you during working hours and you can discuss/ask questions about any of your doubts related to on-grid solar installation. In the call, you can raise a site visit request."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Visit & Final Quotation",
      description:
        "After the site visit, our installation partner will provide you with a final quotation along with a plan/3D design."
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar System Installation",
      description:
        "Once you confirm the order, we notify our solar installation partner. Your on-grid solar system will be installed as soon as possible."
    },
    {
      icon: <FaPlug />,
      title: "Final Checks and Grid Connection",
      description:
        "After installation, our solar installation partner will do final checks and provide required documents for solar subsidy application. DISCOM officials will visit your home for verification and connect the system to the power grid."
    }
  ];

  return (
    <section className="Howtoinstall-section">
      <div className="Howtoinstall-container">

        <div className="Howtoinstall-header">
          <span className="Howtoinstall-badge">INSTALLATION PROCESS</span>
          <h2 className="Howtoinstall-heading">
            How To Install an On-Grid Solar System With{" "}
            <span>Rana Solar Power?</span>
          </h2>
          <p className="Howtoinstall-subtext">
            With Rana Solar Power, your grid-connected solar PV system installation process becomes much easier.
            Here is the step-by-step installation process:
          </p>
        </div>

        <div className="Howtoinstall-timeline">
          {steps.map((step, index) => (
            <div className="Howtoinstall-step" key={index}>
              <div className="Howtoinstall-icon">
                <span className="Howtoinstall-step-number">
                  {index + 1}
                </span>
                {step.icon}
              </div>
              <div className="Howtoinstall-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Howtoinstall;