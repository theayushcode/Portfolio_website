import React, { useState } from 'react';
import { Award, CheckCircle2, Eye, X, ZoomIn, Sparkles } from 'lucide-react';

const certs = [
  {
    id: 1,
    name: "C Training",
    issuer: "Spoken Tutorial",
    image: "/certificates/c-cert.png"
  },
  {
    id: 2,
    name: "Python Training",
    issuer: "Spoken Tutorial",
    image: "/certificates/python-cert.png"
  },
  {
    id: 3,
    name: "CSS Training",
    issuer: "Spoken Tutorial",
    image: "/certificates/css-cert.png"
  },
  {
    id: 4,
    name: "Java Programming Training",
    issuer: "Spoken Tutorial",
    image: "/certificates/java-cert.png"
  },
  {
    id: 5,
    name: "AI For All",
    issuer: "My Bharat",
    image: "/certificates/AI-cert.jpeg"
  },
  {
    id: 6,
    name: "Nasha Mukt Bharat",
    issuer: "My Bharat",
    image: "/certificates/nasa-cert.png"
  },
  {
    id: 7,
    name: "Weather Forecasting",
    issuer: "My Bharat",
    image: "/certificates/weather-cert.jpeg"
  },
  {
    id: 8,
    name: "Bharatiya Gyan Quiz On Art & Aesthetics",
    issuer: "My Bharat",
    image: "/certificates/Bharat-cert.jpeg"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">Certificates & Achievements</h2>
        <p className="text-zinc-400 text-sm">Verified certifications and professional technical credentials.</p>
      </div>

      {/* Top Credentials List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {certs.map((c) => (
          <div 
            key={c.id} 
            className="bg-[#0e131f] border border-cyan-950/60 hover:border-cyan-500/40 p-4 rounded-2xl flex items-start gap-3.5 transition duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shrink-0">
              <Award size={20} />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate">{c.name}</h4>
              <p className="text-[11px] text-zinc-400 truncate mt-0.5">{c.issuer}</p>
              <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-semibold mt-1.5">
                <CheckCircle2 size={10} /> Verified
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Fixed-Grid Certificate Showcase Container (No horizontal scrolling) */}
      <div className="bg-[#0a0f1d]/90 border border-cyan-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400">
              <Sparkles size={16} />
            </span>
            <h3 className="text-lg font-bold text-white">Certificate Gallery</h3>
          </div>
          <span className="text-[11px] text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            {certs.length} Certificates
          </span>
        </div>

        {/* Compact Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {certs.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCert(c)}
              className="group relative bg-[#0e131f] border border-cyan-950/80 hover:border-cyan-400/60 rounded-xl p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col justify-between"
            >
              {/* Compact Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-cyan-500 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                    <ZoomIn size={13} /> Zoom
                  </span>
                </div>
              </div>

              {/* Title & Issuer text */}
              <div className="mt-2.5 px-0.5">
                <h4 className="text-xs font-bold text-zinc-200 group-hover:text-cyan-300 transition truncate" title={c.name}>
                  {c.name}
                </h4>
                <p className="text-[10px] text-zinc-400 truncate">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Quality Modal (Full-screen Zoom Popup on Click) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[#0e131f] border border-cyan-500/40 rounded-3xl max-w-3xl w-full p-5 sm:p-7 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-400 rounded-full text-zinc-300 hover:text-white transition"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-10">
              <h3 className="text-lg sm:text-xl font-bold text-white">{selectedCert.name}</h3>
              <p className="text-xs text-cyan-400 mt-0.5">{selectedCert.issuer}</p>
            </div>

            {/* High-Resolution Zoomable Certificate Preview */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800/80 max-h-[70vh] bg-black flex items-center justify-center shadow-inner">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}