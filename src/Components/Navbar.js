import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ use Link instead of <a>
import "./Navbar.css";
import Logo from "../assets/Logo.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Fluidix Logo" className="logo-img" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={activeLink === "products" ? "active" : ""}
              onClick={() => handleClick("products")}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className={activeLink === "plans" ? "active" : ""}
              onClick={() => handleClick("plans")}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/custom"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleClick("contact")}
            >
              Custom Products
            </Link>
          </li>
          {/* Login Link inside nav-links */}
         <li>
  <Link
    to="/enquire"
    className={`enquire-btn ${activeLink === "login" ? "active" : ""}`}
    onClick={() => handleClick("login")}
  >
    Enquire Now
  </Link>
</li>

        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}
