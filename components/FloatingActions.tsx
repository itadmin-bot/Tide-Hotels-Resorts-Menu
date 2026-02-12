
import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const FloatingActions: React.FC = () => {
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
        <div className="absolute inset-0 bg-white/10 shimmer-effect pointer-events-none"></div>
      </button>
    </div>
  );
};

export default FloatingActions;
