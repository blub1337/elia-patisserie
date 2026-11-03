"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { saveLocale, useLocale } from "../lib/locale";

const navigation = {
  en: [
    ["Home", "/"],
    ["Creations", "/creations"],
    ["Custom cakes", "/custom-cakes"],
    ["Gallery", "/gallery"],
    ["About", "/our-story"],
    ["Contact", "/contact"]
  ],
  el: [
    ["Αρχική", "/"],
    ["Δημιουργίες", "/creations"],
    ["Τούρτες κατά παραγγελία", "/custom-cakes"],
    ["Φωτογραφίες", "/gallery"],
    ["Σχετικά με εμάς", "/our-story"],
    ["Επικοινωνία", "/contact"]
  ]
} as const;

export default function SiteHeader({ variant = "inner" }: { variant?: "home" | "inner" }) {
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = variant === "home";
  const items = navigation[locale];

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const switchLanguage = () => {
    saveLocale(locale === "en" ? "el" : "en");
    setMenuOpen(false);
  };

  return (
    <header className={isHome ? "site-header elia-reference-header" : "site-header"}>
      <Link className="wordmark" href="/" aria-label="Sofia & Stelios home" onClick={() => setMenuOpen(false)}>
        Sofia & Stelios<span>PÂTISSERIE</span>
      </Link>

      <button
        className="menu-toggle mobile-menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? (locale === "en" ? "Close menu" : "Κλείσιμο μενού") : (locale === "en" ? "Open menu" : "Άνοιγμα μενού")}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
      >
        <span className={"menu-toggle-bars" + (menuOpen ? " is-open" : "")} aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className="menu-toggle-label">{menuOpen ? (locale === "en" ? "CLOSE" : "ΚΛΕΙΣΙΜΟ") : (locale === "en" ? "MENU" : "ΜΕΝΟΥ")}</span>
      </button>

      <nav
        id="site-navigation"
        aria-label={locale === "en" ? "Main navigation" : "Κύρια πλοήγηση"}
        className={(isHome ? "nav-links" : "inner-nav") + (menuOpen ? " open" : "")}
      >
        <div className="mobile-nav-heading">
          <span className="mobile-nav-rule" />
          {locale === "en" ? "EXPLORE SOFIA & STELIOS" : "ΑΝΑΚΑΛΥΨΤΕ ΤΗ SOFIA & STELIOS"}
        </div>
        {items.map(([label, url], index) => (
          <Link key={url} href={url} onClick={() => setMenuOpen(false)}>
            <span className="mobile-nav-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="mobile-nav-label">{label}</span>
          </Link>
        ))}
        <div className="mobile-nav-bottom">
          <span>{locale === "en" ? "LANGUAGE" : "ΓΛΩΣΣΑ"}</span>
          <button className="mobile-nav-language" type="button" onClick={switchLanguage}>
            {locale === "en" ? "ΕΛΛΗΝΙΚΑ" : "ENGLISH"}
          </button>
        </div>
      </nav>

      <button
        className="language-switch desktop-language-switch"
        type="button"
        onClick={switchLanguage}
        aria-label={locale === "en" ? "Switch to Greek" : "Switch to English"}
      >
        {locale === "en" ? "ΕΛ" : "EN"} <span>↗</span>
      </button>
    </header>
  );
}
