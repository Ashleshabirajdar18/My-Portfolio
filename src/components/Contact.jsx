import React from 'react';

export default function Contact() {
  return (
    
    <section id="contact" className="w-full mx-0 px-0 py-20  bg-purple-300/20">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12 space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          Contact
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-slate-500 text-sm font-medium pt-2">
          Let's build something amazing
        </p>
      </div>

     
      <div className="max-w-4xl mx-auto px-6 md:px-12 ">
        <div className="w-full  bg-purple-300/20 backdrop-blur-md border border-white/80 rounded-[36px] shadow-xl p-8 md:p-14 flex flex-col items-center text-center space-y-8">
          
         
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            I am actively seeking <span className="text-slate-900 font-extrabold">entry-level Software Developer roles</span>, internships, and collaboration opportunities. Let's connect!
          </p>

          
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            
            <a 
              href="mailto:birajdarashlesha422@gmail.com"
              className="group bg-white/40 border border-purple-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col items-center space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">Email</span>
                <span className="block text-xs font-bold text-slate-700 break-all group-hover:text-purple-600 transition-colors duration-300">
                  birajdarashlesha422@gmail.com
                </span>
              </div>
            </a>

            
            <a 
              href="https://github.com/Ashleshabirajdar18" 
              target="_blank" 
              rel="noreferrer"
              className="group bg-white/40 border border-purple-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col items-center space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">GitHub</span>
                <span className="block text-xs font-bold text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
                  @Ashleshabirajdar18
                </span>
              </div>
            </a>

          </div>

         
          <div className="pt-4">
            <a 
              href="mailto:birajdarashlesha422@gmail.com"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Say Hello</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}