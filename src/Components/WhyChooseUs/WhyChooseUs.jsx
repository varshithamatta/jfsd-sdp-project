import React from 'react'
import './WhyChooseUs.css'
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h2>Why Choose Us</h2>
      <p>Elevate Your E-Commerce Payment Experience</p>
      <div className="card-container">
        <div className="card">
          <div className="icon">🔍</div>
          <h3>Security</h3>
          <p>We prioritize the safety of your customers’ data, adhering to the latest industry standards.</p>
        </div>
        <div className="card">
          <div className="icon">✅</div>
          <h3>Scalability</h3>
          <p>Our payment solutions ensure data security to industry standards.</p>
        </div>
        <div className="card">
          <div className="icon">⏰</div>
          <h3>24/7 Support</h3>
          <p>Our dedicated support team is available around the clock to assist you with any issues.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
