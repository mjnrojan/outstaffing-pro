import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Ecommerce', description: 'Full-stack ecommerce development, Shopify, Magento, and custom solutions.', icon: '🛍️' },
  { name: 'Construction', description: 'Project management software, BIM integration, and digital tools for construction.', icon: '🏗️' },
  { name: 'Technology', description: 'SaaS development, cloud infrastructure, and enterprise software solutions.', icon: '💻' },
  { name: 'AI & Automation', description: 'Machine learning models, process automation, and intelligent chatbots.', icon: '🤖' },
  { name: 'Staffing', description: 'Recruitment platforms, ATS integration, and HR tech solutions.', icon: '👥' },
  { name: 'Import/Export', description: 'Logistics management, supply chain tracking, and inventory systems.', icon: '🚢' },
  { name: 'Accounting', description: 'Fintech apps, secure payment gateways, and automated bookkeeping.', icon: '📊' },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Specialized solutions for every industry.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 340}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                className="min-w-[320px] md:min-w-[400px] bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#39E590]/50 transition-colors"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
