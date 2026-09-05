import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Subscribed! Check your inbox for your 15% discount code.', 'success');
      setEmail('');
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Join 50,000+ VIP Members</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Get 15% Off Your First ShopSphere Order
          </h2>
          <p className="text-indigo-100 text-xs sm:text-sm mt-2 leading-relaxed">
            Subscribe to receive exclusive drops, flash sale notifications, and weekly curated product recommendations.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[320px]">
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl flex items-center justify-center gap-2 text-white font-bold text-sm animate-fade-in border border-white/30">
              <Check className="w-5 h-5 text-emerald-300" />
              <span>You're Subscribed! Code: <strong>VIP15</strong></span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3.5 bg-white text-slate-900 placeholder-slate-400 text-sm font-medium rounded-xl sm:rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-300/30 flex-1 min-w-0"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm rounded-xl sm:rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 text-amber-400" />
              </button>
            </form>
          )}
          <p className="text-[11px] text-indigo-200/80 text-center md:text-left mt-2">
            No spam ever. Unsubscribe with 1 click anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
