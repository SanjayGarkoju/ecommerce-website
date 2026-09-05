import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export const Rating = ({ rating = 0, reviewCount = null, size = 'sm', showText = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.8;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const starSize = sizeClasses[size] || sizeClasses.sm;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} fill-amber-400 text-amber-400`} />
        ))}
        {hasHalfStar && <StarHalf className={`${starSize} fill-amber-400 text-amber-400`} />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-slate-300 fill-slate-100`} />
        ))}
      </div>
      {showText && (
        <span className="text-xs font-semibold text-slate-700 ml-0.5">
          {rating.toFixed(1)}
          {reviewCount !== null && (
            <span className="text-slate-400 font-normal ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
};
