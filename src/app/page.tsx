"use client";

import { useEffect } from "react";
import { useLocale } from "../lib/locale";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/site-header";
import SocialPlaceholders from "../components/social-placeholders";

const content = {
  en: {
    nav:["Home","About","Creations","Custom cakes","Gallery","Contact"],
    eyebrow:"ARTISAN PÂTISSERIE · KALYVIA, GREECE",
    title:<>A little taste<br/>of <em>something special.</em></>,
    intro:"Thoughtful details, beautiful flavours and handmade creations for life's sweetest moments.",
    cta:"DISCOVER OUR CREATIONS",
    aboutLabel:"WELCOME TO SOFIA & STELIOS",
    aboutTitle:<>Made with care.<br/><em>Made to be shared.</em></>,
    aboutText:"At Sofia & Stelios, every detail matters. From delicate pastries to celebration cakes, discover a thoughtful approach to pâtisserie inspired by French tradition and the warmth of Greek hospitality.",
    aboutLink:"GET TO KNOW SOFIA & STELIOS",
    galleryLabel:"A LOOK INSIDE OUR WORLD",
    galleryTitle:<>A collection of<br/><em>sweet moments.</em></>,
    galleryText:"Explore a selection of pâtisserie, cakes and handcrafted details.",
    collection:["Pâtisserie","Celebration cakes","Viennoiserie"],
    collectionSub:["Small moments of pleasure","Made for your special occasions","A beautiful start to the day"],
    galleryLink:"VIEW ALL CREATIONS",
    customLabel:"MADE JUST FOR YOU",
    customTitle:<>Your idea.<br/>Our <em>craft.</em></>,
    customText:"A birthday, a wedding or a moment worth celebrating. Tell us what you have in mind and let’s create a cake that feels truly yours.",
    customCta:"ENQUIRE ABOUT A CUSTOM CAKE",
    closingTitle:<>Find a little sweetness<br/>in <em>Kalyvia.</em></>,
    closingText:"We would love to welcome you. Get in touch or discover more about Sofia & Stelios.",
    contact:"CONTACT SOFIA & STELIOS",
    footer:"Thoughtfully made in Kalyvia, Greece.",
    legal:"Privacy · Legal"
  },
  el: {
    nav:["Αρχική","Σχετικά με εμάς","Δημιουργίες","Τούρτες κατά παραγγελία","Φωτογραφίες","Επικοινωνία"],
    eyebrow:"ΖΑΧΑΡΟΠΛΑΣΤΙΚΗ & ΑΡΤΟΠΟΙΙΑ · ΚΑΛΥΒΙΑ",
    title:<>Μια γεύση<br/>από κάτι <em>ξεχωριστό.</em></>,
    intro:"Προσεγμένες λεπτομέρειες, υπέροχες γεύσεις και χειροποίητες δημιουργίες για τις πιο γλυκές στιγμές της ζωής.",
    cta:"ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ",
    aboutLabel:"ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΟ SOFIA & STELIOS",
    aboutTitle:<>Φτιαγμένες με φροντίδα.<br/><em>Για να τις μοιραστείτε.</em></>,
    aboutText:"Στην Sofia & Stelios, κάθε λεπτομέρεια μετράει. Από εκλεκτά γλυκά μέχρι τούρτες για ξεχωριστές περιστάσεις, ανακαλύψτε τη δική μας προσέγγιση στη ζαχαροπλαστική, με έμπνευση από τη γαλλική παράδοση και τη ζεστασιά της ελληνικής φιλοξενίας.",
    aboutLink:"ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
    galleryLabel:"ΜΙΑ ΜΑΤΙΑ ΣΤΟΝ ΚΟΣΜΟ ΜΑΣ",
    galleryTitle:<>Μια συλλογή από<br/><em>γλυκές στιγμές.</em></>,
    galleryText:"Ανακαλύψτε εκλεκτά γλυκά, τούρτες και χειροποίητες λεπτομέρειες.",
    collection:["Εκλεκτά γλυκά","Τούρτες για κάθε περίσταση","Βιενουαζερί"],
    collectionSub:["Μικρές στιγμές απόλαυσης","Για τις δικές σας ξεχωριστές στιγμές","Ένα όμορφο ξεκίνημα της ημέρας"],
    galleryLink:"ΔΕΙΤΕ ΟΛΕΣ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ",
    customLabel:"ΔΗΜΙΟΥΡΓΗΜΕΝΗ ΓΙΑ ΕΣΑΣ",
    customTitle:<>Η ιδέα σας.<br/>Η δική μας <em>τέχνη.</em></>,
    customText:"Είτε πρόκειται για γενέθλια, γάμο ή κάποια άλλη ξεχωριστή περίσταση, μια τούρτα κατά παραγγελία κάνει τη στιγμή ακόμη πιο ιδιαίτερη. Πείτε μας την ιδέα σας και ας δημιουργήσουμε μαζί κάτι μοναδικό.",
    customCta:"ΖΗΤΗΣΤΕ ΜΙΑ ΤΟΥΡΤΑ ΚΑΤΑ ΠΑΡΑΓΓΕΛΙΑ",
    closingTitle:<>Μια γλυκιά στάση<br/>στο <em>Καλύβια.</em></>,
    closingText:"Θα χαρούμε να σας υποδεχτούμε. Επικοινωνήστε μαζί μας ή γνωρίστε καλύτερα την Sofia & Stelios.",
    contact:"ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΕ ΤΗΝ SOFIA & STELIOS",
    footer:"Με φροντίδα, στο Καλύβια.",
    legal:"Απόρρητο · Νομικά"
  }
};

