import React from 'react';
import Logo from '../assets/logo.png';


import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

const location = useLocation();
  return (
    <nav className="w-full bg-grey-500 flex items-center justify-between px-10 py-5 border-b border-gray-600/40 relative z-50">
      {/* Logo */}
      <div>
        <img src={Logo} className='w-[130px]'/>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-8 text-xs tracking-widest text-gray-300 font-medium">
        <li className="pb-1 cursor-pointer ${location.pathname === '/' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'hover:text-white'}">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:text-white transition-colors cursor-pointer pb-1 ${location.pathname === '/work' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'hover:text-white'}">
          <Link to="/work">WORK</Link>
        </li>
        <li className="hover:text-white transition-colors cursor-pointer pb-1">
          SKILLS
        </li>
        <li className="hover:text-white transition-colors cursor-pointer pb-1">
          ABOUT
        </li>
      </ul>

      {/* Hire Button */}
      <button className="bg-yellow-500 text-black px-8 py-2 text-sm font-semibold hover:bg-[#bce600] transition-colors">
        HIRE
      </button>
    </nav>
  );
};

export default Navbar;