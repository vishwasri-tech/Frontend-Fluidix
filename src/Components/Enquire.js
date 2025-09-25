import React from "react";
import "./Enquire.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Enquire() {
  return (
    <section className="enquire-section">
      <div className="enquire-inner">
        {/* Left Section */}
        <div className="enquire-left">
          <h2 className="enquire-title">We’re Here To Help You</h2>
          <p className="enquire-subtitle">
            Have Questions About Products, Plans, Or Custom Solutions? Send Us
            Your Enquiry And Our Team Will Get Back Within 24 Hours.
          </p>

          <div className="enquire-info">
            <div className="info-item">
              <div className="icon-wrap phone">
                <FaPhoneAlt />
              </div>
              <span className="info-text">90000 50000</span>
            </div>

            <div className="info-item">
              <div className="icon-wrap whatsapp">
                <FaWhatsapp />
              </div>
              <span className="info-text">Chat On Whatsapp</span>
            </div>

            <div className="info-item">
              <div className="icon-wrap mail">
                <FaEnvelope />
              </div>
              <span className="info-text">Support@Fluidix.Com</span>
            </div>
          </div>
        </div>

        {/* Right Section (card shifted down) */}
        <div className="enquire-right">
          <form className="enquire-form" onSubmit={(e) => e.preventDefault()}>
            <input className="input" type="text" placeholder="Name" required />
            <input className="input" type="text" placeholder="Mobile Number" required />
            <input className="input" type="email" placeholder="Email" required />
            <textarea className="textarea" placeholder="Message" rows="6"></textarea>

            <div className="submit-row">
              <button className="submit-btn" type="submit">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
