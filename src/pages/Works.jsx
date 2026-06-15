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
    <div className="min-h-screen bg-grey-600 font-sans relative overflow-hidden flex flex-col">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Content Grid */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-12 lg:px-20 py-16 relative z-10 flex items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <Link to="/design">
          {/* --- CARD 1: Design Works --- */}
          <div className="group cursor-pointer flex flex-col gap-6 relative z-10">
            {/* Mock Image Box */}
            <div className="w-full aspect-[16/9] bg-grey-700 relative overflow-hidden flex items-center p-2 border border-grey-500/30 group-hover:border-grey-400 transition-colors">
              {/* Abstract Lines (Optional CSS styling to mimic your image) */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>
              
              {/* Huge Typography inside the box */}
              <h2 className=" text-[7rem] lg:text-[11rem] leading-[0.85] font-black text-grey-100 uppercase tracking-tighter relative z-10 hover:text-yellow-500">
                DESIG <br /> NER
              </h2>
              
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 relative">
              <div className="flex items-center justify-between">
                <h3 className="text-h6 font-bold text-white tracking-wide">Design Works</h3>
                {/* Yellow Arrow Icon */}
                <svg className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-grey-300 text-sm leading-relaxed max-w-[90%]">
                A custom design system and component library built specifically for high-contrast, industrial web interfaces.
              </p>
            </div>
          </div>
          </Link>

          {/* --- CARD 2: Dev Works --- */}
          <div className="group cursor-pointer flex flex-col gap-6 relative z-10">
            {/* Mock Image Box */}
            <div className="w-full aspect-[16/9] bg-grey-700 relative overflow-hidden flex items-center p-2 border border-grey-500/30 group-hover:border-grey-400 transition-colors">
              {/* Abstract Lines */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>
              
              {/* Huge Typography inside the box */}
              <h2 className="text-[7rem] lg:text-[11rem] leading-[0.85] font-black text-grey-100 uppercase tracking-tighter relative z-10 hover:text-yellow-500">
                DEVO <br /> LOPER
              </h2>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 relative">
              <div className="flex items-center justify-between">
                <h3 className="text-h6 font-bold text-white tracking-wide">Dev Works</h3>
                {/* Yellow Arrow Icon */}
                <svg className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-grey-300 text-sm leading-relaxed max-w-[90%]">
                A custom design system and component library built specifically for high-contrast, industrial web interfaces.
              </p>
            </div>
          </div>

        </div>
      </main>
{/* The Animated Corner Ribbon */}
      <div className="absolute -bottom-20 -right-40 w-[800px] h-20 bg-grey-800/90 backdrop-blur-sm shadow-[0_0_40px_rgba(234,234,0,0.15)] transform -rotate-45 flex items-center overflow-hidden z-0 pointer-events-none">
        
        {/* Flex container to hold the two scrolling blocks */}
        <div className="flex w-max">
          
          {/* Block 1: The primary text */}
          <div className="flex shrink-0 animate-scroll items-center gap-8 px-4">
            {ribbonText.map((item, index) => (
              <span key={`block1-${index}`} className="text-yellow-500 text-3xl font-black tracking-[0.2em] uppercase">
                {item}
              </span>
            ))}
          </div>

          {/* Block 2: The exact duplicate seamlessly following Block 1 */}
          <div className="flex shrink-0 animate-scroll items-center gap-8 px-4" aria-hidden="true">
            {ribbonText.map((item, index) => (
              <span key={`block2-${index}`} className="text-yellow-500 text-3xl font-black tracking-[0.2em] uppercase">
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