import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Globe, AlertTriangle, Lock, Search, Activity } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CybercrimeResearchPage() {

  const sliderImages = [
    "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153692/icc_styxq3.webp",
    "https://images.unsplash.com/photo-1510511233900-1982d92bd835",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  ];

  const sections = [
    {
      title: "Global Cybercrime Overview",
      icon: Globe,
      content:
        "Cybercrime is growing rapidly worldwide. Attackers target banks, companies, and individuals using ransomware, phishing, and identity theft. Intelligence research helps stop attacks before they happen."
    },
    {
      title: "Threat Intelligence Collection",
      icon: Database,
      content:
        "Threat intelligence collects data from malware reports, dark web monitoring, OSINT, and security logs. This helps analysts understand hacker behavior patterns."
    },
    {
      title: "Attack Detection & Monitoring",
      icon: Activity,
      content:
        "SOC teams use AI tools, SIEM systems, and real-time monitoring to detect suspicious activity and prevent cyber attacks instantly."
    },
    {
      title: "Digital Forensics Investigation",
      icon: Search,
      content:
        "Digital forensic experts recover deleted data, analyze malware, and trace cyber criminals using technical investigation methods."
    },
    {
      title: "Data Protection & Encryption",
      icon: Lock,
      content:
        "Encryption, zero trust security, and endpoint protection keep sensitive data safe from cyber criminals."
    },
    {
      title: "Risk & Vulnerability Analysis",
      icon: AlertTriangle,
      content:
        "Security teams perform penetration testing and vulnerability scanning to find system weaknesses before attackers do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#021526] to-[#020617] text-cyan-100 overflow-hidden">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="bg-cyan-500/20 p-5 rounded-2xl"
            >
              <Shield className="w-14 h-14 text-cyan-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-6">
            Cybercrime Intelligence Research
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-cyan-100/80">
            Advanced cyber intelligence platform focused on threat detection, digital forensics, and cyber security research.
          </p>
        </motion.div>
      </div>

      {/* IMAGE SWIPER */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-3xl overflow-hidden"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${img}?auto=format&fit=crop&w=1400&q=80`}
                className="w-full h-[400px] object-cover"
                alt="cyber"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RESEARCH CARDS */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#021526]/70 backdrop-blur border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition shadow-lg shadow-cyan-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-xl">
                    <Icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-300">
                    {section.title}
                  </h3>
                </div>

                <p className="text-cyan-100/80 text-sm leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-cyan-100/60 text-sm">
          Cybercrime Intelligence Research Portal • Threat Intelligence • Digital Forensics • Security Research
        </div>
      </div>
    </div>
  );
}
