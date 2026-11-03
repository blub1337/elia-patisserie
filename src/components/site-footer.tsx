import Link from "next/link";
import SocialPlaceholders from "./social-placeholders";

type Props = { locale: "en" | "el" };

export default function SiteFooter({ locale }: Props) {
  const greek = locale === "el";

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link className="footer-brand" href="/" aria-label="Sofia & Stelios home">
            Sofia & Stelios<span>PÂTISSERIE</span>
          </Link>
          <p>
            {greek
              ? "Μια γλυκιά απόλαυση, φτιαγμένη με φροντίδα στα Καλύβια."
              : "A little sweetness, thoughtfully made in Kalyvia."}
          </p>
        </div>

        <nav className="site-footer-nav" aria-label={greek ? "Γρήγορη πλοήγηση" : "Footer navigation"}>
          <p className="site-footer-heading">{greek ? "ΑΝΑΚΑΛΥΨΤΕ" : "EXPLORE"}</p>
          <Link href="/creations">{greek ? "Δημιουργίες" : "Creations"}</Link>
          <Link href="/custom-cakes">{greek ? "Τούρτες κατά παραγγελία" : "Custom cakes"}</Link>
          <Link href="/gallery">{greek ? "Φωτογραφίες" : "Gallery"}</Link>
          <Link href="/our-story">{greek ? "Σχετικά με εμάς" : "About us"}</Link>
        </nav>

        <div className="site-footer-location">
          <p className="site-footer-heading">{greek ? "ΠΟΥ ΘΑ ΜΑΣ ΒΡΕΙΤΕ" : "FIND US"}</p>
          <strong>KALYVIA</strong>
          <span>{greek ? "ΕΛΛΑΔΑ" : "GREECE"}</span>
          <Link href="/contact">{greek ? "Επικοινωνία" : "Get in touch"} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <SocialPlaceholders locale={locale} />

      <div className="site-footer-bottom">
        <span className="site-footer-copyright">
          © {new Date().getFullYear()} Sofia & Stelios Pâtisserie
        </span>
        <nav className="site-footer-legal" aria-label={greek ? "Νομικές πληροφορίες" : "Legal links"}>
          <Link href="/privacy">{greek ? "ΑΠΟΡΡΗΤΟ" : "PRIVACY"}</Link>
          <Link href="/legal">{greek ? "ΝΟΜΙΚΑ" : "LEGAL"}</Link>
        </nav>
        <p className="site-footer-credit">
          {greek ? "ΣΧΕΔΙΑΣΜΟΣ ΙΣΤΟΣΕΛΙΔΑΣ ΑΠΟ" : "WEBSITE DESIGNED BY"}
          <a href="https://webdesigne.vydas.net" target="_blank" rel="noopener noreferrer">
            Georgios Pseimadas
          </a>
        </p>
      </div>
    </footer>
  );
}
