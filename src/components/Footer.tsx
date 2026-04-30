import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./icons";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

const siteLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping Details", href: "/shipping-details" },
  { label: "Refund Police", href: "/refund-police" },
];

export function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div
        className="w-full py-10"
        style={{ backgroundColor: "rgb(11, 31, 20)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex items-start">
              <Image
                src="/images/niva-logo.png"
                alt="Niva logo"
                width={120}
                height={107}
                className="object-contain"
                style={{ width: "120px", height: "auto" }}
              />
            </div>

            {/* Website links */}
            <div>
              <h2
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(255, 180, 60)",
                }}
              >
                Website
              </h2>
              <nav aria-label="Website">
                <ul className="space-y-2 list-none p-0 m-0">
                  {footerNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white hover:text-[rgb(255,180,60)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Site links */}
            <div>
              <h2
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(255, 180, 60)",
                }}
              >
                Site Links
              </h2>
              <nav aria-label="Site Links">
                <ul className="space-y-2 list-none p-0 m-0">
                  {siteLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white hover:text-[rgb(255,180,60)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact details */}
            <div>
              <h3
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(255, 180, 60)",
                }}
              >
                Contact Details
              </h3>
              <address className="not-italic text-sm text-white space-y-1 leading-relaxed">
                <p>Niva Foods Pte Ltd</p>
                <p>Blk 206B, Compassvale Lane</p>
                <p>#08-95, Singapore 542206</p>
                <Link
                  href="mailto:nivafoodssg@gmail.com"
                  className="block hover:text-[rgb(255,180,60)] transition-colors"
                >
                  nivafoodssg@gmail.com
                </Link>
                <Link
                  href="tel:+6593835114"
                  className="block hover:text-[rgb(255,180,60)] transition-colors"
                >
                  +65 93835114
                </Link>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="w-full"
        style={{ backgroundColor: "rgb(11, 31, 20)", borderTop: "1px solid rgba(255,255,255,0.15)" }}
      >
        <div
          className="mx-auto max-w-7xl px-6 flex items-center justify-between py-3"
        >
          <p className="text-sm text-white py-3">Copyright © 2026 Niva Foods</p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook" className="text-white hover:text-[rgb(255,180,60)] transition-colors">
              <FacebookIcon />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-white hover:text-[rgb(255,180,60)] transition-colors">
              <TwitterIcon />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-white hover:text-[rgb(255,180,60)] transition-colors">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
