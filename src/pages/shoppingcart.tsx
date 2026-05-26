'use client';

import DefaultLayout from "../layouts/default";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

export const CostItems = ({ items }: { items: { price: number } }) => (
  <div className="flex items-center space-x-4">
    <span className="font-bold">${items.price.toFixed(2)}</span>
  </div>
);

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// ✅ Real product images (Unsplash) – matching the product names
const initialCartItems = [
  { id: 1, name: "Wireless Headphones", price: 99, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop", category: "electronics" },
  { id: 2, name: "Smart Watch", price: 199, quantity: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop", category: "electronics" },
  { id: 3, name: "Leather Backpack", price: 79, quantity: 2, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&h=100&fit=crop", category: "fashion" },
];

// ✅ Real icons for empty cart and payment methods
const emptyCartIcon = "https://cdn-icons-png.flaticon.com/512/2331/2331970.png";
const paymentIcons = [
  "https://cdn-icons-png.flaticon.com/512/179/179457.png",   // credit card
  "https://cdn-icons-png.flaticon.com/512/6596/6596590.png", // mobile pay
  "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", // cash
];

// ✅ Recommended products with real images
const recommendedProducts = [
  { name: "Bluetooth Speaker", price: 79, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop" },
  { name: "Wireless Mouse", price: 29, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=100&h=100&fit=crop" },
  { name: "Desk Organizer", price: 35, image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=100&h=100&fit=crop" },
  { name: "Phone Case", price: 19, image: "https://images.unsplash.com/photo-1601643157091-ce5c665179cb?w=100&h=100&fit=crop" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax - discount;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE20" && !promoApplied) {
      setDiscount(subtotal * 0.2);
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === "SAVE10" && !promoApplied) {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else {
      alert("Invalid or already applied promo code");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert("Proceeding to checkout (demo)");
      setIsCheckingOut(false);
    }, 1500);
  };

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 dark:from-gray-900 dark:to-purple-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Your Cart
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Review your items and proceed to checkout
          </motion.p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
            >
              <img src={emptyCartIcon} alt="Empty cart" className="w-24 h-24 mx-auto mb-4 opacity-70" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your cart is empty</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Looks like you haven't added any items yet.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateTo("/products")}
                className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg"
              >
                Continue Shopping →
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items - Left Column */}
              <div className="lg:col-span-2">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      layout
                      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4 items-center hover:shadow-xl transition-all"
                    >
                      {/* Product Image – real image */}
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=No+Image";
                          }}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="mt-1 text-xl font-bold text-purple-600">${item.price}</div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="text-right min-w-[80px]">
                        <div className="font-bold text-gray-800 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-500 hover:text-red-600 mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Continue Shopping Button */}
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigateTo("/products")}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    ← Continue Shopping
                  </motion.button>
                </div>
              </div>

              {/* Order Summary - Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24 h-fit"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Order Summary</h2>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (SAVE20)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code Input */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="SAVE20 or SAVE10"
                        className="flex-1 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        disabled={promoApplied}
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={applyPromo}
                        disabled={promoApplied}
                        className={`px-4 py-2 rounded-full font-semibold ${
                          promoApplied
                            ? "bg-green-500 text-white cursor-default"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                        }`}
                      >
                        {promoApplied ? "Applied ✓" : "Apply"}
                      </motion.button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-green-600 mt-1">Promo code applied! You saved ${discount.toFixed(2)}</p>
                    )}
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Proceed to Checkout →"
                    )}
                  </motion.button>

                  {/* Payment methods – real icons */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">We accept</p>
                    <div className="flex justify-center gap-3 mt-2">
                      {paymentIcons.map((icon, idx) => (
                        <img key={idx} src={icon} alt="payment method" className="w-8 h-8 object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Recommended Products Section */}
      {cartItems.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                You May Also Like
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendedProducts.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center cursor-pointer"
                  onClick={() => alert(`Added ${item.name} to cart`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl mx-auto mb-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=No+Image";
                    }}
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-purple-600 font-bold">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </DefaultLayout>
  );
}