import React from 'react';

interface CategorySectionProps {
  onCategoryClick: (category: 'sofa' | 'chair' | 'bed') => void;
  activeCategory: string | null;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onCategoryClick, activeCategory }) => {
  const categories = [
    {
      id: 'sofa',
      name: 'Sofas',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premium comfort for your living space',
    },
    {
      id: 'chair',
      name: 'Chairs',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Elegant seating solutions',
    },
    {
      id: 'bed',
      name: 'Beds',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Designed for restful nights',
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted furniture collections, designed with comfort and elegance in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-2 ${activeCategory === category.id ? 'ring-2 ring-amber-500 scale-[1.02]' : ''}`}
              onClick={() => onCategoryClick(category.id as 'sofa' | 'chair' | 'bed')}
            >
              <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-serif">{category.name}</h3>
                <p className="text-gray-200">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;