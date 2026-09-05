import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';

import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchPage } from './pages/SearchPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { ProfilePage } from './pages/ProfilePage';
import { OrdersPage } from './pages/OrdersPage';

// 404 Fallback
const NotFoundPage = () => (
  <div className="max-w-7xl mx-auto px-4 py-24 text-center">
    <h1 className="text-6xl font-extrabold text-brand-600 mb-4">404</h1>
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h2>
    <p className="text-sm text-slate-500 mb-6">The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/" className="px-6 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg">
      Back to Homepage
    </Link>
  </div>
);

export function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <OrderProvider>
              <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-brand-500 selection:text-white">
                <ScrollToTop />
                <AnnouncementBar />
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListingPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
                <Toast />
              </div>
            </OrderProvider>
          </AuthProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
