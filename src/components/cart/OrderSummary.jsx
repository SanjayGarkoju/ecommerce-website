import React, { useState } from 'react';
import { Tag, ArrowRight, CheckCircle, X, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';

export const OrderSummary = ({ onProceedCheckout = null, isCheckout = false }) => {
  const {
    subtotal,
    discountAmount,
    shippingFee,
    totalAmount,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      const success = applyCoupon(couponInput);
      if (success) {
        setCouponInput('');
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col gap-6">
      <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
        Order Summary
      </h3>

      {/* Breakdown List */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex items-center justify-between text-emerald-600 font-medium">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Coupon Savings</span>
            </span>
            <span className="font-bold">-{formatPrice(discountAmount)}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-slate-600">
          <span>Estimated Shipping</span>
          <span className="font-semibold text-slate-900">
            {shippingFee === 0 ? (
              <span className="text-emerald-600 font-bold uppercase text-xs bg-emerald-50 px-2 py-0.5 rounded">FREE</span>
            ) : (
              formatPrice(shippingFee)
            )}
          </span>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-base font-extrabold text-slate-900">Total</span>
          <span className="text-xl font-extrabold text-brand-600">{formatPrice(totalAmount)}</span>
        </div>
      </div>

      {/* Coupon Field */}
      {!isCheckout && (
        <div className="pt-2">
          {appliedCoupon ? (
            <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Code <strong>{appliedCoupon.code}</strong> Applied</span>
              </div>
              <button
                onClick={removeCoupon}
                className="text-emerald-600 hover:text-emerald-900 p-1 rounded hover:bg-emerald-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (e.g. SPHERE20)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold uppercase text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm shrink-0"
              >
                Apply
              </button>
            </form>
          )}
        </div>
      )}

      {/* Proceed Button */}
      {onProceedCheckout && (
        <button
          onClick={onProceedCheckout}
          disabled={subtotal === 0}
          className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold rounded-2xl shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          <span>Proceed to Checkout</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

      {/* Security badge */}
      <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 pt-2 border-t border-slate-100">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Guaranteed Safe & Secure Checkout</span>
      </div>
    </div>
  );
};
