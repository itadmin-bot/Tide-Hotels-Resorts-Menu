
import React, { useState, useEffect, useMemo } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MenuDisplay from './components/MenuDisplay';
import Header from './components/Header';
import FloatingActions from './components/FloatingActions';
import { CategoryType, MenuItem } from './types';
import { MENU_DATA } from './constants';

export type MenuSection = 'Food' | 'Drinks';

const App: React.FC = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<MenuSection>('Food');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');

  // Define which categories belong to which section
  const foodCategories = [
    CategoryType.BREAKFAST,
    CategoryType.LUNCH_DINNER,
    CategoryType.NIGERIAN_SOUPS,
    CategoryType.SOUPS,
    CategoryType.SMALL_BITES,
    CategoryType.SALADS,
    CategoryType.EXTRAS,
    CategoryType.DESSERTS
  ];

  const drinkCategories = [
    CategoryType.SOFT_DRINKS,
    CategoryType.BEERS_STOUTS,
    CategoryType.WINES,
    CategoryType.SPIRITS_LIQUEURS
  ];

  // Auto transition from welcome screen after 5 seconds
  useEffect(() => {
    if (isWelcome) {
      const timer = setTimeout(() => {
        setIsWelcome(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isWelcome]);

  // Handle Dark Mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Reset category when switching sections
  const handleSectionChange = (section: MenuSection) => {
    setActiveSection(section);
    setSelectedCategory('All');
  };

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter((item) => {
      // 1. Filter by Section (Food or Drinks)
      const isFoodItem = foodCategories.includes(item.category);
      const isDrinkItem = drinkCategories.includes(item.category);
      
      if (activeSection === 'Food' && !isFoodItem) return false;
      if (activeSection === 'Drinks' && !isDrinkItem) return false;

      // 2. Filter by Search
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 3. Filter by Category
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, activeSection]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  if (isWelcome) {
    return <WelcomeScreen onComplete={() => setIsWelcome(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-dark transition-colors duration-300 pb-20">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        foodCategories={foodCategories}
        drinkCategories={drinkCategories}
      />
      
      <main className="max-w-4xl mx-auto px-4 pt-4 animate-in fade-in duration-700">
        <MenuDisplay 
          items={filteredMenu} 
          selectedCategory={selectedCategory} 
          onClearFilters={handleClearFilters}
        />
        
        <footer className="mt-12 py-8 border-t border-slate-200 dark:border-navy-light text-center">
          <div className="mb-6 flex justify-center space-x-4">
             <div className="h-px w-12 bg-gold/30 self-center"></div>
             <span className="text-gold font-serif italic text-lg tracking-widest">✦</span>
             <div className="h-px w-12 bg-gold/30 self-center"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-serif italic mb-2">
            "Experience Luxury Dining by the Tide"
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            All prices are exclusive of VAT. &copy; {new Date().getFullYear()} Tide' Hotels & Resorts.
          </p>
          <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-4 uppercase tracking-[0.2em]">
            38 S.O Williams Enahoro Street, Utako, Abuja
          </p>
        </footer>
      </main>

      <FloatingActions />
    </div>
  );
};

export default App;
