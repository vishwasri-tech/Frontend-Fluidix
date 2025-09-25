// src/components/Product500.js

import React from "react";
import plan500 from "../assets/500lph.png"; // make sure this image exists
import "./Product500.css";

export default function Product500() {
  return (
    <div className="product500-container">
      <div className="product500-left">
        <img src={plan500} alt="500 LPH Plant" className="product500-image" />
      </div>

      <div className="product500-right">
        <h2 className="product500-title">500 LPH Water Treatment Plant</h2>
        <p className="product500-subtitle">
          <span className="product500-blue-text">
            High-capacity RO system for large-scale water needs.
          </span>
        </p>

        <p className="product500-price">
          Plan start @<strong>₹10,000 / Month</strong>
        </p>

        <button className="product500-subscribe-btn">SUBSCRIBE NOW</button>

        <div className="product500-benefits">
          <h4 className="product500-benefits-title">Product Benefits</h4>
          <p className="product500-benefits-text">
            The 500 LPH commercial RO plant is built for high-demand environments
            like hotels, colleges, and community facilities. Combining powerful
            capacity with Fluidix’s subscription model, it guarantees
            uninterrupted water flow, preventive maintenance, and breakdown
            support.
          </p>
          <p className="product500-bestfor">
            <strong>Best For:</strong> Hotels, colleges, manufacturing units, community use
          </p>
        </div>
      </div>
    </div>
  );
}
