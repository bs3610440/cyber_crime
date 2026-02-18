import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Terminal,
  Menu,
  X,
  Home,
  Wrench,
  Briefcase,
  FlaskConical,
  PhoneCall,
  Search,
  Bell
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Tools", path: "/tools", icon: <Wrench size={18} /> },
    { name: "Case Studies", path: "/cases", icon: <Briefcase size={18} /> },
    { name: "Research", path: "/research", icon: <FlaskConical size={18} /> },
    { name: "Contact", path: "/contact", icon: <PhoneCall size={18} /> },
  ];

  return (
    <nav className="bg-[#020617] text-white px-6 py-4 shadow-2xl border-b border-cyan-900/50 relative overflow-hidden">

      {/* ANIMATED LIGHT SWEEP */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute w-[40%] h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-[sweep_6s_linear_infinite]" />
      </div>


      

      

      <div className="max-w-7xl mx-auto flex justify-between items-center">



        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-25 group-hover:opacity-70 transition duration-1000"></div>

            {/* 🔥 PREMIUM CYBER LOGO */}
            <div className="relative flex items-center justify-center">

              {/* Outer Ring */}
              <div className="absolute w-10 h-10 rounded-full border border-cyan-400/40 animate-pulse"></div>
              

              {/* Logo Container */}
              <div className="relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-2 rounded-lg border border-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_45px_rgba(34,211,238,0.9)] transition duration-500">

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-cyan-400 group-hover:scale-110 transition duration-300"
                >
                  {/* Shield */}
                  <path
                    d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  {/* Globe Grid */}
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1"/>
                  <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1"/>
                  <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1"/>
                </svg>

                <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-0.5">
                  <Terminal size={12} className="text-cyan-400 animate-pulse" />
                </div>

              </div>
            </div>
            

          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase leading-none drop-shadow-[0_0_10px_#06b6d4]">
              CyberCrime
            </h1>
            <span className="text-[10px] text-cyan-700 font-bold tracking-[0.3em] uppercase">
              Intelligence
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU + RIGHT ICONS */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex list-none gap-8 font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#06b6d4]"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 border-l border-gray-700 pl-6">

            <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_8px_#06b6d4] transition-all duration-300" />

            <div className="relative cursor-pointer group">
              <Bell className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_#06b6d4]" />

              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>

          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition" />
          <Bell className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition" />

          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 hover:scale-110 transition">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pb-6 bg-[#020617] rounded-xl border border-cyan-900/50 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 mt-4 list-none px-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-cyan-400 py-3 border-b border-white/5 hover:translate-x-2 transition"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]" />

      <style>
        {`
          @keyframes sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(250%); }
          }
        `}
      </style>

    </nav>
  );
}
