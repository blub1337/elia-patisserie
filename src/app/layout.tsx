import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Élia Pâtisserie | Artisan Bakery & Pâtisserie in Agrinio",
    template: "%s | Élia Pâtisserie"
  },
  description:
    "Discover the art of fine baking and delicate pâtisserie. Artisan creations, crafted with passion in Agrinio, Greece.",
  openGraph: {
    title: "Élia Pâtisserie",
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
