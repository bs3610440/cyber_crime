import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, Cpu, Lock, Eye, Globe, BarChart3, AlertTriangle,
  Zap, Terminal, Radar, Phone, Mail, FileWarning, CheckCircle,
  Newspaper, TrendingUp, Siren, Activity, ShieldCheck, BookOpen
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MeraCyberIntelligence = () => {
  const controls = useAnimation();

  /* PARALLAX */
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -250]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  /* ANIMATED CYBER ATTACK PULSES */
  const attackPulses = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2
  }));

  /* ---------------- HERO IMAGES ---------------- */
  const cyberImages = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153417/jpj_n4ydcl.jpg",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153828/global_aqpkrz.webp",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153807/cell_w2mahj.jpg",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153167/cybersecurity_yuqqnj.jpg",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153394/How-to-report-a-cybercrime_aqh2hw.webp",
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153182/hddi_ygkrzc.jpg"
  ];

  /* ---------------- FEATURES ---------------- */
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Threat Detection",
      description: "AI-driven systems identify and neutralize cyber threats in real-time.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Security Analytics",
      description: "Deep learning algorithms predict and prevent potential cyber attacks.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Encryption",
      description: "End-to-end encryption protects sensitive data and digital assets.",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  /* ---------------- STATS ---------------- */
  const stats = [
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "24/7", label: "Monitoring Coverage" },
    { value: "<1s", label: "Response Time" },
    { value: "500K+", label: "Protected Systems" }
  ];

  /* ---------------- NEWS ---------------- */
  const news = [
    "Mass Phishing Campaign Targeting Banking Users",
    "New Android Malware Stealing OTP Codes",
    "Ransomware Attacks Increasing in Healthcare Sector"
  ];

  /* ---------------- SCAMS ---------------- */
  const scams = [
    "Fake Job Offer WhatsApp Scam",
    "UPI Payment Request Fraud",
    "Courier Delivery Fake Link Scam",
    "Fake KYC Update Scam"
  ];

  /* ---------------- AWARENESS ---------------- */
  const awarenessTips = [
    "Never share OTP with anyone",
    "Use strong & unique passwords",
    "Enable Two Factor Authentication",
    "Avoid clicking unknown links",
    "Verify payment requests before sending money"
  ];

  /* ---------------- TRENDING CRIMES ---------------- */
  const trendingCrimes = [
    "Phishing Attacks",
    "UPI Fraud",
    "Social Media Hacking",
    "Identity Theft",
    "Crypto Scam"
  ];

  /* ---------------- DOMAINS ---------------- */
  const domains = [
    "Network Security",
    "Cloud Security",
    "Malware Analysis",
    "Digital Forensics",
    "Threat Intelligence",
    "SOC Monitoring"
  ];

  /* ---------------- WORKFLOW ---------------- */
  const workflow = [
    "Evidence Collection",
    "Forensic Analysis",
    "Threat Correlation",
    "Attack Mapping",
    "Incident Reporting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#021526] to-[#020617] text-white overflow-x-hidden">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: parallaxY }}
        className="fixed inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00ffff22,_transparent_60%)] pointer-events-none"
      />

      {/* LIVE TICKER */}
      <div className="bg-cyan-900/20 border-b border-cyan-500/20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-2 text-cyan-300 text-sm"
        >
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6">⚠ Live Alert: Phishing Campaign Detected</span>
              <span className="mx-6">• Malware Signature Updated</span>
              <span className="mx-6">• DDoS Attempt Blocked</span>
              <span className="mx-6">• Zero-Day Vulnerability Under Investigation</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* HERO */}
      <motion.div className="w-full h-[320px] md:h-[420px]">
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2500 }} pagination={{ clickable: true }} loop className="h-full">
          {cyberImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img src={`${img}?auto=format&fit=crop&w=1600&q=80`} className="w-full h-full object-cover" alt="cyber" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                  <div className="max-w-4xl px-8">
                    <h1 className="text-3xl md:text-6xl font-bold text-cyan-300 mb-4">Cybercrime Intelligence Platform</h1>
                    <p className="text-gray-300 text-lg max-w-2xl">Real-time cyber threat monitoring, digital forensics, cyber awareness and intelligence powered by AI.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* ANIMATED CYBER ATTACK VISUAL */}
      <section className="container mx-auto px-6 py-20">
<img src="https://res.cloudinary.com/ddj2og1rh/image/upload/v1770963457/ChatGPT_Image_Feb_13_2026_11_44_51_AM_t6tqo4.png" alt="" />

          

          
         

      </section>

      {/* ORIGINAL SECTIONS BELOW */}

      {/* STATS */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-gray-400 mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl text-cyan-300 mb-8 flex items-center gap-2"><Newspaper /> Latest Cyber News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-white/10">{n}</div>
          ))}
        </div>
      </section>

      {/* SCAMS */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl text-red-400 mb-8 flex items-center gap-2"><Siren /> Scam Alerts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scams.map((s, i) => (
            <div key={i} className="bg-red-900/20 border border-red-500/30 backdrop-blur-xl p-4 rounded-lg">⚠ {s}</div>
          ))}
        </div>
      </section>

      {/* AWARENESS */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl text-cyan-300 mb-8 flex items-center gap-2"><BookOpen /> Cyber Awareness</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awarenessTips.map((tip, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl flex items-center gap-3">
              <CheckCircle className="text-cyan-400" />
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl text-cyan-300 mb-8 flex items-center gap-2"><TrendingUp /> Trending Cyber Crimes</h2>
        <div className="flex flex-wrap gap-3">
          {trendingCrimes.map((crime, i) => (
            <span key={i} className="px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">{crime}</span>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl text-cyan-300 mb-8 flex items-center gap-2"><ShieldCheck /> Cyber Security Domains</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((d, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-white/10">{d}</div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl text-cyan-300 mb-8 flex items-center gap-2"><Activity /> Investigation Workflow</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {workflow.map((w, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10 text-center">{w}</div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MeraCyberIntelligence;