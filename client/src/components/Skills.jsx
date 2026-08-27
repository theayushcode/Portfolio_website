import React from 'react';

const skillList = [
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Vite", category: "Tool" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "C / Java", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "GitHub & Git", category: "Tool" },
  { name: "VS Code", category: "Tool" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">My Skills</h2>
        <p className="text-zinc-400 text-sm">Technologies, languages, and developer tools in my tech stack.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillList.map((skill, index) => (
          <div 
            key={index}
            className="bg-[#0e131f] border border-cyan-950/60 hover:border-cyan-400/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-black text-lg mb-3">
              {skill.name.charAt(0)}
            </div>
            <h3 className="text-sm font-bold text-white text-center">{skill.name}</h3>
            <span className="text-[10px] text-zinc-500 mt-1 uppercase">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}