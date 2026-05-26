import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DefaultLayout from "../layouts/default";
var ProductDetail = function (_a) {
    var onAddToCart = _a.onAddToCart, onBack = _a.onBack, getProductById = _a.getProductById;
    var id = useParams().id;
    var productId = Number(id);
    var _b = useState(1), quantity = _b[0], setQuantity = _b[1];
    if (isNaN(productId)) {
        return (_jsx(DefaultLayout, { children: _jsx("div", { className: "p-8 text-center", children: "Invalid product ID" }) }));
    }
    var product = getProductById(productId);
    if (!product) {
        return (_jsx(DefaultLayout, { children: _jsx("div", { className: "p-8 text-center", children: "Product not found" }) }));
    }
    // Use imageUrl if available, otherwise fallback to image
    var imageSrc = product.imageUrl || product.image;
    var handleQuantityChange = function (e) {
        var val = parseInt(e.target.value, 10);
        setQuantity(isNaN(val) || val < 1 ? 1 : val);
    };
    return (_jsx(DefaultLayout, { children: _jsxs("div", { className: "max-w-6xl mx-auto p-6", children: [_jsx("button", { onClick: onBack, className: "mb-4 text-purple-600 hover:text-purple-700 hover:underline transition", children: "\u2190 Back to Products" }), _jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [_jsx("img", { src: imageSrc, alt: product.name, className: "w-full md:w-1/2 rounded-2xl object-cover", onError: function (e) {
                                e.target.src = "https://placehold.co/400x400?text=No+Image";
                            } }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: product.name }), _jsxs("p", { className: "text-2xl text-purple-600 mt-2", children: ["$", product.price.toFixed(2)] }), product.originalPrice && (_jsxs("p", { className: "text-sm text-gray-400 line-through", children: ["$", product.originalPrice.toFixed(2)] })), _jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: product.description }), _jsxs("div", { className: "mt-6 flex items-center gap-4", children: [_jsx("input", { type: "number", min: "1", value: quantity, onChange: handleQuantityChange, className: "border border-gray-300 dark:border-gray-700 rounded-lg w-20 p-2 text-center", "aria-label": "Quantity" }), _jsx("button", { onClick: function () { return onAddToCart(product, quantity); }, disabled: !product.inStock, className: "px-6 py-2 rounded-full font-semibold transition ".concat(product.inStock
                                                ? "bg-purple-600 text-white hover:bg-purple-700"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"), "aria-label": "Add ".concat(quantity, " of ").concat(product.name, " to cart"), children: "Add to Cart" })] }), !product.inStock && (_jsx("p", { className: "text-red-500 text-sm mt-2", children: "Out of stock" }))] })] })] }) }));
};
export default ProductDetail;
