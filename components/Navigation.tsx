"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

/* Persistent nav — hidden on landing and exhibition pages.
   Mobile: top center logo + hamburger → full-screen overlay.
   Desktop: left-aligned horizontal. */
export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /* Hide nav on landing and exhibition */
  if (pathname === "/" || pathname === "/exhibition") return null;

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/context", label: "Context" },
    { href: "/studio", label: "Studio" },
    { href: "/about", label: "About" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={styles.nav}>
        {/* Desktop: left-aligned links */}
        <Link href="/" className={styles.logo}>
          Lighght
        </Link>
        <ul className={styles.desktopList}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.desktopLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: centered logo + hamburger */}
        <span className={styles.mobileLogo}>Lighght</span>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav
            className={styles.overlayNav}
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.overlayLink} ${
                  pathname === link.href ? styles.overlayActive : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
