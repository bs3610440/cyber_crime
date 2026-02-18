import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Database, 
  Network, 
  Shield, 
  Globe, 
  Hash,
  Cpu,
  Eye,
  AlertTriangle,
  Filter,
  Download,
  Share2,
  BarChart3,
  Zap,
  Terminal,
  Key,
  Lock,
  Code,
  Server,
  FileText,
  Upload,
  Wifi,
  Newspaper,
  TrendingUp,
  Siren,
  Activity,
  Radar,
  Bug,
  ShieldCheck
} from 'lucide-react';

const CybercrimeTools = () => {
  const [searchQuery, setSearchQuery] = useState('');

  /* ---------------- EXTENDED DATA ---------------- */

  const latestNews = [
    { title: 'Mass Phishing Campaign Targeting Banking Users', severity: 'High' },
    { title: 'New Android Malware Stealing OTP Codes', severity: 'Critical' },
    { title: 'Ransomware Attacks Increasing in Healthcare Sector', severity: 'Medium' }
  ];

  const scamAlerts = [
    'Fake Job Offer WhatsApp Scam',
    'UPI Payment Request Fraud',
    'Courier Delivery Fake Link Scam',
    'Fake KYC Update Bank Scam'
  ];

  const securityWarnings = [
    'Never Share OTP or Banking Passwords',
    'Avoid Public WiFi for Banking',
    'Always Verify Payment Requests',
    'Enable Two Factor Authentication'
  ];

  const trendingCrimes = [
    'Phishing Attacks',
    'UPI Payment Fraud',
    'Social Media Account Hacking',
    'Identity Theft',
    'Crypto Investment Scam'
  ];

  const investigationSteps = [
    'Evidence Collection',
    'Digital Forensic Analysis',
    'Threat Intelligence Correlation',
    'Attack Pattern Mapping',
    'Incident Reporting'
  ];

  const cyberDomains = [
    'Network Security',
    'Cloud Security',
    'Malware Analysis',
    'Digital Forensics',
    'Threat Intelligence',
    'SOC Monitoring'
  ];

  /* ---------------- TOOLS ---------------- */

  const tools = [
    {
      name: 'Threat Analyzer',
      description: 'AI based threat pattern detection'
    },
    {
      name: 'Malware Detector',
      description: 'Static and dynamic malware analysis'
    },
    {
      name: 'Network Forensic Tool',
      description: 'Deep packet network analysis'
    }
  ];

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-6">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cyber Intelligence <span className="text-cyan-400">Knowledge Hub</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time cyber intelligence, digital investigation tools, threat alerts and security awareness knowledge base.
          </p>
        </div>

        {/* NEWS */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Newspaper className="text-cyan-400" /> Latest Cyber Attack News
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news, i) => (
              <div key={i} className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                <h3 className="font-semibold mb-2">{news.title}</h3>
                <span className="text-xs text-red-400">Severity: {news.severity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SCAM ALERTS */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Siren className="text-red-400" /> Scam Alerts
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {scamAlerts.map((scam, i) => (
              <div key={i} className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                ⚠ {scam}
              </div>
            ))}
          </div>
        </div>

        {/* SECURITY WARNINGS */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-yellow-400" /> Security Warnings
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {securityWarnings.map((warn, i) => (
              <div key={i} className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
                {warn}
              </div>
            ))}
          </div>
        </div>

        {/* TRENDING CRIMES */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-cyan-400" /> Trending Cyber Crime Types
          </h2>
          <div className="flex flex-wrap gap-3">
            {trendingCrimes.map((crime, i) => (
              <span key={i} className="px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">
                {crime}
              </span>
            ))}
          </div>
        </div>

        {/* INVESTIGATION WORKFLOW */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Cyber Investigation Workflow</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {investigationSteps.map((step, i) => (
              <div key={i} className="bg-gray-800/40 p-4 rounded-xl text-center border border-gray-700">
                <Activity className="mx-auto mb-2 text-cyan-400" />
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* CYBER SECURITY DOMAINS */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Cyber Security Domains</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cyberDomains.map((domain, i) => (
              <div key={i} className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                <ShieldCheck className="text-cyan-400 mb-2" />
                {domain}
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-12 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search investigation tools..."
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* TOOLS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool, index) => (
            <div key={index} className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
              <h3 className="font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Ahead of Cyber Threats</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Use advanced cyber intelligence tools, awareness resources and threat monitoring systems to stay secure in digital world.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-semibold">
            Explore More Intelligence
          </button>
        </div>

      </div>
    </section>
  );
};

export default CybercrimeTools;