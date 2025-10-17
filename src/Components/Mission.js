import React from "react";
import "./Mission.css";

export default function AboutSection() {
  return (
    <section className="about-wrapper">
      {/* Who We Are Section */}
      <div className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Fluidix is a water purifier rental service designed to make safe,
          clean water affordable and hassle-free. With flexible yearly plans and
          certified technicians, we take care of everything from installation to
          regular servicing. Our subscriptions include free filter replacements
          and dedicated support, ensuring uninterrupted access to pure water.
          With transparent pricing and zero hidden costs, Fluidix makes water
          purification simple and reliable.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to organize the unorganized commercial RO sector by
            combining manufacturing expertise, technology, and service
            excellence making safe water reliable, affordable, and scalable. We
            aim to bring transparency into the industry with clear pricing and
            dependable service. By setting new benchmarks in quality and trust,
            Fluidix strives to make pure water accessible for businesses and
            communities everywhere.
          </p>
        </div>
        <div className="mission-image"></div>
      </div>
    </section>
  );
}
