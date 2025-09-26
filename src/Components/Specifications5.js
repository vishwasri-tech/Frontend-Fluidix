import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Specifications5.css";

// Import your local images
import step1 from "../assets/product.png";
import step2 from "../assets/plan.png";
import step3 from "../assets/install.png";
import step4 from "../assets/water.png";

function Specification5() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSubscribe = () => {
    navigate("/plans"); // ✅ Navigate to Plans page
  };

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
                <td>2000 Litres/Hour</td>
              </tr>
              <tr>
                <td>Output Water TDS</td>
                <td>30–70 Ppm</td>
              </tr>
              <tr>
                <td>Membrane Type</td>
                <td> RO Membrane</td>
              </tr>
              <tr>
                <td>Pre-Filtration</td>
                <td>sand + carbon + micron filter</td>
              </tr>
              <tr>
                <td>Pump</td>
                <td>4 HP Pump</td>
              </tr>
              <tr>
                <td>Power Requirement</td>
                <td>5.5 KVA</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>1.5m (H) × 1.75m (W) × 0.9mm (D)</td>
              </tr>
              <tr>
                <td>Best Suited For</td>
                <td>factories, institutions</td>
              </tr>
              <tr>
                <td>Subscription Fee</td>
                <td>₹22,000/Month</td>
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
        <button className="subscribe-btn" onClick={handleSubscribe}>
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default Specification5;
