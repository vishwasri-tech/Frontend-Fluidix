import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import "./Reason.css";

// Import images from src/assets
import rsn1 from "../assets/rsn1.png";
import rsn2 from "../assets/rsn2.png";
import rsn3 from "../assets/rsn3.png";
import rsn4 from "../assets/rsn4.png";

function Reason() {
  return (
    <section className="reason-section">
      <h2 className="reason-title">Why Choose Our Products?</h2>

      <div className="reason-container">
        <div className="reason-item">
          <img src={rsn1} alt="ISO Certified" className="reason-icon" />
          <div className="reason-text">
            <h3>ISO Certified</h3>
            <span className="reason-dash">-</span>
            <p>Guaranteed Quality And Reliability.</p>
          </div>
        </div>

        <div className="reason-item">
          <img src={rsn2} alt="High Efficiency" className="reason-icon" />
          <div className="reason-text">
            <h3>High Efficiency</h3>
            <span className="reason-dash">-</span>
            <p>Maximum Output With Minimum Effort.</p>
          </div>
        </div>

        <div className="reason-item">
          <img src={rsn3} alt="Easy Maintenance" className="reason-icon" />
          <div className="reason-text">
            <h3>Easy Maintenance</h3>
            <span className="reason-dash">-</span>
            <p>Hassle-Free Upkeep, Saves Time And Cost.</p>
          </div>
        </div>

        <div className="reason-item">
          <img src={rsn4} alt="After-Sales Support" className="reason-icon" />
          <div className="reason-text">
            <h3>After-Sales Support</h3>
            <span className="reason-dash">-</span>
            <p>Dedicated Assistance Whenever You Need.</p>
          </div>
        </div>
      </div>

      <div className="reason-cta">
        <h3>
          Find The Right RO System For Your Home, Business, Or Industry.
        </h3>

        {/* ✅ Navigate to Enquire page */}
        <Link to="/enquire">
          <button className="reason-btn">Contact Us</button>
        </Link>
      </div>
    </section>
  );
}

export default Reason;