const photos = {
  hero:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=2400&q=90",
  about:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1500&q=88",
  pastry:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=88",
  cake:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=88",
  viennoiserie:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=88",
  custom:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1600&q=88"
};

export default function Home(){
  const locale=useLocale();
  useEffect(()=>{document.documentElement.lang=locale},[locale]);
  const t=content[locale];
  const links=["/","/our-story","/creations","/custom-cakes","/gallery","/contact"];
  return <main className="elia-home elia-reference-home">
    <div className="announcement"><span>✳</span> {locale==="en"?"A little sweetness, made in Kalyvia.":"Μια γλυκιά απόλαυση, φτιαγμένη στα Καλύβια."} <span>✳</span></div>
    <SiteHeader variant="home" />

    <section className="elia-reference-hero">
      <Image src={photos.hero} alt="Sofia & Stelios pâtisserie selection" fill priority unoptimized sizes="100vw"/>
      <div className="elia-reference-hero-shade"/>
      <div className="elia-reference-hero-copy">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <Link href="/creations" className="elia-reference-button">{t.cta}<span>↗</span></Link>
      </div>
      <span className="elia-reference-hero-caption">SOFIA & STELIOS PÂTISSERIE · KALYVIA, GREECE</span>
    </section>

    <section className="elia-reference-about">
      <div className="elia-reference-about-copy">
        <p className="eyebrow">{t.aboutLabel}</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
        <Link href="/our-story" className="elia-reference-text-link">{t.aboutLink}<span>↗</span></Link>
      </div>
      <div className="elia-reference-about-image"><Image src={photos.about} alt="Freshly prepared pâtisserie" fill unoptimized sizes="(max-width:760px) 100vw, 50vw"/></div>
    </section>

    <section className="elia-reference-gallery">
      <div className="elia-reference-heading"><div><p className="eyebrow">{t.galleryLabel}</p><h2>{t.galleryTitle}</h2></div><p>{t.galleryText}</p></div>
      <div className="elia-reference-grid">
        <Link href="/creations/signature-patisserie" className="elia-reference-card elia-reference-card-large"><Image src={photos.pastry} alt={t.collection[0]} fill unoptimized sizes="(max-width:760px) 100vw, 50vw"/><span>{t.collection[0]}<i>↗</i></span></Link>
        <Link href="/creations/cakes-tarts" className="elia-reference-card"><Image src={photos.cake} alt={t.collection[1]} fill unoptimized sizes="(max-width:760px) 100vw, 40vw"/><span>{t.collection[1]}<i>↗</i></span></Link>
        <Link href="/creations/viennoiserie" className="elia-reference-card"><Image src={photos.viennoiserie} alt={t.collection[2]} fill unoptimized sizes="(max-width:760px) 100vw, 40vw"/><span>{t.collection[2]}<i>↗</i></span></Link>
      </div>
      <Link href="/gallery" className="elia-reference-text-link elia-reference-all">{t.galleryLink}<span>↗</span></Link>
    </section>

    <section className="elia-reference-custom">
      <div className="elia-reference-custom-image"><Image src={photos.custom} alt="A custom celebration cake" fill unoptimized sizes="(max-width:760px) 100vw, 55vw"/></div>
      <div className="elia-reference-custom-copy"><p className="eyebrow">{t.customLabel}</p><h2>{t.customTitle}</h2><p>{t.customText}</p><Link href="/custom-cakes" className="elia-reference-button elia-reference-button-dark">{t.customCta}<span>↗</span></Link></div>
    </section>

    <section className="elia-reference-contact">
      <p className="eyebrow">SOFIA & STELIOS PÂTISSERIE · KALYVIA</p>
      <h2>{t.closingTitle}</h2><p>{t.closingText}</p>
      <Link href="/contact" className="elia-reference-text-link">{t.contact}<span>↗</span></Link>
    </section>

    <footer className="elia-reference-footer">
      <Link className="footer-brand" href="/">Sofia & Stelios<span>PÂTISSERIE</span></Link>
      <p>{t.footer}</p>
      <div><Link href="/privacy">{locale==="en"?"PRIVACY":"ΑΠΟΡΡΗΤΟ"}</Link><Link href="/legal">{locale==="en"?"LEGAL":"ΝΟΜΙΚΑ"}</Link></div>
      <SocialPlaceholders locale={locale} />
      <small>© {new Date().getFullYear()} Sofia & Stelios Pâtisserie</small>
    </footer>
  </main>;
}
