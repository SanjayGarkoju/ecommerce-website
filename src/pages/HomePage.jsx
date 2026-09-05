import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { Newsletter } from '../components/home/Newsletter';
import { ProductCard } from '../components/product/ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, TrendingUp, Flame } from 'lucide-react';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 8);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 8);

  const displayedProducts =
    activeTab === 'featured'
      ? featuredProducts
      : activeTab === 'bestsellers'
      ? bestSellers
      : newArrivals;

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Main Tabbed Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Curated Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Explore Our Top Picks
            </h2>
          </div>

          {/* Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('featured')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'featured'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured</span>
            </button>
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bestsellers'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Best Sellers</span>
            </button>
            <button
              onClick={() => setActiveTab('newarrivals')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'newarrivals'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span>New Arrivals</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <span>View Complete Shop Catalog ({PRODUCTS.length}+ Products)</span>
            <ArrowRight className="w-4 h-4 text-brand-400" />
          </Link>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};
