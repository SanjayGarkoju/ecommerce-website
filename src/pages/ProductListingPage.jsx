import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar } from '../components/product/FilterSidebar';
import { SortDropdown } from '../components/product/SortDropdown';
import { ProductGridSkeleton } from '../components/common/LoadingSkeleton';
import { Filter, X, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState(1500);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync category param with state
  useEffect(() => {
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Simulate quick filtering loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, priceRange, selectedBrands, minRating, inStockOnly, sortOption]);

  // Extract available brands for selected category
  const availableBrands = useMemo(() => {
    let list = PRODUCTS;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    const brandsSet = new Set(list.map((p) => p.brand));
    return Array.from(brandsSet).sort();
  }, [selectedCategory]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price <= priceRange);

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    // Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    } else {
      // Featured
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, priceRange, selectedBrands, minRating, inStockOnly, sortOption]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedBrands([]);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setPriceRange(1500);
    setSelectedBrands([]);
    setMinRating(0);
    setInStockOnly(false);
    setSortOption('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const activeFilterCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (priceRange < 1500 ? 1 : 0) +
    selectedBrands.length +
    (minRating > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-slate-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold">Catalog</span>
        {selectedCategory !== 'All' && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-600 font-bold">{selectedCategory}</span>
          </>
        )}
      </div>

      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {PRODUCTS.length} total items
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-600" />
            <span>Filters ({activeFilterCount})</span>
          </button>

          {/* Sort Dropdown */}
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>
      </div>

      {/* Active Filter Pills */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-slate-400 mr-1">Active Filters:</span>

          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold rounded-full">
              Category: {selectedCategory}
              <X
                className="w-3.5 h-3.5 cursor-pointer hover:text-brand-900"
                onClick={() => handleCategoryChange('All')}
              />
            </span>
          )}

          {priceRange < 1500 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold rounded-full">
              Max: ${priceRange}
              <X
                className="w-3.5 h-3.5 cursor-pointer hover:text-brand-900"
                onClick={() => setPriceRange(1500)}
              />
            </span>
          )}

          {selectedBrands.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold rounded-full"
            >
              {b}
              <X
                className="w-3.5 h-3.5 cursor-pointer hover:text-brand-900"
                onClick={() => setSelectedBrands(selectedBrands.filter((item) => item !== b))}
              />
            </span>
          ))}

          {minRating > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-full">
              ★ {minRating}+
              <X
                className="w-3.5 h-3.5 cursor-pointer hover:text-amber-900"
                onClick={() => setMinRating(0)}
              />
            </span>
          )}

          <button
            onClick={handleResetFilters}
            className="text-xs font-bold text-rose-600 underline ml-2 hover:text-rose-800"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Grid & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            minRating={minRating}
            setMinRating={setMinRating}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            availableBrands={availableBrands}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Product Grid Area */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <ProductGridSkeleton count={8} />
          ) : (
            <ProductGrid products={filteredProducts} onClearFilters={handleResetFilters} />
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex justify-end lg:hidden">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between animate-slide-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-lg font-bold text-slate-900">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={(cat) => {
                handleCategoryChange(cat);
              }}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              minRating={minRating}
              setMinRating={setMinRating}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              availableBrands={availableBrands}
              onResetFilters={handleResetFilters}
            />

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="mt-6 w-full py-3 bg-brand-600 text-white font-bold rounded-xl text-center shadow-lg"
            >
              Apply Filters ({filteredProducts.length} items)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
