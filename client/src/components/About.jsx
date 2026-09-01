import React from 'react';
import { Lightbulb, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-16">About Me</h2>

      <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
        {/* Left Side (Photo + Fresher Box) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
            <img 
              src="/about-profile.png" 
              alt="Ayush About" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="w-full bg-[#0e131f] border border-cyan-950/60 rounded-2xl p-6 text-center shadow-lg">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400">
              FRESHER / ASPIRING DEVELOPER
            </span>
            <h4 className="text-lg font-bold text-white mt-3">Ready to Build & Learn</h4>
            <p className="text-xs text-zinc-400 mt-1">Government Polytechnic, Vaishali</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="lg:col-span-7">
          <h3 className="text-3xl font-bold text-white mb-4">Frontend Developer</h3>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Hey, my name is <span className="text-white font-medium">Ayush Narayan</span>, a motivated Computer Science Diploma student with hands-on foundational experience in React, JavaScript, HTML, CSS, and modern web tools. As a fresher, I bring strong problem-solving skills, enthusiasm for frontend engineering, and eagerness to contribute to high-impact projects.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
              <h4 className="text-cyan-400 font-bold text-base">React & Tailwind</h4>
              <p className="text-xs text-zinc-400 mt-1">Modern UI Engineering</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
              <h4 className="text-cyan-400 font-bold text-base">Node.js & Express</h4>
              <p className="text-xs text-zinc-400 mt-1">REST APIs & Backend Basics</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
              <h4 className="text-cyan-400 font-bold text-base">Python & Data Science</h4>
              <p className="text-xs text-zinc-400 mt-1">NIELIT Certified Training</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
              <h4 className="text-cyan-400 font-bold text-base">MySQL & Git</h4>
              <p className="text-xs text-zinc-400 mt-1">Database & Version Control</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Excellence Cards */}
      <h3 className="text-3xl font-bold text-white text-center mb-12">Professional Excellence</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-2xl flex flex-col items-center text-center">
          <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 mb-4"><Lightbulb size={28} /></div>
          <h4 className="text-lg font-bold text-white mb-2">Innovation & Problem Solving</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">Meeting project requirements consistently with clean logic and creative approaches.</p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-2xl flex flex-col items-center text-center">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4"><Zap size={28} /></div>
          <h4 className="text-lg font-bold text-white mb-2">Clean Code & Performance</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">Writing structured, maintainable, and optimized code following modern best practices.</p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-2xl flex flex-col items-center text-center">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4"><Users size={28} /></div>
          <h4 className="text-lg font-bold text-white mb-2">User-Centric Development</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">Focusing on intuitive interfaces, mobile responsiveness, and clean UX flows.</p>
        </div>
      </div>
    </section>
  );
}