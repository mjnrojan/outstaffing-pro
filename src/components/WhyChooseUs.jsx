import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 text-lg">Data-driven results for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">Global Talent Pool</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Access a curated network of professionals from around the world. We rigorously vet every candidate to ensure they meet your high standards.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#39E590] mb-2">
                  <Counter from={0} to={500} />+
                </div>
                <div className="text-gray-400">Jobs Filled</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#39E590] mb-2">
                  <Counter from={0} to={98} />%
                </div>
                <div className="text-gray-400">Retention Rate</div>
              </div>
            </div>
          </div>

          {/* Tall Card */}
          <div className="md:col-span-1 md:row-span-2 bg-linear-to-b from-[#39E590]/10 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center justify-center">
             <div className="w-20 h-20 bg-[#39E590] rounded-full flex items-center justify-center mb-6 text-[#0A0A0A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fast Hiring</h3>
            <p className="text-gray-400">
              Average time to fill a position is less than 7 days. Start your project sooner.
            </p>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Cost Effective</h3>
            <p className="text-gray-400 text-sm">Save up to 60% on labor costs compared to local hiring.</p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
            <p className="text-gray-400 text-sm">We handle all legal and tax compliance for your remote team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
