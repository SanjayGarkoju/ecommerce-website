import React from 'react';
import { Filter, RotateCcw, Check, Star } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { formatPrice } from '../../utils/formatters';

export const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  minRating,
  setMinRating,
  inStockOnly,
  setInStockOnly,
  availableBrands,
  onResetFilters
}) => {
  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <aside className="w-full bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-600" />
          <h3 className="text-base font-bold text-slate-900">Filter Products</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Categories</h4>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
              selectedCategory === 'All'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>All Categories</span>
            {selectedCategory === 'All' && <Check className="w-3.5 h-3.5" />}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                selectedCategory === cat.name
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
              {selectedCategory === cat.name && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Max Price</h4>
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
            {formatPrice(priceRange)}
          </span>
        </div>
        <input
          type="range"
          min="20"
          max="1500"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-brand-600 cursor-pointer h-1.5 bg-slate-100 rounded-lg"
        />
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mt-1">
          <span>$20</span>
          <span>$1,500</span>
        </div>
      </div>

      {/* Brand Filter */}
      {availableBrands && availableBrands.length > 0 && (
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Brands</h4>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
            {availableBrands.map((brand) => {
              const isChecked = selectedBrands.includes(brand);
              return (
                <label
                  key={brand}
                  className="flex items-center gap-2.5 text-xs font-medium text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandToggle(brand)}
                    className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 cursor-pointer"
                  />
                  <span>{brand}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Minimum Rating Filter */}
      <div className="pt-4 border-t border-slate-100">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Rating</h4>
        <div className="flex flex-col gap-1.5">
          {[4.5, 4.0, 3.5].map((stars) => (
            <button
              key={stars}
              onClick={() => setMinRating(minRating === stars ? 0 : stars)}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                minRating === stars
                  ? 'bg-amber-50 text-amber-900 border border-amber-300'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{stars} & Above</span>
              </div>
              {minRating === stars && <Check className="w-3.5 h-3.5 text-amber-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="pt-4 border-t border-slate-100">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-xs font-bold text-slate-700">In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 cursor-pointer"
          />
        </label>
      </div>
    </aside>
  );
};
