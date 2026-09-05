import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-cyan-950/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-tight text-cyan-400 flex items-center gap-2">
          <Code2 className="text-cyan-400" />
          <span>Ayush<span className="text-white">.dev</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          {/* <a href="#certificates" className="hover:text-cyan-400 transition">Certificates</a> */}
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition text-sm flex items-center gap-1 shadow-lg shadow-cyan-500/20"
        >
          Hire me! <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}