import React from 'react';
import Navbar from '../components/Navbar.jsx';
import myPortrait from '../assets/my_image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#161616] font-sans overflow-hidden flex flex-col relative z-0">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto flex items-center justify-between px-12 lg:px-20 relative z-10">
        
        {/* Left Column: Typography & Call to Actions */}
        <div className="w-full lg:w-[55%] flex flex-col z-20 pt-8">
          
          {/* Overline / Subtitle */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-10 h-[2px] bg-[#e5ff00]"></div>
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.25em] uppercase">
              EST. 2024 / SONIC VISUALS
            </span>
          </div>

          {/* Huge Headline */}
          <h1 className="text-[4rem] lg:text-[5.5rem] leading-[1.05] font-black text-white tracking-tight mb-8 uppercase">
            HELLO, I'M <br />
            <span className="text-yellow-500">SUDEERA PERERA.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-[15px] leading-relaxed max-w-[500px] mb-12 font-light tracking-wide">
            Transforming frequency into form. Specialized in high-concept album cover design 
            and visual ecosystems for electronic music artists and record labels worldwide.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-5">
            <button className="bg-[#e5ff00] text-black px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:brightness-110 transition-all">
              START A PROJECT
            </button>
            <button className="bg-transparent text-white border border-gray-500 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white transition-all">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Right Column: Framed Image & Glow Effect */}
        <div className="w-full lg:w-[45%] relative flex justify-end items-center z-10 h-full">
          
          {/* The Massive Yellow Radial Glow */}
          {/* Positioned absolutely so it sits behind the framed image but radiates outward */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[140px] opacity-[0.35] pointer-events-none z-0"></div>

          {/* The Framed Portrait */}
          <div className="relative z-10 p-[2px] border border-gray-600/40 bg-[#1a1a1a] shadow-2xl mr-4 lg:mr-12">
            <img
              src={myPortrait}
              alt="Portrait of Sudeera"
              className="w-[350px] lg:w-[420px] h-auto object-cover grayscale contrast-[1.0] brightness-80 block"
            />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Home;