import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// pages/trackorder.tsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
export default function TrackOrder() {
    var id = useParams().id;
    var navigate = useNavigate();
    var _a = useState(null), order = _a[0], setOrder = _a[1];
    var _b = useState(id || ""), searchId = _b[0], setSearchId = _b[1];
    var _c = useState(false), notFound = _c[0], setNotFound = _c[1];
    var loadOrder = useCallback(function (orderId) {
        var orders = JSON.parse(localStorage.getItem("orders") || "[]");
        var found = orders.find(function (o) { return o.id === orderId; });
        if (found) {
            setOrder(found);
            setNotFound(false);
        }
        else {
            setOrder(null);
            setNotFound(true);
        }
    }, []);
    useEffect(function () {
        if (id)
            loadOrder(id);
    }, [id, loadOrder]);
    var handleSearch = function (e) {
        e.preventDefault();
        if (searchId.trim()) {
            loadOrder(searchId);
            navigate("/track-order/".concat(searchId), { replace: true });
        }
    };
    var statusSteps = [
        { key: "Processing", label: "Order Confirmed", icon: "✅", color: "bg-yellow-500", textColor: "text-yellow-700 dark:text-yellow-300" },
        { key: "Shipped", label: "Shipped", icon: "📦", color: "bg-blue-500", textColor: "text-blue-700 dark:text-blue-300" },
        { key: "Out for Delivery", label: "Out for Delivery", icon: "🚚", color: "bg-orange-500", textColor: "text-orange-700 dark:text-orange-300" },
        { key: "Delivered", label: "Delivered", icon: "🏠", color: "bg-green-500", textColor: "text-green-700 dark:text-green-300" },
    ];
    var currentStepIndex = order ? statusSteps.findIndex(function (step) { return step.key === order.status; }) : -1;
    return (_jsx(DefaultLayout, { children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 py-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent", children: "Track Your Delivery \uD83D\uDE80" }), _jsxs("form", { onSubmit: handleSearch, className: "flex gap-3 mb-10", children: [_jsx("input", { type: "text", placeholder: "Enter Order ID (e.g., ORD-1234567890)", value: searchId, onChange: function (e) { return setSearchId(e.target.value); }, className: "flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 focus:ring-4 focus:ring-fuchsia-400 focus:outline-none font-medium", required: true }), _jsx("button", { type: "submit", className: "px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105", children: "Track Now \u2192" })] }), notFound && (_jsx("div", { className: "text-center p-8 bg-red-100 dark:bg-red-900/40 border-2 border-red-400 rounded-2xl", children: _jsx("p", { className: "text-red-700 dark:text-red-300 font-bold text-lg", children: "\u274C Order not found. Please check your ID." }) })), order && (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-100 dark:border-purple-900", children: [_jsxs("div", { className: "p-6 border-b-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center flex-wrap gap-2", children: [_jsxs("h2", { className: "text-2xl font-black", children: ["Order #", order.id] }), _jsx("span", { className: "px-4 py-1 rounded-full font-bold shadow-md ".concat(order.status === "Processing"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : order.status === "Shipped"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : order.status === "Out for Delivery"
                                                        ? "bg-orange-100 text-orange-800"
                                                        : "bg-green-100 text-green-800"), children: order.status })] }), _jsxs("p", { className: "text-gray-500 text-sm mt-1", children: ["\uD83D\uDCC5 ", new Date(order.date).toLocaleDateString()] })] }), _jsxs("div", { className: "p-6 border-b border-purple-100 dark:border-purple-900", children: [_jsx("h3", { className: "font-black text-xl mb-4 text-purple-800 dark:text-purple-300", children: "\uD83D\uDCE6 Delivery Progress" }), _jsx("div", { className: "relative", children: statusSteps.map(function (step, idx) {
                                        var isPast = idx <= currentStepIndex;
                                        return (_jsxs("div", { className: "flex items-start gap-4 mb-8 last:mb-0", children: [_jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md ".concat(isPast ? "".concat(step.color, " text-white") : "bg-gray-300 dark:bg-gray-700 text-gray-500"), children: isPast ? "✓" : step.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-bold text-lg ".concat(isPast ? step.textColor : "text-gray-400 dark:text-gray-500"), children: step.label }), idx === currentStepIndex && (_jsx("p", { className: "text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 mt-1 animate-pulse", children: "\u23F3 Current status" }))] })] }, step.key));
                                    }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-black text-xl mb-4 text-purple-800 dark:text-purple-300", children: "\uD83D\uDECD\uFE0F Items in this order" }), _jsx("ul", { className: "space-y-3", children: order.items.map(function (item, idx) { return (_jsxs("li", { className: "flex justify-between items-center border-b border-purple-100 dark:border-purple-800 pb-2", children: [_jsxs("span", { className: "font-medium", children: [item.product.name, " ", _jsxs("span", { className: "text-gray-500", children: ["x ", item.quantity] })] }), _jsxs("span", { className: "font-bold text-fuchsia-600 dark:text-fuchsia-400", children: ["$", (item.product.price * item.quantity).toFixed(2)] })] }, idx)); }) }), _jsxs("div", { className: "mt-6 pt-4 text-right", children: [_jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Total " }), _jsxs("span", { className: "text-2xl font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent", children: ["$", order.total.toFixed(2)] })] })] })] }))] }) }));
}
