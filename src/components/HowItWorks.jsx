import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery Call',
    desc: 'We start by understanding your specific needs, team culture, and technical requirements. This ensures we find the perfect match for your organization.',
    icon: '01'
  },
  {
    title: 'Candidate Sourcing',
    desc: 'Our recruitment team taps into our global network to identify top-tier talent. We screen for skills, experience, and cultural fit.',
    icon: '02'
  },
  {
    title: 'Interview Process',
    desc: 'You interview the shortlisted candidates. We handle the scheduling and logistics, allowing you to focus on assessing the talent.',
    icon: '03'
  },
  {
    title: 'Onboarding',
    desc: 'Once you select a candidate, we handle the contracts, equipment, and onboarding process to get them started immediately.',
    icon: '04'
  },
  {
    title: 'Ongoing Support',
    desc: 'We provide continuous HR support, payroll management, and performance monitoring to ensure a smooth long-term partnership.',
    icon: '05'
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Left Side */}
          <div className="lg:w-1/3 lg:h-[calc(100vh-100px)] lg:sticky lg:top-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Hiring <br />
              <span className="text-[#39E590]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A streamlined approach to building your remote team. We handle the heavy lifting so you can focus on building great products.
            </p>
          </div>

          {/* Scrolling Right Side */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group"
              >
                <div className="text-5xl font-bold text-white/10 mb-6 group-hover:text-[#39E590]/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
