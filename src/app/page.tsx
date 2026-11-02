"use client";

import { useEffect, useState } from "react";
import { saveLocale, useLocale } from "../lib/locale";
import Link from "next/link";
import Image from "next/image";


const copy = {
  en: {
    eyebrow: "ARTISAN BAKERY & PATISSERIE · AGRINIO",
    title: <>A taste of art.<br /><em>Crafted with passion.</em></>,
    intro: "Discover the art of fine baking, delicate pastries and unforgettable creations, made with passion and care.",
    explore: "EXPLORE OUR CREATIONS",
    story: "OUR STORY",
    note: "A LITTLE MOMENT OF SWEETNESS",
    featured: "The art of",
    featuredItalic: "something beautiful.",
    featuredText: "From the first fold of buttery pastry to the final delicate detail, every creation is an invitation to slow down and savour the moment.",
    collections: "MADE WITH LOVE, SHARED WITH JOY",
    collectionTitle: "Discover our collections",
    items: ["Delicate pastries", "Cakes & celebrations", "Artisan viennoiserie"],
    cta: "A reason to celebrate",
    ctaText: "Some moments deserve something truly special. Tell us what you are dreaming of and let us create it together.",
    enquire: "ENQUIRE ABOUT A CUSTOM CAKE",
    visit: "COME SAY HELLO",
    visitTitle: "A little sweetness in Agrinio.",
    visitText: "We would love to welcome you. Find us in the heart of Agrinio and discover your next favourite.",
    contact: "GET IN TOUCH",
    footer: "Made with care. Shared with joy.",
    nav: ["Home", "Creations", "Our story", "Custom cakes", "Gallery", "Contact"]
  },
  el: {
    eyebrow: "ΑΡΤΟΠΟΙΙΑ & ΖΑΧΑΡΟΠΛΑΣΤΙΚΗ · ΑΓΡΙΝΙΟ",
    title: <>Η τέχνη της γεύσης.<br /><em>Δημιουργίες με πάθος.</em></>,
    intro: "Ανακαλύψτε την τέχνη της αρτοποιίας, εκλεκτές γλυκές δημιουργίες και μοναδικές γεύσεις, φτιαγμένες με μεράκι και φροντίδα.",
    explore: "ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ",
    story: "Η ΙΣΤΟΡΙΑ ΜΑΣ",
    note: "ΜΙΑ ΜΙΚΡΗ ΣΤΙΓΜΗ ΑΠΟΛΑΥΣΗΣ",
    featured: "Η τέχνη του",
    featuredItalic: "ξεχωριστού.",
    featuredText: "Από το πρώτο δίπλωμα της βουτυρένιας ζύμης μέχρι την τελευταία λεπτομέρεια, κάθε δημιουργία είναι μια πρόσκληση να απολαύσετε τη στιγμή.",
    collections: "ΦΤΙΑΓΜΕΝΑ ΜΕ ΑΓΑΠΗ, ΜΟΙΡΑΣΜΕΝΑ ΜΕ ΧΑΡΑ",
    collectionTitle: "Ανακαλύψτε τις συλλογές μας",
    items: ["Εκλεκτά γλυκά", "Τούρτες & γιορτές", "Χειροποίητες ζύμες"],
    cta: "Κάθε στιγμή αξίζει να γιορτάζεται",
    ctaText: "Κάποιες στιγμές αξίζουν κάτι πραγματικά ξεχωριστό. Πείτε μας τι ονειρεύεστε και ας το δημιουργήσουμε μαζί.",
    enquire: "ΡΩΤΗΣΤΕ ΓΙΑ ΜΙΑ ΠΡΟΣΩΠΟΠΟΙΗΜΕΝΗ ΤΟΥΡΤΑ",
    visit: "ΕΛΑΤΕ ΝΑ ΓΝΩΡΙΣΤΟΥΜΕ",
    visitTitle: "Μια γλυκιά στάση στο Αγρίνιο.",
    visitText: "Θα χαρούμε να σας καλωσορίσουμε. Επισκεφθείτε μας στο Αγρίνιο και ανακαλύψτε την αγαπημένη σας γεύση.",
    contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
    footer: "Με φροντίδα δημιουργημένα. Με χαρά μοιρασμένα.",
    nav: ["Αρχική", "Δημιουργίες", "Η ιστορία μας", "Τούρτες κατά παραγγελία", "Gallery", "Επικοινωνία"]
  }
};

