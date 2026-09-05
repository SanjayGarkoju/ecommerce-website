import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice } from '../../utils/formatters';
import { Rating } from '../common/Rating';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isLiked = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100/80 hover:border-brand-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.discount > 0 && (
          <span className="bg-rose-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm tracking-wide">
            {product.discount}% OFF
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
            Best Seller
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-sm ${
          isLiked
            ? 'bg-rose-50 text-rose-500 hover:bg-rose-100 scale-110'
            : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'
        }`}
        title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'fill-rose-500 scale-110' : ''}`} />
      </button>

      {/* Image Section */}
      <Link to={`/product/${product.id}`} className="relative aspect-square w-full bg-slate-50 overflow-hidden block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-brand-600" />
            Quick View
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1">
          <span className="truncate">{product.brand}</span>
          <span className="text-[11px] text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/product/${product.id}`}
          className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors line-clamp-2 mb-2 leading-snug"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="mb-3">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs font-medium text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="w-9 h-9 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group/btn"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
