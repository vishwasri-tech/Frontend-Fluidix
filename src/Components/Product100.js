import React from "react";
import { useNavigate } from "react-router-dom";
import plan100 from "../assets/50lph.png";
import "./Product100.css";

export default function Product100() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/plans", { state: { flow: "100 LPH" } });
  };

  return (
    <div className="product100-container">
      <div className="product100-left">
        <img src={plan100} alt="100 LPH Plant" className="product100-image" />
      </div>

      <div className="product100-right">
        <h2 className="product100-title">100 LPH Water Treatment Plant</h2>
        <p className="product100-subtitle">
          <span className="product100-blue-text">
            Reliable RO solution for cafés, schools, and offices.
          </span>
        </p>

        <p className="product100-price">
          Plan start @<strong>₹3,500 / Month</strong>
        </p>

        <button className="product100-subscribe-btn" onClick={handleSubscribe}>
          SUBSCRIBE NOW
        </button>

        <div className="product100-benefits">
          <h4 className="product100-benefits-title">Product Benefits</h4>
          <p className="product100-benefits-text">
            The 100 LPH plant is ideal for cafés, small schools, and offices that
            require consistent water quality. Built with robust technology and
            backed by our subscription model, it ensures zero CAPEX, hassle-free
            service, and transparent usage monitoring. A smart choice for growing
            businesses looking for reliable water every day.
          </p>
          <p className="product100-bestfor">
            <strong>Best For:</strong> Cafés, offices, small schools, boutique
            businesses
          </p>
        </div>
      </div>
    </div>
  );
}
