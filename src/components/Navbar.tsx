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
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className={`text-3xl font-serif font-bold ${isScrolled ? 'text-amber-800' : 'text-white'} transition-colors duration-300`}>
          Jay Ambe
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Home</a>
          <a href="#products" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Products</a>
          <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}>Contact</a>
          <a href="#contact" className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">Get In Touch</a>
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm w-full border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#" className="text-gray-800 py-2 hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#products" className="text-gray-800 py-2 hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#contact" className="text-gray-800 py-2 hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#contact" className="px-4 py-2 bg-amber-600 text-white rounded-md text-center hover:bg-amber-700 transition-colors" onClick={() => setIsOpen(false)}>Get In Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;