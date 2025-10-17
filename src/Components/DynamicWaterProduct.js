// src/components/DynamicWaterProduct.js

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DynamicWaterProduct.css";

// Import all images
import img50 from "../assets/50lph.png";
import img100 from "../assets/50lph.png"; // update path if needed
import img250 from "../assets/250lph.png";
import img500 from "../assets/500lph.png";
import img1000 from "../assets/1000lph.png";
import img2000 from "../assets/2000lph.png";

export default function DynamicWaterProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  // Available product flows
  const flowOptions = [
    "50 LPH",
    "100 LPH",
    "250 LPH",
    "500 LPH",
    "1000 LPH",
    "2000 LPH",
  ];

  // Product data with benefits and best for info
  const productData = {
    "50 LPH": {
      img: img50,
      start: 2000,
      benefits:
        "The 50 LPH commercial RO plant is a compact and efficient solution for small-scale water needs. Designed for shops, clinics, and start-ups, it delivers safe and pure water round the clock. With IoT monitoring and complete service support included, you enjoy reliable water supply—without the burden of heavy investment.",
      bestFor: "Small shops, clinics, homes, start-ups",
      plans: {
        24: { months: 24, price: 1800, save: 2400 },
        12: { months: 12, price: 2000, save: 1200 },
      },
    },
    "100 LPH": {
      img: img100,
      start: 3500,
      benefits:
        "The 100 LPH plant is ideal for cafés, small schools, and offices that require consistent water quality. Built with robust technology and backed by our subscription model, it ensures zero CAPEX, hassle-free service, and transparent usage monitoring. A smart choice for growing businesses looking for reliable water every day.",
      bestFor: "Cafés, offices, small schools, boutique businesses",
      plans: {
        24: { months: 24, price: 3150, save: 2400 },
        12: { months: 12, price: 3500, save: 1200 },
      },
    },
    "250 LPH": {
      img: img250,
      start: 8400,
      benefits:
        "Perfect for restaurants, hostels, and small factories, the 250 LPH plant delivers a steady supply of pure water for medium-sized operations. With IoT-enabled performance tracking and all-inclusive service, downtime and maintenance worries are completely eliminated. Get reliable water on demand without heavy upfront investment.",
      bestFor: "Restaurants, mid-size schools, small factories",
      plans: {
        24: { months: 24, price: 7560, save: 2400 },
        12: { months: 12, price: 8400, save: 1200 },
      },
    },
    "500 LPH": {
      img: img500,
      start: 10000,
      benefits:
        "The 500 LPH commercial RO plant is built for high-demand environments like hotels, colleges, and community facilities. Combining powerful capacity with Fluidix’s subscription model, it guarantees uninterrupted water flow, preventive maintenance, and breakdown support.",
      bestFor: "Hotels, colleges, manufacturing units, community use",
      plans: {
        24: { months: 24, price: 9000, save: 2400 },
        12: { months: 12, price: 10000, save: 1200 },
      },
    },
    "1000 LPH": {
      img: img1000,
      start: 15000,
      benefits:
        "The 1000 LPH water treatment plant is designed for large hotels, residential complexes, and industrial setups. Equipped with 6 stages of purification and IoT-enabled real-time monitoring, it ensures uninterrupted supply of safe, pure water with complete operational efficiency. At ₹15,000/month, it’s a cost-effective, worry-free solution for high-demand environments.",
      bestFor: "Large hotels, residential complexes, industrial setups",
      plans: {
        24: { months: 24, price: 13500, save: 2400 },
        12: { months: 12, price: 15000, save: 1200 },
      },
    },
    "2000 LPH": {
      img: img2000,
      start: 22000,
      benefits:
        "The 2000 LPH water treatment plant is designed for large factories, institutions, and commercial complexes where high-volume, continuous purified water is essential. With full operation & maintenance, consumables replacement, and IoT-enabled smart monitoring, it delivers reliable performance without the need for capital investment.",
      bestFor: "Large factories, institutions, commercial complexes",
      plans: {
        24: { months: 24, price: 19800, save: 2400 },
        12: { months: 12, price: 22000, save: 1200 },
      },
    },
  };

  // Pre-select product if navigated from a product page
  const initialFlow = location.state?.flow || "50 LPH";
  const [selectedFlow, setSelectedFlow] = useState(initialFlow);
  const [selectedPeriod, setSelectedPeriod] = useState("24");

  const current = productData[selectedFlow];
  const selectedPlan = current.plans[selectedPeriod];
  const oldTotalForPlan = selectedPlan.price * selectedPlan.months;
  const totalForPlan = oldTotalForPlan - selectedPlan.save;
  const fmt = (n) => (typeof n === "number" ? n.toLocaleString("en-IN") : n);

  return (
    <div className="dwp-root">
      {/* Flow Tabs */}
      <div className="dwp-tabs">
        {flowOptions.map((opt) => (
          <button
            key={opt}
            className={`dwp-tab ${
              selectedFlow === opt ? "dwp-tab--active" : ""
            }`}
            onClick={() => {
              setSelectedFlow(opt);
              setSelectedPeriod("24");
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Product Card */}
      <div className="dwp-main">
        <div className="dwp-left">
          <div className="dwp-image-area">
            <img
              src={current.img}
              alt={selectedFlow + " plant"}
              className="dwp-image"
            />
            <div className="dwp-floor" />
          </div>
        </div>

        <div className="dwp-right">
          <div className="dwp-card">
            <div className="dwp-card-topbar">
              <div className="dwp-card-top-left">
                <h3 className="dwp-title">
                  {selectedFlow} Water Treatment Plant
                </h3>
              </div>
              <div className="dwp-card-top-right">
                <div className="dwp-starting">Starting From</div>
                <div className="dwp-start-price">
                  ₹{fmt(current.start)}{" "}
                  <span className="dwp-start-unit">/ Month</span>
                </div>
              </div>
            </div>

            <div className="dwp-card-body">
              <h4 className="dwp-choose">Choose Plan Duration</h4>
              <div className="dwp-plans">
                <button
                  className={`dwp-plan ${
                    selectedPeriod === "24" ? "dwp-plan--selected" : ""
                  }`}
                  onClick={() => setSelectedPeriod("24")}
                >
                  <div className="dwp-plan-months">24 Months</div>
                  <div className="dwp-plan-price">
                    ₹{fmt(current.plans["24"].price)}{" "}
                    <span className="dwp-per">/ Month</span>
                  </div>
                  <div className="dwp-plan-save">
                    Save ₹{fmt(current.plans["24"].save)}
                  </div>
                </button>

                <button
                  className={`dwp-plan ${
                    selectedPeriod === "12" ? "dwp-plan--selected" : ""
                  }`}
                  onClick={() => setSelectedPeriod("12")}
                >
                  <div className="dwp-plan-months">12 Months</div>
                  <div className="dwp-plan-price">
                    ₹{fmt(current.plans["12"].price)}{" "}
                    <span className="dwp-per">/ Month</span>
                  </div>
                  <div className="dwp-plan-save">
                    Save ₹{fmt(current.plans["12"].save)}
                  </div>
                </button>
              </div>

              <div className="dwp-sub-row">
                <button
                  className="dwp-cta"
                  onClick={() => navigate("/enquire")}
                >
                  <div className="dwp-prices">
                    <div className="dwp-old">₹{fmt(oldTotalForPlan)}</div>
                    <div className="dwp-total">₹{fmt(totalForPlan)}</div>
                  </div>
                  <span className="dwp-cta-text">Subscribe Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Benefits */}
      <div className="dwp-benefits">
        <h2>Product Benefits</h2>
        <p>{current.benefits}</p>
        <p className="dwp-bestfor">
          <strong>Best For:</strong> {current.bestFor}
        </p>
      </div>
    </div>
  );
}
