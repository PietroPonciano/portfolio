import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatIDo from './components/WhatIDo';
import HowIBuild from './components/HowIBuild';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <WhatIDo />
      <HowIBuild />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}