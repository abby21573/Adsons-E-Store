"use client";

import { Button, Kbd, Link, TextField, InputGroup } from "@heroui/react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

interface NavbarProps {
  cartItemCount?: number; // accepts cart item count
}

export const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  const searchInput = (
    <TextField aria-label="Search" type="search">
      <InputGroup>
        <InputGroup.Prefix>
          <SearchIcon className="text-base text-muted pointer-events-none flex-shrink-0" />
        </InputGroup.Prefix>
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

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3 max-w-[1280px]">
        {/* Left side: Logo & main nav items */}
        <div className="flex items-center gap-6 flex-wrap">
          <a className="flex items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ADSONS</p>
          </a>
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
        </div>

        {/* Right side: Cart, social icons, theme switch, search, sponsor button */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Cart Icon with badge */}
          <Link href="/cart" className="relative text-xl hover:text-accent transition-colors">
            🛒
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 9 ? "9+" : cartItemCount}
              </span>
            )}
          </Link>

          <Link
            aria-label="Twitter"
            href={siteConfig.links.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="text-muted" />
          </Link>
          <Link
            aria-label="Discord"
            href={siteConfig.links.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DiscordIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          {searchInput}
          <Button
            className="text-sm font-normal"
            variant="tertiary"
            onPress={() => window.open(siteConfig.links.sponsor, "_blank")}
          >
            <HeartFilledIcon className="text-danger" />
            Sponsor
          </Button>
        </div>
      </div>
    </nav>
  );
};