import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MarqueeCard from './MarqueeCard';
import LogoLoop from './LogoLoop';
import { sectors } from '../data/sectors';

const SingleRowMarquee = ({ isPaused, onCardHover }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-6 items-start"
        animate={{
          x: isPaused ? undefined : [0, -3200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {/* Render cards 3 times for seamless loop */}
        {[...Array(3)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {sectors.map((sector, index) => (
              <div
                key={`${setIndex}-${index}`}
                className={index % 2 === 0 ? 'mt-0' : 'mt-12'}
                onMouseEnter={() => onCardHover(true)}
                onMouseLeave={() => onCardHover(false)}
              >
                <MarqueeCard
                  imageUrl={sector.imageUrl}
                  imageAlt={sector.imageAlt}
                  title={sector.title}
                  description={sector.description}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// Brand logos for the "Brands that trust us" section
const BrandLogo = ({ children, title }) => (
  <div className="h-12 flex items-center justify-center text-white/60 hover:text-white/90 transition-colors" title={title}>
    {children}
  </div>
);

const brandLogos = [
  {
    node: (
      <BrandLogo title="Google">
        <svg className="h-8 w-auto" viewBox="0 0 272 92" fill="currentColor">
          <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
          <path d="M225 3v65h-9.5V3h9.5z"/>
          <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
          <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Google"
  },
  {
    node: (
      <BrandLogo title="Microsoft">
        <svg className="h-8 w-auto" viewBox="0 0 108 23" fill="currentColor">
          <path d="M44.836 4.6v13.8h-5.3V4.6h5.3zm3.598 0h5.3v13.8h-5.3V4.6zm11.2 0h5.3v13.8h-5.3V4.6zm-22.4 0h5.3v13.8h-5.3V4.6zm-11.2 0h5.3v13.8h-5.3V4.6zm-11.2 0h5.3v13.8h-5.3V4.6z"/>
          <path d="M0 0h10.4v10.4H0V0zm12 0h10.4v10.4H12V0zM0 12h10.4v10.4H0V12zm12 0h10.4v10.4H12V12z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Microsoft"
  },
  {
    node: (
      <BrandLogo title="Amazon">
        <svg className="h-8 w-auto" viewBox="0 0 603 182" fill="currentColor">
          <path d="M374.1 141.6c-31.7 23.4-77.7 35.9-117.3 35.9-55.5 0-105.5-20.5-143.3-54.7-3-2.7-.3-6.3 3.3-4.2 41.1 23.9 91.9 38.3 144.4 38.3 35.4 0 74.4-7.3 110.3-22.5 5.4-2.3 9.9 3.5 4.6 7.2z"/>
          <path d="M387.5 126.4c-4-5.2-26.7-2.5-36.9-1.3-3.1.4-3.6-2.3-.8-4.3 18.1-12.7 47.7-9 51.2-4.8 3.5 4.3-.9 34-17.9 48.2-2.6 2.2-5.1 1-3.9-1.9 3.8-9.4 12.3-30.6 8.3-35.9z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Amazon"
  },
  {
    node: (
      <BrandLogo title="Apple">
        <svg className="h-10 w-auto" viewBox="0 0 814 1000" fill="currentColor">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Apple"
  },
  {
    node: (
      <BrandLogo title="Meta">
        <svg className="h-8 w-auto" viewBox="0 0 512 512" fill="currentColor">
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Meta"
  },
  {
    node: (
      <BrandLogo title="Netflix">
        <svg className="h-8 w-auto" viewBox="0 0 1024 276.742" fill="currentColor">
          <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"/>
        </svg>
      </BrandLogo>
    ),
    title: "Netflix"
  },
];

export default function Sectors() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section 
      className="py-16 bg-[#0A0A0A] border-b border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          We work with every business sector
        </p>
      </div>
      
      {/* Single row with alternating vertical alignment */}
      <SingleRowMarquee isPaused={isPaused} onCardHover={setIsPaused} />

      {/* Brands that trust us - Logo Loop */}
      <div className="mt-20">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Brands that trust us
        </p>
        <div className="relative">
          {/* Blur edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          
          <LogoLoop
            logos={brandLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={80}
            pauseOnHover
            fadeOut={false}
            scaleOnHover
            ariaLabel="Brands that trust us"
            className="opacity-50 hover:opacity-70 transition-opacity md:pointer-events-auto touch-pan-x"
          />
        </div>
      </div>
    </section>
  );
}
