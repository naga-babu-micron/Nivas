"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CartIcon, AccountIcon } from "./icons";
import { useCart } from "@/hooks/useCart";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const cartCount = mounted ? totalItems : 0;

  return (
    <header
      className="sticky top-0 z-[9999] w-full"
      style={{ backgroundColor: "rgb(11, 31, 20)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0 py-2">
          <Image
            src="/images/niva-logo-small.png"
            alt="Niva logo"
            width={100}
            height={75}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav aria-label="Primary Site Navigation" className="hidden md:flex items-center">
          <ul className="flex items-center list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center h-[100px] px-5 text-xl font-semibold capitalize transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      letterSpacing: "0.4px",
                      lineHeight: "100px",
                      color: isActive ? "rgb(255, 180, 60)" : "rgb(255, 255, 255)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Cart + Account */}
        <div className="flex items-center gap-5">
          <Link
            href="/cart"
            className="relative flex items-center text-white hover:text-[rgb(255,180,60)] transition-colors"
            aria-label={`View Shopping Cart, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
          >
            <CartIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[rgb(244,124,44)] text-white text-[10px] font-bold leading-none" suppressHydrationWarning>
              {cartCount}
            </span>
          </Link>
          <Link
            href="/account"
            className="flex items-center text-white hover:text-[rgb(255,180,60)] transition-colors"
            aria-label="Account"
          >
            <AccountIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
