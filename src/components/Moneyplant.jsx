import React from 'react';
import "../styles/Moneyplant.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Moneyplant = () => {
  return (
    <div className="container">
      {/* Testimonial Section */}
      <div className="testimonial">
        <div className="testimonial-header">
          <h4 className="testimonial-title">Students say about us</h4>
          <div className="testimonial-navigation">
            <button className="navigation-button"><FaArrowLeft /></button>
            <button className="navigation-button"><FaArrowRight /></button>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <img
              src="src/assets/images/manspec.png"
              alt="Profile"
              className="testimonial-image"
            />
            <div>
              <p className="testimonial-name">Raj Patel</p>
              <p className="testimonial-role">Program Graduate</p>
            </div>
          </div>
          <p className="testimonial-text">
            BANPH Tech gave me the tools and confidence to break into the tech
            industry. Today, I’m working as a full-stack developer with a
            salary I never thought possible.
          </p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="donation">
        <img
          src="src/assets/images/money.jpg"
          alt="Donation"
          className="donation-image"
        />
        <h3 className="donation-title">Empower Lives - Your Donation Matters</h3>
        <p className="donation-text">
          Support BANPH Tech! Your donation funds scholarships, tech access, and
          mentorship. Just $50 sponsors a month of training for one student.
        </p>
        <button className="donate-button">
  Donate Now
  
</button>

      </div>
    </div>
  );
};

export default Moneyplant;
