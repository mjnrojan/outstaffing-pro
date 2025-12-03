import React from 'react';
import LogoLoop from './LogoLoop';

const partnerLogos = [
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Brymec', alt: 'Brymec', title: 'Brymec' },
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Automation', alt: 'Automation Anywhere', title: 'Automation Anywhere' },
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Lumen3', alt: 'Lumen3', title: 'Lumen3' },
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Cloudline', alt: 'Cloudline', title: 'Cloudline' },
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Squashed+Robot', alt: 'Squashed Robot', title: 'Squashed Robot' },
  { src: 'https://via.placeholder.com/120x40/39E590/0A0A0A?text=Jointly', alt: 'Jointly', title: 'Jointly' },
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-16 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-12 uppercase tracking-widest">
          Trusted by innovative teams
        </p>
        
        <div className="relative">
          <LogoLoop
            logos={partnerLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={64}
            pauseOnHover
            fadeOut
            fadeOutColor="#0A0A0A"
            scaleOnHover
            ariaLabel="Trusted partner companies"
            className="opacity-60 hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
