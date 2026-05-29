import type { ComponentType } from "react";
import { Navbar }  from "@/components/navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  cartItemCount: number;
}

const NavbarComponent = Navbar as ComponentType<{ cartItemCount: number }>;

const Layout = ({ children, cartItemCount }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Animated background gradient (subtle, modern) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-70" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />

      {/* Sticky glassmorphic navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <NavbarComponent cartItemCount={cartItemCount} />
        </div>
      </div>

      {/* Main content with card-like inner container */}
      <main className="flex-1 relative z-0 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative accent bar */}
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mb-6" />
          {children}
        </div>
      </main>

      {/* Modern, colorful footer */}
      <Footer />
    </div>
  );
};

export default Layout;