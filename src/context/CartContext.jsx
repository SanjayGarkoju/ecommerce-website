import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { MOCK_COUPONS } from '../data/coupons';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getStorageItem('shopsphere_cart', []));
  const [appliedCoupon, setAppliedCoupon] = useState(() => getStorageItem('shopsphere_applied_coupon', null));
  const { showToast } = useToast();

  useEffect(() => {
    setStorageItem('shopsphere_cart', cartItems);
  }, [cartItems]);

  useEffect(() => {
    setStorageItem('shopsphere_applied_coupon', appliedCoupon);
  }, [appliedCoupon]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(newQty, product.stock || 99)
        };
        showToast(`Updated "${product.name}" quantity in cart!`, 'success');
        return updated;
      } else {
        showToast(`Added "${product.name}" to your cart!`, 'success');
        return [...prev, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find((i) => i.product.id === productId);
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    if (item) {
      showToast(`Removed "${item.product.name}" from cart`, 'info');
    }
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const maxStock = item.product.stock || 99;
          return { ...item, quantity: Math.min(newQty, maxStock) };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const formattedCode = code.trim().toUpperCase();
    const coupon = MOCK_COUPONS.find((c) => c.code === formattedCode);

    if (!coupon) {
      showToast('Invalid coupon code. Try SPHERE20 or WELCOME10', 'error');
      return false;
    }

    const currentSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    if (currentSubtotal < coupon.minAmount) {
      showToast(`Minimum order amount of $${coupon.minAmount} required for coupon ${coupon.code}`, 'error');
      return false;
    }

    setAppliedCoupon(coupon);
    showToast(`Coupon "${coupon.code}" applied successfully!`, 'success');
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon code removed', 'info');
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percentage') {
      discountAmount = (subtotal * appliedCoupon.discountValue) / 100;
    } else if (appliedCoupon.discountType === 'flat') {
      discountAmount = appliedCoupon.discountValue;
    }
  }

  // Free shipping over $100 or with FREESHIP coupon
  const shippingFee = (subtotal >= 100 || (appliedCoupon && appliedCoupon.discountType === 'shipping') || cartItems.length === 0) ? 0 : 9.99;
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discountAmount,
        shippingFee,
        totalAmount,
        totalItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
