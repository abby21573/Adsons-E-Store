'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import DefaultLayout from "../layouts/default";
import { motion } from "framer-motion";
import { useState } from "react";
export var CostItems = function (_a) {
    var items = _a.items;
    return (_jsx("div", { className: "flex items-center space-x-4", children: _jsxs("span", { className: "font-bold", children: ["$", items.price.toFixed(2)] }) }));
};
// Animation variants
var fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};
var staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};
// ✅ Real product images (Unsplash) – matching the product names
var initialCartItems = [
    { id: 1, name: "Wireless Headphones", price: 99, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop", category: "electronics" },
    { id: 2, name: "Smart Watch", price: 199, quantity: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop", category: "electronics" },
    { id: 3, name: "Leather Backpack", price: 79, quantity: 2, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&h=100&fit=crop", category: "fashion" },
];
// ✅ Real icons for empty cart and payment methods
var emptyCartIcon = "https://cdn-icons-png.flaticon.com/512/2331/2331970.png";
var paymentIcons = [
    "https://cdn-icons-png.flaticon.com/512/179/179457.png", // credit card
    "https://cdn-icons-png.flaticon.com/512/6596/6596590.png", // mobile pay
    "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", // cash
];
// ✅ Recommended products with real images
var recommendedProducts = [
    { name: "Bluetooth Speaker", price: 79, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop" },
    { name: "Wireless Mouse", price: 29, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=100&h=100&fit=crop" },
    { name: "Desk Organizer", price: 35, image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=100&h=100&fit=crop" },
    { name: "Phone Case", price: 19, image: "https://images.unsplash.com/photo-1601643157091-ce5c665179cb?w=100&h=100&fit=crop" },
];
export default function CartPage() {
    var _a = useState(initialCartItems), cartItems = _a[0], setCartItems = _a[1];
    var _b = useState(""), promoCode = _b[0], setPromoCode = _b[1];
    var _c = useState(0), discount = _c[0], setDiscount = _c[1];
    var _d = useState(false), promoApplied = _d[0], setPromoApplied = _d[1];
    var _e = useState(false), isCheckingOut = _e[0], setIsCheckingOut = _e[1];
    var subtotal = cartItems.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
    var shipping = subtotal > 100 ? 0 : 10;
    var tax = subtotal * 0.1;
    var total = subtotal + shipping + tax - discount;
    var updateQuantity = function (id, newQuantity) {
        if (newQuantity < 1)
            return;
        setCartItems(function (prev) {
            return prev.map(function (item) {
                return item.id === id ? __assign(__assign({}, item), { quantity: newQuantity }) : item;
            });
        });
    };
    var removeItem = function (id) {
        setCartItems(function (prev) { return prev.filter(function (item) { return item.id !== id; }); });
    };
    var applyPromo = function () {
        if (promoCode.toUpperCase() === "SAVE20" && !promoApplied) {
            setDiscount(subtotal * 0.2);
            setPromoApplied(true);
        }
        else if (promoCode.toUpperCase() === "SAVE10" && !promoApplied) {
            setDiscount(subtotal * 0.1);
            setPromoApplied(true);
        }
        else {
            alert("Invalid or already applied promo code");
        }
    };
    var handleCheckout = function () {
        setIsCheckingOut(true);
        setTimeout(function () {
            alert("Proceeding to checkout (demo)");
            setIsCheckingOut(false);
        }, 1500);
    };
    var navigateTo = function (path) {
        if (typeof window !== 'undefined') {
            window.location.href = path;
        }
    };
    return (_jsxs(DefaultLayout, { children: [_jsxs("section", { className: "relative overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 dark:from-gray-900 dark:to-purple-900 py-20", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" }), _jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" })] }), _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-4xl md:text-6xl font-extrabold text-white", children: "Your Cart" }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mt-4 text-xl text-purple-100 max-w-2xl mx-auto", children: "Review your items and proceed to checkout" })] })] }), _jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-800", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: cartItems.length === 0 ? (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-20 bg-white dark:bg-gray-900 rounded-2xl shadow-md", children: [_jsx("img", { src: emptyCartIcon, alt: "Empty cart", className: "w-24 h-24 mx-auto mb-4 opacity-70" }), _jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-white", children: "Your cart is empty" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-2", children: "Looks like you haven't added any items yet." }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: function () { return navigateTo("/products"); }, className: "mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg", children: "Continue Shopping \u2192" })] })) : (_jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(motion.div, { variants: staggerContainer, initial: "hidden", animate: "visible", className: "space-y-4", children: cartItems.map(function (item) { return (_jsxs(motion.div, { variants: fadeInUp, whileHover: { scale: 1.02 }, layout: true, className: "bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4 items-center hover:shadow-xl transition-all", children: [_jsx("div", { className: "w-24 h-24 rounded-2xl overflow-hidden bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover", onError: function (e) {
                                                            e.target.src = "https://placehold.co/100x100?text=No+Image";
                                                        } }) }), _jsxs("div", { className: "flex-1 text-center sm:text-left", children: [_jsx("h3", { className: "text-lg font-bold text-gray-800 dark:text-white", children: item.name }), _jsx("p", { className: "text-sm text-gray-500", children: item.category }), _jsxs("div", { className: "mt-1 text-xl font-bold text-purple-600", children: ["$", item.price] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { onClick: function () { return updateQuantity(item.id, item.quantity - 1); }, className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition", children: "-" }), _jsx("span", { className: "w-8 text-center font-semibold", children: item.quantity }), _jsx("button", { onClick: function () { return updateQuantity(item.id, item.quantity + 1); }, className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition", children: "+" })] }), _jsxs("div", { className: "text-right min-w-[80px]", children: [_jsxs("div", { className: "font-bold text-gray-800 dark:text-white", children: ["$", (item.price * item.quantity).toFixed(2)] }), _jsx("button", { onClick: function () { return removeItem(item.id); }, className: "text-sm text-red-500 hover:text-red-600 mt-1", children: "Remove" })] })] }, item.id)); }) }), _jsx("div", { className: "mt-6", children: _jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: function () { return navigateTo("/products"); }, className: "inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold", children: "\u2190 Continue Shopping" }) })] }), _jsx(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "lg:sticky lg:top-24 h-fit", children: _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 dark:text-white mb-4", children: "Order Summary" }), _jsxs("div", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Subtotal" }), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: shipping === 0 ? "Free" : "$".concat(shipping.toFixed(2)) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Tax (10%)" }), _jsxs("span", { children: ["$", tax.toFixed(2)] })] }), discount > 0 && (_jsxs("div", { className: "flex justify-between text-green-600", children: [_jsx("span", { children: "Discount (SAVE20)" }), _jsxs("span", { children: ["-$", discount.toFixed(2)] })] })), _jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 pt-3 mt-3", children: _jsxs("div", { className: "flex justify-between text-lg font-bold text-gray-800 dark:text-white", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", total.toFixed(2)] })] }) })] }), _jsxs("div", { className: "mt-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Promo Code" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: promoCode, onChange: function (e) { return setPromoCode(e.target.value); }, placeholder: "SAVE20 or SAVE10", className: "flex-1 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500", disabled: promoApplied }), _jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: applyPromo, disabled: promoApplied, className: "px-4 py-2 rounded-full font-semibold ".concat(promoApplied
                                                                ? "bg-green-500 text-white cursor-default"
                                                                : "bg-purple-600 text-white hover:bg-purple-700"), children: promoApplied ? "Applied ✓" : "Apply" })] }), promoApplied && (_jsxs("p", { className: "text-xs text-green-600 mt-1", children: ["Promo code applied! You saved $", discount.toFixed(2)] }))] }), _jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: handleCheckout, disabled: isCheckingOut, className: "w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50", children: isCheckingOut ? (_jsxs("span", { className: "flex items-center justify-center gap-2", children: [_jsxs("svg", { className: "animate-spin h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Processing..."] })) : ("Proceed to Checkout →") }), _jsxs("div", { className: "mt-6 text-center", children: [_jsx("p", { className: "text-xs text-gray-500", children: "We accept" }), _jsx("div", { className: "flex justify-center gap-3 mt-2", children: paymentIcons.map(function (icon, idx) { return (_jsx("img", { src: icon, alt: "payment method", className: "w-8 h-8 object-contain" }, idx)); }) })] })] }) })] })) }) }), cartItems.length > 0 && (_jsx("section", { className: "py-16 bg-white dark:bg-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "You May Also Like" }), _jsx("div", { className: "mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: recommendedProducts.map(function (item, idx) { return (_jsxs(motion.div, { whileHover: { y: -5 }, className: "bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center cursor-pointer", onClick: function () { return alert("Added ".concat(item.name, " to cart")); }, children: [_jsx("img", { src: item.image, alt: item.name, className: "w-20 h-20 object-cover rounded-xl mx-auto mb-2", onError: function (e) {
                                            e.target.src = "https://placehold.co/100x100?text=No+Image";
                                        } }), _jsx("h3", { className: "font-semibold", children: item.name }), _jsxs("p", { className: "text-purple-600 font-bold", children: ["$", item.price] })] }, idx)); }) })] }) }))] }));
}
