"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Kbd, Link, TextField, InputGroup } from "@heroui/react";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo, } from "@/components/icons";
export var Navbar = function (_a) {
    var _b = _a.cartItemCount, cartItemCount = _b === void 0 ? 0 : _b;
    var searchInput = (_jsx(TextField, { "aria-label": "Search", type: "search", children: _jsxs(InputGroup, { children: [_jsx(InputGroup.Prefix, { children: _jsx(SearchIcon, { className: "text-base text-muted pointer-events-none flex-shrink-0" }) }), _jsx(InputGroup.Input, { className: "text-sm", placeholder: "Search..." }), _jsx(InputGroup.Suffix, { children: _jsxs(Kbd, { className: "inline-flex", children: [_jsx(Kbd.Abbr, { keyValue: "command" }), _jsx(Kbd.Content, { children: "K" })] }) })] }) }));
    return (_jsx("nav", { className: "sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg", children: _jsxs("div", { className: "mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3 max-w-[1280px]", children: [_jsxs("div", { className: "flex items-center gap-6 flex-wrap", children: [_jsxs("a", { className: "flex items-center gap-1", href: "/", children: [_jsx(Logo, {}), _jsx("p", { className: "font-bold text-inherit", children: "ADSONS" })] }), _jsx("ul", { className: "flex flex-wrap gap-4", children: siteConfig.navItems.map(function (item) { return (_jsx("li", { children: _jsx("a", { className: clsx("text-foreground hover:text-accent transition-colors whitespace-nowrap", "data-[active=true]:text-accent data-[active=true]:font-medium"), href: item.href, children: item.label }) }, item.href || item.label)); }) })] }), _jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [_jsxs(Link, { href: "/cart", className: "relative text-xl hover:text-accent transition-colors", children: ["\uD83D\uDED2", cartItemCount > 0 && (_jsx("span", { className: "absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", children: cartItemCount > 9 ? "9+" : cartItemCount }))] }), _jsx(ThemeSwitch, {}), searchInput] })] }) }));
};
