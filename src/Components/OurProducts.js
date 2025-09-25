import React from "react";
import { Link } from "react-router-dom";
import "./OurProducts.css";
import plan50 from "../assets/plan50.png";
import plan100 from "../assets/plan100.png";
import plan250 from "../assets/plan250.png";
import plan500 from "../assets/plan500.png";
import plan1000 from "../assets/plan1000.png";
import plan2000 from "../assets/plan2000.png";

export default function OurProducts() {
  const productsData = [
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
      route: "/product50",
    },
    {
      id: 2,
      title: "100 LPH Water Treatment Plant",
      img: plan100,
      features: [
        "100LTRS Output Water Per Hour",
        "RO membrane",
        "Raw Water Pump 0.5hp",
        "Sediment & Carbon Filter",
        "UV Filter",
        "Anti-scalent Dosing Pump-1",
      ],
      price: "₹3,500*/Month",
      route: "/product100",
    },
    {
      id: 3,
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
      route: "/product250",
    },
    {
      id: 4,
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
      route: "/product500",
    },
    {
      id: 5,
      title: "1000 LPH Water Treatment Plant",
      img: plan1000,
      features: [
        "1000LTRS Output Water Per Hour",
        "RO membrane",
        "High Pressure Pump",
        "Multi-layer Sand Filter",
        "UV Sterilizer",
        "Automatic Control Panel",
      ],
      price: "₹15,000*/Month",
      route: "/product1000",
    },
    {
      id: 6,
      title: "2000 LPH Water Treatment Plant",
      img: plan2000,
      features: [
        "2000LTRS Output Water Per Hour",
        "RO membrane",
        "High Pressure Pump",
        "Sand & Carbon Filter",
        "Dosing System",
        "UV Disinfection",
      ],
      price: "₹25,000*/Month",
      route: "/product2000",
    },
  ];

  return (
    <section className="ourproducts-section">
      <h2 className="ourproducts-title">Our Products</h2>

      <div className="ourproducts-container">
        {productsData.map((product) => (
          <div key={product.id} className={`product-card product-card-${product.id}`}>
            <img
              src={product.img}
              alt={product.title}
              className={`product-img product-img-${product.id}`}
            />

            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <p className="product-price">Starts at {product.price}</p>
              <Link to={product.route}>
                <button className="product-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
