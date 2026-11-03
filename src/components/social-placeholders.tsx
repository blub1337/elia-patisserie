type Props = { locale: "en" | "el" };

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="12" cy="12" r="4.05" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="17.65" cy="6.55" r="1.05" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 320 512" width="15" height="20" aria-hidden="true">
      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.36 0 225.36 0C152.77 0 105.47 44.38 105.47 124.72v70.62H25.61V288h79.86v224h98.32V288z" />
    </svg>
  );
}

const platforms = [
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "Facebook", icon: <FacebookIcon /> }
] as const;

export default function SocialPlaceholders({ locale }: Props) {
  return (
    <section className="footer-social" aria-label={locale === "en" ? "Social media" : "Μέσα κοινωνικής δικτύωσης"}>
      <p className="footer-social-title">{locale === "en" ? "FIND US ONLINE" : "ΒΡΕΙΤΕ ΜΑΣ ONLINE"}</p>
      <div className="footer-social-list">
        {platforms.map((platform) => (
          <span className="footer-social-placeholder" key={platform.name}>
            <span className={`footer-social-mark footer-social-mark-${platform.name.toLowerCase()}`} aria-hidden="true">
              {platform.icon}
            </span>
            <span className="footer-social-copy">
              <strong>{platform.name}</strong>
              <small>{locale === "en" ? "PROFILE TO BE ADDED" : "ΘΑ ΠΡΟΣΤΕΘΕΙ ΣΥΝΔΕΣΜΟΣ"}</small>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
