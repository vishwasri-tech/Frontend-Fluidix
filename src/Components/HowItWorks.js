import React from 'react';
import './HowItWorks.css'; // For styling

import shareIcon from '../assets/share.png';
import consultIcon from '../assets/consult.png';
import designIcon from '../assets/design.png';
import serviceIcon from '../assets/install.png';

const steps = [
  { icon: shareIcon, title: 'Share Requirements' },
  { icon: consultIcon, title: 'Expert Consultation' },
  { icon: designIcon, title: 'Custom Design' },
  { icon: serviceIcon, title: 'Installation & Service' },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title3">How It Works</h2>

      <div className="steps-container3">
        {steps.map((step, index) => (
          <div className="step-group3" key={index}>
            <div className="step">
              <img src={step.icon} alt={step.title} className="step-icon" />
              <p className="step-title3">{step.title}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="arrow3" aria-hidden="true">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
