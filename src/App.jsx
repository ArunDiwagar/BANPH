import { useState } from 'react'
import '@fontsource/source-sans-pro'; // Defaults to regular 400 weight


import './App.css'
import Footer from './components/Footer'
import Team from './components/Team'
import Moneyplant from './components/Moneyplant';


function App() {
  

  return (
    <>
      <Moneyplant/>
      <Team/>
      <Footer/>
        
    </>
  )
}

export default App
