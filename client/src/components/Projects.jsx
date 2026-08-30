import React from 'react';

const projects = [
  {
    title: "Personal Portfolio",
    description: "Responsive personal website built with Vite, React, Tailwind CSS, and a Node/Express backend contact API.",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js"],
    github: "https://github.com/theayushcode",
    live: "#"
  },
  {
    title: "Scientific Calculator Web App",
    description: "A responsive standard & scientific calculator supporting arithmetic calculations and keyboard inputs.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/theayushcode",
    live: "https://theayushcode.github.io/Scientific-calculator/"
  },
  {
    title: "Python Data Analysis Toolkit",
    description: "Data analysis scripts and basic data processing workflows developed during NIELIT training.",
    tech: ["Python", "Pandas", "NumPy", "Data Science"],
    github: "https://github.com/theayushcode",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">My Projects</h2>
        <p className="text-zinc-400 text-sm">A showcase of frontend and web development projects built with modern technologies.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-[#0e131f] border border-cyan-950/60 hover:border-cyan-500/40 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">{proj.description}</p>
              
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs bg-cyan-950/40 border border-cyan-800/40 text-cyan-200 px-3 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
              <a href={proj.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-xs font-bold text-white transition">
                GitHub
              </a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="flex-1 text-center py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}