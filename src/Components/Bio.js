import React from "react";
import "./bio.css";

// import images from assets
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import yt from "../assets/yt.png";
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
          <p className="social-text">Let's get social :</p>
          <div className="social-icons">
            <a href="#">
              <img src={fb} alt="Facebook" className="social-img" />
            </a>
            <a href="#">
              <img src={ig} alt="Instagram" className="social-img" />
            </a>
            <a href="#">
              <img src={yt} alt="YouTube" className="social-img" />
            </a>
            <a href="#">
              <img src={ln} alt="LinkedIn" className="social-img" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Popular Exams */}
        <div className="footer-links">
          <h3>Popular Exams</h3>
          <ul>
            <li><a href="#">Civil Services</a></li>
            <li><a href="#">State Services</a></li>
            <li><a href="#">Banking Exams</a></li>
            <li><a href="#">Railway Exams</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Bio;
