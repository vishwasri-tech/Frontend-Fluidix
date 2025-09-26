import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import "./Specifications.css";

// Import your local images
import step1 from "../assets/product.png"; // Choose Product
import step2 from "../assets/plan.png"; // Select Plan
import step3 from "../assets/install.png"; // Installation
import step4 from "../assets/water.png"; // Pure Water

function Specification() {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <section className="specification">
      <div className="spec-container">
        {/* Left - Product Specifications */}
        <div className="spec-left">
          <h2 className="spec-title">Product Specifications</h2>
          <table className="spec-table">
            <tbody>
              <tr>
                <td>Capacity</td>
                <td>50 Litres/Hour</td>
              </tr>
              <tr>
                <td>Output Water TDS</td>
                <td>30–70 Ppm</td>
              </tr>
              <tr>
                <td>Membrane Type</td>
                <td>TFC RO Membrane</td>
              </tr>
              <tr>
                <td>Pre-Filtration</td>
                <td>Sediment + Carbon Filter</td>
              </tr>
              <tr>
                <td>Pump</td>
                <td>0.5 HP Pump</td>
              </tr>
              <tr>
                <td>Power Requirement</td>
                <td>100 Watts</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>825mm (H) × 425mm (W) × 310mm (D)</td>
              </tr>
              <tr>
                <td>Best Suited For</td>
                <td>Clinics, Shops, Homes</td>
              </tr>
              <tr>
                <td>Subscription Fee</td>
                <td>₹2,000/Month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right - How Fluidix Works */}
        <div className="spec-right">
          <h2 className="spec-title">How Fluidix Works</h2>
          <p className="spec-subtitle">
            From Booking To Installation Clean Water In Just 3 Steps.
          </p>

          <div className="workflow">
            <div className="workflow-step">
              <img src={step1} alt="Choose Product" className="step-icon" />
              <div className="step-text">Choose Your Product</div>
            </div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">
              <img src={step2} alt="Select Plan" className="step-icon" />
              <div className="step-text">Select Your Plan</div>
            </div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">
              <img src={step3} alt="Free Installation" className="step-icon" />
              <div className="step-text">Free Installation</div>
            </div>
            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">
              <img src={step4} alt="Enjoy Pure Water" className="step-icon" />
              <div className="step-text">Enjoy Pure Water</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Banner */}
      <div className="subscribe-banner">
        <p>
          Start Your Subscription Today And Enjoy <br />
          Pure Water, Worry-Free.
        </p>
        <button
          className="subscribe-btn"
          onClick={() => navigate("/plans")} // ✅ navigate to plans
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default Specification;
