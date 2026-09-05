import React from 'react';
import { MOCK_REVIEWS } from '../../data/reviews';
import { Rating } from '../common/Rating';
import { Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <section className="py-16 bg-slate-900 text-white rounded-3xl my-8 mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-10 lg:px-12 relative overflow-hidden border border-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-400/20">
            Real Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Loved by 30,000+ Shoppers
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            See what our verified customers have to say about their ShopSphere experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/60 flex flex-col justify-between hover:border-brand-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Rating rating={rev.rating} size="sm" showText={false} />
                  <Quote className="w-6 h-6 text-brand-500/30" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/60">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-500/50"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Purchase" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
