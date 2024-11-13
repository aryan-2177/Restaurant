import React, { useState, useRef, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import menuData from '../data/menuItems';
import CategoryNav from './CategoryNav';
import Toast from './Toast';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState('');
  
  const categories = Array.from(new Set(menuData.map(item => item.category)));
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredItems = menuData.filter(item => {
    const matchesType = filterType === 'all' ? true : 
      filterType === 'veg' ? item.isVeg : !item.isVeg;
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesType && matchesCategory;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (selectedCategory) return;
      
      let current = '';
      categories.forEach(category => {
        const element = categoryRefs.current[category];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            current = category;
          }
        }
      });
      setActiveCategory(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories, selectedCategory]);

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    setLastAddedItem(item.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      categoryRefs.current[category]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      const offset = 160;
      window.scrollBy(0, -offset);
    }
  };

  return (
    <div className="relative">
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        selectedCategory={selectedCategory}
        filterType={filterType}
        onCategorySelect={handleCategorySelect}
        onFilterChange={setFilterType}
      />

      <div className="space-y-12 mt-8 px-4">
        {categories.map(category => {
          const categoryItems = filteredItems.filter(item => item.category === category);
          if (categoryItems.length === 0) return null;
          if (selectedCategory && category !== selectedCategory) return null;

          return (
            <div
              key={category}
              ref={el => (categoryRefs.current[category] = el)}
              className="scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div
                        className={`absolute top-2 right-2 w-6 h-6 rounded-full ${
                          item.isVeg ? 'bg-green-500' : 'bg-red-500'
                        } flex items-center justify-center`}
                      >
                        <Leaf className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold text-orange-600">
                          ₹{item.price}
                        </span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showToast && (
        <Toast message={`${lastAddedItem} added to cart`} />
      )}
    </div>
  );
}

export default Menu;