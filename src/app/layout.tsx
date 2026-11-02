import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sofia & Stelios | Pâtisserie in Kalyvia, Greece",
    template: "%s | Sofia & Stelios"
  },
  description:
    "Discover the art of fine baking and delicate pâtisserie at Sofia & Stelios in Kalyvia, Greece.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "Sofia & Stelios",
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
