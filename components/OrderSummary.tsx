import React, { useMemo, useRef, useState } from 'react';
import { X, Plus, Minus, Info, Trash2, FileText, Download, Loader2 } from 'lucide-react';
import { MENU_DATA } from '../constants.tsx';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface OrderSummaryProps {
  orderItems: Record<string, number>;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderItems, onClose, onUpdateQuantity }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  const selectedDetails = useMemo(() => {
    return Object.entries(orderItems).map(([id, quantity]) => {
      const item = MENU_DATA.find(i => i.id === id);
      return { ...item, quantity };
    }).filter(item => item.id !== undefined);
  }, [orderItems]);

  const totalAmount = useMemo(() => {
    return selectedDetails.reduce((sum, item) => {
      const priceVal = parseInt(item.price?.replace(/[^\d]/g, '') || '0', 10);
      return sum + (priceVal * (item.quantity || 0));
    }, 0);
  }, [selectedDetails]);

  const formatCurrency = (amount: number) => {
    return 'N' + amount.toLocaleString();
  };

  const downloadReceipt = async () => {
    if (!receiptRef.current || isDownloading) return;
    
    setIsDownloading(true);
    try {
      // Temporarily make the receipt visible but off-screen
      const el = receiptRef.current;
      el.style.display = 'block';
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      el.style.top = '0';

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Tide-Receipt-${new Date().getTime()}.pdf`);
      
      // Hide back
      el.style.display = 'none';
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate receipt. Please try again.');
    } finally {
      setIsDownloading(false);
    }
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
        <div className="max-h-[45vh] overflow-y-auto px-6 py-4 space-y-4">
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
          <div className="flex justify-between items-center mb-4">
            <span className="font-serif text-lg font-bold text-navy dark:text-slate-300">Total Value</span>
            <span className="text-xl font-bold text-gold">{formatCurrency(totalAmount)}</span>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 mb-4 flex items-start space-x-3">
            <Info className="text-gold mt-0.5 shrink-0" size={18} />
            <p className="text-xs text-navy dark:text-slate-300 leading-relaxed italic">
              Please call the attention of the attendants at <span className="font-bold text-gold font-sans not-italic uppercase">Whispers</span> or <span className="font-bold text-gold font-sans not-italic uppercase">Zenza</span> to process your order.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={downloadReceipt}
              disabled={selectedDetails.length === 0 || isDownloading}
              className="flex items-center justify-center space-x-2 py-4 bg-gold/10 border border-gold text-gold font-bold rounded-2xl shadow-sm transition-all hover:bg-gold/20 active:scale-95 disabled:opacity-50 uppercase text-[10px] tracking-widest"
            >
              {isDownloading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  <FileText size={16} />
                  <span>Get PDF Receipt</span>
                </>
              )}
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-navy dark:bg-gold text-gold dark:text-navy font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] uppercase text-[10px] tracking-widest"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Hidden Receipt Template for PDF Export */}
      <div 
        ref={receiptRef} 
        style={{ display: 'none', width: '800px', padding: '40px', fontFamily: 'Poppins, sans-serif' }}
        className="bg-white text-navy"
      >
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl font-bold text-navy mb-2">Tide' Hotels & Resorts</h1>
          <p className="text-sm text-slate-500 uppercase tracking-widest">38 S.O Williams Enahoro Street, Utako, Abuja</p>
          <div className="mt-4 border-b-2 border-slate-100 mx-auto w-32"></div>
        </div>

        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-serif text-2xl font-bold uppercase tracking-widest">Order Receipt</h2>
            <p className="text-xs text-slate-400">Date: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-gold font-bold">Whispers | Zenza</p>
          </div>
        </div>

        <table className="w-full mb-10">
          <thead>
            <tr className="border-b-2 border-navy text-left">
              <th className="py-4 font-serif text-lg">Delicacy</th>
              <th className="py-4 font-serif text-lg text-center">Qty</th>
              <th className="py-4 font-serif text-lg text-right">Price</th>
              <th className="py-4 font-serif text-lg text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {selectedDetails.map((item) => {
              const priceVal = parseInt(item.price?.replace(/[^\d]/g, '') || '0', 10);
              const subtotal = priceVal * (item.quantity || 0);
              return (
                <tr key={item.id}>
                  <td className="py-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.category}</p>
                  </td>
                  <td className="py-4 text-center font-medium">{item.quantity}</td>
                  <td className="py-4 text-right font-medium">{item.price}</td>
                  <td className="py-4 text-right font-bold">{formatCurrency(subtotal)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-4 border-navy">
              <td colSpan={3} className="py-6 text-right font-serif text-xl font-bold uppercase tracking-widest">Total Selection Value</td>
              <td className="py-6 text-right font-serif text-2xl font-bold text-navy">{formatCurrency(totalAmount)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="text-center mt-20 border-t pt-10">
          <p className="font-serif italic text-lg text-slate-600 mb-2">"Experience Luxury Dining by the Tide"</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Thank you for choosing Tide' Hotels & Resorts</p>
          <p className="text-[10px] text-slate-300 mt-4 uppercase tracking-widest">Pricing is subject to change at any time. This receipt serves as a customer selection summary.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;