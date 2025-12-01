import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Brymec',
  'Automation Anywhere',
  'Lumen3',
  'Cloudline',
  'Squashed Robot',
  'Jointly',
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-12 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Trusted by innovative teams
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-white grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Placeholder for actual logo */}
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
