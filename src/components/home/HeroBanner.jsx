import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-950 to-slate-950 text-white py-16 lg:py-24 rounded-3xl my-4 mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-bold mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Next Generation E-Commerce Experience</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Discover Products That <span className="bg-gradient-to-r from-brand-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">Elevate Your Everyday.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-normal">
              Explore over 30+ premium electronics, designer apparel, luxury footwear, smart home appliances & workout essentials curated with unbeatable quality.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Shop Catalog Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products?category=Electronics"
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center transition-all"
              >
                Explore Electronics
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-800/80 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">30k+</p>
                <p className="text-xs text-slate-400 font-medium">Verified Orders</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-400">4.9 ★</p>
                <p className="text-xs text-slate-400 font-medium">Customer Rating</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</p>
                <p className="text-xs text-slate-400 font-medium">Original Quality</p>
              </div>
            </div>
          </div>

          {/* Hero Banner Visual Card Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
                  alt="ShopSphere Hero Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                    Featured Season Sale
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Up to 50% Off Top Brands</h3>
                  <p className="text-xs text-slate-300">Free priority shipping included on orders above $100.</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md text-slate-900 p-3 rounded-2xl shadow-2xl border border-white/40 hidden sm:flex items-center gap-3 animate-pulse-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold">Instant Delivery</p>
                  <p className="text-[10px] text-slate-500 font-medium">Dispatched in 24 Hours</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md text-slate-900 p-3 rounded-2xl shadow-2xl border border-white/40 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold">Official Warranty</p>
                  <p className="text-[10px] text-slate-500 font-medium">1 Year Replacement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
