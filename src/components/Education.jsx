import React from 'react';

export default function Education() {
  return (
    
    <section id="education" className="w-full mx-0 px-0 py-20 bg-purple-300/20">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          Education
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-slate-500 text-sm font-medium pt-2">
          Academic background & achievements
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
        
        
        <div className="md:col-span-5 flex justify-center md:justify-end z-10">
          <div className="w-full max-w-[400px] bg-white/70 backdrop-blur-md border border-white p-8 rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-300">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-xs font-black tracking-widest text-purple-600 uppercase">
                Bachelor's Degree
              </span>
            </div>

            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                B.Tech in Information Technology
              </h3>
              <p className="text-slate-500 text-sm font-semibold">
                M S Bidve Engineering College, Latur
              </p>
            </div>

            
            <div className="flex flex-wrap gap-2.5 pt-6">
              <span className="bg-purple-100/70 border border-purple-200 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                CGPA: 8.15
              </span>
              <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Graduating 2026
              </span>
            </div>
          </div>
        </div>

        
        <div className="hidden md:flex md:col-span-1 justify-center relative h-full min-h-[180px]">
          <div className="w-0.5 bg-purple-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
          <div className="w-5 h-5 rounded-full bg-purple-500 border-[4px] border-[#f8f6ff] shadow-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10" />
        </div>

        
        <div className="md:col-span-5 flex justify-center md:justify-start z-10">
          <div className="relative w-72 h-72 rounded-full border border-purple-200/40 bg-gradient-to-tr from-purple-300/30 via-purple-100/10 to-transparent p-1 shadow-inner flex items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-gradient-to-b from-purple-300/40 to-purple-400/10 blur-xl opacity-60" />
            <div className="relative text-center space-y-1 z-10">
              <span className="block text-6xl font-black tracking-tighter text-purple-500">
                8.15
              </span>

              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                Current CGPA
              </span>
            </div>

            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-purple-100 px-3 py-1 rounded-full shadow-md">
              <span className="text-[10px] font-black tracking-wider text-slate-600 uppercase">
                B.Tech IT
              </span>
            </div>

            
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-purple-100 px-3 py-1 rounded-full shadow-md">
              <span className="text-[10px] font-black tracking-wider text-slate-600 uppercase">
                2026 Batch
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}