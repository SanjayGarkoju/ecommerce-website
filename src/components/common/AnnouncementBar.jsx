import React, { useState } from 'react';
import { Sparkles, Truck, Tag, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-brand-800 to-indigo-950 text-white text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 text-indigo-200">
          <Truck className="w-3.5 h-3.5 text-brand-300" />
          <span>Free Express Delivery on orders over $100</span>
        </div>

        <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Use Code <span className="font-bold text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded border border-amber-400/30">SPHERE20</span> for 20% OFF!</span>
          <Link to="/products" className="underline hover:text-amber-200 transition-colors ml-1 font-semibold">
            Shop Now &rarr;
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-indigo-200">
            <Tag className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Support</span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-indigo-300 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
