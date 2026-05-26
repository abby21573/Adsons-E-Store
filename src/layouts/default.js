import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer ";
export default function DefaultLayout(_a) {
    var children = _a.children, _b = _a.cartItemCount, cartItemCount = _b === void 0 ? 0 : _b;
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-gradient-to-br from-lilac-100 via-lavender-50 to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900", children: [_jsx(Navbar, { cartItemCount: cartItemCount }), _jsx("main", { className: "flex-1 w-full", children: children }), _jsx(Footer, {})] }));
}
