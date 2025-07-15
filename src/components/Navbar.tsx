import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-black/20 backdrop-blur-sm py-4'}`}>
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6">
        <a href="#" className={`text-3xl font-serif font-bold ${isScrolled ? 'text-amber-800' : 'text-white'} transition-colors duration-300`}>
          Flair Rest
        </a>
        
        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Home</a>
          <a href="#products" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Products</a>
          <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Contact</a>
          <a href="#contact" className="px-4 py-2 text-white transition-colors rounded-md bg-amber-600 hover:bg-amber-700">Get In Touch</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="w-full border-t md:hidden bg-white/95 backdrop-blur-sm">
          <div className="container flex flex-col px-4 py-3 mx-auto space-y-3">
            <a href="#" className="py-2 text-gray-800 transition-colors hover:text-amber-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#products" className="py-2 text-gray-800 transition-colors hover:text-amber-600" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#contact" className="py-2 text-gray-800 transition-colors hover:text-amber-600" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#contact" className="px-4 py-2 text-center text-white transition-colors rounded-md bg-amber-600 hover:bg-amber-700" onClick={() => setIsOpen(false)}>Get In Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;