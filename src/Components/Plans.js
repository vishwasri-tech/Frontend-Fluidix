import React from "react";
import { Link } from "react-router-dom";
import "./Plans.css";
import plan50 from "../assets/plan50.png";
import plan250 from "../assets/plan250.png";
import plan500 from "../assets/plan500.png";

export default function Plans() {
  const plansData = [
    {
      id: 1,
      title: "50 LPH Water Treatment Plant",
      img: plan50,
      features: [
        "50LTRS Output Water Per Hour",
        "RO membrane",
        "Raw Water Pump 0.5hp",
        "Sediment & Carbon Filter",
        "CPVC/UPVC Pipeline",
        "5 micron Filter",
      ],
      price: "₹2,000*/Month",
      route: "/product50",   // ✅ Added route
    },
    {
      id: 2,
      title: "250 LPH Water Treatment Plant",
      img: plan250,
      features: [
        "250LTRS Output Water Per Hour",
        "RO membrane",
        "Raw Water Pump 0.5hp",
        "Sand & Carbon Filter",
        "UV Filter",
        "Anti-scalent Dosing Pump-1",
      ],
      price: "₹5,000*/Month",
      route: "/product250",   // ✅ Added route
    },
    {
      id: 3,
      title: "500 LPH Water Treatment Plant",
      img: plan500,
      features: [
        "500LTRS Output Water Per Hour",
        "RO membrane",
        "Raw Water Pump 0.5hp",
        "Sand & Carbon Filter",
        "UV Filter",
        "Anti-scalent Dosing Pump-1",
      ],
      price: "₹10,000*/Month",
      route: "/product500",   // ✅ Added route
    },
  ];

  return (
    <section className="plans-section">
      <h2 className="plans-title">Top Picks From Fluidix</h2>
      <p className="plans-subtitle">
        Smart RO Machines With Hassle-Free Yearly Subscriptions.
      </p>

      <div className="plans-container">
        {plansData.map((plan) => (
          <div key={plan.id} className={`plan-card plan-card-${plan.id}`}>
            {/* Full-width top image */}
            <img
              src={plan.img}
              alt={plan.title}
              className={`plan-img plan-img-${plan.id}`}
            />

            {/* Content wrapper */}
            <div className="plan-content">
              <h3 className="plan-title">{plan.title}</h3>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <p className="plan-price">Starts at {plan.price}</p>

              {/* ✅ Added navigation */}
              <Link to={plan.route}>
                <button className="plan-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
