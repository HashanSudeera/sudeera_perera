import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if your folder structure is different

const SocialMediaKit = () => {
  return (
    // Main container matching the dark background of your design
    <div className="min-h-screen bg-[#0d0d0d] font-sans flex flex-col text-white">
      
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col">
        
        {/* 2. Hero Section: DOMINATE THE FEED */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 border-b border-zinc-800 pb-12">
          <div className="max-w-3xl">
            <h4 className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Design / Social Media kit
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9]">
              Social Media <br/> <span className="text-yellow-400">Kit</span>
            </h1>
          </div>
          <div className="max-w-md mt-8 lg:mt-0 lg:border-t-2 border-yellow-400 pt-4">
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              High-impact visual assets designed for maximum engagement. 
              We craft scroll-stopping content tailored for modern social platforms.
            </p>
          </div>
        </div>

        {/* 3. Top Asset Grid (Two Columns) */}
         <div className="mb-20">
          <h2 className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 border-l-2 border-yellow-400 pl-4">
            Cross-Platform Assets
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Asset Card 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4">
               {/* Replace with your actual image */}
               <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-700 font-bold tracking-widest">ASSET_01.JPG</span>
               </div>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-yellow-400 text-xs font-bold tracking-widest uppercase">3D Typography</h3>
              <span className="text-zinc-500 text-[10px] tracking-widest">INSTAGRAM // POST</span>
            </div>
          </div>
          

          {/* Asset Card 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4">
               {/* Replace with your actual image */}
               <div className="w-full h-full bg-gradient-to-bl from-zinc-800 to-black group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-700 font-bold tracking-widest">ASSET_02.JPG</span>
               </div>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Environment Design</h3>
              <span className="text-zinc-500 text-[10px] tracking-widest">STORY // REEL</span>
            </div>
          </div>
        </div>
        </div>

<div className="mb-5">
          <h2 className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 border-l-2 border-yellow-400 pl-4">
            Cross-Platform Assets
          </h2>
        {/* 4. Large Banner / Video Area (The glowing VOID section) */}
        <div className="w-full aspect-video bg-black border border-zinc-800 mb-6 relative overflow-hidden flex items-center justify-center group">
           <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 tracking-widest z-10">
             FEATURED
           </div>
           {/* Replace this div with an <img> or <video> tag */}
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center">
              <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-tighter filter drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                VOID
              </h2>
           </div>
        </div>
        
        {/* Banner Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-zinc-800 pb-16 mb-16">
           <div className="md:col-span-2">
             <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-2">Volume Strikes</h3>
             <p className="text-zinc-400 text-xs leading-relaxed max-w-xl">
               Digital identity rollout featuring 3D rendered typography and aggressive motion design elements.
             </p>
           </div>
           
        </div>
        </div>


        <div className="mb-10">
          <h2 className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 border-l-2 border-yellow-400 pl-4">
            Cross-Platform Assets
          </h2>
        {/* 4. Large Banner / Video Area (The glowing VOID section) */}
        <div className="w-full h-[200px] aspect-video bg-black border border-zinc-800 mb-6 relative flex items-center justify-center group">
           <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 tracking-widest z-10">
             FEATURED
           </div>
           {/* Replace this div with an <img> or <video> tag */}
           <div className="w-full h-200px bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center">
              
           </div>
        </div>
        
        {/* Banner Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-zinc-800 pb-16 mb-16">
           <div className="md:col-span-2">
             <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-2">Volume Strikes</h3>
             <p className="text-zinc-400 text-xs leading-relaxed max-w-xl">
               Digital identity rollout featuring 3D rendered typography and aggressive motion design elements.
             </p>
           </div>
           
        </div>
        </div>
<div className="mb-20 flex flex-col gap-16 border-t border-zinc-800 pt-16">
          
          {/* Top Row: Landscape placeholders */}
          <div>
            <h2 className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 border-l-2 border-yellow-400 pl-4">
              Horizontal Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden cursor-pointer">
                {/* Replace with your actual landscape image */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-600 font-bold tracking-widest text-xs">IMG_LANDSCAPE_1</span>
                </div>
              </div>
              <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden cursor-pointer">
                {/* Replace with your actual landscape image */}
                <div className="w-full h-full bg-gradient-to-bl from-zinc-800 to-black group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-600 font-bold tracking-widest text-xs">IMG_LANDSCAPE_2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Portrait placeholders */}
          <div>
            <h2 className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 border-l-2 border-yellow-400 pl-4">
              Vertical Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* aspect-[3/4] forces the tall, portrait shape from your reference image */}
              <div className="w-full aspect-[3/4] bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden cursor-pointer">
                {/* Replace with your actual portrait image */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-600 font-bold tracking-widest text-xs">IMG_PORTRAIT_1</span>
                </div>
              </div>
              <div className="w-full aspect-[3/4] bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden cursor-pointer">
                {/* Replace with your actual portrait image */}
                <div className="w-full h-full bg-gradient-to-bl from-zinc-800 to-black group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center">
                  <span className="text-zinc-600 font-bold tracking-widest text-xs">IMG_PORTRAIT_2</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* 7. Footer */}
      <footer className="w-full bg-black border-t border-zinc-900 py-8 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold tracking-widest text-xs mb-4 md:mb-0">
          STUDIO<span className="text-yellow-400">_VOID</span>
        </div>
        <ul className="flex space-x-6 text-zinc-500 text-[10px] tracking-widest uppercase">
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">Instagram</li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">Behance</li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">Twitter</li>
        </ul>
      </footer>

    </div>
  );
};

export default SocialMediaKit;