"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { saveLocale, useLocale } from "../lib/locale";

const navigation = {
  en: [
    ["Home", "/"],
    ["About", "/our-story"],
    ["Creations", "/creations"],
    ["Custom cakes", "/custom-cakes"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"]
  ],
  el: [
    ["Αρχική", "/"],
    ["Σχετικά με εμάς", "/our-story"],
    ["Δημιουργίες", "/creations"],
    ["Τούρτες κατά παραγγελία", "/custom-cakes"],
    ["Φωτογραφίες", "/gallery"],
    ["Επικοινωνία", "/contact"]
  ]
} as const;

export default function SiteHeader({ variant = "inner" }: { variant?: "home" | "inner" }) {
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = variant === "home";

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const items = navigation[locale];

  return (
    <header className={isHome ? "site-header elia-reference-header" : "site-header"}>
      <Link className="wordmark" href="/" aria-label="Sofia & Stelios home" onClick={() => setMenuOpen(false)}>
        Sofia & Stelios<span>PÂTISSERIE</span>
      </Link>
      <button
        className="menu-toggle mobile-menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? (locale === "en" ? "Close menu" : "Μενού κλείσιμο") : (locale === "en" ? "Open menu" : "Άνοιγμα μενού")}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
      >
        <span className="menu-toggle-icon" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        <span className="menu-toggle-label">{menuOpen ? (locale === "en" ? "CLOSE" : "ΚΛΕΙΣΙΜΟ") : (locale === "en" ? "MENU" : "ΜΕΝΟΥ")}</span>
      </button>
      <nav
        id="site-navigation"
        aria-label={locale === "en" ? "Main navigation" : "Κύρια πλοήγηση"}
        className={`${isHome ? "nav-links" : "inner-nav"}${menuOpen ? " open" : ""}`}
      >
        {items.map(([label, url]) => (
          <Link key={url} href={url} onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
      </nav>
      <button
        className="language-switch"
        type="button"
        onClick={() => {
          saveLocale(locale === "en" ? "el" : "en");
          setMenuOpen(false);
        }}
        aria-label={locale === "en" ? "Switch to Greek" : "Switch to English"}
      >
        {locale === "en" ? "ΕΛ" : "EN"} <span>↗</span>
      </button>
    </header>
  );
}
