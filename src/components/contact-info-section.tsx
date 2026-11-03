import Link from "next/link";

function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-8-8l2-2-2-5Z"/></svg>}
function ClockIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>}

export default function ContactInfoSection({locale}:{locale:"en"|"el"}){
 const greek=locale==="el";
 const hours=greek
  ? [["Δευτέρα","18:00–23:59"],["Τρίτη","Κλειστά"],["Τετάρτη–Σάββατο","18:00–23:59"],["Κυριακή","13:00–23:59"]]
  : [["Monday","18:00–23:59"],["Tuesday","Closed"],["Wednesday–Saturday","18:00–23:59"],["Sunday","13:00–23:59"]];
 const mapEmbedUrl="https://maps.google.com/maps?q=Filias%2036%2C%20Agrinio%20301%2031&z=16&ie=UTF8&iwloc=&output=embed";
 const mapUrl="https://www.google.com/maps/search/?api=1&query=Filias%2036%2C%20Agrinio%20301%2031";
 return <section className="contact-info-section" aria-labelledby="contact-info-title">
  <div className="contact-info-heading">
   <p className="eyebrow">{greek?"SOFIA & STELIOS · ΠΛΗΡΟΦΟΡΙΕΣ":"SOFIA & STELIOS · VISIT INFORMATION"}</p>
   <h2 id="contact-info-title">{greek?"Επικοινωνία και τοποθεσία":"Visit & location"}</h2>
   <span>{greek?"Ενδεικτικά στοιχεία — προσωρινά placeholders":"Example details — temporary placeholders"}</span>
  </div>

  <div className="contact-info-layout">
   <div className="contact-info-details">
    <p className="contact-info-kicker">{greek?"Επισκεφθείτε μας":"COME BY"}</p>
    <h3>{greek?"Θα χαρούμε να σας δούμε":"We would love to see you"}</h3>

    <div className="contact-info-items">
     <article className="contact-info-item">
      <PinIcon/>
      <div className="contact-info-item-copy">
       <p>{greek?"Διεύθυνση":"Address"}</p>
       <strong>Filias 36, Agrinio 301 31</strong>
       <Link className="contact-info-inline-link" href={mapUrl} target="_blank" rel="noopener noreferrer">
        {greek?"Άνοιγμα στους Χάρτες Google":"Open in Google Maps"}
       </Link>
      </div>
     </article>

     <article className="contact-info-item">
      <PhoneIcon/>
      <div className="contact-info-item-copy">
       <p>{greek?"Τηλέφωνο":"Telephone"}</p>
       <a href="tel:+302641053868">+30 2641 053868</a>
      </div>
     </article>

     <article className="contact-info-item">
      <ClockIcon/>
      <div className="contact-info-item-copy">
       <p>{greek?"Ωράριο":"Opening hours"}</p>
       <div className="contact-hours-list">
        {hours.map(([day,time])=><p key={day}><span>{day}</span><strong>{time}</strong></p>)}
       </div>
      </div>
     </article>
    </div>
   </div>

   <div className="contact-info-map">
    <div className="contact-info-map-header">
     <span>Google Maps</span>
     <span>{greek?"Χάρτης παραδείγματος":"PLACEHOLDER LOCATION"}</span>
    </div>
    <div className="contact-info-map-frame">
     <iframe
      title={greek?"Χάρτης Google για ενδεικτική τοποθεσία":"Google Map showing the temporary example location"}
      src={mapEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
     />
    </div>
    <div className="contact-info-map-footer">
     <span>{greek?"Ενδεικτική τοποθεσία":"Example location only"}</span>
     <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
      {greek?"Προβολή πλήρους χάρτη":"Open full map"}
     </Link>
    </div>
   </div>
  </div>
 </section>;
}
