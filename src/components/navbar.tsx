"use client";

import { useState } from "react";
import { Button, Kbd, Link, TextField, InputGroup } from "@heroui/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
} from "@/components/icons";

interface NavbarProps {
  cartItemCount?: number;
}

export const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const searchInput = (
    <TextField aria-label="Search" type="search">
      <InputGroup>
        <InputGroup.Prefix />
        <InputGroup.Input className="text-sm" placeholder="Search..." />
        <InputGroup.Suffix>
          <Kbd className="inline-flex">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );

  const rightSideItems = (
    <>
      <Link href="/cart" className="relative text-xl hover:text-accent transition-colors">
        🛒
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemCount > 9 ? "9+" : cartItemCount}
          </span>
        )}
      </Link>
      <ThemeSwitch />
      {searchInput}
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3 max-w-[1280px]">
          {/* Left side: Logo + store name (always visible) */}
          <div className="flex items-center gap-2">
            {/* Replace the src attribute with your public image URL */}
            <img
              src="/logo.png"  // CHANGE THIS TO YOUR PUBLIC URL OR PATH
              alt="Adsons Logo"
              className="h-8 w-auto"
            />
            <p className="font-bold text-inherit text-lg">ADSONS</p>
          </div>

          {/* Desktop navigation (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-6 flex-wrap">
            <ul className="flex flex-wrap gap-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.href || item.label}>
                  <a
                    className={clsx(
                      "text-foreground hover:text-accent transition-colors whitespace-nowrap",
                      "data-[active=true]:text-accent data-[active=true]:font-medium"
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {rightSideItems}
            </div>
          </div>

          {/* Mobile hamburger button (visible only on small screens) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-accent focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <div
        className={clsx(
          "fixed top-[73px] left-0 w-full bg-background/95 backdrop-blur-lg border-b border-separator z-40 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-4 max-h-[calc(100vh-73px)] overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href || item.label}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3 pt-2 border-t border-separator">
            {rightSideItems}
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};