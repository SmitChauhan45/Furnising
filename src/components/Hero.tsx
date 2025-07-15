import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex items-center h-screen">
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="max-w-xl">
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Flair Rest <span className="text-amber-400">Live in Flair, Rest in Comfort</span>
          </h1>
          <p className="mb-8 text-xl font-light text-gray-200 md:text-2xl">
            Elevate Your Space with Flair & Comfort.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href="#products" 
              className="px-8 py-4 text-lg font-medium text-center text-white transition-all transform rounded-md bg-amber-600 hover:bg-amber-700 hover:-translate-y-1"
            >
              Explore Collection
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-lg font-medium text-center text-white transition-all transform bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-gray-900 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute z-10 transform -translate-x-1/2 bottom-6 left-1/2 animate-bounce">
        <a href="#products" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;