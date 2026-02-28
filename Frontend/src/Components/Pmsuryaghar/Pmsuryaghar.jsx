import React from "react";
import "./Pmsuryaghar.css";
import {
  FaSolarPanel,
  FaBolt,
  FaHandHoldingUsd,
  FaCalendarAlt,
} from "react-icons/fa";

const Pmsuryaghar = () => {
  return (
    <section className="pmsuryaghar">
      <div className="pmsuryaghar-container">
        {/* Header Section */}
        <div className="pmsuryaghar-header">
          <div className="gov-badge">
            <span>GOVERNMENT SUBSIDY SCHEME</span>
          </div>

          <h1 className="pmsuryaghar-title">
            PM Surya Ghar <span className="highlight">Muft Bijli</span>
          </h1>

          <p className="pmsuryaghar-description">
            BSP Project Solutions assists customers in availing benefits under
            the PM Surya Ghar scheme, including documentation, application
            processing, and coordination.
          </p>
        </div>

        {/* Main Content */}
        <div className="pmsuryaghar-content">
          {/* Image Section */}
          <div className="pmsuryaghar-image">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar Panel Installation"
              />
            </div>

            {/* ===== PREMIUM SUBSIDY STATS ===== */}
            <div className="subsidy-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaSolarPanel />
                </div>
                <div className="stat-value">3 KW</div>
                <div className="stat-label">SYSTEM CAPACITY</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaBolt />
                </div>
                <div className="stat-value">Free</div>
                <div className="stat-label">ELECTRICITY</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaHandHoldingUsd />
                </div>
                <div className="stat-value">Up to ₹78K</div>
                <div className="stat-label">SUBSIDY BENEFIT</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-value">8+ Years</div>
                <div className="stat-label">SAVINGS PERIOD</div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="pmsuryaghar-benefits">
            <div className="benefits-header">
              <div className="benefits-icon">🌞</div>
              <div>
                <h3>Subsidy Support</h3>
                <p>Government-supported rooftop solar scheme</p>
              </div>
            </div>

            <div className="benefits-list">
              <div className="benefit">
                <div className="benefit-check">✓</div>
                <div className="benefit-text">
                  <h4>We handle the paperwork for you</h4>
                  <p>Complete documentation support</p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-check">✓</div>
                <div className="benefit-text">
                  <h4>Transparent subsidy processing</h4>
                  <p>Clear communication & tracking</p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-check">✓</div>
                <div className="benefit-text">
                  <h4>Quick & easy application</h4>
                  <p>End-to-end assistance</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-check">✓</div>
                <div className="benefit-text">
                  <h4>Quick & easy application</h4>
                  <p>End-to-end assistance</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pmsuryaghar;
