import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ get current path
  const [activeLink, setActiveLink] = useState("");

  // Sync activeLink with current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.startsWith("/products")) setActiveLink("products");
    else if (path.startsWith("/plans")) setActiveLink("plans");
    else if (path.startsWith("/about")) setActiveLink("about");
    else if (path.startsWith("/custom")) setActiveLink("contact");
    else if (path.startsWith("/enquire")) setActiveLink("login");
  }, [location]);

  const handleClick = () => setIsOpen(false); // close mobile menu

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
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={activeLink === "products" ? "active" : ""}
              onClick={handleClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className={activeLink === "plans" ? "active" : ""}
              onClick={handleClick}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "about" ? "active" : ""}
              onClick={handleClick}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/custom"
              className={activeLink === "contact" ? "active" : ""}
              onClick={handleClick}
            >
              Custom Products
            </Link>
          </li>
          <li>
            <Link
              to="/enquire"
              className={activeLink === "login" ? "active enquire-btn" : "enquire-btn"}
              onClick={handleClick}
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
