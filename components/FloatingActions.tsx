
import React from 'react';
import { MessageSquare, Phone, ClipboardList } from 'lucide-react';

interface FloatingActionsProps {
  orderCount: number;
  onShowOrder: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ orderCount, onShowOrder }) => {
  const phoneNumber = "09111111314";
  const internationalNumber = "2349111111314";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("I would like to order from Tide' Hotels & Resorts.");
    window.open(`https://wa.me/${internationalNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {orderCount > 0 && (
        <button 
          onClick={onShowOrder}
          className="flex items-center space-x-2 bg-gold text-navy p-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-gold/30 transition-all hover:scale-105 active:scale-95 group relative animate-in slide-in-from-right-10 duration-500"
          title="Show Order"
        >
          <ClipboardList size={24} />
          <span className="hidden md:inline font-bold">Show Order</span>
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-navy text-gold text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-gold shadow-md">
            {orderCount}
          </span>
        </button>
      )}

      <button 
        onClick={handleWhatsAppOrder}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95 group"
        title="Order via WhatsApp"
      >
        <MessageSquare size={24} />
        <span className="hidden md:inline font-medium">WhatsApp Order</span>
      </button>

      <button 
        onClick={handleCallNow}
        className="flex items-center space-x-2 bg-navy dark:bg-gold text-gold dark:text-navy p-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-navy-500/30 dark:shadow-gold-500/30 transition-all hover:scale-105 active:scale-95 group relative overflow-hidden"
        title="Call Now"
      >
        <Phone size={24} className="animate-pulse" />
        <span className="hidden md:inline font-medium">Call to Order</span>
      </button>
    </div>
  );
};

export default FloatingActions;
