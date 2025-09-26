import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./feature.css";

// Import images from assets
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";

function Feature() {
  return (
    <section className="features-section">
      <h2>Why Fluidix?</h2>
      <p className="subtitle">
        Pure Water, Trusted Technology, And Exceptional Service <br />
        Designed For Your Health And Convenience.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <img src={F1} alt="Advanced Filtration" className="feature-img" />
          <div className="feature-text">Advanced Filtration Technology</div>
        </div>

        <div className="feature-card">
          <img src={F2} alt="Eco Friendly" className="feature-img" />
          <div className="feature-text">Eco-Friendly & Energy Efficient</div>
        </div>

        <div className="feature-card">
          <img src={F3} alt="Installation & Support" className="feature-img" />
          <div className="feature-text">
            Hassle-Free Installation & Support
          </div>
        </div>

        <div className="feature-card">
          <img src={F4} alt="Affordable Plans" className="feature-img" />
          <div className="feature-text">Affordable & Flexible Plans</div>
        </div>
      </div>

      <section className="cta-section">
        <h3>
          Precision Filtration For Unique <br /> Industry Needs!
        </h3>
        
        {/* ✅ Navigation to Enquire Page */}
        <Link to="/enquire" className="cta-button">🎧 Contact Us</Link>
      </section>
    </section>
  );
}

export default Feature;
