import React from 'react';

export default function Footer() {
  return (
    
    
    <footer className="w-full mx-0 px-0 pt-16 pb-8 bg-purple-300/20">
        <div className="w-full mx-auto  ">
        <div className="w-full h-[1px] bg-slate-500" />
      </div>
        
      
      <div className="max-w-7xl mx-auto px-6 pt-16 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 pb-8">
        
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm font-black text-sm tracking-wider">
            AB
          </div>
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-800 leading-tight">
              Ashlesha Birajdar
            </h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Java Full Stack Developer
            </p>
          </div>
        </div>


        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-purple-600 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-purple-600 transition-colors duration-200">About</a>
          <a href="#education" className="hover:text-purple-600 transition-colors duration-200">Education</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors duration-200">Projects</a>
        </nav>

        
        <div className="flex items-center gap-3">
          <a 
            href="mailto:birajdarashlesha422@gmail.com" 
            className="w-10 h-10 rounded-xl bg-white/80 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-300 shadow-sm transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a 
            href="https://github.com/Ashleshabirajdar18" 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-xl bg-white/80 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-300 shadow-sm transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full h-[1px] bg-slate-500" />
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center pt-6">
        <p className="text-xs font-medium text-slate-400 tracking-wide">
          &copy; 2026 Ashlesha Birajdar. All rights reserved.
        </p>
      </div>

    </footer>
  );
}