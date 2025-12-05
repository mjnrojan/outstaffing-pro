import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { roleCategories } from '../data/roles';
import FlowButton from './btns/FlowButton.jsx';
import { GlowingEffect } from './ui/GlowingEffect.jsx';
import { Zap, DollarSign, Target } from 'lucide-react';

export default function RolesWeFill() {
  const [activeCategory, setActiveCategory] = useState(roleCategories[0].id);

  const activeCategoryData = roleCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="roles" className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Roles We Fill</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We help you hire across a wide range of roles. Salaries below are hourly estimates based on talent with 3+ years' experience and international client exposure.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-3 justify-start md:justify-center min-w-max mx-auto px-4 md:px-0">
            {roleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#39E590] text-[#0A0A0A]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          
          {/* Scrolling Left & Center Cards Container */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8">
            
            {/* Left Card - Junior Positions (Scrollable) */}
            <div className="flex-1 flex flex-col gap-8">
              {activeCategoryData.positions.map((position, index) => (
                <motion.div
                  key={`junior-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-6 md:p-8 rounded-3xl border flex flex-col ${
                    position.highlight
                      ? 'bg-white/10 border-[#39E590]'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <GlowingEffect spread={35} glow={true} disabled={false} proximity={56} inactiveZone={0.01} borderWidth={2} />
                  {position.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#39E590] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                      Best Value
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 text-sm">Junior Level</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold text-white">AU${position.juniorRate}</span>
                    <span className="text-gray-500 ml-1">/hour</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {position.juniorFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-[#39E590] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="pt-4 border-t border-white/10 mb-6">
                    <p className="text-gray-500 text-xs mb-2">Common Tools:</p>
                    <div className="flex gap-2 flex-wrap">
                      {position.tools.map((tool, idx) => (
                        <span key={idx} className="text-2xl">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hire Button */}
                  <FlowButton 
                    text={`Hire a ${position.title}`}
                    href="#contact"
                    className="w-full justify-center text-sm"
                  />
                </motion.div>
              ))}
            </div>

            {/* Center Card - Senior Positions (Scrollable) */}
            <div className="flex-1 flex flex-col gap-8">
              {activeCategoryData.positions.map((position, index) => (
                <motion.div
                  key={`senior-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-6 md:p-8 rounded-3xl border flex flex-col ${
                    position.highlight
                      ? 'bg-white/10 border-[#39E590]'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <GlowingEffect spread={35} glow={true} disabled={false} proximity={56} inactiveZone={0.01} borderWidth={2} />
                  {position.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#39E590] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 text-sm">Senior Expert</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold text-white">AU${position.seniorRate}</span>
                    <span className="text-gray-500 ml-1">/hour</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {position.seniorFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-[#39E590] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="pt-4 border-t border-white/10 mb-6">
                    <p className="text-gray-500 text-xs mb-2">Common Tools:</p>
                    <div className="flex gap-2 flex-wrap">
                      {position.tools.map((tool, idx) => (
                        <span key={idx} className="text-2xl">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hire Button */}
                  <FlowButton 
                    text={`Hire a ${position.title}`}
                    href="#contact"
                    className="w-full justify-center text-sm"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Card - Custom/Sticky (Non-scrolling) */}
          <div className="lg:w-1/3">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 lg:sticky lg:top-24 flex flex-col h-fit">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Full Squad</h3>
                <p className="text-gray-400 text-sm">A complete team to build your product from scratch.</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-bold text-white">Custom</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Project Manager',
                  'Senior Developers',
                  'QA Specialist',
                  'UI/UX Designer',
                  'Dedicated Slack Channel',
                  'Weekly Sprints'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[#39E590] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <FlowButton 
                text="Get Started" 
                href="#contact"
                className="w-full py-4 text-sm font-bold justify-center"
              />

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#39E590]/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#39E590]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Fast Setup</h4>
                      <p className="text-gray-500 text-xs">Team ready in 7 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#39E590]/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-[#39E590]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Cost Savings</h4>
                      <p className="text-gray-500 text-xs">Up to 70% less than local</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#39E590]/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#39E590]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Flexible</h4>
                      <p className="text-gray-500 text-xs">Scale up or down anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
