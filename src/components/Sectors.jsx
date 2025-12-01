import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  'Ecommerce',
  'Construction',
  'Technology',
  'AI',
  'Automation',
  'Staffing',
  'Import Export',
  'Accounting',
];

const Marquee = ({ children, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-image-linear-gradient">
      <motion.div
        className="flex gap-8 py-4"
        animate={{
          x: direction === 1 ? [0, -1035] : [-1035, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function Sectors() {
  return (
    <section className="py-12 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          We work with every business sector
        </p>
      </div>
      
      <Marquee>
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center w-64 h-32 mx-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#39E590]/50 transition-colors cursor-default"
          >
            <span className="text-xl font-semibold text-white">{sector}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
