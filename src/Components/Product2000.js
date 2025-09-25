// src/components/Product2000.js

import React from "react";
import plan2000 from "../assets/2000lph.png"; // make sure this image exists
import "./Product2000.css";

export default function Product2000() {
  return (
    <div className="product2000-container">
      <div className="product2000-left">
        <img src={plan2000} alt="2000 LPH Plant" className="product2000-image" />
      </div>

      <div className="product2000-right">
        <h2 className="product2000-title">2000 LPH Water Treatment Plant</h2>
        <p className="product2000-subtitle">
          <span className="product2000-blue-text">
            High-volume RO system for factories & institutions.
          </span>
        </p>

        <p className="product2000-price">
          Plan start @<strong>₹22,000 / Month</strong>
        </p>

        <button className="product2000-subscribe-btn">SUBSCRIBE NOW</button>

        <div className="product2000-benefits">
          <h4 className="product2000-benefits-title">Product Benefits</h4>
          <p className="product2000-benefits-text">
            The 2000 LPH water treatment plant is designed for large factories,
            institutions, and commercial complexes where high-volume, continuous
            purified water is essential. With full operation & maintenance,
            consumables replacement, and IoT-enabled smart monitoring, it delivers
            reliable performance without the need for capital investment.
          </p>
          <p className="product2000-bestfor">
            <strong>Best For:</strong> Large factories, institutions, commercial complexes
          </p>
        </div>
      </div>
    </div>
  );
}
