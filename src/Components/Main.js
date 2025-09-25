import React from "react";
import "./Main.css";
import main from "../assets/Main.png";
import installIcon from "../assets/installation.png";
import technicianIcon from "../assets/technician.png";
import serviceIcon from "../assets/service.png";
import affordableIcon from "../assets/affordable.png";

const Main = () => {
  return (
    <div className="main-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="subscription-card">
          {/* Image Section - Left */}
          <div className="subscription-image">
            <img src={main} alt="Water Purifier" />
          </div>

          {/* Content Section - Right */}
          <div className="subscription-content">
            <h1>
              PURE WATER MADE <br /> SIMPLE, SAFE, AND SMART.
            </h1>
            <p className="subtitle">Flexible plans, hassle-free water.</p>
            <p className="price">
              Plan Starts @ <span>₹2,000*</span> / Month
            </p>
            <button className="subscribe-btn">SUBSCRIBE NOW</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="specs-container">
        <div className="spec-item">
          <span className="spec-icon">
            <img src={installIcon} alt="Free Installation" />
          </span>
          <p>Free Installation</p>
        </div>

        <div className="spec-item">
          <span className="spec-icon">
            <img src={technicianIcon} alt="Certified Technicians" />
          </span>
          <p>Certified Technicians</p>
        </div>

        <div className="spec-item">
          <span className="spec-icon">
            <img src={serviceIcon} alt="Regular Service" />
          </span>
          <p>Regular Service</p>
        </div>

        <div className="spec-item">
          <span className="spec-icon">
            <img src={affordableIcon} alt="Affordable Plans" />
          </span>
          <p>Affordable Plans</p>
        </div>
      </section>
    </div>
  );
};

export default Main;