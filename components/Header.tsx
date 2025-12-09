import React, { useState } from 'react';
import { Search, Menu, X, Gavel } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* 
              NOTE: In a real environment, replace the src below with your actual logo file path.
              I am simulating the logo look with text/icon backup in case the image doesn't load.
            */}
            <a href="#" className="flex items-center gap-2">
               <div className="flex flex-col items-center">
                  {/* Placeholder for the User's Dolphin Logo */}
                  <div className="h-12 w-auto object-contain text-3xl font-extrabold tracking-tighter">
                    <span className="text-[#2c5282]">SoCal</span>
                    <span className="text-[#4fd1c5]">Bid</span>
                    <span className="text-gray-400 text-sm font-normal">.com</span>
                  </div>
               </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'About Us', 'Auctions', 'Contact Us', 'Get Notifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-socal-mid font-semibold text-sm uppercase tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="text-gray-500 hover:text-socal-mid">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-socal-mid">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About Us', 'Auctions', 'Contact Us', 'Get Notifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-socal-mid hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};