const photos = {
  hero: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=2200&q=88",
  pastry: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  viennoiserie: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
  detail: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=85"
};

export default function Home() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[locale];

  return (
    <main>
      <div className="announcement"><span>✳</span> {locale === "en" ? "A little sweetness, made in Agrinio." : "Μια γλυκιά απόλαυση, φτιαγμένη στο Αγρίνιο."} <span>✳</span></div>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Élia Pâtisserie home">Élia<span>PÂTISSERIE</span></Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {t.nav.map((label, i) => <Link key={label} href={["/", "/creations", "/our-story", "/custom-cakes", "/gallery", "/contact"][i]} onClick={() => setMenuOpen(false)}>{label}</Link>)}
        </nav>
        <button className="language-switch" onClick={() => saveLocale(locale === "en" ? "el" : "en")} aria-label="Change language">{locale === "en" ? "ΕΛ" : "EN"} <span>↗</span></button>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(31,22,17,.66), rgba(31,22,17,.12)), url("${photos.hero}")` }}>
        <div className="hero-content">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <a className="button button-light" href="#creations">{t.explore} <span>↗</span></a>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span>CRAFTED WITH INTENTION</span></div>
        <div className="hero-seal"><span>É</span><small>MADE WITH<br />PASSION</small></div>
      </section>

      <section className="intro-section" id="story">
        <div className="intro-image-wrap"><Image src={photos.detail} alt="Delicate artisan pastry finished by hand" width={1200} height={1000} sizes="(max-width: 600px) 84vw, 38vw" unoptimized /><span className="image-caption">{t.note}</span></div>
        <div className="intro-copy">
          <p className="eyebrow">{t.story}</p>
          <h2>{t.featured}<br /><em>{t.featuredItalic}</em></h2>
          <p>{t.featuredText}</p>
          <Link className="text-link" href="/our-story">{locale === "en" ? "A LITTLE MORE ABOUT US" : "ΛΙΓΑ ΛΟΓΙΑ ΓΙΑ ΕΜΑΣ"} <span>↗</span></Link>
          <div className="ornament">✳</div>
        </div>
      </section>

      <section className="collections-section" id="creations">
        <div className="section-heading">
          <p className="eyebrow">{t.collections}</p>
          <h2>{t.collectionTitle}</h2>
        </div>
        <div className="collection-grid">
          {[photos.pastry, photos.cake, photos.viennoiserie].map((photo, i) => (
            <Link className="collection-card" href="/creations" key={photo}>
              <div className="collection-photo"><Image src={photo} alt={t.items[i]} width={1000} height={1200} sizes="(max-width: 600px) 86vw, (max-width: 800px) 30vw, 26vw" unoptimized /><span className="card-arrow">↗</span></div>
              <div className="collection-label"><span>0{i + 1}</span><h3>{t.items[i]}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <span className="quote-mark">“</span>
        <p>{locale === "en" ? "The finest things are made slowly, with care and a little imagination." : "Τα πιο όμορφα πράγματα δημιουργούνται με χρόνο, φροντίδα και λίγη φαντασία."}</p>
        <span className="quote-rule" />
        <small>ÉLIA PÂTISSERIE</small>
      </section>

      <section className="celebration-section">
        <div className="celebration-photo" style={{ backgroundImage: `url("${photos.cake}")` }} />
        <div className="celebration-copy">
          <p className="eyebrow">{t.cta}</p>
          <h2>{locale === "en" ? <>Made for your<br /><em>moments.</em></> : <>Δημιουργίες για<br /><em>τις στιγμές σας.</em></>}</h2>
          <p>{t.ctaText}</p>
          <Link className="button button-dark" href="/custom-cakes">{t.enquire} <span>↗</span></Link>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">{t.visit}</p>
          <h2>{t.visitTitle}</h2>
          <p>{t.visitText}</p>
          <Link className="text-link" href="/contact">{t.contact} <span>↗</span></Link>
        </div>
        <div className="visit-stamp"><span>É</span><small>AGRINIO<br />GREECE</small></div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <Link className="footer-brand" href="/">Élia<span>PÂTISSERIE</span></Link>
          <p>{t.footer}</p>
          <span className="footer-contact">CONTACT DETAILS TO BE CONFIRMED</span>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Élia Pâtisserie</span><span>AGRINIO, GREECE</span><span>{locale === "en" ? "MADE WITH CARE" : "ΜΕ ΦΡΟΝΤΙΔΑ"}</span></div>
      </footer>
    </main>
  );
}
