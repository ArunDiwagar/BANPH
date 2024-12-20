import React from 'react';
import '../styles/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src="src/assets/img1.png"
        alt="Mentor and Student"
      />
      <div className="mt-4">
        <h1>Ready to Launch your Tech Career?</h1>
        <p>
          Turn ideas into reality with our Full Stack Web Development program—
          designed to take you from beginner to pro, regardless of your background.
          Join a vibrant community, build real-world projects, and learn cutting-edge
          tech like JavaScript, React, and Node.js. Ready to launch your high-paying
          software career? Click Enroll Now to start today!
        </p>
        <button>Enroll Now →</button>
      </div>
    </section>
  );
};

export default HeroSection;
