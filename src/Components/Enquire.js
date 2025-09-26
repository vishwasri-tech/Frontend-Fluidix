import React, { useState } from "react";
import "./Enquire.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Enquire() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="enquire-section">
      <div className="enquire-inner">
        {/* LEFT SECTION */}
        <div className="enquire-left">
          <h2 className="enquire-title">We’re Here To Help You</h2>
          <p className="enquire-subtitle">
            Have questions about products, plans, or custom solutions? Send us
            your enquiry and our team will get back within 24 hours.
          </p>

          <div className="enquire-info">
            <div className="info-item">
              <div className="icon-wrap phone">
                <FaPhoneAlt />
              </div>
              <a className="info-text" href="tel:+917816059032">
                78160 59032
              </a>
              <span className="info-text">, 98480 37623</span>
            </div>
            <div className="info-item">
              <div className="icon-wrap whatsapp">
                <FaWhatsapp />
              </div>
              <a
                className="info-text"
                href="https://wa.me/917816049032"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on Whatsapp
              </a>
            </div>
            <div className="info-item">
              <div className="icon-wrap mail">
                <FaEnvelope />
              </div>
              <a className="info-text" href="mailto:Crafted.labs25@gmail.com">
                Crafted.labs25@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="enquire-right">
          <form className="enquire-form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="submit-row">
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Thanks for contacting Fluidix!</h3>
            <p>Our team will reach out shortly.</p>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
