import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigate hook
import "./Main.css";

import machineImage from "../assets/Main.png";
import installIcon from "../assets/installation.png";
import technicianIcon from "../assets/technician.png";
import serviceIcon from "../assets/service.png";
import plansIcon from "../assets/affordable.png";

const Banner = () => {
  const navigate = useNavigate();  // ✅ initialize navigate

  const handleSubscribe = () => {
    navigate("/product50");  // ✅ navigate to products50
  };

  return (
    <div className="banner-section">
      {/* Top Section */}
      <div className="banner-wrapper">
        {/* Left Image */}
        <div className="banner-image-container">
          <img src={machineImage} alt="Water Machine" className="banner-machine-img" />
        </div>

        {/* Right Content */}
        <div className="banner-content">
          <h2>
            PURE WATER MADE <br />
            SIMPLE, SAFE, AND SMART.
          </h2>
          <p className="banner-subtitle">Flexible plans, hassle-free water.</p>
          <p className="banner-plan-text">
            Plan Starts @{" "}
            <br />
            <br />
            <span className="banner-price">₹2,000*</span> / Month
          </p>
          <button 
            className="banner-subscribe-btn" 
            onClick={handleSubscribe}  // ✅ navigate on click
          >
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="feature-section">
        <div className="feature-item">
          <img src={installIcon} alt="Free Installation" className="feature-icon-img" />
          <span>Free Installation</span>
        </div>
        <div className="feature-item">
          <img src={technicianIcon} alt="Certified Technicians" className="feature-icon-img" />
          <span>Certified Technicians</span>
        </div>
        <div className="feature-item">
          <img src={serviceIcon} alt="Regular Service" className="feature-icon-img" />
          <span>Regular Service</span>
        </div>
        <div className="feature-item">
          <img src={plansIcon} alt="Affordable Plans" className="feature-icon-img" />
          <span>Affordable Plans</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;