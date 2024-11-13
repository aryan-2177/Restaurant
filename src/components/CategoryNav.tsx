import React from 'react';
import { Leaf, UtensilsCrossed } from 'lucide-react';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  selectedCategory: string;
  filterType: 'all' | 'veg' | 'nonveg';
  onCategorySelect: (category: string) => void;
  onFilterChange: (type: 'all' | 'veg' | 'nonveg') => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  selectedCategory,
  filterType,
  onCategorySelect,
  onFilterChange,
}) => {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-br from-orange-50 to-red-50 pt-4 pb-2 shadow-md">
      <div className="flex gap-4 mb-4 px-4">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-md ${
            filterType === 'all'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-gray-600 hover:bg-orange-50'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5 inline-block mr-2" />
          All Items
        </button>
        <button
          onClick={() => onFilterChange('veg')}
          className={`px-4 py-2 rounded-md ${
            filterType === 'veg'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-600 hover:bg-green-50'
          }`}
        >
          <Leaf className="w-5 h-5 inline-block mr-2" />
          Vegetarian
        </button>
        <button
          onClick={() => onFilterChange('nonveg')}
          className={`px-4 py-2 rounded-md ${
            filterType === 'nonveg'
              ? 'bg-red-600 text-white'
              : 'bg-white text-gray-600 hover:bg-red-50'
          }`}
        >
          <UtensilsCrossed className="w-5 h-5 inline-block mr-2" />
          Non-Vegetarian
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-2 hide-scrollbar">
        <button
          onClick={() => onCategorySelect('')}
          className={`whitespace-nowrap px-4 py-2 rounded-full transition-all ${
            selectedCategory === ''
              ? 'bg-orange-600 text-white'
              : 'bg-white text-gray-600 hover:bg-orange-50'
          }`}
        >
          All Categories
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-orange-600 text-white'
                : activeCategory === category && selectedCategory === ''
                ? 'bg-orange-100'
                : 'bg-white text-gray-600 hover:bg-orange-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;