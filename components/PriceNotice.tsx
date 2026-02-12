import React from 'react';
import { AlertTriangle, ChevronRight, X } from 'lucide-react';

interface PriceNoticeProps {
  onClose: () => void;
}

const PriceNotice: React.FC<PriceNoticeProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop with heavy blur */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-md transition-opacity animate-in fade-in duration-500" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-sm bg-white dark:bg-navy-light border-2 border-gold rounded-[2.5rem] shadow-[0_0_50px_rgba(212,175,55,0.2)] p-8 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-gold transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Animated Warning Icon */}
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <AlertTriangle className="text-gold" size={32} />
          </div>
          
          <h2 className="font-serif text-2xl font-bold text-navy dark:text-gold mb-4 uppercase tracking-widest">
            Price Notice
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
              "Please be advised that all menu prices are <span className="text-gold font-bold not-italic">subject to change</span> at any time without prior notice."
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed uppercase tracking-widest">
              Pricing is bound to market fluctuations and seasonal availability. Thank you for your understanding.
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-navy dark:bg-gold text-gold dark:text-navy font-bold rounded-2xl shadow-lg shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
          >
            <span className="uppercase text-xs tracking-[0.2em]">Continue to Menu</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute -bottom-4 -left-4 opacity-5 pointer-events-none select-none">
          <span className="font-serif text-9xl text-gold italic">!</span>
        </div>
      </div>
    </div>
  );
};

export default PriceNotice;