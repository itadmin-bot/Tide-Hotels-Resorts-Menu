
import React, { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullHeading = "Welcome to Tide' Hotels & Resorts";

  useEffect(() => {
    setShowContent(true);
    
    let currentText = '';
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < fullHeading.length) {
        currentText += fullHeading[charIndex];
        setDisplayText(currentText);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white wave-bg overflow-hidden p-6 text-center">
      <div className={`transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Animated Logo Placeholder */}
        <div className="mb-8 relative flex justify-center">
          <div className="w-24 h-24 border-2 border-gold rounded-full flex items-center justify-center relative overflow-hidden group">
            <span className="font-serif text-4xl font-bold text-gold shimmer-text">T'</span>
            <div className="absolute inset-0 bg-gold/10 animate-pulse"></div>
          </div>
          <div className="absolute -inset-4 border border-gold/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-wide leading-tight min-h-[4rem]">
          {displayText}
          <span className="inline-block w-1 h-8 bg-gold ml-1 animate-pulse"></span>
        </h1>

        <p className="text-gold-light font-sans text-lg md:text-xl mb-2 opacity-80 italic">
          Experience Luxury Dining by the Tide
        </p>

        <p className="text-slate-400 text-sm md:text-base max-w-xs mx-auto mb-10 leading-relaxed">
          38 S.O Williams Enahoro Street, Utako, Abuja
        </p>

        <button 
          onClick={onComplete}
          className="relative group overflow-hidden px-8 py-3 bg-transparent border-2 border-gold text-gold font-bold rounded-full tracking-widest uppercase text-xs transition-all hover:text-navy hover:border-transparent"
        >
          <span className="relative z-10">View Menu</span>
          <div className="absolute inset-0 bg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Decorative Wave elements */}
      <div className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D4AF37" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,181.3C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;
