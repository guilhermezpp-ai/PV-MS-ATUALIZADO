import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import TheVillain from './components/TheVillain';
import Solution from './components/Solution';
import Method from './components/Method';
import SocialProof from './components/SocialProof';
import TargetAudience from './components/TargetAudience';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Guarantee from './components/Guarantee';
import Offer from './components/Offer';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">
      <Hero />
      <PainPoints />
      <TheVillain />
      <Solution />
      <Method />
      <SocialProof />
      <TargetAudience />
      <Modules />
      <Bonuses />
      <Guarantee />
      <Offer />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
};

export default App;