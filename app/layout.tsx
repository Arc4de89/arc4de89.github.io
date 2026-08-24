import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arc4de89.github.io"),
  title: "AstroSync Companion",
  description: "Automatischer, lokaler FIT-Transfer vom Seestar auf deinen Windows-PC – sicher, geordnet und bereit für deinen Astrofotografie-Workflow.",
  applicationName: "AstroSync Companion",
  keywords: ["AstroSync", "Seestar", "Astrofotografie", "FITS", "Windows", "Auto-Sync"],
  openGraph: {
    type: "website", locale: "de_CH", alternateLocale: "en_US", title: "AstroSync Companion",
    description: "Deine Seestar-Aufnahmen. Automatisch auf deinem PC.", siteName: "AstroSync Companion",
    url: "https://arc4de89.github.io",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "AstroSync Companion – Deine Seestar-Aufnahmen automatisch auf deinem PC" }],
  },
  twitter: {
    card: "summary_large_image", title: "AstroSync Companion",
    description: "Deine Seestar-Aufnahmen. Automatisch auf deinem PC.", images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
