import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

import product50Image from "../assets/product-1.png";
import product500Image from "../assets/product-2.png";
import product2000Image from "../assets/product-3.png";

const slidesData = [
  {
    title: "50 LPH Water Treatment Plant",
    description: "Compact & efficient RO system for small-scale water needs.",
    image: product50Image,
    link: "/product50",
  },
  {
    title: "500 LPH Water Treatment Plant",
    description: "High-capacity RO system for large-scale water needs.",
    image: product500Image,
    link: "/product500",
  },
  {
    title: "2000 LPH Water Treatment Plant",
    description: "High-volume RO system for factories & institutions.",
    image: product2000Image,
    link: "/product2000",
  },
];

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="product-hero-section">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`product-background ${
            index === currentSlide ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="hero-text-overlay">
            <h1 style={{ color: " #5e94ffff" }}>{slide.title}</h1>
            <p>{slide.description}</p>
            <button
              className="know-more-btn"
              onClick={() => navigate(slide.link)}
            >
              KNOW MORE
            </button>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {slidesData.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={dotIndex === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Products;
