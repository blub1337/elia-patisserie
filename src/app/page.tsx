"use client";

import { useEffect, useState } from "react";
import { saveLocale, useLocale } from "../lib/locale";
import Link from "next/link";
import Image from "next/image";

const copy = {
  en: {
    nav:["Home","Creations","Our story","Custom cakes","Gallery","Contact"],
    eyebrow:"ARTISAN PÂTISSERIE · AGRINIO, GREECE",
    title:<>A little<br/><em>extraordinary.</em></>,
    intro:"French pâtisserie spirit. Greek warmth. Beautiful moments, made sweeter.",
    explore:"DISCOVER ÉLIA",
    scroll:"SCROLL TO EXPLORE",
    index:"01 — THE ÉLIA EXPERIENCE",
    manifestoLabel:"THE ART OF THE EVERYDAY",
    manifestoTitle:<>Beauty is<br/>in the <em>details.</em></>,
    manifestoText:"A delicate finish. A golden layer. A moment worth slowing down for. Discover a world shaped by craftsmanship, thoughtful details and the pleasure of sharing something beautiful.",
    story:"THE ÉLIA STORY",
    collectionLabel:"A WORLD OF TASTE",
    collectionTitle:<>Made to be<br/><em>remembered.</em></>,
    collectionIntro:"Explore the collections and find something for the moment you have in mind.",
    items:["Pâtisserie","Cakes & tarts","Viennoiserie"],
    itemNotes:["A delicate little pleasure","For the moments that matter","A slower kind of morning"],
    viewCollection:"EXPLORE COLLECTION",
    bespokeLabel:"MADE FOR YOUR MOMENT",
    bespokeTitle:<>Something special<br/>starts with <em>an idea.</em></>,
    bespokeText:"A celebration, a gathering or a reason all your own. Tell us what you are imagining and discover the possibilities of a custom cake.",
    bespokeCta:"ENQUIRE ABOUT A CUSTOM CAKE",
    visitLabel:"FIND YOUR WAY TO ÉLIA",
    visitTitle:<>A little sweetness<br/>in <em>Agrinio.</em></>,
    visitText:"We look forward to welcoming you. Visit our contact page for confirmed details and ways to get in touch.",
    contact:"CONTACT & VISIT",
    footer:"Made with care. Shared with joy.",
    legal:"Privacy · Legal",
    note:"A LITTLE SWEETNESS, MADE IN AGRINIO"
  },
  el: {
    nav:["Αρχική","Δημιουργίες","Η ιστορία μας","Τούρτες κατά παραγγελία","Gallery","Επικοινωνία"],
    eyebrow:"ΑΡΤΟΠΟΙΙΑ & ΖΑΧΑΡΟΠΛΑΣΤΙΚΗ · ΑΓΡΙΝΙΟ",
    title:<>Λίγη<br/><em>μαγεία.</em></>,
    intro:"Γαλλική φινέτσα στη ζαχαροπλαστική. Ελληνική φιλοξενία. Όμορφες στιγμές, γεμάτες γεύση.",
    explore:"ΑΝΑΚΑΛΥΨΤΕ ΤΗΝ ÉLIA",
    scroll:"ΚΑΝΤΕ SCROLL ΓΙΑ ΝΑ ΕΞΕΡΕΥΝΗΣΕΤΕ",
    index:"01 — Η ΕΜΠΕΙΡΙΑ ÉLIA",
    manifestoLabel:"Η ΤΕΧΝΗ ΤΗΣ ΚΑΘΗΜΕΡΙΝΟΤΗΤΑΣ",
    manifestoTitle:<>Η ομορφιά<br/>κρύβεται στη <em>λεπτομέρεια.</em></>,
    manifestoText:"Μια φίνα πινελιά. Μια χρυσαφένια στρώση. Μια στιγμή που αξίζει να απολαύσετε με ηρεμία. Ανακαλύψτε έναν κόσμο γεμάτο δημιουργικότητα, φροντίδα και τη χαρά του μοιράσματος.",
    story:"Η ΙΣΤΟΡΙΑ ΤΗΣ ÉLIA",
    collectionLabel:"ΕΝΑΣ ΚΟΣΜΟΣ ΓΕΥΣΕΩΝ",
    collectionTitle:<>Δημιουργίες που<br/><em>μένουν αξέχαστες.</em></>,
    collectionIntro:"Ανακαλύψτε τις συλλογές μας και βρείτε κάτι ξεχωριστό για κάθε περίσταση.",
    items:["Εκλεκτά γλυκά","Τούρτες & τάρτες","Βιενουαζερί"],
    itemNotes:["Μια μικρή, φίνα απόλαυση","Για τις στιγμές που αξίζουν","Ένα πιο ήρεμο πρωινό"],
    viewCollection:"ΑΝΑΚΑΛΥΨΤΕ ΤΗ ΣΥΛΛΟΓΗ",
    bespokeLabel:"ΔΗΜΙΟΥΡΓΗΜΕΝΟ ΓΙΑ ΤΗ ΣΤΙΓΜΗ ΣΑΣ",
    bespokeTitle:<>Κάτι ξεχωριστό<br/>ξεκινά από μια <em>ιδέα.</em></>,
    bespokeText:"Μια γιορτή, μια συνάντηση ή μια δική σας ξεχωριστή αφορμή. Μοιραστείτε μαζί μας αυτό που φαντάζεστε και ανακαλύψτε τις δυνατότητες μιας τούρτας κατά παραγγελία.",
    bespokeCta:"ΖΗΤΗΣΤΕ ΤΗ ΔΙΚΗ ΣΑΣ ΤΟΥΡΤΑ",
    visitLabel:"ΕΛΑΤΕ ΝΑ ΜΑΣ ΒΡΕΙΤΕ",
    visitTitle:<>Μια γλυκιά στάση<br/>στο <em>Αγρίνιο.</em></>,
    visitText:"Θα χαρούμε να σας καλωσορίσουμε. Στη σελίδα επικοινωνίας θα βρείτε τα επιβεβαιωμένα στοιχεία και τους τρόπους επικοινωνίας.",
    contact:"ΕΠΙΚΟΙΝΩΝΙΑ & ΕΠΙΣΚΕΨΗ",
    footer:"Δημιουργημένα με φροντίδα. Μοιρασμένα με χαρά.",
    legal:"Απόρρητο · Νομικά",
    note:"ΜΙΑ ΓΛΥΚΙΑ ΑΠΟΛΑΥΣΗ, ΦΤΙΑΓΜΕΝΗ ΣΤΟ ΑΓΡΙΝΙΟ"
  }
};

