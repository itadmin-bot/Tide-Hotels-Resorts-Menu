
import React from 'react';
import { Search, Moon, Sun, Utensils, GlassWater } from 'lucide-react';
import { CategoryType } from '../types.ts';
import { MenuSection } from '../App.tsx';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeSection: MenuSection;
  onSectionChange: (section: MenuSection) => void;
  selectedCategory: CategoryType | 'All';
  setSelectedCategory: (category: CategoryType | 'All') => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  foodCategories: CategoryType[];
  drinkCategories: CategoryType[];
}

const Header: React.FC<HeaderProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  activeSection,
  onSectionChange,
  selectedCategory, 
  setSelectedCategory,
  isDarkMode,
  toggleDarkMode,
  foodCategories,
  drinkCategories
}) => {
  const currentCategories = activeSection === 'Food' ? foodCategories : drinkCategories;
  const categoriesToDisplay = ['All', ...currentCategories];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-navy/95 backdrop-blur-md border-b border-slate-200 dark:border-navy-light transition-colors duration-300 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy dark:bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/10">
              <span className="text-gold dark:text-navy font-serif font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="font-serif text-lg font-bold text-navy dark:text-white leading-none">Tide'</h1>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Hotels & Resorts</span>
            </div>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-navy-light text-slate-600 dark:text-gold transition-colors hover:scale-110 active:scale-95 shadow-inner"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex bg-slate-100 dark:bg-navy-light p-1 rounded-2xl mb-4 border border-slate-200/50 dark:border-navy/50">
          <button 
            onClick={() => onSectionChange('Food')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${
              activeSection === 'Food' 
                ? 'bg-white dark:bg-navy text-navy dark:text-gold shadow-md' 
                : 'text-slate-400 dark:text-slate-500 hover:text-navy dark:hover:text-slate-300'
            }`}
          >
            <Utensils size={18} />
            <span>FOOD MENU</span>
          </button>
          <button 
            onClick={() => onSectionChange('Drinks')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${
              activeSection === 'Drinks' 
                ? 'bg-white dark:bg-navy text-navy dark:text-gold shadow-md' 
                : 'text-slate-400 dark:text-slate-500 hover:text-navy dark:hover:text-slate-300'
            }`}
          >
            <GlassWater size={18} />
            <span>DRINKS MENU</span>
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder={`Search ${activeSection.toLowerCase()} menu...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-navy-light border border-slate-200/50 dark:border-navy-light/50 rounded-xl focus:ring-2 focus:ring-gold/50 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all outline-none"
          />
        </div>

        <div className="flex items-center space-x-3 overflow-x-auto pb-3 pt-1">
          {categoriesToDisplay.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider border ${
                selectedCategory === cat 
                  ? 'bg-gold border-gold text-navy shadow-lg shadow-gold/20' 
                  : 'bg-transparent border-slate-200 dark:border-navy-light text-slate-500 dark:text-slate-400 hover:border-gold dark:hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
