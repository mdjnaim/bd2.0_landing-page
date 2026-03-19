import React from 'react';
import NavBar from './components/navbar';
import HeroSection from './components/herosection';
import PillarSection from './components/pillarsection';
import VisionSection from './components/visionsection';
import OpinionSection from './components/opinionsection';
import NewsSection from './components/newssection';
import DonateSection from './components/donate';
import NewsLetter from './components/newsletter';
import FooterSection from './components/footer';

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
