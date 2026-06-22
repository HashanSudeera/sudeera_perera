import React from 'react';
import Navbar from '../components/Navbar'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Works = () => {
  const ribbonText = [
    "TYPOGRAPHY", "•",
    "FRONTEND", "•",
    "UI/UX", "•",
    "REACT", "•",
    "BRANDING", "•",
    "TAILWIND", "•",
    "MOTION", "•",
    "SYSTEMS", "•"
  ];

  return (
    <div className="min-h-screen bg-[#161616] font-sans relative overflow-hidden flex flex-col">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Content Grid */}
      {/* Adjusted padding for mobile (px-6, py-10) */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16 relative z-10 flex items-center">
        
        {/* Added gap-16 for better vertical spacing on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 w-full">
          
          <Link to="/design">
            {/* --- CARD 1: Design Works --- */}
            <div className="group cursor-pointer flex flex-col gap-4 md:gap-6 relative z-10">
              {/* Mock Image Box */}
              <div className="w-full aspect-[16/9] bg-[#1a1a1a] relative overflow-hidden flex items-center p-4 border border-gray-600/30 group-hover:border-gray-400 transition-colors">
                {/* Abstract Lines */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>
                
                {/* Huge Typography inside the box - Scaled for mobile */}
                <h2 className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] xl:text-[11rem] leading-[0.85] font-black text-gray-300 uppercase tracking-tighter relative z-10 group-hover:text-yellow-500 transition-colors">
                  DESIG <br /> NER
                </h2>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 md:gap-3 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">Design Works</h3>
                  {/* Yellow Arrow Icon */}
                  <svg className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-[85%]">
                  A custom design system and component library built specifically for high-contrast, industrial web interfaces.
                </p>
              </div>
            </div>
          </Link>

          {/* --- CARD 2: Dev Works --- */}
          {/* Optionally wrap this in a <Link> too if you have a dev page! */}
          <div className="group cursor-pointer flex flex-col gap-4 md:gap-6 relative z-10">
            {/* Mock Image Box */}
            <div className="w-full aspect-[16/9] bg-[#1a1a1a] relative overflow-hidden flex items-center p-4 border border-gray-600/30 group-hover:border-gray-400 transition-colors">
              {/* Abstract Lines */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>
              
              {/* Huge Typography inside the box - Scaled for mobile */}
              <h2 className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] xl:text-[11rem] leading-[0.85] font-black text-gray-300 uppercase tracking-tighter relative z-10 group-hover:text-yellow-500 transition-colors">
                DEVO <br /> LOPER
              </h2>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 md:gap-3 relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">Dev Works</h3>
                {/* Yellow Arrow Icon */}
                <svg className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-[85%]">
                A custom design system and component library built specifically for high-contrast, industrial web interfaces.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* The Animated Corner Ribbon */}
      {/* Adjusted positioning and size to fit perfectly on mobile while retaining the desktop look */}
      <div className="absolute -bottom-12 -right-32 md:-bottom-20 md:-right-40 w-[550px] md:w-[800px] h-12 md:h-20 bg-[#1a1a1a]/90 backdrop-blur-sm shadow-[0_0_40px_rgba(234,234,0,0.15)] transform -rotate-45 flex items-center overflow-hidden z-0 pointer-events-none">
        
        {/* Flex container to hold the two scrolling blocks */}
        <div className="flex w-max">
          
          {/* Block 1: The primary text */}
          <div className="flex shrink-0 animate-scroll items-center gap-4 md:gap-8 px-2 md:px-4">
            {ribbonText.map((item, index) => (
              <span key={`block1-${index}`} className="text-yellow-500 text-lg md:text-3xl font-black tracking-[0.2em] uppercase">
                {item}
              </span>
            ))}
          </div>

          {/* Block 2: The exact duplicate seamlessly following Block 1 */}
          <div className="flex shrink-0 animate-scroll items-center gap-4 md:gap-8 px-2 md:px-4" aria-hidden="true">
            {ribbonText.map((item, index) => (
              <span key={`block2-${index}`} className="text-yellow-500 text-lg md:text-3xl font-black tracking-[0.2em] uppercase">
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Works;