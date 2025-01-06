import React from 'react';
import '../styles/VolunteerSection.css';
import img2 from "../assets/img2.png"

const VolunteerSection = () => {
  return (
    <section className="volunteer-section">
      <img
        src={img2}
        alt="Volunteer Illustration"
      />
      <div className="mt-4">
        <h2>Help Us Create Impact - Volunteer Your Time and Talents!</h2>
        <p>
          Help us mentor the next generation of tech leaders! Whether you're a tech
          professional or someone who's passionate about education, we welcome
          volunteers to support our mission.
        </p>
        <button>Volunteer Now →</button>
      </div>
    </section>
  );
};

export default VolunteerSection;
