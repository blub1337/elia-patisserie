"use client";

import { useEffect } from "react";
import { useLocale } from "../lib/locale";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

const collections = {
  "signature-patisserie": {
    en: { label:"SIGNATURE PÂTISSERIE", title:"Little works of edible art.", intro:"An evolving selection of individual pâtisserie, finished with care and an eye for detail.", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=85", detail:"Individual creations and refined desserts will be presented here once the bakery's current selection is confirmed.", kind:"Pâtisserie" },
    el: { label:"ΕΚΛΕΚΤΑ ΓΛΥΚΑ", title:"Μικρά έργα τέχνης, φτιαγμένα για απόλαυση.", intro:"Μια συλλογή από ατομικά γλυκά, φτιαγμένα με φροντίδα και προσοχή στη λεπτομέρεια.", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=85", detail:"Περισσότερες πληροφορίες για τα διαθέσιμα ατομικά γλυκά θα προστεθούν μόλις οριστικοποιηθεί η συλλογή του καταστήματος.", kind:"Ατομικά γλυκά" }
  },
  "cakes-tarts": {
    en: { label:"CAKES & TARTS", title:"Made for moments worth celebrating.", intro:"A collection for gatherings, celebrations and the pleasure of sharing something beautiful.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85", detail:"The available cake and tart designs, sizes and ordering options will be added after confirmation by the bakery.", kind:"Cakes & tarts" },
    el: { label:"ΤΟΥΡΤΕΣ & ΤΑΡΤΕΣ", title:"Για τις στιγμές που αξίζει να γιορτάσετε.", intro:"Μια συλλογή για όμορφες συναντήσεις, γιορτές και στιγμές που αξίζει να μοιραστείτε.", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85", detail:"Τα διαθέσιμα σχέδια, τα μεγέθη και οι επιλογές παραγγελίας θα προστεθούν μόλις επιβεβαιωθούν από την Sofia & Stelios.", kind:"Τούρτες & τάρτες" }
  },
  "viennoiserie": {
    en: { label:"VIENNOISERIE", title:"A slower, sweeter morning.", intro:"Golden layers and delicate pastry traditions, made for the first pause of the day.", image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85", detail:"The bakery's actual viennoiserie range and daily availability will be listed here when confirmed.", kind:"Viennoiserie" },
    el: { label:"ΒΙΕΝΟΥΑΖΕΡΙ", title:"Μια πιο γλυκιά αρχή στη μέρα.", intro:"Αφράτες, χρυσαφένιες ζύμες για ένα απολαυστικό ξεκίνημα της ημέρας.", image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85", detail:"Η ποικιλία σε βιενουαζερί και η καθημερινή διαθεσιμότητα θα ανακοινώνονται μόλις επιβεβαιωθούν.", kind:"Βιενουαζερί" }
  },
  "artisan-bread": {
    en: { label:"ARTISAN BREAD", title:"The simple pleasure of good bread.", intro:"A celebration of everyday baking and the craft behind a loaf made with intention.", image:"https://images.unsplash.com/photo-1775591648306-9d1889c0b019?auto=format&fit=crop&w=1400&q=85", detail:"Bread varieties, ingredients and baking schedules will be published only after the bakery confirms them.", kind:"Artisan bread" },
    el: { label:"ΧΕΙΡΟΠΟΙΗΤΟ ΨΩΜΙ", title:"Η απλή απόλαυση του καλού ψωμιού.", intro:"Μια μικρή γιορτή της καθημερινής αρτοποιίας και της τέχνης που κρύβεται σε κάθε καρβέλι.", image:"https://images.unsplash.com/photo-1775591648306-9d1889c0b019?auto=format&fit=crop&w=1400&q=85", detail:"Τα διαθέσιμα είδη ψωμιού, τα συστατικά και το πρόγραμμα παραγωγής θα ανακοινωθούν μόλις επιβεβαιωθούν.", kind:"Αρτοποιία" }
  },
  "chocolate-pralines": {
    en: { label:"CHOCOLATE & PRALINES", title:"A moment of pure indulgence.", intro:"Thoughtful chocolate creations and small gifts for the moments that call for something special.", image:"https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1400&q=85", detail:"The chocolate selection, fillings and gifting formats will be added when the final range is supplied by the bakery.", kind:"Chocolate" },
    el: { label:"ΣΟΚΟΛΑΤΑ & ΠΡΑΛΙΝΕΣ", title:"Μια στιγμή απόλαυσης με σοκολάτα.", intro:"Ξεχωριστές σοκολατένιες δημιουργίες και μικρές προτάσεις δώρου για ιδιαίτερες περιστάσεις.", image:"https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1400&q=85", detail:"Οι διαθέσιμες σοκολατένιες δημιουργίες, οι γεμίσεις και οι επιλογές συσκευασίας δώρου θα προστεθούν μόλις οριστικοποιηθούν.", kind:"Σοκολατένιες δημιουργίες" }
  },
  "seasonal-creations": {
    en: { label:"SEASONAL CREATIONS", title:"Inspired by the season.", intro:"A changing collection that leaves room for fresh ideas, special occasions and seasonal inspiration.", image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=85", detail:"Seasonal items, limited availability and collection dates will be announced here when confirmed.", kind:"Seasonal" },
    el: { label:"ΕΠΟΧΙΑΚΕΣ ΔΗΜΙΟΥΡΓΙΕΣ", title:"Έμπνευση από κάθε εποχή.", intro:"Μια συλλογή που ανανεώνεται με νέες ιδέες και δημιουργίες εμπνευσμένες από κάθε εποχή.", image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=85", detail:"Τα εποχικά προϊόντα και οι περίοδοι διαθεσιμότητάς τους θα ανακοινώνονται μόλις οριστικοποιηθούν.", kind:"Εποχιακά" }
  }
} as const;

type Slug = keyof typeof collections;
const slugs = Object.keys(collections) as Slug[];

export default function CollectionPage({ slug }: { slug: string }) {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  if (!slugs.includes(slug as Slug)) return <main className="inner-page"><section className="inner-hero"><h1>Collection not found.</h1><Link href="/creations">Back to creations <span className="editorial-arrow" aria-hidden="true" /></Link></section></main>;
  const item = collections[slug as Slug][locale];
  const labels = locale==="en"
    ? {home:"HOME",back:"ALL CREATIONS",details:"COLLECTION DETAILS",ingredients:"Ingredients",allergens:"Allergens",availability:"Availability",pending:"To be confirmed by the bakery",contact:"ENQUIRE ABOUT THIS COLLECTION",placeholder:"Product information will appear here once verified by Sofia & Stelios Pâtisserie."}
    : {home:"ΑΡΧΙΚΗ",back:"ΟΛΕΣ ΟΙ ΔΗΜΙΟΥΡΓΙΕΣ",details:"ΠΛΗΡΟΦΟΡΙΕΣ ΓΙΑ ΤΗ ΣΥΛΛΟΓΗ",ingredients:"Συστατικά",allergens:"Αλλεργιογόνα",availability:"Διαθεσιμότητα",pending:"Προς επιβεβαίωση από την Sofia & Stelios",contact:"ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΓΙΑ ΑΥΤΗ ΤΗ ΣΥΛΛΟΓΗ",placeholder:"Πληροφορίες για τα προϊόντα θα προστεθούν μόλις επιβεβαιωθούν από την Sofia & Stelios Pâtisserie."};
  return <main className="inner-page collection-page">
    <div className="announcement"><span>✳</span> {locale==="en"?"A little sweetness, made in Kalyvia.":"Μια γλυκιά απόλαυση, φτιαγμένη στα Καλύβια."} <span>✳</span></div>
    <SiteHeader variant="inner" />
    <section className="collection-detail-hero"><Image src={item.image} alt={item.kind} width={1400} height={1100} sizes="(max-width: 600px) 100vw, 52vw" priority unoptimized /><div><p className="eyebrow">{item.label}</p><h1>{item.title}</h1><p>{item.intro}</p><Link className="text-link" href="/creations"><span className="editorial-arrow editorial-arrow-left" aria-hidden="true" /> {labels.back}</Link></div></section>
    <section className="collection-information"><div className="collection-information-heading"><p className="eyebrow">{labels.details}</p><h2>{item.kind}</h2><p>{item.detail}</p></div><div className="product-facts"><article><span>01</span><h3>{labels.ingredients}</h3><p>{labels.pending}</p></article><article><span>02</span><h3>{labels.allergens}</h3><p>{labels.pending}</p></article><article><span>03</span><h3>{labels.availability}</h3><p>{labels.pending}</p></article></div><p className="product-disclaimer">{labels.placeholder}</p><Link className="button button-dark" href="/contact">{labels.contact}<span className="editorial-arrow" aria-hidden="true" /></Link></section>
    <SiteFooter locale={locale} />
  </main>;
}
