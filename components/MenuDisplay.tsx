
import React, { useState } from 'react';
import { MenuItem, CategoryType } from '../types.ts';
import { ChevronDown, ChevronUp, SearchX, Plus, Minus } from 'lucide-react';

interface MenuDisplayProps {
  items: MenuItem[];
  selectedCategory: CategoryType | 'All';
  onClearFilters: () => void;
  orderItems: Record<string, number>;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const MenuDisplay: React.FC<MenuDisplayProps> = ({ 
  items, 
  selectedCategory, 
  onClearFilters,
  orderItems,
  onUpdateQuantity
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    Object.values(CategoryType).forEach(cat => initial[cat] = true);
    return initial;
  });

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  if (items.length === 0) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-slate-100 dark:bg-navy-light rounded-full flex items-center justify-center mb-6">
          <SearchX className="text-slate-400 dark:text-gold/50" size={40} />
        </div>
        <p className="text-slate-400 dark:text-slate-500 font-serif italic text-xl mb-6">
          No delicacies match your current selection.
        </p>
        <button 
          onClick={onClearFilters}
          className="px-8 py-3 bg-gold text-navy font-bold rounded-full shadow-lg shadow-gold/20 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest"
        >
          View Full Menu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {(Object.entries(groupedItems) as [string, MenuItem[]][]).map(([category, catItems]) => (
        <div key={category} className="animate-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => toggleCategory(category)}
            className="flex items-center justify-between w-full py-4 border-b-2 border-gold/30 dark:border-gold/20 mb-4 text-left group"
          >
            <h2 className="font-serif text-2xl font-bold text-navy dark:text-gold uppercase tracking-widest flex items-center">
              <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold text-lg">✦</span>
              {category}
            </h2>
            {expandedCategories[category] ? (
              <ChevronUp className="text-gold" />
            ) : (
              <ChevronDown className="text-gold" />
            )}
          </button>

          {expandedCategories[category] && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catItems.map((item) => {
                  const quantity = orderItems[item.id] || 0;
                  return (
                    <div 
                      key={item.id} 
                      className={`bg-white dark:bg-navy-light p-5 rounded-2xl shadow-sm border transition-all group relative overflow-hidden ${
                        quantity > 0 
                          ? 'border-gold shadow-md shadow-gold/10' 
                          : 'border-slate-100 dark:border-navy hover:shadow-md hover:border-gold/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-lg font-bold text-navy dark:text-white group-hover:text-gold transition-colors pr-2">
                          {item.name}
                        </h3>
                        <div className="flex flex-col items-end">
                          <span className="text-gold font-bold text-sm bg-gold/10 px-2 py-1 rounded-lg mb-2 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                         <div className="flex items-center space-x-3 bg-slate-50 dark:bg-navy p-1 rounded-full border border-slate-200 dark:border-navy-light">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className={`p-1.5 rounded-full transition-all ${quantity > 0 ? 'text-gold hover:bg-gold/10' : 'text-slate-300 pointer-events-none'}`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className={`w-6 text-center font-bold text-sm ${quantity > 0 ? 'text-navy dark:text-white' : 'text-slate-400'}`}>
                              {quantity}
                            </span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1.5 rounded-full text-gold hover:bg-gold/10 transition-all"
                            >
                              <Plus size={16} />
                            </button>
                         </div>
                         {quantity === 0 && (
                           <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-[10px] font-bold text-gold uppercase tracking-tighter hover:underline"
                           >
                             Add to Order
                           </button>
                         )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {category === CategoryType.NIGERIAN_SOUPS && (
                <div className="mt-4 p-4 bg-gold/5 border border-gold/20 rounded-xl text-center">
                  <p className="text-navy dark:text-gold-light text-sm font-medium">
                    <span className="font-bold">Choice of staple:</span> Eba, Semo, Poundo Yam, Oat Swallow
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuDisplay;
