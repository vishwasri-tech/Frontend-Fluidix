import React from "react";
import "./ContactWhy.css";

// Import images from assets
import QuickIcon from "../assets/quick.png";
import TailoredIcon from "../assets/tailored.png";
import FriendlyIcon from "../assets/friendly.png";
import HassleIcon from "../assets/hassle.png";

function ContactWhy() {
  return (
    <section className="cw-section">
      <h2 className="cw-title">Why Contact Fluidix?</h2>
      <p className="cw-subtitle">
        Whether You’re Looking For A Home Purifier, A Rental Plan, Or A Large-Scale Commercial Solution, 
        Our Team Is Ready To Guide You. With Certified Technicians And 24x7 Support, Fluidix Ensures You Get Answers Fast.
      </p>

      <div className="cw-grid">
        <div className="cw-card">
          <img src={QuickIcon} alt="Quick Response" className="cw-icon" />
          <div className="cw-text">Quick Response</div>
        </div>

        <div className="cw-card">
          <img src={TailoredIcon} alt="Tailored Solutions" className="cw-icon" />
          <div className="cw-text">Tailored Solutions</div>
        </div>

        <div className="cw-card">
          <img src={FriendlyIcon} alt="Friendly Support Team" className="cw-icon" />
          <div className="cw-text">Friendly Support Team</div>
        </div>

        <div className="cw-card">
          <img src={HassleIcon} alt="Hassle-Free Process" className="cw-icon" />
          <div className="cw-text">Hassle-Free Process</div>
        </div>
      </div>
    </section>
  );
}

export default ContactWhy;
