import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sofia & Stelios Pâtisserie | Kalyvia, Greece",
    template: "%s | Sofia & Stelios Pâtisserie"
  },
  description:
    "Discover fine pastries, cakes and artisan baking at Sofia & Stelios Pâtisserie in Kalyvia, Greece.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "Sofia & Stelios Pâtisserie",
    description: "A taste of art. Crafted with passion.",
    type: "website",
    locale: "el_GR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
