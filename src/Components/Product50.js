import React from "react";
import { useNavigate } from "react-router-dom";
import plan50 from "../assets/50lph.png";
import "./Product50.css";

export default function Product50() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/plans", { state: { flow: "50 LPH" } });
  };

  return (
    <div className="product50-container">
      <div className="product50-left">
        <img src={plan50} alt="50 LPH Plant" className="product50-image" />
      </div>

      <div className="product50-right">
        <h2 className="product50-title">50 LPH Water Treatment Plant</h2>
        <p className="product50-subtitle">
          <span className="product50-blue-text">
            Compact & efficient RO system for small scale water needs.
          </span>
        </p>

        <p className="product50-price">
          Plan start @<strong>₹2,000 / Month</strong>
        </p>

        <button className="product50-subscribe-btn" onClick={handleSubscribe}>
          SUBSCRIBE NOW
        </button>

        <div className="product50-benefits">
          <h4 className="product50-benefits-title">Product Benefits</h4>
          <p className="product50-benefits-text">
            The 50 LPH commercial RO plant is a compact and efficient solution
            for small-scale water needs. Designed for shops, clinics, and
            start-ups, it delivers safe and pure water round the clock. With IoT
            monitoring and complete service support included, you enjoy reliable
            water supply—without the burden of heavy investment.
          </p>
          <p className="product50-bestfor">
            <strong>Best For:</strong> Small shops, clinics, homes, start-ups
          </p>
        </div>
      </div>
    </div>
  );
}
