import React, { useState } from "react";
import "./Enquire.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Enquire() {
  const phoneNumber = "917816049032"; // <-- Use your correct WhatsApp number
  const presetMessage = "Hi, I would like to enquire about your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    presetMessage
  )}`;

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name || formData.name.trim().length < 2)
      errs.name = "Please enter your name.";
    if (
      !formData.mobileNumber ||
      !/^[0-9]{7,15}$/.test(formData.mobileNumber)
    )
      errs.mobileNumber = "Enter a valid mobile number (digits only).";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Enter a valid email address.";
    if (!formData.message || formData.message.trim().length < 5)
      errs.message = "Please enter a short message.";
    return errs;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validation = validate();
  if (Object.keys(validation).length) {
    setErrors(validation);
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setShowPopup(true); // ✅ show popup on success
      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      alert("❌ " + (data.message || "Failed to submit enquiry"));
    }
  } catch (err) {
    console.error("Error submitting enquiry:", err);
    alert("❌ Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
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
              <a className="info-text phone-numbers" href="tel:+917816059032">
                78160 59032,  98480 37623
              </a>
                   {/* <a className="info-text phone-numbers" href="tel:+9198480 37623">
                98480 37623
              </a> */}
          
              {/* <span className="info-text">, 98480 37623</span> */}
            </div>
            <div className="info-item">
              <a
                href={whatsappUrl}
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on Whatsapp"
              ></a>
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
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              className="input"
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            {errors.mobileNumber && (
              <p className="error">{errors.mobileNumber}</p>
            )}
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <textarea
              className="textarea"
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

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
