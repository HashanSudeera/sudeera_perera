import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the mobile menu open and closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function upgraded to accept an array of paths or a single string
  const getLinkStyle = (paths) => {
    // Check if the current pathname is in the array, or matches the exact string
    const isMatch = Array.isArray(paths) 
      ? paths.includes(location.pathname) 
      : location.pathname === paths;

    return isMatch
      ? 'text-yellow-500 border-b-2 border-yellow-500'
      : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="w-full bg-[#111111] border-b border-gray-600/40 relative z-50">
      
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
          <img src={Logo} alt='logo' className='w-[150px]'/>
        </Link>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <ul className="hidden md:flex items-center space-x-8 text-xs tracking-widest font-medium">
          <li className={`cursor-pointer pb-1 transition-colors ${getLinkStyle('/')}`}>
            <Link to="/">HOME</Link>
          </li>
          
          {/* Passed an array here so WORK is active on both /work and /design */}
          <li className={`cursor-pointer pb-1 transition-colors ${getLinkStyle(['/work', '/design'])}`}>
            <Link to="/work">WORK</Link>
          </li>
          
          <li className={`cursor-pointer pb-1 transition-colors ${getLinkStyle('/skills')}`}>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li className={`cursor-pointer pb-1 transition-colors ${getLinkStyle('/about')}`}>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        {/* Desktop Hire Button (Hidden on mobile) */}
        <button className="hidden md:block bg-yellow-500 text-black px-8 py-2 text-sm font-semibold hover:bg-[#eceee3] transition-colors">
          Contact
        </button>

        {/* Mobile Hamburger Menu Icon */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[#eceee3] hover:text-yellow-500 focus:outline-none transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              // X icon when the menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger lines matching your design when closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111] md:hidden flex flex-col items-center py-8 space-y-6 border-b border-gray-600/40 shadow-2xl">
          <Link 
            to="/" 
            onClick={toggleMenu}
            className={`cursor-pointer pb-1 transition-colors text-sm tracking-widest font-medium ${getLinkStyle('/')}`}
          >
            HOME
          </Link>
          
          {/* Passed an array here as well for the mobile dropdown */}
          <Link 
            to="/work" 
            onClick={toggleMenu}
            className={`cursor-pointer pb-1 transition-colors text-sm tracking-widest font-medium ${getLinkStyle(['/work', '/design'])}`}
          >
            WORK
          </Link>

          <Link 
            to="/skills" 
            onClick={toggleMenu}
            className={`cursor-pointer pb-1 transition-colors text-sm tracking-widest font-medium ${getLinkStyle('/skills')}`}
          >
            SKILLS
          </Link>

          <Link 
            to="/about" 
            onClick={toggleMenu}
            className={`cursor-pointer pb-1 transition-colors text-sm tracking-widest font-medium ${getLinkStyle('/about')}`}
          >
            ABOUT
          </Link>

          <button 
            onClick={toggleMenu}
            className="bg-yellow-500 text-black px-12 py-3 mt-4 text-sm font-semibold hover:bg-[#eceee3] transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;