import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
export var ThemeSwitch = function (_a) {
    var className = _a.className;
    var _b = useState(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = useState("dark"), theme = _c[0], setTheme = _c[1];
    useEffect(function () {
        var root = document.documentElement;
        var savedTheme = localStorage.getItem("theme");
        var initialTheme = savedTheme || "dark";
        setTheme(initialTheme);
        root.classList.toggle("dark", initialTheme === "dark");
        setIsMounted(true);
    }, []);
    var toggleTheme = useCallback(function () {
        var newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }, [theme]);
    if (!isMounted)
        return _jsx("div", { className: "w-6 h-6" });
    return (_jsx("button", { "aria-label": theme === "light" ? "Switch to dark mode" : "Switch to light mode", className: "px-px transition-opacity hover:opacity-80 cursor-pointer bg-transparent border-none ".concat(className || ""), onClick: toggleTheme, children: theme === "light" ? (_jsx(MoonFilledIcon, { size: 22 })) : (_jsx(SunFilledIcon, { size: 22 })) }));
};
