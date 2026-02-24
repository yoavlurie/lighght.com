"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

/* Persistent top-left nav shown on all interior pages */
export default function Navigation() {
  const pathname = usePathname();

  /* Hide nav on the landing page */
  if (pathname === "/") return null;

  const links = [
    { href: "/gallery", label: "Gallery" },
    { href: "/context", label: "Context" },
    { href: "/studio", label: "Studio" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Lighght
      </Link>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
