import React from 'react';
import Navbar from '../components/Navbar.jsx';
import myPortrait from '../assets/my_image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#161616] font-sans overflow-hidden flex flex-col relative z-0">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      {/* UPDATE: Added flex-col for mobile, lg:flex-row for desktop, and adjusted padding/margins */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-0 relative z-10">
        
        {/* Left Column: Typography & Call to Actions */}
        <div className="w-full lg:w-[55%] flex flex-col z-20">
          
          {/* Overline / Subtitle */}
          <div className="flex items-center space-x-4 mb-4 lg:mb-6">
            <div className="w-8 lg:w-10 h-[2px] bg-[#e5ff00]"></div>
            <span className="text-yellow-500 text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase">
              EST. 2024 / SONIC VISUALS
            </span>
          </div>

          {/* Huge Headline */}
          {/* UPDATE: Scaled down text for mobile (text-5xl), scales up on sm and lg screens */}
          <h1 className="text-5xl sm:text-[4rem] lg:text-[5.5rem] leading-[1.05] font-black text-white tracking-tight mb-6 lg:mb-8 uppercase">
            HELLO, I'M <br />
            <span className="text-yellow-500">SUDEERA PERERA.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-[15px] leading-relaxed max-w-[500px] mb-10 lg:mb-12 font-light tracking-wide">
            Transforming frequency into form. Specialized in high-concept album cover design 
            and visual ecosystems for electronic music artists and record labels worldwide.
          </p>

          {/* Action Buttons */}
          {/* UPDATE: Flex-col on mobile so they stack, flex-row on small screens and up */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <button className="w-full sm:w-auto bg-[#e5ff00] text-black px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:brightness-110 transition-all text-center">
              START A PROJECT
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white border border-gray-500 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white transition-all text-center">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Right Column: Framed Image & Glow Effect */}
        {/* UPDATE: Added top margin for mobile spacing, centered content on mobile */}
        <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end items-center z-10 mt-16 lg:mt-0">
          
          {/* The Massive Yellow Radial Glow */}
          {/* UPDATE: Scaled down the glow size and blur on mobile so it doesn't break the layout, centered it */}
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-yellow-500 rounded-full blur-[80px] lg:blur-[140px] opacity-[0.35] pointer-events-none z-0"></div>

          {/* The Framed Portrait */}
          {/* UPDATE: Used max-w to ensure the image never exceeds screen width, removed right margin on mobile */}
          <div className="relative z-10 p-[2px] border border-gray-600/40 bg-[#1a1a1a] shadow-2xl w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] lg:mr-12">
            <img
              src={myPortrait}
              alt="Portrait of Sudeera"
              className="w-full h-auto object-cover grayscale contrast-[1.0] brightness-80 block"
            />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Home;