import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#021526] to-[#020617] text-white">

      {/* HEADER */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have questions about cyber security or need help?
          Reach out to our cyber intelligence team.
        </p>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-9 pb-16 grid md:grid-cols-2 gap-12">

        {/* LEFT PROFILE + GIF */}
        <div className="space-y-6">

          {/* GIF PROFILE CARD */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 overflow-hidden group">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

            {/* GIF */}
            <div className="relative flex justify-center mb-6">
              <img
                src="https://res.cloudinary.com/ddj2og1rh/image/upload/v1770135484/giff_zvfjsk.gif"
                alt="profile"
                className="w-94 h-64 object-cover rounded-xl border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              />
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  support@cyberintel.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
        >

          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name "
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg font-semibold"
          >
            <Send size={18} />
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactPage;
