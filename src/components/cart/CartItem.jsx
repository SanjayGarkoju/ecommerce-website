import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice } from '../../utils/formatters';
import { QuantitySelector } from './QuantitySelector';

export const CartItem = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const { moveWishlistToCart, toggleWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image & Info */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <Link to={`/product/${product.id}`} className="shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-slate-50 border border-slate-100"
          />
        </Link>

        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
            {product.category}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="block text-sm sm:text-base font-bold text-slate-800 hover:text-brand-600 transition-colors truncate mt-1"
          >
            {product.name}
          </Link>
          <p className="text-xs text-slate-400 mt-0.5">Brand: {product.brand}</p>
          <div className="text-sm font-extrabold text-slate-900 mt-2 sm:hidden">
            {formatPrice(product.price * quantity)}
          </div>
        </div>
      </div>

      {/* Quantity & Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => updateQuantity(product.id, quantity + 1)}
          onDecrease={() => updateQuantity(product.id, quantity - 1)}
          maxStock={product.stock}
        />

        {/* Total Price for Desktop */}
        <div className="hidden sm:block text-right min-w-[5rem]">
          <span className="text-base font-extrabold text-slate-900">
            {formatPrice(product.price * quantity)}
          </span>
          {quantity > 1 && (
            <p className="text-[11px] text-slate-400 font-medium">
              {formatPrice(product.price)} each
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => {
              if (!isWishlisted) {
                toggleWishlist(product);
              }
              removeFromCart(product.id);
            }}
            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
            title="Move to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
          <button
            onClick={() => removeFromCart(product.id)}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
            title="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
