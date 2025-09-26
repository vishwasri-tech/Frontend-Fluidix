import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Form.css';

const CustomROForm = () => {
  return (
    <div className="ro-form-wrapper">
      <div className="ro-form-container">
        <div className="ro-info-box">
          <h4>
            Fill Out The Form To Get Your Custom RO Solution.<br />
            Our Team Will Contact You Shortly.
          </h4>
          <p><strong>Tailored Water Treatment Plants Above 2000 LPH.</strong></p>
          <p>
            At Fluidix, we design and deliver large-scale RO systems customized to your exact requirements.
            Whether for industries, hospitals, or institutions, our solutions ensure efficiency, reliability,
            and long-term support. Share your details, and let’s build the right setup for you.
          </p>
        </div>

        <div className="ro-form-card">
          <h3>Get Your Custom RO Solution</h3>
          <form className="ro-form">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Mobile No" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Company / Organization" />
            <textarea placeholder="Location / Address" rows="2" />
            <textarea placeholder="Message" rows="3" />
            <button type="submit">Submit</button>
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
