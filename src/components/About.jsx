import React from 'react';
import { aboutSkills, softSkills } from '../data';

export default function About() {

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full mx-0 px-0 py-20 bg-purple-300/20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          About Me
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-slate-500 text-sm font-medium pt-2">
          Get to know the developer behind the code
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          <div className="absolute w-[320px] h-[440px] bg-purple-400 rounded-[32px] -rotate-3 z-0 opacity-80" />

          <div className="relative w-[320px] h-[440px] bg-gradient-to-b from-purple-50 to-white p-6 rounded-[32px] border border-white shadow-xl flex flex-col justify-between items-center z-10 text-center">
            
            <div className="w-28 h-28 rounded-full bg-purple-600 border-4 border-white shadow-inner flex items-center justify-center mt-8">
              <span className="text-3xl font-black text-white tracking-wider">AB</span>
            </div>

            <div className="my-auto">
              <h3 className="text-2xl font-bold text-slate-800">Ashlesha Birajdar</h3>
              <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mt-1">Java Developer</p>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full border-t border-purple-100/50 pt-4 pb-2">
              <div className="text-center">
                <span className="block text-sm font-bold text-purple-700">8.15</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">CGPA</span>
              </div>
              <div className="text-center border-x border-purple-100/50">
                <span className="block text-sm font-bold text-purple-700">5+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-sm font-bold text-purple-700">2026</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Grad</span>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md hover:text-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="mailto:birajdarashlesha422@gmail.com" className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md hover:text-purple-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-3xl font-bold text-slate-800">
            Hello, I am <span className="text-purple-600">Ashlesha</span>
          </h3>

          <div className="text-slate-600 space-y-4 leading-relaxed font-medium">
            <p>
              I am an <span className="text-slate-800 font-bold">IT Engineering</span> student passionate about <span className="text-slate-800 font-bold">Java Full Stack Development</span>. I enjoy turning ideas into reliable, end-to-end software — from designing relational schemas and REST APIs to crafting clean, responsive React interfaces.
            </p>
            <p>
              I am always eager to learn new technologies and improve my skills to deliver high-quality software solutions.
            </p>
          </div>

          
          <div className="flex flex-wrap gap-2 pt-2">
            {softSkills.map((skill) => (
              <span key={skill} className="bg-purple-100/60 text-purple-700 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>

          
          <div className="space-y-4 pt-4">
            {aboutSkills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                  <span>{skill.name}</span>
                  <span className="text-purple-600 text-xs">{skill.percentage}</span>
                </div>
                <div className="w-full h-2.5 bg-purple-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out shadow-inner"
                    style={{ width: skill.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex flex-wrap items-center gap-4 pt-6">
            
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-transparent hover:text-purple-600 text-white font-medium px-6 py-3.5 rounded-full shadow-md transition-all duration-300"> 
            
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              HIRE ME
            </a>
            
            
            <a 
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="bg-white border border-slate-200 text-slate-700 font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              VIEW PROJECTS &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}