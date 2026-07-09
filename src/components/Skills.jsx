import React from 'react';
import { skillCategories, toolsAndIDEs } from '../data';

export default function Skills() {
  return (
    
    <section id="skills" className="w-full mx-0 px-0 py-20  bg-purple-300/20">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          Skills
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-slate-500 text-sm font-medium pt-2">
          Technical toolkit & expertise
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              className="relative bg-white/70 backdrop-blur-md border border-white p-8 rounded-[28px] shadow-xl overflow-hidden flex flex-col justify-between"
            >
              
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100/40 rounded-bl-[40px] -z-10" />

              <div>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm">
                    <cat.icon /> 
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                        <span>{skill.name}</span>
                        <span className="text-purple-400 text-[10px]">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 bg-purple-100/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. FOOTER PROFILE HORIZONTAL TRACK BAR: TOOLS & IDES */}
        <div className="w-full bg-white/60 backdrop-blur-md border border-white p-6 rounded-2xl shadow-lg flex flex-wrap items-center gap-4 md:gap-6">
          
          {/* Header Tag Prefix */}
          <div className="flex items-center gap-2.5 mr-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-extrabold text-slate-800 tracking-wide">
              Tools & IDEs
            </h4>
          </div>

          {/* Inline Badges Group */}
          <div className="flex flex-wrap gap-2">
            {toolsAndIDEs.map((tool, tIdx) => (
              <span 
                key={tIdx} 
                className="bg-purple-100/50 border border-purple-200/40 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}