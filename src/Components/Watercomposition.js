// src/components/CompositionSection.jsx
import React from "react";
import "./Watercomposition.css";
import glassWithText from "../assets/glass.png"; // image with text already inside

const CompositionSection = () => {
  return (
    <section className="composition-section">
      <div className="composition-image-wrapper">
        <img src={glassWithText} alt="Water composition glass" />
      </div>
    </section>
  );
};

export default CompositionSection;
