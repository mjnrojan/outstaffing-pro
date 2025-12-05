import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './ui/GlowingEffect.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [focused, setFocused] = useState('');

  const roles = [
    'Admin Support',
    'Sales & Marketing',
    'Creative & Design',
    'IT & Development',
    'Finance',
    'Operations',
    'Full Squad',
    'Not Sure Yet'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-[#39E590]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#39E590]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-[#39E590] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Let's Build Your
                  <br />
                  <span className="text-[#39E590]">Dream Team</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Tell us about your needs and we'll match you with the perfect talent. Get a response within 24 hours.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                  <GlowingEffect spread={30} glow={true} disabled={false} proximity={48} inactiveZone={0.01} borderWidth={2} />
                  <div className="text-3xl font-bold text-[#39E590] mb-2">24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                  <GlowingEffect spread={30} glow={true} disabled={false} proximity={48} inactiveZone={0.01} borderWidth={2} />
                  <div className="text-3xl font-bold text-[#39E590] mb-2">7d</div>
                  <div className="text-gray-400 text-sm">Time to Hire</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a href="mailto:hello@outstaffing.com" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#39E590]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#39E590]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-gray-400 text-sm">hello@outstaffing.com</div>
                  </div>
                </a>

                <a href="https://wa.me/61123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#39E590]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#39E590]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-400 text-sm">+61 XXX XXX XXX</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 transition-all focus:outline-none ${
                      focused === 'name' ? 'border-[#39E590] bg-white/10' : 'border-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 transition-all focus:outline-none ${
                      focused === 'email' ? 'border-[#39E590] bg-white/10' : 'border-white/10'
                    }`}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused('')}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 transition-all focus:outline-none ${
                      focused === 'company' ? 'border-[#39E590] bg-white/10' : 'border-white/10'
                    }`}
                    placeholder="Your Company"
                  />
                </div>

                {/* Role Selection */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Which role are you looking for? *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    onFocus={() => setFocused('role')}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white transition-all focus:outline-none ${
                      focused === 'role' ? 'border-[#39E590] bg-white/10' : 'border-white/10'
                    } ${!formData.role ? 'text-gray-500' : ''}`}
                  >
                    <option value="" disabled>Select a role category</option>
                    {roles.map((role) => (
                      <option key={role} value={role} className="bg-[#0A0A0A] text-white">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Tell us about your needs *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 transition-all focus:outline-none resize-none ${
                      focused === 'message' ? 'border-[#39E590] bg-white/10' : 'border-white/10'
                    }`}
                    placeholder="Describe your project, team size, timeline, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#39E590] text-[#0A0A0A] rounded-xl font-bold text-lg hover:bg-[#32cc80] transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </motion.button>

                <p className="text-gray-500 text-xs text-center mt-4">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
