import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { generateOrderId, getEstimatedDeliveryDate, formatDate } from '../utils/formatters';
import { useCart } from './CartContext';
import { useToast } from './ToastContext';

const OrderContext = createContext();

const MOCK_INITIAL_ORDERS = [
  {
    id: 'SHP-78291A',
    date: '2026-08-28T14:32:00Z',
    items: [
      {
        product: {
          id: 'prod-102',
          name: 'SonicWave ANC Wireless Headphones',
          brand: 'Acoustic Sound',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
        },
        quantity: 1
      }
    ],
    subtotal: 199.99,
    discount: 0,
    shippingFee: 0,
    total: 199.99,
    shippingAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'OR',
      zipCode: '97477'
    },
    paymentMethod: 'Credit Card (**** 4242)',
    status: 'Delivered',
    estimatedDelivery: 'Aug 31, 2026'
  }
];

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => getStorageItem('shopsphere_orders', MOCK_INITIAL_ORDERS));
  const { cartItems, totalAmount, subtotal, discountAmount, shippingFee, clearCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    setStorageItem('shopsphere_orders', orders);
  }, [orders]);

  const placeOrder = (shippingAddress, paymentMethod) => {
    if (cartItems.length === 0) {
      showToast('Your cart is empty!', 'error');
      return null;
    }

    const orderId = generateOrderId();
    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      shippingFee,
      total: totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'Processing',
      estimatedDelivery: getEstimatedDeliveryDate()
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const getOrderById = (id) => {
    return orders.find((o) => o.id === id);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
