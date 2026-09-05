import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { useToast } from './ToastContext';

const AuthContext = createContext();

const DEFAULT_ADDRESSES = [
  {
    id: 'addr-1',
    fullName: 'Alex Vance',
    phone: '+1 (555) 019-2834',
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zipCode: '97477',
    isDefault: true
  }
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    getStorageItem('shopsphere_user', {
      name: 'Alex Vance',
      email: 'alex.vance@example.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    })
  );

  const [addresses, setAddresses] = useState(() => getStorageItem('shopsphere_addresses', DEFAULT_ADDRESSES));
  const { showToast } = useToast();

  useEffect(() => {
    setStorageItem('shopsphere_user', currentUser);
  }, [currentUser]);

  useEffect(() => {
    setStorageItem('shopsphere_addresses', addresses);
  }, [addresses]);

  const login = (email, password) => {
    const nameFromEmail = email.split('@')[0].replace('.', ' ');
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    
    const user = {
      name: formattedName || 'ShopSphere User',
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    };
    setCurrentUser(user);
    showToast(`Welcome back, ${user.name}!`, 'success');
    return true;
  };

  const signup = (name, email, password) => {
    const user = {
      name,
      email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      isLoggedIn: true
    };
    setCurrentUser(user);
    showToast(`Account created successfully! Welcome ${name}!`, 'success');
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out successfully', 'info');
  };

  const addAddress = (newAddr) => {
    const id = 'addr-' + Date.now();
    const addrObj = { ...newAddr, id, isDefault: addresses.length === 0 };
    setAddresses((prev) => [...prev, addrObj]);
    showToast('Delivery address saved', 'success');
    return addrObj;
  };

  const updateAddress = (id, updatedData) => {
    setAddresses((prev) => prev.map((a) => (a.id === id ? { ...a, ...updatedData } : a)));
    showToast('Address updated', 'success');
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    showToast('Address deleted', 'info');
  };

  const setDefaultAddress = (id) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id
      }))
    );
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
