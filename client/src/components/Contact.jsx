import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://portfolio-website-loed.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send.');
      }
    } catch {
      setStatus('Could not connect to server.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-3">Let's Work Together!</h2>
        <p className="text-zinc-400 text-sm">Got an idea, opportunity, or question? I'm just a message away!</p>
      </div>

      {/* Social Boxes */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        <a href="mailto:narayan.ayush0701@gmail.com" className="bg-[#0e131f] border border-cyan-950/60 p-6 rounded-2xl flex flex-col items-center text-center hover:border-cyan-400/40 transition">
          <Mail className="text-cyan-400 mb-3" size={26} />
          <h4 className="text-sm font-bold text-white">Email</h4>
          <p className="text-xs text-zinc-400 mt-1">narayan.ayush0701@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/ayushnarayan-dev/" target="_blank" rel="noreferrer" className="bg-[#0e131f] border border-cyan-950/60 p-6 rounded-2xl flex flex-col items-center text-center hover:border-cyan-400/40 transition">
          <svg className="w-6 h-6 fill-current text-cyan-400 mb-3" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76M7.85 18.5V10.1H5.06v8.4h2.79z" />
          </svg>
          <h4 className="text-sm font-bold text-white">LinkedIn</h4>
          <p className="text-xs text-zinc-400 mt-1">ayushnarayan-dev</p>
        </a>
        <a href="https://github.com/theayushcode" target="_blank" rel="noreferrer" className="bg-[#0e131f] border border-cyan-950/60 p-6 rounded-2xl flex flex-col items-center text-center hover:border-cyan-400/40 transition">
          <svg className="w-6 h-6 fill-current text-cyan-400 mb-3" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <h4 className="text-sm font-bold text-white">GitHub</h4>
          <p className="text-xs text-zinc-400 mt-1">theayushcode</p>
        </a>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto bg-[#0e131f] border border-cyan-950/60 p-8 rounded-3xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Your Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-cyan-400 focus:outline-none text-white text-sm"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Your Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-cyan-400 focus:outline-none text-white text-sm"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Your Message</label>
            <textarea 
              rows={4}
              required
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-cyan-400 focus:outline-none text-white text-sm"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button type="submit" className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-xl transition mt-2">
            Send Message <Send size={16} />
          </button>
          {status && <p className="text-center text-xs text-cyan-400 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}