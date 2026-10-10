"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/store-provider";

const navLinks = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop?category=Living", label: "Living" },
  { href: "/shop?category=Lighting", label: "Lighting" },
  { href: "/shop?category=Tableware", label: "Table" },
  { href: "/shop?category=Textiles", label: "Textiles" },
];

export function Announcement() {
  return (
    <div className="announcement">
      <span>Complimentary shipping on orders over $150</span>
      <span className="announcement-note">A sample store by HAXUDIO Digital Solutions</span>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, hydrated } = useCart();
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <Link className="wordmark" href="/" aria-label="Forme home" onClick={() => setMenuOpen(false)}>
          FORME<span>®</span>
        </Link>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={pathname === "/shop" && link.href === "/shop" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-nav-cart" href="/cart" onClick={() => setMenuOpen(false)}>
            Your bag {hydrated && itemCount > 0 ? `(${itemCount})` : ""}
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="search-link" href="/shop" aria-label="Search products">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4.5 4.5" /></svg>
            <span>Search</span>
          </Link>
          <Link className="bag-link" href="/cart" aria-label={`Shopping bag, ${itemCount} items`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>
            <span>Bag</span>
            <span className="bag-count">{hydrated ? itemCount : 0}</span>
          </Link>
        </div>
      </div>
      <div className="demo-strip">
        <span><strong>DEMO / SAMPLE STORE</strong> — Portfolio concept by HAXUDIO Digital Solutions</span>
        <span>No real orders or payments are processed</span>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">FORME<span>®</span></Link>
          <p>Thoughtful pieces for the spaces we call home.</p>
          <span className="footer-demo">An independent concept store · Sample experience</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/shop">Shop all</Link>
          <Link href="/shop?category=Living">Living</Link>
          <Link href="/shop?category=Lighting">Lighting</Link>
          <Link href="/shop?category=Tableware">Tableware</Link>
        </div>
        <div className="footer-column">
          <h2>Need to know</h2>
          <a href="mailto:hello@example.com">Contact</a>
          <Link href="/cart">Your bag</Link>
          <Link href="/checkout">Sample checkout</Link>
        </div>
        <div className="footer-newsletter">
          <h2>Good things, occasionally.</h2>
          <p>Our newsletter sign-up is part of this demo and does not submit your details.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Your email address" />
            <button type="submit" aria-label="Submit sample newsletter form">→</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 FORME — Concept storefront by HAXUDIO</span>
        <span>Designed for considered living</span>
      </div>
    </footer>
  );
}

export function StoreShell({ children }: { children: React.ReactNode }) {
  const { persistenceError } = useCart();
  return (
    <>
      <Announcement />
      <Header />
      {persistenceError && <div className="storage-notice" role="status">{persistenceError}</div>}
      <main>{children}</main>
      <Footer />
    </>
  );
}
