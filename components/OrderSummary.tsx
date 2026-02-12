
import React, { useMemo } from 'react';
import { X, Plus, Minus, Info, Trash2 } from 'lucide-react';
import { MENU_DATA } from '../constants.tsx';

interface OrderSummaryProps {
  orderItems: Record<string, number>;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderItems, onClose, onUpdateQuantity }) => {
  const selectedDetails = useMemo(() => {
    return Object.entries(orderItems).map(([id, quantity]) => {
      const item = MENU_DATA.find(i => i.id === id);
      return { ...item, quantity };
    }).filter(item => item.id !== undefined);
  }, [orderItems]);

  const totalAmount = useMemo(() => {
    return selectedDetails.reduce((sum, item) => {
      // Parse price like "N14,000" or "N600"
      const priceVal = parseInt(item.price?.replace(/[^\d]/g, '') || '0', 10);
      return sum + (priceVal * (item.quantity || 0));
    }, 0);
  }, [selectedDetails]);

  const formatCurrency = (amount: number) => {
    return 'N' + amount.toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-white dark:bg-navy-light rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        {/* Header */}
        <div className="px-6 py-4 bg-navy dark:bg-navy border-b border-gold/20 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-gold">Order Selection</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Review your chosen delicacies</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* List */}
        <div className="max-h-[50vh] overflow-y-auto px-6 py-4 space-y-4">
          {selectedDetails.length === 0 ? (
            <div className="py-12 text-center text-slate-400 font-serif italic">
              Your selection tray is currently empty.
            </div>
          ) : (
            selectedDetails.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-navy/50 last:border-0">
                <div className="flex-1 pr-4">
                  <h4 className="font-serif text-sm font-bold text-navy dark:text-white leading-tight">{item.name}</h4>
                  <p className="text-xs text-gold font-medium mt-1">{item.price} each</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-slate-100 dark:bg-navy p-1 rounded-full">
                    <button 
                      onClick={() => onUpdateQuantity(item.id!, -1)}
                      className="p-1 text-navy dark:text-gold hover:bg-gold/20 rounded-full transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-navy dark:text-white">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id!, 1)}
                      className="p-1 text-navy dark:text-gold hover:bg-gold/20 rounded-full transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={() => onUpdateQuantity(item.id!, -item.quantity!)}
                    className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        <div className="p-6 bg-slate-50 dark:bg-navy border-t border-slate-200 dark:border-navy-light">
          <div className="flex justify-between items-center mb-6">
            <span className="font-serif text-lg font-bold text-navy dark:text-slate-300">Total Selection Value</span>
            <span className="text-xl font-bold text-gold">{formatCurrency(totalAmount)}</span>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 mb-6 flex items-start space-x-3">
            <Info className="text-gold mt-0.5 shrink-0" size={18} />
            <p className="text-xs text-navy dark:text-slate-300 leading-relaxed italic">
              Please call the attention of the attendants at <span className="font-bold text-gold font-sans not-italic">WHISPERS</span> or <span className="font-bold text-gold font-sans not-italic">ZENZA</span> to process your order.
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-navy dark:bg-gold text-gold dark:text-navy font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] uppercase text-xs tracking-widest"
          >
            Continue Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
