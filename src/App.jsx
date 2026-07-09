import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Import your new Footer file

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f6ff] text-slate-900 antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> 
      </main>
    </div>
  );
}