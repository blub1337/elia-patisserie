import Link from "next/link";

function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-8-8l2-2-2-5Z"/></svg>}
function ClockIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>}

export default function ContactInfoSection({locale}:{locale:"en"|"el"}){
 const greek=locale==="el";
 const hours=greek
  ? [["Δευτέρα","18:00–23:59"],["Τρίτη","Κλειστά"],["Τετάρτη–Σάββατο","18:00–23:59"],["Κυριακή","13:00–23:59"]]
  : [["Monday","18:00–23:59"],["Tuesday","Closed"],["Wednesday–Saturday","18:00–23:59"],["Sunday","13:00–23:59"]];
 return <section className="contact-info-section">
  <div className="contact-info-heading">
   <p className="eyebrow">{greek?"SOFIA & STELIOS · ΠΛΗΡΟΦΟΡΙΕΣ":"SOFIA & STELIOS · VISIT US"}</p>
   <h2>{greek?"Επικοινωνία":"Get in touch"}</h2>
   <span>{greek?"Ενδεικτικά στοιχεία — προσωρινά placeholders":"Example details — temporary placeholders"}</span>
  </div>
  <div className="contact-info-grid">
   <article className="contact-info-card">
    <PinIcon/><p className="contact-info-label">{greek?"Διεύθυνση":"Address"}</p>
    <h3>Filias 36, Agrinio 301 31</h3>
    <Link href="https://maps.google.com/maps?q=Filias+36,+Agrinio+301+31&t=&z=17&ie=UTF8&iwloc=&output=embed" target="_blank" rel="noreferrer">{greek?"Τοποθεσία στον χάρτη":"View location on Google Maps"} <span>↗</span></Link>
   </article>
   <article className="contact-info-card">
    <PhoneIcon/><p className="contact-info-label">{greek?"Τηλέφωνο":"Telephone"}</p>
    <h3><a href="tel:+302641053868">+30 2641 053868</a></h3>
   </article>
   <article className="contact-info-card contact-info-hours">
    <ClockIcon/><p className="contact-info-label">{greek?"Ωράριο":"Opening hours"}</p>
    <div className="contact-hours-list">{hours.map(([day,time])=><p key={day}><span>{day}</span><strong>{time}</strong></p>)}</div>
   </article>
  </div>
 </section>;
}
