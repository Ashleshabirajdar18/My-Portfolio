import React from 'react';
import { projectsData } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="w-full mx-0 px-0 py-20  bg-purple-300/20">
      
     
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          Projects
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-slate-500 text-sm font-medium pt-2">
          Featured work & creations
        </p>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`group relative bg-white/70 backdrop-blur-md border ${
              project.hasTopBorder ? 'border-t-4 border-t-purple-600 border-x-white border-b-white' : 'border-white'
            } p-8 rounded-[28px] shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 hover:border-purple-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  {project.iconType === 'layout' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                </div>
                
                {project.isFeatured && (
                  <span className="bg-purple-100/80 text-purple-700 text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full uppercase border border-purple-200/50">
                    Featured
                  </span>
                )}
              </div>

              
              <div className="space-y-4">
                {project.title && (
                  <h3 className={`text-xl font-extrabold tracking-wide transition-colors duration-300 ${
                    project.hasTopBorder ? 'text-purple-600' : 'text-slate-800 group-hover:text-purple-600'
                  }`}>
                    {project.title}
                  </h3>
                )}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              
              <div className="flex flex-wrap gap-2 pt-6 mb-8">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100/40 border border-purple-200/30 text-purple-900/80 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm group-hover:bg-purple-100 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

           
            <div className="pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black tracking-wide text-purple-500 hover:text-purple-700 transition-colors duration-200"
              >
                <span>View on GitHub</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}