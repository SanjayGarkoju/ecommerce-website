import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timer, Zap, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

export const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = PRODUCTS.filter((p) => p.discount >= 25).slice(0, 4);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-brand-500/10 rounded-3xl p-6 sm:p-8 border border-amber-200/50 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0">
              <Zap className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Limited Time Flash Deals
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Deal of the Day — Up to 33% Off!
              </h2>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
            <Timer className="w-5 h-5 text-rose-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-400 uppercase">Ends In:</span>
            <div className="flex items-center gap-1.5 font-extrabold text-slate-900 text-base">
              <span className="bg-slate-900 text-white px-2.5 py-1 rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-slate-900 text-white px-2.5 py-1 rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-rose-600 text-white px-2.5 py-1 rounded-lg animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dealProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
