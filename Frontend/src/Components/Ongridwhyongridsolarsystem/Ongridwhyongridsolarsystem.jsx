import React from "react";
import "./Ongridwhyongridsolarsystem.css";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaPiggyBank,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

const Ongridwhyongridsolarsystem = () => {
  const services = [
    {
      icon: <FaMoneyBillWave />,
      title: "Save Your Electricity Bills",
      description:
        "An on-grid solar feeds the electricity generated from the solar system to electricity grids. At the end of every month, you will have to pay only the net bill (export - import). It can reduce your bills by up to 95%.",
    },
    {
      icon: <FaChartLine />,
      title: "Get High Returns on Your Investment",
      description:
        "Once installed, an on-grid solar system can generate electricity for up to the next 25–30 years. Your returns will be in the form of reduced electricity bills. It will give you 20% - 40% returns per annum.",
    },
    {
      icon: <FaPiggyBank />,
      title: "Avail Solar Subsidy",
      description:
        "If you install an on-grid solar plant, our Central Government will give up to Rs. 78,000 subsidy. Our cabinet allocated Rs. 75,021 crore to disburse the subsidy amount for 1 crore customers who will install on-grid solar systems.",
    },
    {
      icon: <FaTools />,
      title: "Complete Maintenance With a Minimal Amount",
      description:
        "The grid-connected solar power system installation process is very simple and the maintenance cost is also very nominal. Generally, the maintenance cost stands between 1% - 2% of your initial system set-up cost.",
    },
    {
      icon: <FaLeaf />,
      title: "Help to Reduce Carbon Emission",
      description:
        "Solar power is the most convenient renewable energy source across the globe. It does not produce greenhouse gases and has zero carbon emissions. The fact is that a 3 KW on-grid solar system can reduce up to 2.5 tons of carbon dioxide (CO2) every year. This is equivalent to the annual carbon emissions from driving a car for about 8,000 km (5,000 miles).",
    },
  ];

  return (
    <section className="Ongridwhyongridsolarsystem-section">
      <div className="Ongridwhyongridsolarsystem-container">
        <div className="Ongridwhyongridsolarsystem-header">
          <div className="Ongridwhyongridsolarsystem-header-top">
            <span className="Ongridwhyongridsolarsystem-section-badge">
              ✦ ON-GRID SOLAR ✦
            </span>
          </div>

          <h2 className="Ongridwhyongridsolarsystem-title">
            Why{" "}
            <span className="Ongridwhyongridsolarsystem-title-gradient">
              On-Grid
            </span>{" "}
            Solar System?
          </h2>

          <p className="Ongridwhyongridsolarsystem-subtitle">
            These are the reasons to choose grid-connected solar PV system
            installation:
          </p>

          <div className="Ongridwhyongridsolarsystem-header-divider">
            <span className="Ongridwhyongridsolarsystem-divider-line"></span>
            <span className="Ongridwhyongridsolarsystem-divider-icon">☀️</span>
            <span className="Ongridwhyongridsolarsystem-divider-line"></span>
          </div>
        </div>

        <div className="Ongridwhyongridsolarsystem-grid">
          {services.map((item, index) => (
            <div key={index} className="Ongridwhyongridsolarsystem-card">
              <div className="Ongridwhyongridsolarsystem-card-top">
                <div className="Ongridwhyongridsolarsystem-card-icon">
                  {item.icon}
                </div>
                
              </div>

              <h3 className="Ongridwhyongridsolarsystem-card-title">
                {item.title}
              </h3>
              <p className="Ongridwhyongridsolarsystem-card-description">
                {item.description}
              </p>

              <div className="Ongridwhyongridsolarsystem-card-bottom">
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
                <span className="Ongridwhyongridsolarsystem-card-dot"></span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Ongridwhyongridsolarsystem;
