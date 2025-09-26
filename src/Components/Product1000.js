import React from "react";
import { useNavigate } from "react-router-dom";
import plan1000 from "../assets/1000lph.png";
import "./Product1000.css";

export default function Product1000() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/plans", { state: { flow: "1000 LPH" } });
  };

  return (
    <div className="product1000-container">
      <div className="product1000-left">
        <img src={plan1000} alt="1000 LPH Plant" className="product1000-image" />
      </div>

      <div className="product1000-right">
        <h2 className="product1000-title">1000 LPH Water Treatment Plant</h2>
        <p className="product1000-subtitle">
          <span className="product1000-blue-text">
            Heavy-duty RO system for industrial & large-scale needs.
          </span>
        </p>

        <p className="product1000-price">
          Plan start @<strong>₹15,000 / Month</strong>
        </p>

        <button className="product1000-subscribe-btn" onClick={handleSubscribe}>
          SUBSCRIBE NOW
        </button>

        <div className="product1000-benefits">
          <h4 className="product1000-benefits-title">Product Benefits</h4>
          <p className="product1000-benefits-text">
            The 1000 LPH water treatment plant is designed for large hotels,
            residential complexes, and industrial setups. Equipped with 6 stages
            of purification and IoT-enabled real-time monitoring, it ensures
            uninterrupted supply of safe, pure water with complete operational
            efficiency. At ₹15,000/month, it’s a cost-effective, worry-free
            solution for high-demand environments.
          </p>
          <p className="product1000-bestfor">
            <strong>Best For:</strong> Large hotels, residential complexes, industrial setups
          </p>
        </div>
      </div>
    </div>
  );
}
