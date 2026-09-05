import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/formatters';
import { Rating } from '../components/common/Rating';
import { QuantitySelector } from '../components/cart/QuantitySelector';
import { ProductCard } from '../components/product/ProductCard';
import {
  Heart,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  CheckCircle,
  ChevronRight,
  Share2
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setQuantity(1);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The item you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="px-6 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg">
          Back to Products Catalog
        </Link>
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Product link copied to clipboard!', 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-slate-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-slate-700">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Display Image */}
          <div className="relative aspect-square w-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                SAVE {product.discount}%
              </span>
            )}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-600 hover:text-brand-600 shadow-md transition-colors"
              title="Share product link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {product.images.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 ${
                    activeImage === imgUrl ? 'border-brand-600 ring-2 ring-brand-500/20 scale-95' : 'border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} preview ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-xs font-semibold text-slate-400">Brand: <strong>{product.brand}</strong></span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-3">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                {product.stock > 0 ? `In Stock (${product.stock} left)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Special Selling Price</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-slate-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-base font-semibold text-slate-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            {product.discount > 0 && (
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  You save {formatPrice(product.originalPrice - product.price)}
                </span>
              </div>
            )}
          </div>

          {/* Short overview */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector & Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700 uppercase">Quantity:</span>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(Math.min(quantity + 1, product.stock || 99))}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                maxStock={product.stock}
                size="md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <button
                onClick={() => addToCart(product, quantity)}
                className="sm:col-span-7 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="sm:col-span-3 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-1.5 transition-all hover:scale-[1.01]"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Buy Now</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`sm:col-span-2 py-4 rounded-2xl border flex items-center justify-center transition-all ${
                  isLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-500'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Product Guarantee Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-center">
            <div className="p-3 bg-white rounded-2xl border border-slate-100">
              <Truck className="w-5 h-5 text-brand-600 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-slate-800">Free Express Shipping</p>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-100">
              <RotateCcw className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-slate-800">30-Day Easy Returns</p>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-slate-800">Official Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Description / Specifications / Reviews */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
        <div className="flex border-b border-slate-100 gap-8 mb-6">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'description' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'specs' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Technical Specs
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'reviews' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>

        {/* Tab Content 1: Description */}
        {activeTab === 'description' && (
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>{product.description}</p>
            <p>
              Engineered with meticulous attention to detail, every element is crafted using premium materials to ensure maximum durability, ergonomic comfort, and state-of-the-art performance.
            </p>
          </div>
        )}

        {/* Tab Content 2: Specifications */}
        {activeTab === 'specs' && (
          <div className="max-w-2xl">
            <table className="w-full text-xs sm:text-sm text-left">
              <tbody className="divide-y divide-slate-100">
                {product.specifications &&
                  Object.entries(product.specifications).map(([key, val]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="py-3 pr-4 font-bold text-slate-700 w-1/3">{key}</td>
                      <td className="py-3 text-slate-600">{val}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content 3: Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl">
              <div className="text-center shrink-0">
                <span className="text-4xl font-extrabold text-slate-900">{product.rating.toFixed(1)}</span>
                <Rating rating={product.rating} size="sm" showText={false} />
                <span className="text-xs text-slate-400 mt-1 block">based on {product.reviewCount} reviews</span>
              </div>
              <div className="border-l border-slate-200 pl-6 text-xs text-slate-600 space-y-1">
                <p>✓ 100% Verified Customer Reviews</p>
                <p>✓ Real buyer ratings & feedback</p>
              </div>
            </div>

            {/* Write a review form */}
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Write a Customer Review</h4>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600">Your Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setNewReviewRating(star)}
                    className="p-1"
                  >
                    <Star className={`w-5 h-5 ${star <= newReviewRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>
              <textarea
                rows="3"
                placeholder="Share your experience with this product..."
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500"
              ></textarea>
              <button
                onClick={() => {
                  if (newReviewText.trim()) {
                    showToast('Thank you for submitting your review!', 'success');
                    setNewReviewText('');
                  }
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Related Products Carousel/Grid */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Related Products in {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
