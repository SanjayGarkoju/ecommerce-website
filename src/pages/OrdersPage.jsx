import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { useCart } from '../context/CartContext';
import { formatPrice, formatDate } from '../utils/formatters';
import { Package, Truck, CheckCircle2, ChevronRight, Clock, RefreshCw, Eye } from 'lucide-react';
import { Modal } from '../components/common/Modal';

export const OrdersPage = () => {
  const { orders } = useOrders();
  const { addToCart } = useCart();
  const [selectedTrackOrder, setSelectedTrackOrder] = useState(null);

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-md mx-auto space-y-4">
          <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
            <Package className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">No Orders Placed Yet</h2>
          <p className="text-sm text-slate-500">
            When you place an order, it will appear here with live tracking updates.
          </p>
          <div className="pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-brand-500/25"
            >
              <span>Explore Products Catalog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleReorder = (order) => {
    order.items.forEach((item) => {
      addToCart(item.product, item.quantity);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-slate-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/profile" className="hover:text-slate-700">Profile</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold">Order History</span>
      </div>

      {/* Header */}
      <div className="pb-6 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">My Orders</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Showing <strong className="text-slate-900">{orders.length}</strong> previous order(s)
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => {
          const isDelivered = order.status === 'Delivered';
          return (
            <div key={order.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Order Top Bar */}
              <div className="p-6 bg-slate-50/70 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Order ID</span>
                    <p className="font-extrabold text-slate-900 mt-0.5">{order.id}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Date Placed</span>
                    <p className="font-semibold text-slate-800 mt-0.5">{formatDate(order.date)}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Total Amount</span>
                    <p className="font-extrabold text-brand-600 mt-0.5">{formatPrice(order.total)}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      isDelivered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {isDelivered ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Clock className="w-3.5 h-3.5 text-amber-600" />}
                    <span>{order.status}</span>
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6 divide-y divide-slate-100">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover bg-slate-50 border border-slate-100 shrink-0"
                      />
                      <div className="min-w-0">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Brand: {item.product.brand} • Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Order Bottom Actions */}
              <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-slate-500 text-[11px]">
                  <span>Est. Delivery: <strong>{order.estimatedDelivery}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedTrackOrder(order)}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-sm transition-colors"
                  >
                    <Truck className="w-3.5 h-3.5 text-brand-600" />
                    <span>Track Package</span>
                  </button>
                  <button
                    onClick={() => handleReorder(order)}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-sm transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Buy Again</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tracking Modal */}
      {selectedTrackOrder && (
        <Modal
          isOpen={Boolean(selectedTrackOrder)}
          onClose={() => setSelectedTrackOrder(null)}
          title={`Order Tracking — ${selectedTrackOrder.id}`}
        >
          <div className="space-y-6">
            <div className="p-4 bg-brand-50 border border-brand-200 rounded-2xl">
              <span className="text-xs font-bold text-brand-800">Current Status</span>
              <p className="text-base font-extrabold text-brand-600 mt-0.5">{selectedTrackOrder.status}</p>
              <p className="text-xs text-brand-700 mt-1">Expected Arrival: {selectedTrackOrder.estimatedDelivery}</p>
            </div>

            {/* Tracking Step Timeline */}
            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              <div className="relative pl-8 flex items-center gap-3">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Order Placed & Confirmed</p>
                  <p className="text-[11px] text-slate-400">{formatDate(selectedTrackOrder.date)}</p>
                </div>
              </div>

              <div className="relative pl-8 flex items-center gap-3">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Package Prepared & Quality Checked</p>
                  <p className="text-[11px] text-slate-400">Warehouse Facility</p>
                </div>
              </div>

              <div className="relative pl-8 flex items-center gap-3">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="text-xs font-bold text-slate-900">In Transit with Courier Partner</p>
                  <p className="text-[11px] text-slate-400">FedEx Air Express tracking #928174</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedTrackOrder(null)}
              className="w-full py-3 bg-slate-900 text-white font-bold text-xs rounded-xl"
            >
              Close Window
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
