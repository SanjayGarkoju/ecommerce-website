import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { formatPrice } from '../../utils/formatters';

export const SearchBar = ({ isMobile = false, onClose = () => {} }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const q = query.toLowerCase();
      const matches = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      ).slice(0, 5);
      setSuggestions(matches);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectSuggestion = (id) => {
    setIsOpen(false);
    setQuery('');
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <div ref={searchRef} className={`relative w-full ${isMobile ? 'max-w-none' : 'max-w-md lg:max-w-lg'}`}>
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder="Search products, brands, categories..."
          className="w-full pl-10 pr-10 py-2.5 bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-brand-500 rounded-full text-sm font-medium focus:outline-none focus:ring-4 focus:ring-brand-500/15 transition-all shadow-inner"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-fade-in">
          {suggestions.length > 0 ? (
            <div className="p-2 divide-y divide-slate-50">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Products Found ({suggestions.length})
              </div>
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.id)}
                  className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-lg bg-slate-100 border border-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-brand-600 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">{item.category} • {item.brand}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-slate-900">{formatPrice(item.price)}</span>
                  </div>
                </button>
              ))}
              <button
                onClick={handleSearch}
                className="w-full p-2.5 text-center text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50/50 hover:bg-brand-50 rounded-xl flex items-center justify-center gap-1 mt-1"
              >
                <span>View all results for "{query}"</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="p-6 text-center text-slate-500">
              <Package className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">No quick matches for "{query}"</p>
              <button
                onClick={handleSearch}
                className="mt-2 text-xs font-semibold text-brand-600 hover:underline"
              >
                Press enter to search full catalog
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
