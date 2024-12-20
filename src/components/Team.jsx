import React from 'react';
import "../styles/Team.css";
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <p>Meet the BANPH Tech team: 50+ years of expertise driving opportunities in tech and education.</p>
      <div className="team-members">
        <div className="team-member">
          <div className="member-image-container">
            <img src={team1} alt="John Doe" className="member-image" />
            <div className="member-info">
              <h3>John Doe</h3>
              <p className='teamname'>Founder & CEO</p>
              <p className='teamnamedes'>Tech entrepreneur and community advocate.</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="member-image-container">
            <img src={team2} alt="Jane Smith" className="member-image" />
            <div className="member-info">
              <h3>Jane Smith</h3>
              <p className='teamname'>Program Director</p>
              <p className='teamnamedes'>Experienced in workforce development and job placement.</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="member-image-container">
            <img src={team3} alt="Michael Lee" className="member-image" />
            <div className="member-info">
              <h3>Michael Lee</h3>
              <p className='teamname'>Lead Instructor</p>
              <p className='teamnamedes'>Full-stack developer and tech education mentor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
