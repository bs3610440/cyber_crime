import { motion } from "framer-motion";
import { 
  Shield, 
  TrendingUp, 
  Database, 
  Users, 
  Globe, 
  Lock, 
  Eye,
  ChevronRight,
  Calendar,
  Clock,
  FileText,
  Network,
  Cpu,
  ShieldAlert,
  Fingerprint
} from "lucide-react";

const CybercrimeCaseStudies = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  // Case studies data with images
  const caseStudies = [
    {
      id: 1,
      title: "Operation Phantom Hunt",
      description: "International ransomware network takedown across 12 countries",
      category: "Ransomware",
      date: "2023",
      duration: "6 months",
      status: "Resolved",
      impact: "High",
      stats: {
        arrests: 24,
        recovered: "$45M",
        servers: 78
      },
      gradient: "from-purple-500/20 to-blue-500/20",
      image: "https://aware.eccouncil.org/images/blog/thumbnail_blog_1.jpg",
      icon: ShieldAlert,
      color: "purple"
    },
    {
      id: 2,
      title: "Dark Web Marketplace Takedown",
      description: "Dismantling a major illegal marketplace with cryptocurrency tracing",
      category: "Dark Web",
      date: "2022",
      duration: "8 months",
      status: "Resolved",
      impact: "Critical",
      stats: {
        arrests: 42,
        recovered: "$120M",
        servers: 156
      },
      gradient: "from-red-500/20 to-orange-500/20",
      image: "https://d3nwecxvwq3b5n.cloudfront.net/AcuCustom/Sitename/DAM/022/iStock-501549144.jpg",
      icon: Network,
      color: "red"
    },
    {
      id: 3,
      title: "Global Phishing Syndicate",
      description: "Neutralizing a phishing operation targeting financial institutions",
      category: "Phishing",
      date: "2023",
      duration: "4 months",
      status: "Ongoing",
      impact: "Medium",
      stats: {
        arrests: 18,
        recovered: "$28M",
        servers: 32
      },
      gradient: "from-green-500/20 to-emerald-500/20",
      image: "https://aware.eccouncil.org/images/blog/thumbnail_blog_3.jpg",
      icon: Eye,
      color: "green"
    },
    {
      id: 4,
      title: "Cryptocurrency Heist Investigation",
      description: "Tracking and recovering stolen crypto assets from exchange breach",
      category: "Crypto Crime",
      date: "2024",
      duration: "3 months",
      status: "Resolved",
      impact: "High",
      stats: {
        arrests: 9,
        recovered: "$75M",
        servers: 21
      },
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "https://cassette.sphdigital.com.sg/image/straitstimes/64a9d1a2cddaa0db3218e2d5012962eb2b600df41aa8e7668b76d08a2925766b",
      icon: Cpu,
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto pt-12 pb-16"
      >
        <div className="text-center">
          <motion.h1 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            CYBERCRIME <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300">CASE STUDIES</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Deep-dive analysis into neutralized threats, global investigations, and digital forensics operations.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: '50+', label: 'Cases Solved', icon: Shield },
              { value: '98%', label: 'Success Rate', icon: TrendingUp },
              { value: '$200M+', label: 'Assets Recovered', icon: Database },
              { value: '150+', label: 'Arrests Made', icon: Users }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <stat.icon className="h-3 w-3" />
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Grid with Images */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-8"
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Recent Investigations</h2>
            <p className="text-gray-400 mt-2">Detailed analysis of major cybercrime operations</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View All Cases <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
              className={`bg-gradient-to-br ${caseStudy.gradient} to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-${caseStudy.color}-500/30 cursor-pointer group`}
            >
              {/* Case Study Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm text-cyan-300 font-medium">
                      {caseStudy.category}
                    </span>
                    <span className={`px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm font-medium ${
                      caseStudy.status === 'Resolved' 
                        ? 'text-green-400' 
                        : 'text-yellow-400'
                    }`}>
                      {caseStudy.status}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <caseStudy.icon className={`h-8 w-8 text-${caseStudy.color}-400`} />
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                  </div>
                </div>

                {/* Case Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">{caseStudy.stats.arrests}</div>
                    <div className="text-xs text-gray-400 mt-1">Arrests</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-xl font-bold text-green-400">{caseStudy.stats.recovered}</div>
                    <div className="text-xs text-gray-400 mt-1">Recovered</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-xl font-bold text-purple-400">{caseStudy.stats.servers}</div>
                    <div className="text-xs text-gray-400 mt-1">Servers</div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{caseStudy.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">Full Report</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-800/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Forensics & Analysis</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced digital forensics techniques used in investigations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Network Analysis",
                description: "Tracing digital footprints across global networks",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
                icon: Network
              },
              {
                title: "Malware Reverse Engineering",
                description: "Deconstructing malicious software to understand attack vectors",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXM4HDwaNDeR30FRaODTP5kVKcG6xqznSkA&s",
                icon: Cpu
              },
              {
                title: "Blockchain Forensics",
                description: "Tracking cryptocurrency transactions across the blockchain",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
                icon: Fingerprint
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <item.icon className="h-8 w-8 text-cyan-400 mb-2" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Need Cybercrime Investigation?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to assist with digital forensics, threat analysis, and cyber investigations.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Request Consultation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CybercrimeCaseStudies;