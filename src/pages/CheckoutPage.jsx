import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { OrderSummary } from '../components/cart/OrderSummary';
import {
  MapPin,
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ChevronRight,
  Plus,
  QrCode,
  Banknote,
  ShieldCheck
} from 'lucide-react';

export const CheckoutPage = () => {
  const { cartItems } = useCart();
  const { addresses, addAddress } = useAuth();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id || 'new');

  // New Address Form State
  const [newAddr, setNewAddr] = useState({
    fullName: 'Alex Vance',
    phone: '+1 (555) 019-2834',
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zipCode: '97477'
  });

  // Payment Option State
  const [paymentType, setPaymentType] = useState('card'); // 'upi' | 'card' | 'cod'
  const [upiId, setUpiId] = useState('alex@upi');
  const [cardData, setCardData] = useState({
    number: '4242 •••• •••• 4242',
    name: 'Alex Vance',
    expiry: '12/28',
    cvv: '982'
  });

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500 mb-6">Add items to your cart before proceeding to checkout.</p>
        <Link to="/products" className="px-6 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg">
          Browse Products
        </Link>
      </div>
    );
  }

  const handleStep1Next = (e) => {
    e.preventDefault();
    if (selectedAddressId === 'new') {
      const added = addAddress(newAddr);
      setSelectedAddressId(added.id);
    }
    setCurrentStep(2);
  };

  const handlePlaceOrder = () => {
    let activeAddress = addresses.find((a) => a.id === selectedAddressId);
    if (!activeAddress) {
      activeAddress = newAddr;
    }

    let paymentMethodLabel = 'Credit/Debit Card (**** 4242)';
    if (paymentType === 'upi') {
      paymentMethodLabel = `UPI (${upiId})`;
    } else if (paymentType === 'cod') {
      paymentMethodLabel = 'Cash on Delivery (COD)';
    }

    const order = placeOrder(activeAddress, paymentMethodLabel);
    if (order) {
      navigate(`/order-success/${order.id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-slate-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/cart" className="hover:text-slate-700">Cart</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold">Secure Checkout</span>
      </div>

      {/* Multi-step Header Indicator */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                currentStep >= 1 ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'bg-slate-100 text-slate-400'
              }`}
            >
              {currentStep > 1 ? <CheckCircle2 className="w-5 h-5" /> : 1}
            </div>
            <span className={`text-xs font-bold ${currentStep >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>
              Address
            </span>
          </div>

          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 2 ? 'bg-brand-600' : 'bg-slate-200'}`}></div>

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                currentStep >= 2 ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'bg-slate-100 text-slate-400'
              }`}
            >
              {currentStep > 2 ? <CheckCircle2 className="w-5 h-5" /> : 2}
            </div>
            <span className={`text-xs font-bold ${currentStep >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>
              Review
            </span>
          </div>

          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 3 ? 'bg-brand-600' : 'bg-slate-200'}`}></div>

          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                currentStep >= 3 ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'bg-slate-100 text-slate-400'
              }`}
            >
              3
            </div>
            <span className={`text-xs font-bold ${currentStep >= 3 ? 'text-slate-900' : 'text-slate-400'}`}>
              Payment
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step Forms */}
        <div className="lg:col-span-8 space-y-6">
          {/* STEP 1: Delivery Address */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <MapPin className="w-5 h-5 text-brand-600" />
                <h2 className="text-xl font-bold text-slate-900">Step 1: Delivery Address</h2>
              </div>

              {/* Saved Addresses list */}
              {addresses.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Saved Addresses</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addresses.map((addr) => (
                      <label
                        key={addr.id}
                        onClick={() => setSelectedAddressId(addr.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          selectedAddressId === addr.id
                            ? 'border-brand-600 bg-brand-50/50 ring-2 ring-brand-500/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-xs font-bold text-slate-900">{addr.fullName}</p>
                          <input
                            type="radio"
                            name="addressSelect"
                            checked={selectedAddressId === addr.id}
                            onChange={() => setSelectedAddressId(addr.id)}
                            className="text-brand-600 focus:ring-brand-500"
                          />
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{addr.street}</p>
                        <p className="text-xs text-slate-600">{addr.city}, {addr.state} {addr.zipCode}</p>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium">{addr.phone}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Enter new address toggle */}
              <form onSubmit={handleStep1Next} className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="newAddrRadio"
                    checked={selectedAddressId === 'new'}
                    onChange={() => setSelectedAddressId('new')}
                    className="text-brand-600"
                  />
                  <label htmlFor="newAddrRadio" className="text-xs font-bold text-slate-800 cursor-pointer flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5 text-brand-600" />
                    <span>Enter a new delivery address</span>
                  </label>
                </div>

                {selectedAddressId === 'new' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 animate-slide-up">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={newAddr.fullName}
                        onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={newAddr.phone}
                        onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Street Address</label>
                      <input
                        type="text"
                        required
                        value={newAddr.street}
                        onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={newAddr.city}
                        onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">State & ZIP</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          placeholder="State"
                          value={newAddr.state}
                          onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                          className="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                        />
                        <input
                          type="text"
                          required
                          placeholder="ZIP"
                          value={newAddr.zipCode}
                          onChange={(e) => setNewAddr({ ...newAddr, zipCode: e.target.value })}
                          className="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg transition-all"
                >
                  Continue to Order Review &rarr;
                </button>
              </form>
            </div>
          )}

          {/* STEP 2: Order Review & Shipping Method */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-brand-600" />
                  <h2 className="text-xl font-bold text-slate-900">Step 2: Order Review</h2>
                </div>
                <button onClick={() => setCurrentStep(1)} className="text-xs font-bold text-brand-600 underline">
                  Change Address
                </button>
              </div>

              {/* Items Preview */}
              <div className="divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="py-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover bg-slate-50" />
                      <div>
                        <p className="font-bold text-slate-800">{item.product.name}</p>
                        <p className="text-slate-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900 text-sm">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Shipping Speed Options */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Shipping Speed</span>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-emerald-900">Express Delivery (3-5 Business Days)</p>
                      <p className="text-[11px] text-emerald-700">Tracked door-to-door delivery</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-900 bg-white px-2.5 py-1 rounded-lg">Included</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-1/3 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-2/3 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg"
                >
                  Proceed to Payment &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Options */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <CreditCard className="w-5 h-5 text-brand-600" />
                <h2 className="text-xl font-bold text-slate-900">Step 3: Payment Method</h2>
              </div>

              {/* Payment Type Selection Tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentType('card')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentType === 'card'
                      ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold ring-2 ring-brand-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs">Credit/Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentType('upi')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentType === 'upi'
                      ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold ring-2 ring-brand-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs">Instant UPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentType('cod')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentType === 'cod'
                      ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold ring-2 ring-brand-500/20'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Banknote className="w-5 h-5" />
                  <span className="text-xs">Cash on Delivery</span>
                </button>
              </div>

              {/* Payment Fields */}
              {paymentType === 'card' && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-slide-up">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">CVV</label>
                      <input
                        type="password"
                        maxLength="4"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentType === 'upi' && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-slide-up">
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Virtual Payment Address (VPA)</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="username@okaxis"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                  />
                  <p className="text-[11px] text-slate-400">Supported: Google Pay, PhonePe, Paytm, BHIM</p>
                </div>
              )}

              {paymentType === 'cod' && (
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 animate-slide-up">
                  <p className="font-bold">Pay Cash Upon Delivery</p>
                  <p className="mt-0.5">Please have exact change ready when courier arrives at your door.</p>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-1/3 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-2/3 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Lock className="w-4 h-4 text-emerald-200" />
                  <span>Place Order Now</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4 sticky top-24">
          <OrderSummary isCheckout={true} />
        </div>
      </div>
    </div>
  );
};
