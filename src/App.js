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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/index";
import PricingPage from "./pages/pricing";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import ProductDetail from "./pages/productdetail";
import Cart from "./pages/shoppingcart";
import ProductList from "./pages/productlisting";
import { products } from "./data/product";
function App() {
    var _a = useState([]), cartItems = _a[0], setCartItems = _a[1];
    var navigate = useNavigate();
    var ProductListComponent = ProductList;
    var CartComponent = Cart;
    var addToCart = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        setCartItems(function (prev) {
            var existing = prev.find(function (item) { return item.product.id === product.id; });
            if (existing) {
                return prev.map(function (item) {
                    return item.product.id === product.id
                        ? __assign(__assign({}, item), { quantity: item.quantity + quantity }) : item;
                });
            }
            return __spreadArray(__spreadArray([], prev, true), [{ product: product, quantity: quantity }], false);
        });
    };
    var updateQuantity = function (productId, newQuantity) {
        if (newQuantity <= 0) {
            setCartItems(function (prev) { return prev.filter(function (item) { return item.product.id !== productId; }); });
        }
        else {
            setCartItems(function (prev) {
                return prev.map(function (item) {
                    return item.product.id === productId
                        ? __assign(__assign({}, item), { quantity: newQuantity }) : item;
                });
            });
        }
    };
    var removeFromCart = function (productId) {
        setCartItems(function (prev) { return prev.filter(function (item) { return item.product.id !== productId; }); });
    };
    var handleCheckout = function () {
        alert("Order placed successfully!");
        setCartItems([]);
        navigate("/");
    };
    var getProductById = function (id) {
        return products.find(function (p) { return p.id === id; });
    };
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(IndexPage, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(PricingPage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/productlisting", element: _jsx(ProductListComponent, { products: products, onAddToCart: addToCart, onViewDetail: function (id) { return navigate("/product/".concat(id)); } }) }), _jsx(Route, { path: "/product/:id", element: _jsx(ProductDetail, { onAddToCart: addToCart, onBack: function () { return navigate("/productlisting"); }, getProductById: getProductById }) }), _jsx(Route, { path: "/shoppingcart", element: _jsx(CartComponent, { items: cartItems, onUpdateQty: updateQuantity, onRemove: removeFromCart, onCheckout: handleCheckout, onContinue: function () { return navigate("/products"); } }) })] }));
}
export default App;
