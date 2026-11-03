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
  const items = navigation[locale];

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
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
      </button>

      <nav
        id="site-navigation"
        aria-label={locale === "en" ? "Main navigation" : "Κύρια πλοήγηση"}
        className={(isHome ? "nav-links" : "inner-nav") + (menuOpen ? " open" : "")}
      >
        <div className="mobile-nav-heading">
          <span>{locale === "en" ? "EXPLORE SOFIA & STELIOS" : "ΑΝΑΚΑΛΥΨΤΕ ΤΟΝ ΚΟΣΜΟ ΜΑΣ"}</span>
          <span className="mobile-nav-rule" />
        </div>
        {items.map(([label, url], index) => (
          <Link key={url} href={url} onClick={() => setMenuOpen(false)}>
            <span className="mobile-nav-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="mobile-nav-label">{label}</span>
            <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
        <div className="mobile-nav-bottom">
          <span>{locale === "en" ? "LANGUAGE" : "ΓΛΩΣΣΑ"}</span>
          <button className="mobile-nav-language" type="button" onClick={switchLanguage}>
            {locale === "en" ? "ΕΛΛΗΝΙΚΑ" : "ENGLISH"} <span aria-hidden="true">↗</span>
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
