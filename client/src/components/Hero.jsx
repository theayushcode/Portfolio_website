import React from 'react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
            WELCOME TO MY PORTFOLIO
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
            Hey, I'm Ayush :)
          </h1>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cyan-400 mb-6">
            Transforming Ideas into Code
          </h2>
          <p className="text-xl font-medium text-zinc-300 mb-3">
            Frontend Developer
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-8">
            I transform ideas into refined digital products, blending innovative thinking with user-centric design to deliver seamless and functional experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/Ayush_Narayan_CV.pdf" 
              download 
              className="flex items-center gap-2 border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 px-6 py-3 rounded-xl font-semibold text-sm transition"
            >
              Download CV <Download size={16} />
            </a>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/ayushnarayan-dev/" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-cyan-400 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76M7.85 18.5V10.1H5.06v8.4h2.79z"/></svg>
              </a>
              <a href="https://github.com/theayushcode" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-cyan-400 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Profile Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-cyan-500/30 bg-zinc-900 shadow-2xl">
            <span className="absolute top-4 right-4 z-10 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs px-3 py-1 rounded-full font-semibold backdrop-blur-md">
              Available for hire
            </span>
            <img 
              src="/profile.png" 
              alt="Ayush Narayan" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}