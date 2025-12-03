import React from 'react';
import { ArrowRight } from 'lucide-react';

const ButtonContent = ({ text }) => (
  <>
    {/* Circle background */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#39E590] rounded-[50%] opacity-0 z-0 group-hover:w-[400px] group-hover:h-[400px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

    {/* Left arrow */}
    <ArrowRight 
      className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-10 group-hover:left-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
    />

    {/* Text */}
    <span className="relative z-10 -translate-x-3 group-hover:translate-x-3 transition-all duration-700 ease-out">
      {text}
    </span>

    {/* Right arrow */}
    <ArrowRight 
      className="absolute w-4 h-4 right-4 stroke-white fill-none z-10 group-hover:right-[-25%] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
    />
  </>
);

export function FlowButton({ text = "Get Started Now", href = "#", onClick, className = "" }) {
  const baseClasses = `group relative inline-flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#39E590]/40 bg-transparent px-8 py-3 text-sm font-semibold text-white cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#39E590] hover:text-[#0A0A0A] hover:rounded-[12px] active:scale-[0.95] ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        <ButtonContent text={text} />
      </button>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      <ButtonContent text={text} />
    </a>
  );
}

export default FlowButton;
