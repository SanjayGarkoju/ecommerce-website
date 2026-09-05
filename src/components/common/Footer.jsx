import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, Headphones, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free Express Shipping</h4>
              <p className="text-xs text-slate-400 mt-0.5">On all orders over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Secure Payments</h4>
              <p className="text-xs text-slate-400 mt-0.5">256-bit SSL encrypted checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30-Day Easy Returns</h4>
              <p className="text-xs text-slate-400 mt-0.5">Money-back guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">24/7 Priority Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">Dedicated customer team</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Shop<span className="text-brand-500">Sphere</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              ShopSphere is your premier destination for high-performance electronics, trending fashion, home essentials, and lifestyle gear curated with luxury craftsmanship.
            </p>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>San Francisco, CA</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>support@shopsphere.io</span>
              </div>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Shop Categories</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products?category=Electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/products?category=Fashion" className="hover:text-white transition-colors">Fashion</Link></li>
              <li><Link to="/products?category=Shoes" className="hover:text-white transition-colors">Footwear</Link></li>
              <li><Link to="/products?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/products?category=Home%20%26%20Kitchen" className="hover:text-white transition-colors">Home & Kitchen</Link></li>
              <li><Link to="/products?category=Beauty" className="hover:text-white transition-colors">Beauty & Care</Link></li>
            </ul>
          </div>

          {/* Column 2: Account & Orders */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Account & Support</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/profile" className="hover:text-white transition-colors">User Profile</Link></li>
              <li><Link to="/orders" className="hover:text-white transition-colors">Order Tracking</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Sign In / Register</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Help */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Customer Care</h5>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Help Center</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping & Delivery</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Returns & Exchanges</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ShopSphere Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with passion & precision</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
