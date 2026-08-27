import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a10] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="py-10 text-center text-xs text-zinc-600 border-t border-zinc-900">
        © {new Date().getFullYear()} Ayush Narayan. All rights reserved.
      </footer>
    </div>
  );
}