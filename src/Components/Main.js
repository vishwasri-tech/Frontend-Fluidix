import React from "react";
import "./Main.css";

import machineImage from "../assets/Main.png";
import installIcon from "../assets/installation.png";
import technicianIcon from "../assets/technician.png";
import serviceIcon from "../assets/service.png";
import plansIcon from "../assets/affordable.png";

const Banner = () => {
  return (
    <div className="banner">
      {/* Top Section */}
      <div className="banner-container">
        {/* Left Image */}
        <div className="banner-left">
          <img src={machineImage} alt="Water Machine" className="machine-img" />
        </div>

        {/* Right Content */}
        <div className="banner-right">
          <h2>
            PURE WATER MADE <br />
            SIMPLE, SAFE, AND SMART.
          </h2>
          <p className="subtitle">Flexible plans, hassle-free water.</p>
          <p className="plan-text">
            Plan Starts @{" "}<br></br><br></br>
            <span className="price">₹2,000*</span> / Month
          </p>
          <button className="subscribe-btn">SUBSCRIBE NOW</button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="feature-bar">
        <div className="feature">
          <img src={installIcon} alt="Free Installation" className="feature-icon" />
          <span>Free Installation</span>
        </div>
        <div className="feature">
          <img src={technicianIcon} alt="Certified Technicians" className="feature-icon" />
          <span>Certified Technicians</span>
        </div>
        <div className="feature">
          <img src={serviceIcon} alt="Regular Service" className="feature-icon" />
          <span>Regular Service</span>
        </div>
        <div className="feature">
          <img src={plansIcon} alt="Affordable Plans" className="feature-icon" />
          <span>Affordable Plans</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
