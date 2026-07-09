import React from 'react';

export default function Navbar() {
  return (
    // Added 'fixed top-0 left-0 right-0 z-50' to fix it to the top, and changed 'bg-transparent' to 'bg-white/80 backdrop-blur-md' for a clean blur effect.
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-purple-300/20 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto border-b border-gray-200 shadow-sm">
      
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-sm">
          AB
        </div>
        <span className="text-xl font-bold text-slate-800">Ashlesha</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
        <a href="#education" className="hover:text-purple-600 transition-colors">Education</a>
        <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
      </div>

      <a 
        href="#contact" 
        className="border-2 border-purple-400 text-purple-600 font-semibold px-5 py-2 rounded-xl text-sm hover:bg-purple-50 transition-all shadow-sm"
      >
        CONTACT ME
      </a>
    </nav>
  );
}