type Props = { locale: "en" | "el" };

const platforms = [
  { name: "Instagram", mark: "◎" },
  { name: "Facebook", mark: "f" }
] as const;

export default function SocialPlaceholders({ locale }: Props) {
  return (
    <section className="footer-social" aria-label={locale === "en" ? "Social media" : "Μέσα κοινωνικής δικτύωσης"}>
      <p className="footer-social-title">{locale === "en" ? "FIND US ONLINE" : "ΒΡΕΙΤΕ ΜΑΣ ONLINE"}</p>
      <div className="footer-social-list">
        {platforms.map((platform) => (
          <span className="footer-social-placeholder" key={platform.name} aria-disabled="true">
            <span className={`footer-social-mark footer-social-mark-${platform.name.toLowerCase()}`} aria-hidden="true">{platform.mark}</span>
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
