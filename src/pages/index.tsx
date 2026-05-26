'use client';

import DefaultLayout from "../layouts/default";
import { motion, easeOut } from "framer-motion";
import { useState, useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

export default function HomePage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') window.location.href = path;
  };

  // ✅ Real product images (Unsplash)
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99, originalPrice: 129, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop", tag: "Best Seller", rating: 4.8 },
    { id: 2, name: "Smart Watch", price: 199, originalPrice: 249, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop", tag: "New", rating: 4.9 },
    { id: 3, name: "Leather Backpack", price: 79, originalPrice: 99, category: "fashion", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop", tag: "Trending", rating: 4.7 },
    { id: 4, name: "Minimalist Sneakers", price: 89, originalPrice: 119, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop", tag: "", rating: 4.6 },
    { id: 5, name: "Coffee Maker", price: 129, originalPrice: 179, category: "home", image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=150&h=150&fit=crop", tag: "Sale", rating: 4.8 },
    { id: 6, name: "Desk Lamp", price: 49, originalPrice: 69, category: "home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop", tag: "", rating: 4.5 },
  ];

  // ✅ Real icons for features (Flaticon PNG)
  const features = [
    { icon: "https://cdn-icons-png.flaticon.com/512/3082/3082033.png", title: "Free Express Shipping", desc: "On all orders over $100", stats: "2-4 days delivery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", title: "Bank-Grade Security", desc: "256-bit SSL encryption", stats: "100% safe transactions" },
    { icon: "https://cdn-icons-png.flaticon.com/512/1903/1903301.png", title: "Premium Quality", desc: "Handpicked products", stats: "Satisfaction guaranteed" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3627/3627659.png", title: "24/7 Concierge", desc: "Dedicated support team", stats: "Average 2min response" },
  ];

  // ✅ Real icons for stats
  const stats = [
    { value: "15K+", label: "Happy Customers", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917292.png", suffix: "" },
    { value: "500+", label: "Premium Products", icon: "https://cdn-icons-png.flaticon.com/512/1000/1000978.png", suffix: "" },
    { value: "99.9%", label: "Satisfaction Rate", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", suffix: "" },
    { value: "24/7", label: "Expert Support", icon: "https://cdn-icons-png.flaticon.com/512/3627/3627659.png", suffix: "" },
  ];

  // Real image for hero promo card
  const heroProductImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop";

  // Real icons for badges and buttons
  const fireIcon = "https://cdn-icons-png.flaticon.com/512/1141/1141720.png";
  const lightningIcon = "https://cdn-icons-png.flaticon.com/512/7881/7881283.png";
  const envelopeIcon = "https://cdn-icons-png.flaticon.com/512/542/542689.png";

  return (
    <DefaultLayout>
      {/* Hero Section - Split Layout */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-pink-700 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <img src={fireIcon} alt="fire" className="w-5 h-5" />
                <span>Limited Time Offer – Up to 40% Off</span>
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Shopping Experience</span>
              </h1>
              <p className="mt-6 text-lg text-purple-100 max-w-lg">
                Discover curated electronics, fashion, and home essentials. Premium quality, fast shipping, and exceptional service.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateTo("/products")}
                  className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Shop Now →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateTo("/deals")}
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all cursor-pointer"
                >
                  View Deals
                </motion.button>
              </div>

              <div className="mt-12 flex items-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">✓ Free Shipping</span>
                <span className="flex items-center gap-2">✓ 30-Day Returns</span>
                <span className="flex items-center gap-2">✓ Secure Checkout</span>
              </div>
            </motion.div>

            {/* Right side - Animated product card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative hidden lg:block perspective-1000"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl"
              >
                <div className="text-center">
                  <img src={heroProductImage} alt="Wireless Headphones" className="w-32 h-32 object-cover rounded-2xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Premium Wireless</h3>
                  <p className="text-purple-200 mt-2">Limited edition</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-3xl font-bold text-white">$99</span>
                    <span className="text-lg line-through text-purple-300">$149</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigateTo("/products")}
                    className="mt-6 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold cursor-pointer"
                  >
                    Shop Now →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Why Choose Adsons</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">Elevated Standards, Exceptional Value</h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative">
                  <img src={feature.icon} alt={feature.title} className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.desc}</p>
                  <div className="mt-4 pt-4 border-t border-purple-100 dark:border-purple-800">
                    <span className="text-sm font-semibold text-purple-600">{feature.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl animate-pulse delay-700" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
              <img src={lightningIcon} alt="lightning" className="w-4 h-4" />
              <span>Flash Sale Ends In: 12:34:56</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Up to 40% Off Sitewide</h2>
            <p className="mt-4 text-purple-100 text-lg">Use promo code: <span className="font-mono bg-white/20 px-3 py-1 rounded-full">ADS40</span></p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo("/products")}
              className="mt-8 px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl cursor-pointer"
            >
              Shop Flash Sale →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Best Sellers</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">Customer Favorites</h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-2xl"
                    animate={hoveredProduct === product.id ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    ★ {product.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => alert(`Added ${product.name} to cart`)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredProduct === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/95 to-transparent flex items-end justify-center pb-8"
                >
                  <button
                    onClick={() => navigateTo(`/product/${product.id}`)}
                    className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold shadow-lg"
                  >
                    Quick View
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigateTo("/products")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition cursor-pointer"
            >
              View All Products →
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <img src={stat.icon} alt={stat.label} className="w-12 h-12 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={envelopeIcon} alt="email" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join the Inner Circle</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Get exclusive access to early drops, VIP deals, and style inspiration.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert("Thanks for subscribing!")}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg cursor-pointer"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 mt-4">No spam, only good vibes. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}