import React from 'react';
import ashlesha from "../assets/ashlesha.jpeg";

export default function Hero() {
  
  const resumeLink = "https://drive.google.com/file/d/1LlZKaTKFy5w_oSaKwFWieZUU5T8sxSwD/view?usp=drivesdk";

  
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
     
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-block bg-purple-100/70 border border-purple-200 text-purple-700 font-semibold text-xs tracking-wider px-4 py-1.5 rounded-full uppercase">
          • Hello, I'm Ashlesha
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-slate-800 tracking-tight leading-none">
          Java Full Stack <br />
          <span className="text-purple-600">Developer</span>
        </h1>
        
        <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
          B.Tech IT Student & Aspiring Software Engineer dedicated to building robust and scalable web applications.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-2">
          
          <a 
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 border border-purple-600 hover:bg-transparent hover:text-purple-600 text-white font-medium px-6 py-3.5 rounded-full shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          
          
          <a 
            href="#projects"
            onClick={handleScrollToProjects}
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:bg-slate-50 transition-all shadow-sm cursor-pointer"
          >
            VIEW WORK &rarr;
          </a>
        </div>

        <div className="flex items-center gap-3 pt-6 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Stack</span>
          {["Java", "React", "SQL"].map((tech) => (
            <span key={tech} className="bg-white border border-slate-200 text-slate-700 px-4 py-1 rounded-full text-xs font-medium shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      
      <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div className="absolute w-[400px] h-[520px] bg-purple-600 rounded-[36px] translate-x-5 translate-y-5 right-0 lg:right-4 z-0 opacity-90 shadow-2xl transition-all hidden sm:block" />

        <div className="relative w-full max-w-[400px] sm:w-[400px] h-[520px] bg-gradient-to-tr from-purple-100 via-white to-purple-50 p-8 rounded-[36px] border border-white/70 shadow-xl flex flex-col justify-between z-10 right-0 lg:right-4">
          
          <div className="flex justify-between items-center">
            <span className="bg-emerald-100 text-emerald-700 font-bold text-xs tracking-wider px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE
            </span>
            <span className="text-sm font-semibold text-slate-400">#2026</span>
          </div>

          <div className="flex flex-col items-center text-center my-auto">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200 mb-5">
              <img 
                src={ashlesha}
                alt="Ashlesha Birajdar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800">Ashlesha Birajdar</h2>
            <p className="text-sm font-bold tracking-widest text-purple-600 uppercase mt-2">Full Stack Developer</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/70 backdrop-blur-sm border border-purple-100 p-3.5 rounded-2xl text-center shadow-sm">
              <span className="block text-base font-black text-purple-700">8.15</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">CGPA</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-purple-100 p-3.5 rounded-2xl text-center shadow-sm">
              <span className="block text-base font-black text-purple-700">5+</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Projects</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-purple-100 p-3.5 rounded-2xl text-center shadow-sm">
              <span className="block text-base font-black text-purple-700">B.Tech</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">IT</span>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md border border-purple-100 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]">
            <div className="w-10 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-mono font-bold text-sm shadow-sm">
              &lt;/&gt;
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Building</span>
              <span className="text-sm font-extrabold text-slate-800 leading-tight block">Full Stack Apps</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}