import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Vision.css";
import installIcon from "../assets/installation.png";
import techIcon from "../assets/technician.png";
import maintenanceIcon from "../assets/service.png";
import pricingIcon from "../assets/affordable.png";
import waterIcon from "../assets/water.png";

export default function VisionAndWhy() {
  const navigate = useNavigate();

  const handleViewPlans = () => {
    navigate("/plans"); 
  };

  return (
    <section className="vision-why">
      {/* Vision Section */}
      <div className="vision-section">
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the most trusted name in water purification
            services, ensuring safe water without the burden of maintenance or
            hidden costs. We aspire to set new standards in reliability,
            affordability, and customer satisfaction through innovative rental
            models. By combining technology, service excellence, and
            transparency, Fluidix aims to redefine how people access pure water
            and build long-term trust with every customer we serve.
          </p>
        </div>
      </div>

      {/* Why Choose Fluidix Section */}
      <div className="why-section">
        <h2>Why Choose Fluidix</h2>
        <p>
          At Fluidix, we combine technology, expertise, and transparent service
          to make pure water accessible and reliable. Our subscription plans
          cover everything — from installation to maintenance — so you can enjoy
          clean water without any hassle.
        </p>

        <ul className="why-list">
          <li>
            <img src={installIcon} alt="Free Installation" />
            <span>
              <b>Free Installation</b> - Delivered and installed at your
              doorstep
            </span>
          </li>
          <li>
            <img src={techIcon} alt="Certified Technicians" />
            <span>
              <b>Certified Technicians</b> - Professional setup and servicing
            </span>
          </li>
          <li>
            <img src={maintenanceIcon} alt="Regular Maintenance" />
            <span>
              <b>Regular Maintenance</b> - Timely filter replacements included
            </span>
          </li>
          <li>
            <img src={pricingIcon} alt="Transparent Pricing" />
            <span>
              <b>Transparent Pricing</b> - No hidden fees, just simple yearly
              plans
            </span>
          </li>
          <li>
            <img src={waterIcon} alt="Pure & Safe Water" />
            <span>
              <b>Pure & Safe Water</b> - Quality you can trust every day
            </span>
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="cta-section1">
        <p>
          Make the smart choice for clean water. Explore Fluidix plans today and
          enjoy hassle-free installation. All in one simple subscription.
        </p>
        <button className="cta-btn1" onClick={handleViewPlans}>
          View Plans
        </button>
      </div>
    </section>
  );
}
