import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

// Images
import machineImage1 from "../assets/Main.png";
import machineImage2 from "../assets/Main2.png";

// Icons
import installIcon from "../assets/installation.png";
import technicianIcon from "../assets/technician.png";
import serviceIcon from "../assets/service.png";
import plansIcon from "../assets/affordable.png";

// Slides
const slides = [
  {
    image: machineImage1,
    title: "PURE WATER MADE SIMPLE, SAFE, AND SMART.",
    subtitle: "Flexible plans, hassle-free water.",
    planText: "Plan Starts @",
    price: "₹2,000* / Month",
    buttonText: "SUBSCRIBE NOW",
    customClass: "", // Default
  },
  {
    image: machineImage2,
    title: "1000 LPH Water Treatment Plant.",
    subtitle: "Heavy-duty RO system for industrial & large scale needs.",
    planText: "Plan Starts @",
    price: "₹15,000* / Month",
    buttonText: "SUBSCRIBE NOW",
    customClass: "larger-machine",
  },
];

const BannerCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    navigate("/product50");
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="banner-section">
      <div className="banner-wrapper fade-slide">
        {/* Left Image */}
        <div className="banner-image-container">
          <img
            src={currentSlide.image}
            alt="Water Machine"
            className={`banner-machine-img ${currentSlide.customClass}`}
          />
        </div>

        {/* Right Content */}
        <div className="banner-content">
          <h2>{currentSlide.title}</h2>
          <p className="banner-subtitle">{currentSlide.subtitle}</p>
          <p className="banner-plan-text">
            {currentSlide.planText}
            <br />
            <br />
            <span className="banner-price">{currentSlide.price}</span>
          </p>
          <button className="banner-subscribe-btn" onClick={handleSubscribe}>
            {currentSlide.buttonText}
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-item">
          <img
            src={installIcon}
            alt="Free Installation"
            className="feature-icon-img"
          />
          <span>Free Installation</span>
        </div>
        <div className="feature-item">
          <img
            src={technicianIcon}
            alt="Certified Technicians"
            className="feature-icon-img"
          />
          <span>Certified Technicians</span>
        </div>
        <div className="feature-item">
          <img
            src={serviceIcon}
            alt="Regular Service"
            className="feature-icon-img"
          />
          <span>Regular Service</span>
        </div>
        <div className="feature-item">
          <img
            src={plansIcon}
            alt="Affordable Plans"
            className="feature-icon-img"
          />
          <span>Affordable Plans</span>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
