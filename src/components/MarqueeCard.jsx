import React from 'react';
import { cn } from '../utils/cn';

export default function MarqueeCard({
  imageUrl,
  imageAlt,
  title,
  description,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative w-[400px] h-[280px] overflow-hidden rounded-xl bg-card shadow-lg flex-shrink-0",
        "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2",
        className
      )}
      {...props}
    >
      {/* Background Image with Zoom Effect */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6">
        {/* Text Content - Slides up on hover */}
        <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
          <h3 className="text-3xl font-bold text-white mb-1">{title}</h3>
          
          {/* Description - Fades in on hover */}
          <p className="text-sm text-white/70 leading-relaxed mb-3 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-24">
            {description}
          </p>

          {/* CTA Button - Appears from below on hover */}
          <div className="opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0A0A0A] bg-[#39E590] rounded-lg hover:bg-[#2dd67d] transition-colors"
            >
              Explore Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
