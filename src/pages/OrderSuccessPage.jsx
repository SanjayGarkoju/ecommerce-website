import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { formatPrice } from '../utils/formatters';
import { CheckCircle2, Package, Truck, ArrowRight, Home, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  useEffect(() => {
    // Fire festive confetti animation upon order success
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback safe
    }
  }, []);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Summary Not Found</h2>
        <Link to="/" className="px-6 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-2xl space-y-8 animate-fade-in text-center sm:text-left">
        {/* Top Success Badge Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-slate-100">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 animate-pulse-slow">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Order Confirmed & Placed
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Thank You For Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              We've received your order and sent a confirmation receipt to your email.
            </p>
          </div>
        </div>

        {/* Order Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[11px] font-bold uppercase text-slate-400">Order Reference</span>
            <p className="text-base font-extrabold text-brand-600 mt-0.5">{order.id}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[11px] font-bold uppercase text-slate-400 flex items-center justify-center sm:justify-start gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Est. Delivery Date</span>
            </span>
            <p className="text-base font-extrabold text-slate-900 mt-0.5">{order.estimatedDelivery}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[11px] font-bold uppercase text-slate-400">Total Paid</span>
            <p className="text-base font-extrabold text-slate-900 mt-0.5">{formatPrice(order.total)}</p>
          </div>
        </div>

        {/* Purchased Items List */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Package className="w-4 h-4 text-brand-600" />
            <span>Items Ordered ({order.items.length})</span>
          </h3>

          <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {order.items.map((item, idx) => (
              <div key={idx} className="p-4 bg-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 rounded-xl object-cover bg-slate-50 border border-slate-100 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">{item.product.name}</h4>
                    <p className="text-[11px] text-slate-400">Qty: {item.quantity} • {formatPrice(item.product.price)} each</p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 shrink-0">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
          <Link
            to="/orders"
            className="w-full sm:w-1/2 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-center shadow-md flex items-center justify-center gap-2 text-xs"
          >
            <Package className="w-4 h-4" />
            <span>View All My Orders</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-1/2 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl text-center shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 text-xs"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
