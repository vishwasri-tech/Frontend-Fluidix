import React from "react";
import "./bio.css";

// import images from assets
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ln from "../assets/ln.png";

function Bio() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Social */}
        <div className="footer-left">
          <h2 className="footer-logo">
            Fluidix <span>Pure Water Zero Hassel</span>
          </h2>
          <p className="footer-description">
            Fluidix makes clean water simple and reliable. With easy rental plans and
            trusted service, we ensure safe water for every need without the hassle.
          </p>
          <p className="social-text">Let's get social :</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/19KTo8DnGt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="social-img" />
            </a>
            <a
              href="https://www.instagram.com/fluidix_in?igsh=MTdqNmlpaTFmbGI0NQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" className="social-img" />
            </a>
            <a
              href="https://www.linkedin.com/company/fluidix25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ln} alt="LinkedIn" className="social-img" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Custom Products</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Right Section - Support */}
        <div className="footer-support">
          <h3>Support</h3>
          <p>📞 78160 59032, 98480 37623</p>
          <p>📧 <a href="mailto:Crafted.Labs25@Gmail.Com">Crafted.Labs25@Gmail.Com</a></p>

          <h3 className="address-heading">Address</h3>
          <p>
            9-6/53, Eswaripuri Colony,<br />
            Nagram, Medchal–Malkagiri,<br />
            Hyderabad, Telangana 500083
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Bio;
