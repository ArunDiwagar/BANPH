import { useState } from 'react'
import '@fontsource/source-sans-pro'; // Defaults to regular 400 weight


import './App.css'
import Footer from './components/Footer'
import Team from './components/Team'
import Moneyplant from './components/Moneyplant';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';

function App() {
  

  return (  
    <div className="container">
      <HeroSection />
      <AboutSection />
      <VolunteerSection />
      <Moneyplant/>
      <Team/>
      <Footer/>
    
    </div>
  )
}

export default App
