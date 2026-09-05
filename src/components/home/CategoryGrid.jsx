import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { ArrowUpRight } from 'lucide-react';

export const CategoryGrid = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            Collections
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Shop by Category
          </h2>
        </div>
        <Link
          to="/products"
          className="text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
        >
          <span>View All Categories</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, index) => {
          const isLarge = index === 0;
          return (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-64 border border-slate-100 ${
                isLarge ? 'sm:col-span-2' : ''
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">
                  {cat.count}
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-brand-600 group-hover:scale-110 transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
