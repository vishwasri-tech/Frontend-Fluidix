import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import "./DynamicWaterProduct.css";

// images - replace with your paths
import img50 from "../assets/50lph.png";
import img100 from "../assets/50lph.png";
import img250 from "../assets/250lph.png";
import img500 from "../assets/500lph.png";
import img1000 from "../assets/1000lph.png";
import img2000 from "../assets/2000lph.png";

export default function DynamicWaterProduct() {
  const navigate = useNavigate(); // ✅ initialize navigation

  const flowOptions = ["50 LPH", "100 LPH", "250 LPH", "500 LPH", "1000 LPH", "2000 LPH"];

  const productData = {
    "50 LPH": { img: img50, start: 2000, plans: { "24": { months: 24, price: 1800, save: 2400 }, "12": { months: 12, price: 2000, save: 1200 } } },
    "100 LPH": { img: img100, start: 3500, plans: { "24": { months: 24, price: 3150, save: 2400 }, "12": { months: 12, price: 3500, save: 1200 } } },
    "250 LPH": { img: img250, start: 8400, plans: { "24": { months: 24, price: 7560, save: 2400 }, "12": { months: 12, price: 8400, save: 1200 } } },
    "500 LPH": { img: img500, start: 10000, plans: { "24": { months: 24, price: 9000, save: 2400 }, "12": { months: 12, price: 10000, save: 1200 } } },
    "1000 LPH": { img: img1000, start: 15000, plans: { "24": { months: 24, price: 13500, save: 2400 }, "12": { months: 12, price: 15000, save: 1200 } } },
    "2000 LPH": { img: img2000, start: 22000, plans: { "24": { months: 24, price: 19800, save: 2400 }, "12": { months: 12, price: 22000, save: 1200 } } },
  };

  const [selectedFlow, setSelectedFlow] = useState("50 LPH");
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
            className={`dwp-tab ${selectedFlow === opt ? "dwp-tab--active" : ""}`}
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
        {/* Left: Image */}
        <div className="dwp-left">
          <div className="dwp-image-area">
            <img src={current.img} alt={selectedFlow + " plant"} className="dwp-image" />
            <div className="dwp-floor" />
          </div>
        </div>

        {/* Right: Plan Details */}
        <div className="dwp-right">
          <div className="dwp-card">
            <div className="dwp-card-topbar">
              <div className="dwp-card-top-left">
                <h3 className="dwp-title">{selectedFlow} Water Treatment Plant</h3>
              </div>
              <div className="dwp-card-top-right">
                <div className="dwp-starting">Starting From</div>
                <div className="dwp-start-price">
                  ₹{fmt(current.start)} <span className="dwp-start-unit">/ Month</span>
                </div>
              </div>
            </div>

            <div className="dwp-card-body">
              <h4 className="dwp-choose">Choose Plan Duration</h4>

              <div className="dwp-plans">
                {/* 24 Months */}
                <button
                  className={`dwp-plan ${selectedPeriod === "24" ? "dwp-plan--selected" : ""}`}
                  onClick={() => setSelectedPeriod("24")}
                >
                  <div className="dwp-plan-months">24 Months</div>
                  <div className="dwp-plan-price">
                    ₹{fmt(current.plans["24"].price)} <span className="dwp-per">/ Month</span>
                  </div>
                  <div className="dwp-plan-save">Save ₹{fmt(current.plans["24"].save)}</div>
                </button>

                {/* 12 Months */}
                <button
                  className={`dwp-plan ${selectedPeriod === "12" ? "dwp-plan--selected" : ""}`}
                  onClick={() => setSelectedPeriod("12")}
                >
                  <div className="dwp-plan-months">12 Months</div>
                  <div className="dwp-plan-price">
                    ₹{fmt(current.plans["12"].price)} <span className="dwp-per">/ Month</span>
                  </div>
                  <div className="dwp-plan-save">Save ₹{fmt(current.plans["12"].save)}</div>
                </button>
              </div>

              {/* Total and CTA */}
              <div className="dwp-sub-row">
                <div className="dwp-prices">
                  <div className="dwp-old">₹{fmt(oldTotalForPlan)}</div>
                  <div className="dwp-total">₹{fmt(totalForPlan)}</div>
                </div>
                {/* ✅ Navigate to Enquire Page */}
                <button className="dwp-cta" onClick={() => navigate("/enquire")}>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="dwp-benefits">
        <h2>Product Benefits</h2>
        <p>
          The {selectedFlow} commercial RO plant is a compact and efficient solution for small-scale water needs. Designed for shops, clinics,
          and start-ups, it delivers safe and pure water round the clock. With IoT monitoring and complete service support included, you enjoy
          reliable water supply—without the burden of heavy investment.
        </p>
        <p className="dwp-bestfor"><strong>Best For:</strong> Small shops, clinics, homes, start-ups</p>
      </div>
    </div>
  );
}
