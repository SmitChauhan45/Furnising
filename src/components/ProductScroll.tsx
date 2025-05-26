import React, { useRef, useEffect } from 'react';
import { getProductsByCategory, Product } from '../data/products';

interface ProductScrollProps {
  category: 'sofa' | 'chair' | 'bed' | null;
}

const ProductScroll: React.FC<ProductScrollProps> = ({ category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (category && scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [category]);

  if (!category) return null;
  
  const products = getProductsByCategory(category);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-white relatiplve ms-3 me-3">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl font-bold text-gray-900 capitalize">{category} Collection</h3>
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 transition-colors rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 transition-colors rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollRef} 
          className="flex px-4 py-4 space-x-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory md:px-6 no-scrollbar"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-72 snap-start bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-xl font-medium text-gray-900">{product.name}</h4>
        <p className="mb-3 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-amber-600">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;