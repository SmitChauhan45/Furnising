import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductScroll from './components/ProductScroll';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState<'sofa' | 'chair' | 'bed' | null>(null);

  const handleCategoryClick = (category: 'sofa' | 'chair' | 'bed') => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
      
      setTimeout(() => {
        const element = document.getElementById('product-scroll');
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategorySection 
        onCategoryClick={handleCategoryClick} 
        activeCategory={activeCategory} 
      />
      
      <div id="product-scroll">
        <ProductScroll category={activeCategory} />
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;