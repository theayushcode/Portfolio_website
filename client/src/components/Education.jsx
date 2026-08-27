import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">Educational Journey & Experience</h2>
        <p className="text-zinc-400 text-sm">My academic background and specialized technical training.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-[#0e131f] border border-cyan-950/60 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-cyan-400" size={26} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500/40 pl-4">
              <span className="text-xs text-cyan-400 font-bold">2024 - 2027 (Pursuing)</span>
              <h4 className="text-lg font-bold text-white">Diploma in Computer Science & Engineering</h4>
              <p className="text-xs text-zinc-400 mt-1">Government Polytechnic, Vaishali (SBTE, Bihar)</p>
            </div>
            <div className="border-l-2 border-zinc-800 pl-4">
              <span className="text-xs text-zinc-500 font-bold">2023 (Completed)</span>
              <h4 className="text-lg font-bold text-white">Matriculation (10th) - 76.2%</h4>
              <p className="text-xs text-zinc-400 mt-1">Rajapakar High School (BSEB, Patna)</p>
            </div>
          </div>
        </div>

        {/* Experience / Internships */}
        <div className="bg-[#0e131f] border border-cyan-950/60 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-cyan-400" size={26} />
            <h3 className="text-2xl font-bold text-white">Internships</h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500/40 pl-4">
              <span className="text-xs text-cyan-400 font-bold">June 2026</span>
              <h4 className="text-lg font-bold text-white">Data Science Using Python Intern</h4>
              <p className="text-xs text-zinc-400 mt-1">NIELIT, Patna (4 Weeks Training on Python Data Analysis)</p>
            </div>
            <div className="border-l-2 border-zinc-800 pl-4">
              <span className="text-xs text-zinc-500 font-bold">June 2025</span>
              <h4 className="text-lg font-bold text-white">Python Programming Intern</h4>
              <p className="text-xs text-zinc-400 mt-1">NIELIT, Muzaffarpur (4 Weeks Training on Core Python)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}