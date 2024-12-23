
import '@fontsource/source-sans-pro'; 
import Footer from './components/Footer'
import Team from './components/Team'
import Moneyplant from './components/Moneyplant';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LogoSection from './components/LogoSection';
import VisionMissionSection from './components/VissionMission';
import './index.css'
import './App.css'


function App() {
  

  return (  
    <div className="container">
        <Navbar />
      <Header />
      <LogoSection />
      <VisionMissionSection />
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
