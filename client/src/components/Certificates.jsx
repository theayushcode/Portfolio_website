import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const certs = [
  { name: "Python Training", issuer: "Spoken Tutorial" },
  { name: "C Programming Training", issuer: "Spoken Tutorial" },
  { name: "C++ Programming Training", issuer: "Spoken Tutorial" },
  { name: "Java Programming Training", issuer: "Spoken Tutorial" },
  { name: "AI For All", issuer: "NPTEL Swayam (Indian Talent Network)" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">Certificates & Achievements</h2>
        <p className="text-zinc-400 text-sm">Verified certifications and professional technical credentials.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, idx) => (
          <div key={idx} className="bg-[#0e131f] border border-cyan-950/60 hover:border-cyan-500/40 p-6 rounded-2xl flex items-start gap-4 transition duration-200">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{c.name}</h4>
              <p className="text-xs text-zinc-400 mt-1">{c.issuer}</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 font-semibold mt-3">
                <CheckCircle2 size={12} /> Verified Certificate
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}