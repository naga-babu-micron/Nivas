"use client";

import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative flex items-center justify-center gap-4 px-4 py-2 text-white text-sm text-center"
      style={{ backgroundColor: "rgb(244, 124, 44)" }}
    >
      <p className="flex-1 text-center font-medium text-sm leading-tight">
        Dear Nivas Mango Customers - We are taking orders for 28th April delivery | Min 3 boxes for Free Home Delivery...
      </p>
      <Link
        href="/shop"
        className="shrink-0 rounded bg-white px-4 py-1.5 text-sm font-semibold transition hover:bg-gray-100"
        style={{ color: "rgb(244, 124, 44)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
      >
        Shop Now !
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-xl leading-none"
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
}
