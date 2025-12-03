import React from 'react';
import { motion } from 'framer-motion';

import { plans } from '../data/pricing';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">No hidden fees. Scale up or down anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.highlight
                  ? 'bg-white/10 border-[#39E590]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#39E590] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[#39E590] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl text-sm font-bold transition-colors text-center ${
                  plan.highlight
                    ? 'bg-[#39E590] text-[#0A0A0A] hover:bg-[#32cc80]'
                    : 'bg-white text-[#0A0A0A] hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
