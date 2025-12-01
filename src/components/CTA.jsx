import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#39E590]/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          Let's work together
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Partner with a design team that moves at your speed. No contracts, cancel anytime.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-block px-10 py-5 text-xl font-semibold text-[#0A0A0A] bg-[#39E590] rounded-xl hover:bg-[#32cc80] transition-colors"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
