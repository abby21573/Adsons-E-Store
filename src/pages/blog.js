import { jsx as _jsx } from "react/jsx-runtime";

import DefaultLayout from "../layouts/default";
export default function DocsPage() {
    return (_jsx(DefaultLayout, { children: _jsx("section", { className: "flex flex-col items-center justify-center gap-4 py-8 md:py-10", children: _jsx("div", { className: "inline-block max-w-lg text-center justify-center", children: _jsx("h1", { className: title(), children: "Blog" }) }) }) }));
}
