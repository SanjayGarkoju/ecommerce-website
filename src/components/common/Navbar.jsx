import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Package,
  MapPin,
  Settings,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { SearchBar } from './SearchBar';
import { CATEGORIES } from '../../data/categories';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const { totalItemsCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setCategoryDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 shrink min-w-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Shop<span className="text-brand-600">Sphere</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-tight">
                Next-Gen Retail
              </span>
            </div>
          </Link>

          {/* Desktop Categories Dropdown */}
          <div className="hidden lg:relative lg:block">
            <button
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-xl hover:bg-slate-50 transition-all"
            >
              <span>Categories</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
            </button>

            {categoryDropdownOpen && (
              <div
                onMouseLeave={() => setCategoryDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-fade-in"
              >
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <img src={cat.image} alt={cat.name} className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">{cat.name}</p>
                      <p className="text-xs text-slate-400">{cat.count}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-2">
            <SearchBar />
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-0 sm:gap-1">
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2.5 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2.5 text-slate-600 hover:text-rose-600 rounded-xl hover:bg-rose-50/50 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 text-slate-600 hover:text-brand-600 rounded-xl hover:bg-brand-50/50 transition-colors flex items-center gap-2"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse-slow">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                Cart
              </span>
            </Link>

            {/* User Profile / Auth */}
            <div className="relative">
              {currentUser?.isLoggedIn ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-brand-500"
                    />
                    <span className="hidden md:inline text-xs font-semibold text-slate-800 max-w-[100px] truncate">
                      {currentUser.name}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-fade-in">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                        <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 p-2 text-xs font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <User className="w-4 h-4 text-slate-400" />
                        <span>My Account</span>
                      </Link>
                      <Link
                        to="/orders"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 p-2 text-xs font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <Package className="w-4 h-4 text-slate-400" />
                        <span>My Orders</span>
                      </Link>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2.5 p-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors mt-1 border-t border-slate-50"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Expanded */}
        {mobileSearchOpen && (
          <div className="md:hidden pt-3 pb-2 animate-fade-in">
            <SearchBar isMobile onClose={() => setMobileSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-900/60 backdrop-blur-sm z-50 flex flex-col">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto rounded-b-3xl shadow-2xl p-6 flex flex-col gap-6 animate-slide-up">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
              <Link to="/" className="text-base font-semibold text-slate-800 hover:text-brand-600 py-1">Home</Link>
              <Link to="/products" className="text-base font-semibold text-slate-800 hover:text-brand-600 py-1">All Products</Link>
              <Link to="/wishlist" className="text-base font-semibold text-slate-800 hover:text-brand-600 py-1 flex items-center justify-between">
                <span>Wishlist</span>
                <span className="text-xs font-bold bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">{wishlistItems.length}</span>
              </Link>
              <Link to="/cart" className="text-base font-semibold text-slate-800 hover:text-brand-600 py-1 flex items-center justify-between">
                <span>Cart</span>
                <span className="text-xs font-bold bg-brand-100 text-brand-600 px-2 py-0.5 rounded-full">{totalItemsCount}</span>
              </Link>
              {currentUser?.isLoggedIn && (
                <Link to="/orders" className="text-base font-semibold text-slate-800 hover:text-brand-600 py-1">My Orders</Link>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Shop by Category</span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="p-2.5 bg-slate-50 hover:bg-brand-50 rounded-xl text-xs font-semibold text-slate-700 hover:text-brand-600 transition-colors flex items-center gap-2"
                  >
                    <img src={cat.image} alt={cat.name} className="w-6 h-6 rounded-md object-cover" />
                    <span className="truncate">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {!currentUser?.isLoggedIn && (
              <div className="pt-2 border-t border-slate-100">
                <Link
                  to="/login"
                  className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-brand-500/20 block"
                >
                  Sign In / Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
