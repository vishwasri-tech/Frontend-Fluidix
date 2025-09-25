import React from "react";
import "./Flow.css";

import productIcon from "../assets/product.png";
import planIcon from "../assets/plan.png";
import installIcon from "../assets/install.png";
import waterIcon from "../assets/water.png";

const steps = [
  { img: productIcon, title: "Choose Your Product" },
  { img: planIcon, title: "Select Your Plan" },
  { img: installIcon, title: "Free Installation" },
  { img: waterIcon, title: "Enjoy Pure Water" },
];

export default function Flow() {
  return (
    <section className="flow-section">
      <h2 className="flow-title">How Fluidix Works</h2>
      <p className="flow-subtitle">
        From Booking To Installation — Clean Water In Just 3 Steps.
      </p>

      <div className="flow-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flow-step">
              <img src={step.img} alt={step.title} className="step-img" />
              <p className="step-title">{step.title}</p>
            </div>

            {/* Add arrow except after last step */}
            {index < steps.length - 1 && (
              <div className="arrow" aria-hidden="true">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
