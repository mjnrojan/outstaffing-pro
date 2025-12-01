import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote: "Highly talented team with extensive experience that vastly improved our brand.",
    author: "Charles Rogers",
    role: "CEO, Cloudline",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Reduced creative spend by 40% and boosted website quality and engagement.",
    author: "Jarl Hobbs",
    role: "Head of Brand, Brymec",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "Responsive and professional throughout the website building process.",
    author: "Andrew McLelland",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "The best decision we made for our scaling strategy.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Incredible talent pool and seamless onboarding.",
    author: "Mike Ross",
    role: "Founder, StartupX",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  }
];

const TestimonialCard = ({ t, index }) => {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors w-[350px] flex-shrink-0 mx-4">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={t.image}
          alt={t.author}
          className="w-12 h-12 rounded-full object-cover border border-white/10"
        />
        <div>
          <h4 className="text-white font-semibold text-sm">{t.author}</h4>
          <p className="text-gray-500 text-xs">{t.role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
    </div>
  );
};

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trusted by innovative teams</h2>
        <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Left */}
        <motion.div style={{ x: x1 }} className="flex">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`row1-${i}`} t={t} index={i} />
          ))}
        </motion.div>

        {/* Row 2 - Right */}
        <motion.div style={{ x: x2 }} className="flex">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`row2-${i}`} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
