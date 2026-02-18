import React from 'react';
import { Shield, Activity, Globe, Lock, Cpu, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] text-slate-300 border-t-2 border-cyan-900/50 pt-16 pb-8 px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Status */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-cyan-400">
              <Shield size={28} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-xl font-bold tracking-widest uppercase">Cyber<span className="text-white">Int</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Real-time threat detection and forensic intelligence. Securing the perimeter through predictive analytics.
            </p>
            <div className="flex items-center gap-3 text-xs bg-navy-900/50 p-2 border border-cyan-800/30 rounded w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-500 uppercase tracking-tighter">System: Nominal</span>
            </div>
          </div>

          {/* Intelligence Modules */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-l-2 border-cyan-500 pl-3">Intelligence</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Globe size={14}/> Global Map</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Lock size={14}/> Encryption Labs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Activity size={14}/> Threat Feeds</a></li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-l-2 border-cyan-500 pl-3">Infrastructure</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Cpu size={14}/> API Docs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Network Status</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sentinel Logs</a></li>
            </ul>
          </div>

          {/* Terminal / Newsletter */}
          <div>
            <h3 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-l-2 border-cyan-500 pl-3">Direct Feed</h3>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="USER@NETWORK..." 
                className="bg-slate-900 border border-cyan-800 focus:border-cyan-400 outline-none p-2 text-xs text-cyan-400 placeholder:text-cyan-900"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-[#0a192f] font-bold py-2 text-xs uppercase transition-all">
                Establish Link
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-900/30 pt-8 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
          <p>© {currentYear} CyberInt Protocol. All Rights Reserved.</p>
          <div className="flex gap-8 items-center">
            <span className="text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors">Privacy_Policy.v2</span>
            <span className="text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors">Terms_Of_Service.log</span>
            <div className="flex gap-4 ml-4">
              <Github size={16} className="text-slate-400 hover:text-white cursor-pointer" />
              <Twitter size={16} className="text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;