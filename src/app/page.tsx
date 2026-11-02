"use client";

import { useEffect, useState } from "react";
import { saveLocale, useLocale } from "../lib/locale";
import Link from "next/link";
import Image from "next/image";

const content = {
  en: {
    nav:["About","Creations","Custom cakes","Gallery","Contact"],
    eyebrow:"ARTISAN PÂTISSERIE · AGRINIO, GREECE",
    title:<>A little taste<br/>of <em>something special.</em></>,
    intro:"Thoughtful details, beautiful flavours and handmade creations for life's sweetest moments.",
    cta:"DISCOVER OUR CREATIONS",
    aboutLabel:"WELCOME TO ÉLIA",
    aboutTitle:<>Made with care.<br/><em>Made to be shared.</em></>,
    aboutText:"At Élia, every detail matters. From delicate pastries to celebration cakes, discover a thoughtful approach to pâtisserie inspired by French tradition and the warmth of Greek hospitality.",
    aboutLink:"GET TO KNOW ÉLIA",
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
    closingTitle:<>Find a little sweetness<br/>in <em>Agrinio.</em></>,
    closingText:"We would love to welcome you. Get in touch or discover more about Élia.",
    contact:"CONTACT ÉLIA",
    footer:"Thoughtfully made in Agrinio, Greece.",
    legal:"Privacy · Legal"
  },
  el: {
    nav:["Η Élia","Δημιουργίες","Τούρτες κατά παραγγελία","Gallery","Επικοινωνία"],
    eyebrow:"ΑΡΤΟΠΟΙΙΑ & ΖΑΧΑΡΟΠΛΑΣΤΙΚΗ · ΑΓΡΙΝΙΟ",
    title:<>Μια γεύση<br/>από κάτι <em>ξεχωριστό.</em></>,
    intro:"Προσεγμένες λεπτομέρειες, υπέροχες γεύσεις και χειροποίητες δημιουργίες για τις πιο γλυκές στιγμές της ζωής.",
    cta:"ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ",
    aboutLabel:"ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΗΝ ÉLIA",
    aboutTitle:<>Με φροντίδα.<br/><em>Για να τις μοιραστείτε.</em></>,
    aboutText:"Στην Élia, κάθε λεπτομέρεια έχει σημασία. Από εκλεκτά γλυκά μέχρι τούρτες για ξεχωριστές περιστάσεις, ανακαλύψτε μια προσέγγιση στη ζαχαροπλαστική εμπνευσμένη από τη γαλλική παράδοση και την ελληνική φιλοξενία.",
    aboutLink:"ΓΝΩΡΙΣΤΕ ΤΗΝ ÉLIA",
    galleryLabel:"ΜΙΑ ΜΑΤΙΑ ΣΤΟΝ ΚΟΣΜΟ ΜΑΣ",
    galleryTitle:<>Μια συλλογή από<br/><em>γλυκές στιγμές.</em></>,
    galleryText:"Ανακαλύψτε εκλεκτά γλυκά, τούρτες και χειροποίητες λεπτομέρειες.",
    collection:["Εκλεκτά γλυκά","Τούρτες περιστάσεων","Βιενουαζερί"],
    collectionSub:["Μικρές στιγμές απόλαυσης","Για τις δικές σας ξεχωριστές στιγμές","Ένα όμορφο ξεκίνημα της ημέρας"],
    galleryLink:"ΔΕΙΤΕ ΟΛΕΣ ΤΙΣ ΔΗΜΙΟΥΡΓΙΕΣ",
    customLabel:"ΔΗΜΙΟΥΡΓΗΜΕΝΗ ΓΙΑ ΕΣΑΣ",
    customTitle:<>Η ιδέα σας.<br/>Η δική μας <em>τέχνη.</em></>,
    customText:"Μια γιορτή γενεθλίων, ένας γάμος ή μια στιγμή που αξίζει να γιορτάσετε. Πείτε μας τι έχετε φανταστεί και ας δημιουργήσουμε μια τούρτα μοναδική για εσάς.",
    customCta:"ΖΗΤΗΣΤΕ ΜΙΑ ΤΟΥΡΤΑ ΚΑΤΑ ΠΑΡΑΓΓΕΛΙΑ",
    closingTitle:<>Μια γλυκιά στάση<br/>στο <em>Αγρίνιο.</em></>,
    closingText:"Θα χαρούμε να σας καλωσορίσουμε. Επικοινωνήστε μαζί μας ή γνωρίστε καλύτερα την Élia.",
    contact:"ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΕ ΤΗΝ ÉLIA",
    footer:"Με φροντίδα, στο Αγρίνιο.",
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
  useEffect(()=>{
    const section=document.querySelector<HTMLElement>(".elia-reference-hero");
    const image=section?.querySelector<HTMLImageElement>(".elia-reference-hero-image");
    if(!section||!image||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    let frame=0;
    const update=()=>{
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        const bounds=section.getBoundingClientRect();
        if(bounds.bottom>0&&bounds.top<window.innerHeight){
          const offset=Math.max(-24,Math.min(130,(window.innerHeight-bounds.top)*0.13));
          image.style.transform=`translate3d(0,${offset}px,0) scale(1.12)`;
        }
      });
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll",update);
      window.removeEventListener("resize",update);
    };
  },[]);
  const [menuOpen,setMenuOpen]=useState(false);
  const t=content[locale];
  const links=["/our-story","/creations","/custom-cakes","/gallery","/contact"];
  return <main className="elia-home elia-reference-home">
    <header className="site-header elia-reference-header">
      <Link className="wordmark" href="/" aria-label="Élia Pâtisserie home">Élia<span>PÂTISSERIE</span></Link>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
      <nav className={menuOpen?"nav-links open":"nav-links"}>{t.nav.map((label,i)=><Link key={label} href={links[i]} onClick={()=>setMenuOpen(false)}>{label}</Link>)}</nav>
      <button className="language-switch" onClick={()=>saveLocale(locale==="en"?"el":"en")} aria-label="Change language">{locale==="en"?"ΕΛ":"EN"} <span>↗</span></button>
    </header>

    <section className="elia-reference-hero">
      <Image src="/images/elia-hero.webp" alt="Élia pâtisserie selection" fill priority unoptimized sizes="100vw" className="elia-reference-hero-image"/>
      <div className="elia-reference-hero-shade"/>
      <div className="elia-reference-hero-copy">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <Link href="/creations" className="elia-reference-button">{t.cta}<span>↗</span></Link>
      </div>
      <span className="elia-reference-hero-caption">ÉLIA PÂTISSERIE · AGRINIO, GREECE</span>
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
      <p className="eyebrow">ÉLIA PÂTISSERIE · AGRINIO</p>
      <h2>{t.closingTitle}</h2><p>{t.closingText}</p>
      <Link href="/contact" className="elia-reference-text-link">{t.contact}<span>↗</span></Link>
    </section>

    <footer className="elia-reference-footer">
      <Link className="footer-brand" href="/">Élia<span>PÂTISSERIE</span></Link>
      <p>{t.footer}</p>
      <div><Link href="/privacy">{locale==="en"?"PRIVACY":"ΑΠΟΡΡΗΤΟ"}</Link><Link href="/legal">{locale==="en"?"LEGAL":"ΝΟΜΙΚΑ"}</Link></div>
      <small>© {new Date().getFullYear()} Élia Pâtisserie</small>
    </footer>
  </main>;
}
