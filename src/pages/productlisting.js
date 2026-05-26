'use client';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DefaultLayout from "../layouts/default";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
var fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } }
};
var staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};
// ✅ All product images – working URLs
var allProducts = [
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
var categories = [
    { id: "all", name: "All Products", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }, // star
    { id: "electronics", name: "Electronics", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" }, // smartphone
    { id: "fashion", name: "Fashion", icon: "https://cdn-icons-png.flaticon.com/512/878/878035.png" }, // t‑shirt
    { id: "home", name: "Home & Living", icon: "https://cdn-icons-png.flaticon.com/512/2876/2876766.png" }, // sofa
    { id: "sports", name: "Sports & Outdoors", icon: "https://cdn-icons-png.flaticon.com/512/3043/3043765.png" }, // sports
];
var sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "rating", label: "Best Rating" },
];
// Real icons used in the page
var searchIcon = "https://cdn-icons-png.flaticon.com/512/622/622669.png";
var noResultsIcon = "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";
var inStockIcon = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
var outOfStockIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png";
export default function ProductsPage() {
    var _a;
    var _b = useState("all"), activeCategory = _b[0], setActiveCategory = _b[1];
    var _c = useState("featured"), sortBy = _c[0], setSortBy = _c[1];
    var _d = useState(""), searchQuery = _d[0], setSearchQuery = _d[1];
    var _e = useState([0, 300]), priceRange = _e[0], setPriceRange = _e[1];
    var _f = useState(null), showQuickView = _f[0], setShowQuickView = _f[1];
    var filteredProducts = useMemo(function () {
        var products = __spreadArray([], allProducts, true);
        if (activeCategory !== "all") {
            products = products.filter(function (p) { return p.category === activeCategory; });
        }
        if (searchQuery) {
            products = products.filter(function (p) {
                return p.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
        }
        products = products.filter(function (p) {
            return p.price >= priceRange[0] && p.price <= priceRange[1];
        });
        switch (sortBy) {
            case "price_asc":
                products.sort(function (a, b) { return a.price - b.price; });
                break;
            case "price_desc":
                products.sort(function (a, b) { return b.price - a.price; });
                break;
            case "rating":
                products.sort(function (a, b) { return b.rating - a.rating; });
                break;
            default: break;
        }
        return products;
    }, [activeCategory, searchQuery, sortBy, priceRange]);
    return (_jsxs(DefaultLayout, { children: [_jsxs("section", { className: "relative overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 dark:from-gray-900 dark:to-purple-900 py-20", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" }), _jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" })] }), _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 text-center", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-4xl md:text-6xl font-extrabold text-white", children: "Our Collection" }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mt-4 text-xl text-purple-100 max-w-2xl mx-auto", children: "Discover quality products curated just for you" })] })] }), _jsx("section", { className: "sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [_jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [_jsxs("div", { className: "relative w-80", children: [_jsx("input", { type: "text", placeholder: "Search products...", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); }, className: "w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500" }), _jsx("img", { src: searchIcon, alt: "search", className: "absolute left-3 top-2.5 w-5 h-5 opacity-60" })] }), _jsx("select", { value: sortBy, onChange: function (e) { return setSortBy(e.target.value); }, className: "px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500", children: sortOptions.map(function (opt) { return (_jsx("option", { value: opt.value, children: opt.label }, opt.value)); }) })] }), _jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: categories.map(function (cat) { return (_jsxs("button", { onClick: function () { return setActiveCategory(cat.id); }, className: "px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ".concat(activeCategory === cat.id
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"), children: [_jsx("img", { src: cat.icon, alt: cat.name, className: "w-4 h-4 object-contain" }), _jsx("span", { children: cat.name })] }, cat.id)); }) }), _jsxs("div", { className: "flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400", children: [_jsxs("span", { children: ["Price: $", priceRange[0], " - $", priceRange[1]] }), _jsx("input", { type: "range", min: "0", max: "300", value: priceRange[1], onChange: function (e) { return setPriceRange([priceRange[0], parseInt(e.target.value)]); }, className: "w-48 h-1 bg-purple-200 rounded-lg appearance-none cursor-pointer" })] })] }) }), _jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-800", children: _jsx("div", { className: "max-w-7xl mx-auto px-4", children: filteredProducts.length === 0 ? (_jsxs("div", { className: "text-center py-20", children: [_jsx("img", { src: noResultsIcon, alt: "No results", className: "w-24 h-24 mx-auto mb-4 opacity-60" }), _jsx("h3", { className: "text-2xl font-semibold text-gray-700 dark:text-gray-300", children: "No products found" }), _jsx("p", { className: "text-gray-500 mt-2", children: "Try adjusting your filters or search term." })] })) : (_jsx(motion.div, { variants: staggerContainer, initial: "hidden", animate: "visible", className: "grid grid-cols-4 gap-8", children: filteredProducts.map(function (product) { return (_jsxs(motion.div, { variants: fadeInUp, whileHover: { y: -8 }, className: "group relative bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden", children: [product.tag && (_jsx("div", { className: "absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full", children: product.tag })), !product.inStock && (_jsx("div", { className: "absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full", children: "Out of Stock" })), _jsx("div", { className: "relative pt-8 pb-4 text-center", children: _jsx("img", { src: product.image, alt: product.name, className: "w-32 h-32 object-cover rounded-2xl mx-auto transition-transform group-hover:scale-110", loading: "lazy", onError: function (e) {
                                            e.target.src = "https://placehold.co/300x300?text=No+Image";
                                        } }) }), _jsxs("div", { className: "p-5 pt-0 text-center", children: [_jsx("h3", { className: "text-lg font-bold text-gray-800 dark:text-white", children: product.name }), _jsxs("div", { className: "flex justify-center items-center gap-2 mt-1", children: [_jsxs("span", { className: "text-2xl font-bold text-purple-600", children: ["$", product.price] }), product.originalPrice && (_jsxs("span", { className: "text-sm text-gray-400 line-through", children: ["$", product.originalPrice] }))] }), _jsxs("div", { className: "flex justify-center items-center mt-1", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400 ml-1", children: product.rating })] }), _jsxs("div", { className: "mt-4 flex justify-center gap-2", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, disabled: !product.inStock, onClick: function () { return alert("Added ".concat(product.name, " to cart")); }, className: "px-4 py-2 rounded-full text-sm font-semibold transition ".concat(product.inStock
                                                        ? "bg-purple-600 text-white hover:bg-purple-700"
                                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"), children: "Add to Cart" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: function () { return setShowQuickView(product); }, className: "px-4 py-2 border border-purple-600 text-purple-600 rounded-full text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30", children: "Quick View" })] })] })] }, product.id)); }) })) }) }), _jsx(AnimatePresence, { children: showQuickView && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm", onClick: function () { return setShowQuickView(null); }, children: _jsxs(motion.div, { initial: { scale: 0.9, y: 20 }, animate: { scale: 1, y: 0 }, exit: { scale: 0.9, y: 20 }, className: "relative max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl", onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("button", { onClick: function () { return setShowQuickView(null); }, className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300", children: "\u2715" }), _jsxs("div", { className: "text-center", children: [_jsx("img", { src: showQuickView.image, alt: showQuickView.name, className: "w-40 h-40 object-cover rounded-2xl mx-auto mb-4", onError: function (e) {
                                            e.target.src = "https://placehold.co/300x300?text=No+Image";
                                        } }), _jsx("h3", { className: "text-2xl font-bold", children: showQuickView.name }), _jsxs("div", { className: "flex justify-center items-center gap-2 mt-2", children: [_jsxs("span", { className: "text-3xl font-bold text-purple-600", children: ["$", showQuickView.price] }), showQuickView.originalPrice && (_jsxs("span", { className: "text-gray-400 line-through", children: ["$", showQuickView.originalPrice] }))] }), _jsxs("div", { className: "flex justify-center mt-2", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "ml-1", children: showQuickView.rating })] }), _jsxs("p", { className: "mt-4 text-gray-600 dark:text-gray-300", children: ["Category: ", (_a = categories.find(function (c) { return c.id === showQuickView.category; })) === null || _a === void 0 ? void 0 : _a.name] }), _jsx("p", { className: "text-sm text-gray-500 mt-1 flex items-center justify-center gap-1", children: showQuickView.inStock ? (_jsxs(_Fragment, { children: [_jsx("img", { src: inStockIcon, alt: "In stock", className: "w-4 h-4" }), _jsx("span", { children: "In Stock" })] })) : (_jsxs(_Fragment, { children: [_jsx("img", { src: outOfStockIcon, alt: "Out of stock", className: "w-4 h-4" }), _jsx("span", { children: "Out of Stock" })] })) }), _jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, disabled: !showQuickView.inStock, onClick: function () {
                                            alert("Added ".concat(showQuickView.name, " to cart"));
                                            setShowQuickView(null);
                                        }, className: "mt-6 w-full py-3 rounded-full font-semibold ".concat(showQuickView.inStock
                                            ? "bg-purple-600 text-white hover:bg-purple-700"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"), children: showQuickView.inStock ? "Add to Cart" : "Out of Stock" })] })] }) })) })] }));
}