const photos = {
  hero:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=2400&q=90",
  detail:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=88",
  pastry:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1100&q=88",
  cake:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=88",
  viennoiserie:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1100&q=88",
  bespoke:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1600&q=88"
};

export default function Home(){
  const locale=useLocale();
  useEffect(()=>{document.documentElement.lang=locale},[locale]);
  const [menuOpen,setMenuOpen]=useState(false);
  const t=copy[locale];
  const urls=["/","/creations","/our-story","/custom-cakes","/gallery","/contact"];
  return <main className="elia-home">
    <div className="announcement"><span>✳</span>{locale==="en"?"A little sweetness, made in Agrinio.":"Μια γλυκιά απόλαυση, φτιαγμένη στο Αγρίνιο."}<span>✳</span></div>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Élia Pâtisserie home">Élia<span>PÂTISSERIE</span></Link>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
      <nav className={menuOpen?"nav-links open":"nav-links"}>{t.nav.map((label,i)=><Link key={label} href={urls[i]} onClick={()=>setMenuOpen(false)}>{label}</Link>)}</nav>
      <button className="language-switch" onClick={()=>saveLocale(locale==="en"?"el":"en")} aria-label="Change language">{locale==="en"?"ΕΛ":"EN"} <span>↗</span></button>
    </header>

    <section className="elia-hero">
      <Image src={photos.hero} alt="An elegant pâtisserie dessert" fill priority unoptimized sizes="100vw"/>
      <div className="elia-hero-shade"/>
      <div className="elia-hero-copy">
        <p className="eyebrow light">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <Link className="elia-hero-link" href="/creations">{t.explore}<span>↗</span></Link>
      </div>
      <div className="elia-hero-meta"><span>{t.index}</span><a href="#elia-intro">{t.scroll} ↓</a></div>
      <span className="elia-hero-side">ÉLIA PÂTISSERIE — AGRINIO</span>
    </section>

    <div className="elia-marquee" aria-label={t.note}><div>{Array.from({length:4},(_,i)=><span key={i}>{t.note}<b>✳</b></span>)}</div></div>

    <section className="elia-manifesto" id="elia-intro">
      <div className="elia-manifesto-image"><Image src={photos.detail} alt="Freshly prepared artisan pastry" width={1400} height={1500} unoptimized sizes="(max-width: 700px) 100vw, 48vw"/><span>01 / ÉLIA PÂTISSERIE</span></div>
      <div className="elia-manifesto-copy">
        <p className="eyebrow">{t.manifestoLabel}</p>
        <h2>{t.manifestoTitle}</h2>
        <p className="elia-body">{t.manifestoText}</p>
        <Link className="elia-underlink" href="/our-story">{t.story}<span>↗</span></Link>
        <span className="elia-manifesto-index">E.</span>
      </div>
    </section>

    <section className="elia-collections">
      <div className="elia-section-head"><div><p className="eyebrow">{t.collectionLabel}</p><h2>{t.collectionTitle}</h2></div><p>{t.collectionIntro}</p></div>
      <div className="elia-mosaic">
        <Link href="/creations/signature-patisserie" className="elia-tile elia-tile-one"><Image src={photos.pastry} alt={t.items[0]} fill unoptimized sizes="(max-width:700px) 100vw, 48vw"/><span className="elia-tile-overlay"/><span className="elia-tile-number">01</span><span className="elia-tile-title">{t.items[0]}<i>↗</i></span><span className="elia-tile-note">{t.itemNotes[0]}</span></Link>
        <Link href="/creations/cakes-tarts" className="elia-tile elia-tile-two"><Image src={photos.cake} alt={t.items[1]} fill unoptimized sizes="(max-width:700px) 100vw, 38vw"/><span className="elia-tile-overlay"/><span className="elia-tile-number">02</span><span className="elia-tile-title">{t.items[1]}<i>↗</i></span><span className="elia-tile-note">{t.itemNotes[1]}</span></Link>
        <Link href="/creations/viennoiserie" className="elia-tile elia-tile-three"><Image src={photos.viennoiserie} alt={t.items[2]} fill unoptimized sizes="(max-width:700px) 100vw, 38vw"/><span className="elia-tile-overlay"/><span className="elia-tile-number">03</span><span className="elia-tile-title">{t.items[2]}<i>↗</i></span><span className="elia-tile-note">{t.itemNotes[2]}</span></Link>
      </div>
      <Link className="elia-all-link" href="/creations">{locale==="en"?"VIEW ALL CREATIONS":"ΟΛΕΣ ΟΙ ΔΗΜΙΟΥΡΓΙΕΣ"}<span>↗</span></Link>
    </section>

    <section className="elia-bespoke">
      <div className="elia-bespoke-image"><Image src={photos.bespoke} alt="A refined cake detail" fill unoptimized sizes="(max-width:700px) 100vw, 55vw"/></div>
      <div className="elia-bespoke-copy"><p className="eyebrow">{t.bespokeLabel}</p><h2>{t.bespokeTitle}</h2><p>{t.bespokeText}</p><Link className="elia-dark-link" href="/custom-cakes">{t.bespokeCta}<span>↗</span></Link></div>
      <span className="elia-bespoke-mark">É.</span>
    </section>

    <section className="elia-visit">
      <div><p className="eyebrow">{t.visitLabel}</p><h2>{t.visitTitle}</h2><p>{t.visitText}</p><Link className="elia-underlink" href="/contact">{t.contact}<span>↗</span></Link></div>
      <span className="elia-visit-word">AGRINIO<br/>GREECE</span>
    </section>

    <footer className="elia-footer">
      <div className="elia-footer-top"><Link className="footer-brand" href="/">Élia<span>PÂTISSERIE</span></Link><p>{t.footer}</p><Link href="/contact" className="elia-footer-contact">{t.contact} ↗</Link></div>
      <div className="elia-footer-bottom"><span>© {new Date().getFullYear()} Élia Pâtisserie</span><span>AGRINIO, GREECE</span><div><Link href="/privacy">{locale==="en"?"PRIVACY":"ΑΠΟΡΡΗΤΟ"}</Link><Link href="/legal">{locale==="en"?"LEGAL":"ΝΟΜΙΚΑ"}</Link></div></div>
    </footer>
  </main>;
}
