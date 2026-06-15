import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed

import { Link } from 'react-router-dom';

const DesignWork = () => {
  // Mock array to generate the 12 portfolio items quickly
  const portfolioItems = Array.from({ length: 12 });

  return (
    <div className="min-h-screen bg-grey-600 font-sans flex flex-col text-grey-50">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-12 lg:px-20 py-16 flex flex-col">
        
        {/* 2. Hero Typography Section */}
        <div className="mb-20 max-w-4xl">
          <h1 className="text-h3 lg:text-[5rem] leading-[0.95] font-black uppercase tracking-tight mb-6">
            SONIC <span className="text-yellow-500">VISUALS</span> FOR <br />
            THE NEW ERA.
          </h1>
          <p className="text-grey-200 text-sm md:text-base leading-relaxed max-w-2xl font-light tracking-wide">
            Translating frequency into form. Our album covers are designed to be as visceral as the music 
            they represent. From digital rollouts to physical vinyl pressings.
          </p>
        </div>

        {/* 3. Portfolio Grid Section */}
        <div className="flex flex-col mb-16">
          
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-grey-400/30 pb-4">
            <h2 className="text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-0">
              FEATURED DISCOGRAPHY
            </h2>
            
            <ul className="flex space-x-6 text-[10px] font-bold tracking-[0.15em] text-grey-200 uppercase">
              <li className="text-yellow-500 border-b border-yellow-500 pb-1 cursor-pointer">ALL</li>
              <li className="hover:text-white transition-colors cursor-pointer pb-1">TECHNO</li>
              <li className="hover:text-white transition-colors cursor-pointer pb-1">AMBIENT</li>
              <li className="hover:text-white transition-colors cursor-pointer pb-1">INDUSTRIAL</li>
            </ul>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioItems.map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-grey-500 flex items-center justify-center overflow-hidden relative group cursor-pointer border border-grey-400/20 hover:border-grey-300 transition-colors"
              >
                {/* Placeholder graphic simulating your 3D art */}
                <div className="w-[60%] h-[60%] bg-gradient-to-br from-grey-400 to-grey-600 transform rotate-45 shadow-2xl group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-grey-600 text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-grey-300 text-grey-600 hover:bg-grey-200 transition-colors text-xs font-bold">2</button>
            <button className="w-8 h-8 flex items-center justify-center bg-grey-300 text-grey-600 hover:bg-grey-200 transition-colors text-xs font-bold">3</button>
            <button className="w-8 h-8 flex items-center justify-center bg-grey-300 text-grey-600 hover:bg-grey-200 transition-colors text-xs font-bold">4</button>
            <button className="w-8 h-8 flex items-center justify-center bg-grey-300 text-grey-600 hover:bg-grey-200 transition-colors text-xs font-bold">5</button>
          </div>
        </div>

        {/* 4. Client Reviews Section */}
        <div className="flex flex-col mt-10 mb-10">
          <h2 className="text-[3rem] lg:text-[4rem] leading-none font-black uppercase tracking-tight mb-8">
            <span className="text-yellow-500">CLIENT</span> REVIEWS
          </h2>

          <div className="bg-grey-500 rounded-xl p-8 lg:p-12 border border-grey-400/20 relative">
            <h3 className="text-white text-sm font-bold mb-2">Client Name</h3>
            
            {/* 5 Stars */}
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-grey-100 text-sm leading-relaxed max-w-5xl">
              Since 2021, I have operated as a top-tier freelancer on <span className="text-yellow-500 font-bold">FIVERR</span>, delivering over 400+ unique visual identities for independent artists and major labels worldwide. Since 2021, I have operated as a top-tier freelancer on <span className="text-yellow-500 font-bold">FIVERR</span>, delivering over 400+ unique visual identities for independent artists and major labels worldwide. Since 2021, I have operated as a top-tier freelancer on <span className="text-yellow-500 font-bold">FIVERR</span>, delivering over 400+ unique visual identities for independent artists and major labels worldwide.
            </p>
          </div>

          {/* Review Navigation Arrows */}
          <div className="flex justify-center space-x-2 mt-6">
            <button className="w-8 h-8 bg-yellow-500 flex items-center justify-center hover:brightness-110 transition-all">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 bg-yellow-500 flex items-center justify-center hover:brightness-110 transition-all">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </main>

      {/* 5. Footer */}
      <footer className="w-full border-t border-grey-400/20 py-8 px-12 lg:px-20 mt-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-yellow-500 font-bold tracking-widest text-xs mb-4 md:mb-0">
          STUDIO_NOIR
        </div>
        <div className="text-grey-200 text-[10px] tracking-widest uppercase">
          © 2024 STUDIO NOIR. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
};

export default DesignWork;