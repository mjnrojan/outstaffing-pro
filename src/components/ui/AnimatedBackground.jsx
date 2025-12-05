import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({ variant = 'default' }) {
  // Grid pattern background
  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]"></div>
      </div>
    );
  }

  // Gradient orbs
  if (variant === 'orbs') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#39E590]/10 rounded-full blur-[120px]"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#39E590]/5 rounded-full blur-[120px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  // Dots pattern
  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff08_1px,transparent_0)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
      </div>
    );
  }

  // Diagonal lines
  if (variant === 'lines') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#ffffff05_49%,#ffffff05_51%,transparent_52%)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80"></div>
      </div>
    );
  }

  // Animated mesh gradient
  if (variant === 'mesh') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#39E590]/5 to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#39E590]/5 to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    );
  }

  // Default - subtle gradient
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39E590]/5 to-transparent"></div>
    </div>
  );
}
