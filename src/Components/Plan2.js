import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./Plan2.css";

export default function Plan2() {
  const navigate = useNavigate();

  // Function when a plan is selected
  const handleSelectPlan = (plan) => {
    // Navigate to Plans page
    navigate("/plans");  // ✅ Goes to Plans page
  };

  return (
    <div className="plan2-container">
      <h2 className="plan2-title">Choose a Plan That Fits You</h2>

      <div className="plan2-wrapper">
        {/* Basic Plan */}
        <div className="plan2-card basic">
          <h3 className="plan2-heading">Basic</h3>
          <p className="plan2-duration">
            <strong>12 Months</strong> Plan
          </p>
          <ul className="plan2-features">
            <li>Free installation</li>
            <li>Filter replacement reminders</li>
            <li>Emergency repair service</li>
          </ul>
          <button
            className="plan2-btn basic-btn"
            onClick={() => handleSelectPlan("Basic")}
          >
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="plan2-card premium highlight">
          <div className="plan2-badge">MOST POPULAR</div>
          <h3 className="plan2-heading">Premium</h3>
          <p className="plan2-duration">
            <strong>24 Months</strong> Plan
          </p>
          <ul className="plan2-features">
            <li>Free installation</li>
            <li>Priority customer support</li>
            <li>Annual water quality testing</li>
            <li>Extended warranty coverage</li>
          </ul>
          <button
            className="plan2-btn premium-btn"
            onClick={() => handleSelectPlan("Premium")}
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
