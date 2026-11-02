"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const collections = {
  "signature-patisserie": {
    en: { label:"SIGNATURE PÂTISSERIE", title:"Little works of edible art.", intro:"An evolving selection of individual pâtisserie, finished with care and an eye for detail.", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=85", detail:"Individual creations and refined desserts will be presented here once the bakery's current selection is confirmed.", kind:"Pâtisserie" },
    el: { label:"ΕΚΛΕΚΤΑ ΓΛΥΚΑ", title:"Μικρά έργα τέχνης που απολαμβάνονται.", intro:"Μια συλλογή από ατομικά γλυκά, με προσεγμένη παρουσίαση και έμφαση στη λεπτομέρεια.", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=85", detail:"Οι ατομικές δημιουργίες και τα εκλεκτά γλυκά θα παρουσιαστούν εδώ μόλις επιβεβαιωθεί η τρέχουσα συλλογή του καταστήματος.", kind:"Ζαχαροπλαστική" }
  },
  "cakes-tarts": {
    en: { label:"CAKES & TARTS", title:"Made for moments worth celebrating.", intro:"A collection for gatherings, celebrations and the pleasure of sharing something beautiful.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85", detail:"The available cake and tart designs, sizes and ordering options will be added after confirmation by the bakery.", kind:"Cakes & tarts" },
    el: { label:"ΤΟΥΡΤΕΣ & ΤΑΡΤΕΣ", title:"Για στιγμές που αξίζει να γιορτάσετε.", intro:"Μια συλλογή για συναντήσεις, γιορτές και τη χαρά του να μοιράζεσαι κάτι όμορφο.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85", detail:"Τα διαθέσιμα σχέδια, μεγέθη και οι επιλογές παραγγελίας θα προστεθούν μετά από επιβεβαίωση του καταστήματος.", kind:"Τούρτες & τάρτες" }
  },
  "viennoiserie": {
    en: { label:"VIENNOISERIE", title:"A slower, sweeter morning.", intro:"Golden layers and delicate pastry traditions, made for the first pause of the day.", image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85", detail:"The bakery's actual viennoiserie range and daily availability will be listed here when confirmed.", kind:"Viennoiserie" },
    el: { label:"ΒΙΕΝΟΥΑΖΕΡΙ", title:"Ένα πιο γλυκό, ήρεμο πρωινό.", intro:"Χρυσαφένιες στρώσεις και λεπτές ζύμες, για την πρώτη όμορφη παύση της ημέρας.", image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85", detail:"Η πραγματική ποικιλία βιενουαζερί και η καθημερινή διαθεσιμότητα θα αναρτηθούν μόλις επιβεβαιωθούν.", kind:"Βιενουαζερί" }
  },
  "artisan-bread": {
    en: { label:"ARTISAN BREAD", title:"The simple pleasure of good bread.", intro:"A celebration of everyday baking and the craft behind a loaf made with intention.", image:"https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=1400&q=85", detail:"Bread varieties, ingredients and baking schedules will be published only after the bakery confirms them.", kind:"Artisan bread" },
    el: { label:"ΧΕΙΡΟΠΟΙΗΤΟ ΨΩΜΙ", title:"Η απλή απόλαυση του καλού ψωμιού.", intro:"Μια γιορτή της καθημερινής αρτοποιίας και της τέχνης πίσω από κάθε καρβέλι.", image:"https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=1400&q=85", detail:"Τα είδη ψωμιού, τα συστατικά και οι ώρες ψησίματος θα δημοσιευτούν μόνο μετά την επιβεβαίωσή τους από το κατάστημα.", kind:"Αρτοποιία" }
  },
  "chocolate-pralines": {
    en: { label:"CHOCOLATE & PRALINES", title:"A moment of pure indulgence.", intro:"Thoughtful chocolate creations and small gifts for the moments that call for something special.", image:"https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1400&q=85", detail:"The chocolate selection, fillings and gifting formats will be added when the final range is supplied by the bakery.", kind:"Chocolate" },
    el: { label:"ΣΟΚΟΛΑΤΑ & ΠΡΑΛΙΝΕΣ", title:"Μια στιγμή απόλυτης απόλαυσης.", intro:"Ξεχωριστές σοκολατένιες δημιουργίες και μικρά δώρα για ιδιαίτερες στιγμές.", image:"https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1400&q=85", detail:"Η συλλογή σοκολάτας, οι γεμίσεις και οι επιλογές δώρων θα προστεθούν μόλις δοθούν από το κατάστημα.", kind:"Σοκολάτα" }
  },
  "seasonal-creations": {
    en: { label:"SEASONAL CREATIONS", title:"Inspired by the season.", intro:"A changing collection that leaves room for fresh ideas, special occasions and seasonal inspiration.", image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=85", detail:"Seasonal items, limited availability and collection dates will be announced here when confirmed.", kind:"Seasonal" },
    el: { label:"ΕΠΟΧΙΑΚΕΣ ΔΗΜΙΟΥΡΓΙΕΣ", title:"Έμπνευση από κάθε εποχή.", intro:"Μια συλλογή που ανανεώνεται, με χώρο για νέες ιδέες, ξεχωριστές περιστάσεις και εποχιακή έμπνευση.", image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=85", detail:"Τα εποχιακά προϊόντα, η περιορισμένη διαθεσιμότητα και οι ημερομηνίες συλλογών θα ανακοινώνονται εδώ όταν επιβεβαιωθούν.", kind:"Εποχιακά" }
  }
} as const;

type Slug = keyof typeof collections;
const slugs = Object.keys(collections) as Slug[];

export default function CollectionPage({ slug }: { slug: string }) {
  const [locale,setLocale] = useState<"en"|"el">("en");
  if (!slugs.includes(slug as Slug)) return <main className="inner-page"><section className="inner-hero"><h1>Collection not found.</h1><Link href="/creations">Back to creations ↗</Link></section></main>;
  const item = collections[slug as Slug][locale];
  const labels = locale==="en"
    ? {home:"HOME",back:"ALL CREATIONS",details:"COLLECTION DETAILS",ingredients:"Ingredients",allergens:"Allergens",availability:"Availability",pending:"To be confirmed by the bakery",contact:"ENQUIRE ABOUT THIS COLLECTION",placeholder:"Product information will appear here once verified by Élia Pâtisserie."}
    : {home:"ΑΡΧΙΚΗ",back:"ΟΛΕΣ ΟΙ ΔΗΜΙΟΥΡΓΙΕΣ",details:"ΠΛΗΡΟΦΟΡΙΕΣ ΣΥΛΛΟΓΗΣ",ingredients:"Συστατικά",allergens:"Αλλεργιογόνα",availability:"Διαθεσιμότητα",pending:"Θα επιβεβαιωθεί από το κατάστημα",contact:"ΕΠΙΚΟΙΝΩΝΙΑ ΓΙΑ ΤΗ ΣΥΛΛΟΓΗ",placeholder:"Οι πληροφορίες προϊόντων θα προστεθούν μόλις επαληθευτούν από την Élia Pâtisserie."};
  return <main className="inner-page collection-page">
    <div className="announcement">✳ {locale==="en"?"A little sweetness, made in Agrinio.":"Μια γλυκιά απόλαυση, φτιαγμένη στο Αγρίνιο."} ✳</div>
    <header className="site-header"><Link className="wordmark" href="/">Élia<span>PÂTISSERIE</span></Link><nav className="inner-nav"><Link href="/">{labels.home}</Link><Link href="/creations">{labels.back}</Link><Link href="/our-story">{locale==="en"?"OUR STORY":"Η ΙΣΤΟΡΙΑ ΜΑΣ"}</Link><Link href="/contact">{locale==="en"?"CONTACT":"ΕΠΙΚΟΙΝΩΝΙΑ"}</Link></nav><button className="language-switch" onClick={()=>setLocale(locale==="en"?"el":"en")}>{locale==="en"?"ΕΛ":"EN"} ↗</button></header>
    <section className="collection-detail-hero"><Image src={item.image} alt={item.kind} width={1400} height={1100} sizes="(max-width: 600px) 100vw, 52vw" priority unoptimized /><div><p className="eyebrow">{item.label}</p><h1>{item.title}</h1><p>{item.intro}</p><Link className="text-link" href="/creations">← {labels.back}</Link></div></section>
    <section className="collection-information"><div className="collection-information-heading"><p className="eyebrow">{labels.details}</p><h2>{item.kind}</h2><p>{item.detail}</p></div><div className="product-facts"><article><span>01</span><h3>{labels.ingredients}</h3><p>{labels.pending}</p></article><article><span>02</span><h3>{labels.allergens}</h3><p>{labels.pending}</p></article><article><span>03</span><h3>{labels.availability}</h3><p>{labels.pending}</p></article></div><p className="product-disclaimer">{labels.placeholder}</p><Link className="button button-dark" href="/contact">{labels.contact} ↗</Link></section>
    <footer><div className="footer-main"><Link className="footer-brand" href="/">Élia<span>PÂTISSERIE</span></Link><p>{locale==="en"?"Made with care. Shared with joy.":"Με φροντίδα δημιουργημένα. Με χαρά μοιρασμένα."}</p><span className="footer-contact">AGRINIO, GREECE</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Élia Pâtisserie</span><span>AGRINIO, GREECE</span><div className="footer-legal"><Link href="/privacy">{locale==="en"?"PRIVACY":"ΑΠΟΡΡΗΤΟ"}</Link><Link href="/legal">{locale==="en"?"LEGAL":"ΝΟΜΙΚΑ"}</Link><Link href="/contact">{locale==="en"?"CONTACT":"ΕΠΙΚΟΙΝΩΝΙΑ"}</Link></div></div></footer>
  </main>;
}
