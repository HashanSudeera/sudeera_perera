import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed

// Your JSON data
import albumsData from '../data/album.json';

const DesignWork = () => {
  // 1. Set up state for the active filter
  const [activeFilter, setActiveFilter] = useState('ALL');

  // 2. State for tracking the selected album for pop-up
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // 3. New State: Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 4 rows * 3 columns on large screens

  // 4. Define your categories for the menu
  const categories = ['ALL', 'Electro(EDM)', 'Hip Hop', 'Typography','Portrait','Manipulation','Synthwave','Pop/Urban'];

  // 5. Filter the data based on the selected category
  const filteredAlbums = activeFilter === 'ALL' 
    ? albumsData 
    : albumsData.filter(album => album.category === activeFilter);

  // 6. Pagination Logic
  const indexOfLastAlbum = currentPage * itemsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - itemsPerPage;
  // Slice the array to only get the current page's albums
  const currentAlbums = filteredAlbums.slice(indexOfFirstAlbum, indexOfLastAlbum);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage);

  // Helper function to handle filter changes
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1); 
  };

  // Helper function to handle page changes AND scroll to top
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smoothly scroll the window back to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-grey-600 font-sans flex flex-col text-grey-50 relative">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col">
        
        {/* Hero Typography Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 pb-12">
          <div className="max-w-3xl">
            <h4 className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Design / Cover arts
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9]">
              Cover <span className="text-yellow-400">arts</span>
            </h1>
          </div>
          <div className="max-w-md mt-8 lg:mt-0 lg:border-t-2 border-yellow-400 pt-4">
            <p className="text-zinc-400 text-3xl leading-relaxed font-light">
              100 + 
            </p>
          </div>
        </div>

        {/* Portfolio Grid Section */}
        <div className="flex flex-col mb-16">
          
          {/* Header & Filters */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-8 border-b border-grey-400/30 pb-4 gap-y-4">
            <h2 className="text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase shrink-0">
              Album & Single covers
            </h2>
            
            {/* Dynamic Filter Menu */}
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold tracking-[0.15em] text-grey-200 uppercase">
              {categories.map((category) => (
                <li 
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`cursor-pointer pb-1 transition-colors ${
                    activeFilter === category 
                      ? 'text-yellow-500 border-b border-yellow-500' 
                      : 'hover:text-white'
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentAlbums.map((album) => (
              <div 
                key={album.id} 
                onClick={() => setSelectedAlbum(album)}
                className="aspect-square bg-grey-500 flex items-center justify-center overflow-hidden relative group cursor-pointer border border-grey-400/20 hover:border-grey-300 transition-colors"
              >
                {/* Album Cover Image */}
                <img 
                  src={album.imageUrl} 
                  alt={album.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500/333333/FFFFFF?text=Image+Not+Found";
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                   <h3 className="text-white font-bold text-xl tracking-widest mb-2">{album.title}</h3>
                   <span className="text-yellow-500 text-[10px] tracking-[0.2em] uppercase border border-yellow-500 px-3 py-1">
                     {album.category}
                   </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 flex-wrap gap-y-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button 
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors ${
                      currentPage === pageNumber 
                        ? 'bg-yellow-500 text-grey-600' 
                        : 'bg-grey-300 text-grey-600 hover:bg-grey-200'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Client Reviews Section */}
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
              Since 2021, I have operated as a top-tier freelancer on <span className="text-yellow-500 font-bold">FIVERR</span>, delivering over 400+ unique visual identities for independent artists and major labels worldwide. 
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

        {/* Social Media Kit Link Section */}
        <div className="flex flex-col mt-12 mb-8 items-center justify-center bg-grey-500 rounded-xl p-8 lg:p-12 border border-grey-400/20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 z-10">
            Need <span className="text-yellow-500">Social Media</span> Assets?
          </h2>
          <p className="text-grey-200 text-sm max-w-2xl mb-8 z-10 font-light px-4">
            Dominate the feed with high-impact visual assets designed for maximum engagement. 
            Explore our specialized social media kits tailored for modern platforms.
          </p>
          
          <a 
            href="/social-media-kit" 
            className="z-10 bg-yellow-500 text-grey-600 font-bold tracking-widest uppercase text-xs px-10 py-4 hover:brightness-110 transition-all cursor-pointer shadow-lg"
          >
            Open Social Media Kit
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-grey-400/20 py-8 px-6 md:px-12 lg:px-20 mt-auto flex flex-col md:flex-row justify-between items-center gap-y-4">
        <div className="text-yellow-500 font-bold tracking-widest text-xs">
          STUDIO_NOIR
        </div>
        <div className="text-grey-200 text-[10px] tracking-widest uppercase text-center">
          © 2024 STUDIO NOIR. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Image Pop-up Modal */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedAlbum(null)} 
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-grey-600 p-2 rounded-xl border border-grey-400/20 overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedAlbum(null)}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors z-10 p-2 bg-grey-600/80 rounded-full backdrop-blur"
            >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <img 
              src={selectedAlbum.imageUrl} 
              alt={selectedAlbum.title}
              className="w-full max-w-[600px] h-auto object-contain rounded-lg"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1000/333333/FFFFFF?text=Image+Not+Found";}}
            />
             <div className="p-6 text-center w-full">
                <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-widest mb-3">{selectedAlbum.title}</h3>
                <span className="text-yellow-500 text-[10px] md:text-xs tracking-[0.2em] uppercase border border-yellow-500 px-4 py-2 inline-block">
                   {selectedAlbum.category}
                </span>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DesignWork;