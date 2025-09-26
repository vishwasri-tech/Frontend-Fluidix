import React from "react";
import { useNavigate } from "react-router-dom";
import plan250 from "../assets/250lph.png";
import "./Product250.css";

export default function Product250() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/plans", { state: { flow: "250 LPH" } });
  };

  return (
    <div className="product250-container">
      <div className="product250-left">
        <img src={plan250} alt="250 LPH Plant" className="product250-image" />
      </div>

      <div className="product250-right">
        <h2 className="product250-title">250 LPH Water Treatment Plant</h2>
        <p className="product250-subtitle">
          <span className="product250-blue-text">
            Steady & scalable RO system for medium-scale needs.
          </span>
        </p>

        <p className="product250-price">
          Plan start @<strong>₹5,000 / Month</strong>
        </p>

        <button className="product250-subscribe-btn" onClick={handleSubscribe}>
          SUBSCRIBE NOW
        </button>

        <div className="product250-benefits">
          <h4 className="product250-benefits-title">Product Benefits</h4>
          <p className="product250-benefits-text">
            Perfect for restaurants, hostels, and small factories, the 250 LPH
            plant delivers a steady supply of pure water for medium-sized
            operations. With IoT-enabled performance tracking and all-inclusive
            service, downtime and maintenance worries are completely eliminated.
            Get reliable water on demand without heavy upfront investment.
          </p>
          <p className="product250-bestfor">
            <strong>Best For:</strong> Restaurants, mid-size schools, small factories
          </p>
        </div>
      </div>
    </div>
  );
}
