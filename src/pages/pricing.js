'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DefaultLayout from "../layouts/default";
import { motion } from "framer-motion";
import { useState } from "react";
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
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};
// ✅ Real static icons for pricing plans
var pricingPlans = [
    {
        id: "basic",
        name: "Basic",
        price: 29,
        period: "month",
        description: "Perfect for individuals getting started",
        features: [
            "Up to 5 products",
            "Basic analytics",
            "Email support",
            "48-hour response time",
            "Standard security"
        ],
        notIncluded: ["Advanced analytics", "Priority support", "Custom branding"],
        popular: false,
        buttonText: "Get Started",
        color: "from-blue-500 to-cyan-500",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" // Basic / star icon
    },
    {
        id: "pro",
        name: "Pro",
        price: 79,
        period: "month",
        description: "Best for growing businesses",
        features: [
            "Up to 50 products",
            "Advanced analytics",
            "Priority email & chat support",
            "12-hour response time",
            "Enhanced security",
            "Custom reporting",
            "API access"
        ],
        notIncluded: ["Custom branding"],
        popular: true,
        buttonText: "Start Free Trial",
        color: "from-purple-600 to-pink-600",
        icon: "https://cdn-icons-png.flaticon.com/512/1903/1903301.png" // Pro / rocket icon
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: 199,
        period: "month",
        description: "For large scale operations",
        features: [
            "Unlimited products",
            "Real-time analytics",
            "24/7 dedicated support",
            "1-hour response time",
            "Maximum security",
            "Custom branding",
            "SLA guarantee",
            "Onboarding specialist"
        ],
        notIncluded: [],
        popular: false,
        buttonText: "Contact Sales",
        color: "from-orange-500 to-red-500",
        icon: "https://cdn-icons-png.flaticon.com/512/2997/2997608.png" // Enterprise / building icon
    }
];
var faqs = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade anytime. Changes take effect immediately." },
    { q: "Is there a free trial?", a: "Pro plan includes a 14-day free trial. No credit card required." },
    { q: "What payment methods do you accept?", a: "All major credit cards, PayPal, and bank transfers for Enterprise." },
    { q: "Is there a setup fee?", a: "No setup fees for any plan. You only pay the monthly subscription." },
];
export default function PricingPage() {
    var _a = useState("month"), billingPeriod = _a[0], setBillingPeriod = _a[1];
    var _b = useState(null), selectedPlan = _b[0], setSelectedPlan = _b[1];
    var navigateTo = function (path) {
        if (typeof window !== 'undefined') {
            window.location.href = path;
        }
    };
    var handleSelectPlan = function (planId) {
        setSelectedPlan(planId);
        setTimeout(function () {
            alert("You selected ".concat(planId, " plan. (Demo action)"));
            setSelectedPlan(null);
        }, 500);
    };
    var getDisplayPrice = function (price) {
        if (billingPeriod === "year") {
            return (price * 12 * 0.9).toFixed(0);
        }
        return price;
    };
    return (_jsxs(DefaultLayout, { children: [_jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-20 md:py-28", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" }), _jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse delay-1000" })] }), _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-4xl md:text-6xl font-extrabold text-white", children: "Simple, Transparent Pricing" }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mt-4 text-xl text-purple-100 max-w-2xl mx-auto", children: "Choose the plan that fits your needs. No hidden fees." })] })] }), _jsx("section", { className: "py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: _jsxs("div", { className: "inline-flex items-center gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-full", children: [_jsx("button", { onClick: function () { return setBillingPeriod("month"); }, className: "px-6 py-2 rounded-full font-semibold transition-all ".concat(billingPeriod === "month"
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"), children: "Monthly" }), _jsxs("button", { onClick: function () { return setBillingPeriod("year"); }, className: "px-6 py-2 rounded-full font-semibold transition-all ".concat(billingPeriod === "year"
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"), children: ["Yearly ", _jsx("span", { className: "text-xs text-green-500 ml-1", children: "Save 10%" })] })] }) }) }), _jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-800", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx(motion.div, { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: pricingPlans.map(function (plan) { return (_jsxs(motion.div, { variants: fadeInUp, whileHover: { y: -8 }, className: "relative rounded-2xl overflow-hidden transition-all ".concat(plan.popular
                                ? "shadow-2xl ring-2 ring-purple-500 scale-105 md:scale-105 z-10"
                                : "shadow-lg hover:shadow-xl"), children: [plan.popular && (_jsx("div", { className: "absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg", children: "Most Popular" })), _jsxs("div", { className: "bg-white dark:bg-gray-900 p-6 h-full flex flex-col", children: [_jsxs("div", { className: "text-center", children: [_jsx("img", { src: plan.icon, alt: plan.name, className: "w-16 h-16 mx-auto mb-3 object-contain" }), _jsx("h3", { className: "text-2xl font-bold text-gray-800 dark:text-white", children: plan.name }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 mt-2 text-sm", children: plan.description })] }), _jsxs("div", { className: "text-center mt-6", children: [_jsxs("span", { className: "text-5xl font-extrabold text-gray-800 dark:text-white", children: ["$", getDisplayPrice(plan.price)] }), _jsxs("span", { className: "text-gray-500 dark:text-gray-400", children: [" / ", billingPeriod] }), billingPeriod === "year" && (_jsx("p", { className: "text-xs text-green-600 mt-1", children: "Save 10% annually" }))] }), _jsx("div", { className: "mt-8 flex-1", children: _jsxs("ul", { className: "space-y-3", children: [plan.features.map(function (feature, idx) { return (_jsxs("li", { className: "flex items-center gap-2 text-gray-600 dark:text-gray-300", children: [_jsx("span", { className: "text-green-500", children: "\u2713" }), " ", feature] }, idx)); }), plan.notIncluded.map(function (feature, idx) { return (_jsxs("li", { className: "flex items-center gap-2 text-gray-400 line-through", children: [_jsx("span", { className: "text-gray-400", children: "\u2717" }), " ", feature] }, "not-".concat(idx))); })] }) }), _jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: function () { return handleSelectPlan(plan.id); }, disabled: selectedPlan === plan.id, className: "mt-8 w-full py-3 rounded-full font-semibold transition-all ".concat(plan.popular
                                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg"
                                                : "bg-gray-100 dark:bg-gray-800 text-purple-600 border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30"), children: selectedPlan === plan.id ? (_jsxs("span", { className: "flex items-center justify-center gap-2", children: [_jsxs("svg", { className: "animate-spin h-4 w-4", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Processing..."] })) : (plan.buttonText) })] })] }, plan.id)); }) }) }) }), _jsx("section", { className: "py-16 bg-white dark:bg-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Compare All Features" }), _jsx("div", { className: "mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-gray-200 dark:border-gray-800", children: [_jsx("th", { className: "p-4 text-gray-600 dark:text-gray-400", children: "Feature" }), pricingPlans.map(function (plan) { return (_jsx("th", { className: "p-4 text-center font-bold text-gray-800 dark:text-white", children: plan.name }, plan.id)); })] }) }), _jsx("tbody", { children: [
                                            { name: "Products limit", basic: "5", pro: "50", enterprise: "Unlimited" },
                                            { name: "Analytics", basic: "Basic", pro: "Advanced", enterprise: "Real-time" },
                                            { name: "Support response", basic: "48h", pro: "12h", enterprise: "1h (24/7)" },
                                            { name: "API access", basic: "✗", pro: "✓", enterprise: "✓" },
                                            { name: "Custom branding", basic: "✗", pro: "✗", enterprise: "✓" },
                                        ].map(function (row, idx) { return (_jsxs("tr", { className: "border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50", children: [_jsx("td", { className: "p-4 font-medium text-gray-800 dark:text-white", children: row.name }), _jsx("td", { className: "p-4 text-center text-gray-600 dark:text-gray-400", children: row.basic }), _jsx("td", { className: "p-4 text-center text-gray-600 dark:text-gray-400", children: row.pro }), _jsx("td", { className: "p-4 text-center text-gray-600 dark:text-gray-400", children: row.enterprise })] }, idx)); }) })] }) })] }) }), _jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-800", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Frequently Asked Questions" }), _jsx("div", { className: "mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" })] }), _jsx("div", { className: "space-y-4", children: faqs.map(function (faq, idx) { return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, viewport: { once: true }, className: "bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-lg transition-all", children: [_jsx("h3", { className: "font-bold text-gray-800 dark:text-white", children: faq.q }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-2", children: faq.a })] }, idx)); }) })] }) }), _jsxs("section", { className: "py-16 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full filter blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" })] }), _jsx("div", { className: "relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: "Ready to Get Started?" }), _jsx("p", { className: "mt-4 text-purple-100", children: "Join thousands of satisfied customers using Adsons." }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: function () { return navigateTo("/products"); }, className: "mt-6 px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl", children: "Start Shopping \u2192" })] }) })] })] }));
}
