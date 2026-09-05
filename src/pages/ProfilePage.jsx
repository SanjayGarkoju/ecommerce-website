import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { formatPrice, formatDate } from '../utils/formatters';
import {
  User,
  MapPin,
  Package,
  LogOut,
  Plus,
  Trash2,
  CheckCircle,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const ProfilePage = () => {
  const { currentUser, logout, addresses, deleteAddress, setDefaultAddress, addAddress } = useAuth();
  const { orders } = useOrders();
  const [activeTab, setActiveTab] = useState('overview');

  const [showAddAddrForm, setShowAddAddrForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  if (!currentUser?.isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign In Required</h2>
        <p className="text-sm text-slate-500 mb-6">Please log in to view your user profile and order history.</p>
        <Link to="/login" className="px-6 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg">
          Sign In Now
        </Link>
      </div>
    );
  }

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddr.fullName && newAddr.street) {
      addAddress(newAddr);
      setNewAddr({ fullName: '', phone: '', street: '', city: '', state: '', zipCode: '' });
      setShowAddAddrForm(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-slate-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold">User Profile</span>
      </div>

      {/* User Header Profile Card */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-brand-500 shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h1 className="text-2xl font-extrabold text-white">{currentUser.name}</h1>
              <span className="bg-brand-500/20 text-brand-300 border border-brand-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                VIP Member
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{currentUser.email}</p>
            <p className="text-[11px] text-slate-500 mt-1">Member since August 2026</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-300 border border-white/15 rounded-xl text-xs font-bold transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Tabs List */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 p-3 shadow-sm space-y-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left flex items-center gap-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'overview' ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`w-full text-left flex items-center gap-3 p-3 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'addresses' ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Addresses ({addresses.length})</span>
          </button>
          <Link
            to="/orders"
            className="w-full text-left flex items-center justify-between p-3 rounded-2xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <Package className="w-4 h-4" />
              <span>Order History</span>
            </div>
            <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-[10px]">
              {orders.length}
            </span>
          </Link>
        </div>

        {/* Main Tab Content */}
        <div className="lg:col-span-9 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Full Name</span>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">{currentUser.name}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Email Address</span>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">{currentUser.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Security Status</span>
                  <p className="text-sm font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Password Protected & Verified</span>
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Total Orders Placed</span>
                  <p className="text-sm font-bold text-brand-600 mt-0.5">{orders.length} Orders</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">Saved Addresses</h2>
                <button
                  onClick={() => setShowAddAddrForm(!showAddAddrForm)}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Address</span>
                </button>
              </div>

              {/* Add address form dropdown */}
              {showAddAddrForm && (
                <form onSubmit={handleAddAddress} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-slide-up">
                  <h4 className="text-xs font-bold text-slate-900">Add New Shipping Address</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={newAddr.fullName}
                      onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={newAddr.phone}
                      onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Street Address"
                      required
                      value={newAddr.street}
                      onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                      className="sm:col-span-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={newAddr.city}
                      onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                    />
                    <input
                      type="text"
                      placeholder="State & ZIP"
                      required
                      value={newAddr.state}
                      onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl">
                    Save Address
                  </button>
                </form>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addresses.map((addr) => (
                  <div key={addr.id} className="p-4 rounded-2xl border border-slate-200 relative flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-900">{addr.fullName}</p>
                        {addr.isDefault && (
                          <span className="text-[10px] font-bold bg-brand-100 text-brand-700 px-2 py-0.5 rounded-md">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-2">{addr.street}</p>
                      <p className="text-xs text-slate-600">{addr.city}, {addr.state} {addr.zipCode}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{addr.phone}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs">
                      {!addr.isDefault && (
                        <button
                          onClick={() => setDefaultAddress(addr.id)}
                          className="text-brand-600 font-bold hover:underline"
                        >
                          Set Default
                        </button>
                      )}
                      <button
                        onClick={() => deleteAddress(addr.id)}
                        className="text-rose-600 font-semibold hover:bg-rose-50 p-1 rounded-lg ml-auto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
