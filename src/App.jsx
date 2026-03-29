import React from 'react';
import NavBar from './components/Navbar';
import HeroSection from './components/Herosection';
import PillarSection from './components/Pillarsection';
import VisionSection from './components/Visionsection';
import OpinionSection from './components/Opinionsection';
import NewsSection from './components/Newssection';
import DonateSection from './components/Donate';
import NewsLetter from './components/Newsletter';
import FooterSection from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PillarSection />
      <VisionSection />
      <OpinionSection />
      <NewsSection />
      <DonateSection />
      <NewsLetter />
      <FooterSection />
    </div>
  );
}

export default App;
