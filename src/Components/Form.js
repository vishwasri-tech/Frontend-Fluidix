import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Form.css";

const CustomROForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validate form before submit
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid mobile number (10–15 digits).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.message && formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if invalid

    try {
      const res = await fetch("http://localhost:5000/api/ro-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        // Reset form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          company: "",
          location: "",
          message: "",
        });
        setErrors({});
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ Something went wrong!");
    }
  };
  return (
    <div className="ro-form-wrapper">
      <div className="ro-form-container">
        <div className="ro-info-box">
          <h4>
            Fill Out The Form To Get Your Custom RO Solution.
            <br />
            Our Team Will Contact You Shortly.
          </h4>
          <p>
            <strong>Tailored Water Treatment Plants Above 2000 LPH.</strong>
          </p>
          <p>
            At Fluidix, we design and deliver large-scale RO systems customized
            to your exact requirements. Whether for industries, hospitals, or
            institutions, our solutions ensure efficiency, reliability, and
            long-term support. Share your details, and let’s build the right
            setup for you.
          </p>
        </div>

        <div className="ro-form-card">
          <h3>Get Your Custom RO Solution</h3>
          <form className="ro-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              value={formData.company}
              onChange={handleChange}
            />
            <textarea
              name="location"
              placeholder="Location / Address"
              rows="2"
              value={formData.location}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
            <button style={{ width: "150px", padding: "10px" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="ro-footer-cta">
        <p>Your clean water journey starts with one Call.</p>

        {/* ✅ Navigation to Enquire page */}
        <Link to="/enquire">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default CustomROForm;
