'use client';

import DefaultLayout from "../layouts/default";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// ✅ All product images – working URLs
const allProducts = [
  { id: 1, name: "Wireless Headphones", price: 99, originalPrice: 129, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", tag: "Best Seller", rating: 4.8, inStock: true },
  { id: 2, name: "Smart Watch", price: 199, originalPrice: 249, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", tag: "New", rating: 4.9, inStock: true },
  { id: 3, name: "Leather Backpack", price: 79, originalPrice: 99, category: "fashion", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop", tag: "Trending", rating: 4.7, inStock: true },
  { id: 4, name: "Minimalist Sneakers", price: 89, originalPrice: 119, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", tag: "", rating: 4.6, inStock: true },
  { id: 5, name: "Coffee Maker", price: 129, originalPrice: 179, category: "home", image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=300&h=300&fit=crop", tag: "Sale", rating: 4.8, inStock: false },
  { id: 6, name: "Desk Lamp", price: 49, originalPrice: 69, category: "home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop", tag: "", rating: 4.5, inStock: true },
  { id: 7, name: "Wireless Mouse", price: 29, originalPrice: 49, category: "electronics", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop", tag: "", rating: 4.7, inStock: true },
  { id: 8, name: "Yoga Mat", price: 45, originalPrice: 65, category: "sports", image: "https://images.unsplash.com/photo-1592432678016-b910b4528139?w=300&h=300&fit=crop", tag: "Eco-Friendly", rating: 4.9, inStock: true },
  { id: 9, name: "Bluetooth Speaker", price: 79, originalPrice: 99, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop", tag: "Bestseller", rating: 4.8, inStock: true },
];

// ✅ Categories – real static icons (PNG)
const categories = [
  { id: "all", name: "All Products", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },          // star
  { id: "electronics", name: "Electronics", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },   // smartphone
  { id: "fashion", name: "Fashion", icon: "https://cdn-icons-png.flaticon.com/512/878/878035.png" },             // t‑shirt
  { id: "home", name: "Home & Living", icon: "https://cdn-icons-png.flaticon.com/512/2876/2876766.png" },       // sofa
  { id: "sports", name: "Sports & Outdoors", icon: "https://cdn-icons-png.flaticon.com/512/3043/3043765.png" }, // sports
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rating" },
];

// Real icons used in the page
const searchIcon = "https://cdn-icons-png.flaticon.com/512/622/622669.png";
const noResultsIcon = "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";
const inStockIcon = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
const outOfStockIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [showQuickView, setShowQuickView] = useState<typeof allProducts[0] | null>(null);

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];
    if (activeCategory !== "all") {
      products = products.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    products = products.filter(p =>
      p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    switch (sortBy) {
      case "price_asc": products.sort((a, b) => a.price - b.price); break;
      case "price_desc": products.sort((a, b) => b.price - a.price); break;
      case "rating": products.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return products;
  }, [activeCategory, searchQuery, sortBy, priceRange]);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 dark:from-gray-900 dark:to-purple-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto"
          >
            Discover quality products curated just for you
          </motion.p>
        </div>
      </section>

      {/* Filters & Search Bar */}
      <section className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search input with real icon */}
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <img
                src={searchIcon}
                alt="search"
                className="absolute left-3 top-2.5 w-5 h-5 opacity-60"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Category pills with real icons */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                }`}
              >
                <img src={cat.icon} alt={cat.name} className="w-4 h-4 object-contain" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Price Range Slider */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Price: ${priceRange[0]} - ${priceRange[1]}</span>
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-48 h-1 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <img src={noResultsIcon} alt="No results" className="w-24 h-24 mx-auto mb-4 opacity-60" />
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  {product.tag && (
                    <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Out of Stock
                    </div>
                  )}

                  <div className="relative pt-8 pb-4 text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-2xl mx-auto transition-transform group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/300x300?text=No+Image";
                      }}
                    />
                  </div>

                  <div className="p-5 pt-0 text-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{product.name}</h3>
                    <div className="flex justify-center items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex justify-center items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{product.rating}</span>
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        onClick={() => alert(`Added ${product.name} to cart`)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                          product.inStock
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowQuickView(product)}
                        className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30"
                      >
                        Quick View
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowQuickView(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQuickView(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
              <div className="text-center">
                <img
                  src={showQuickView.image}
                  alt={showQuickView.name}
                  className="w-40 h-40 object-cover rounded-2xl mx-auto mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/300x300?text=No+Image";
                  }}
                />
                <h3 className="text-2xl font-bold">{showQuickView.name}</h3>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <span className="text-3xl font-bold text-purple-600">${showQuickView.price}</span>
                  {showQuickView.originalPrice && (
                    <span className="text-gray-400 line-through">${showQuickView.originalPrice}</span>
                  )}
                </div>
                <div className="flex justify-center mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{showQuickView.rating}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Category: {categories.find(c => c.id === showQuickView.category)?.name}
                </p>
                <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
                  {showQuickView.inStock ? (
                    <>
                      <img src={inStockIcon} alt="In stock" className="w-4 h-4" />
                      <span>In Stock</span>
                    </>
                  ) : (
                    <>
                      <img src={outOfStockIcon} alt="Out of stock" className="w-4 h-4" />
                      <span>Out of Stock</span>
                    </>
                  )}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!showQuickView.inStock}
                  onClick={() => {
                    alert(`Added ${showQuickView.name} to cart`);
                    setShowQuickView(null);
                  }}
                  className={`mt-6 w-full py-3 rounded-full font-semibold ${
                    showQuickView.inStock
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {showQuickView.inStock ? "Add to Cart" : "Out of Stock"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DefaultLayout>
  );
}