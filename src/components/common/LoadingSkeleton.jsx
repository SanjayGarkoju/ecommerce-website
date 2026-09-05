import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm animate-pulse flex flex-col h-full">
      <div className="bg-slate-200 aspect-square w-full rounded-xl mb-4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
      <div className="h-5 bg-slate-200 rounded w-4/5 mb-3"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="h-6 bg-slate-200 rounded w-1/3"></div>
        <div className="h-9 w-9 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
