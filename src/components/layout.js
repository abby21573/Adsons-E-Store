import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar } from "@/components/navbar";
import Footer from "./footer";
var NavbarComponent = Navbar;
var Layout = function (_a) {
    var children = _a.children, cartItemCount = _a.cartItemCount;
    return (_jsxs("div", { className: "relative min-h-screen flex flex-col bg-white overflow-x-hidden", children: [_jsx("div", { className: "fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-70" }), _jsx("div", { className: "fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" }), _jsx("div", { className: "sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2", children: _jsx(NavbarComponent, { cartItemCount: cartItemCount }) }) }), _jsx("main", { className: "flex-1 relative z-0 py-8", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "h-1 w-24 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mb-6" }), children] }) }), _jsx(Footer, {})] }));
};
export default Layout;
