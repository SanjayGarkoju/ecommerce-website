import React from 'react';
import { Minus, Plus } from 'lucide-react';

export const QuantitySelector = ({ quantity, onIncrease, onDecrease, maxStock = 99, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  };

  const btnSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className={`${btnSize} rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-sm`}
        aria-label="Decrease quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="px-3 font-bold text-slate-800 text-xs sm:text-sm min-w-[2rem] text-center select-none">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        disabled={quantity >= maxStock}
        className={`${btnSize} rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-sm`}
        aria-label="Increase quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
