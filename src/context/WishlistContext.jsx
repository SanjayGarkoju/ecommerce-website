import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { useToast } from './ToastContext';
import { useCart } from './CartContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => getStorageItem('shopsphere_wishlist', []));
  const { showToast } = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    setStorageItem('shopsphere_wishlist', wishlistItems);
  }, [wishlistItems]);

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed "${product.name}" from Wishlist`, 'info');
    } else {
      setWishlistItems((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to Wishlist`, 'success');
    }
  };

  const removeFromWishlist = (productId) => {
    const item = wishlistItems.find((p) => p.id === productId);
    setWishlistItems((prev) => prev.filter((p) => p.id !== productId));
    if (item) {
      showToast(`Removed "${item.name}" from Wishlist`, 'info');
    }
  };

  const moveWishlistToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    showToast('Cleared Wishlist', 'info');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        moveWishlistToCart,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
