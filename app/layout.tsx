import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arc4de89.github.io"),
  title: "AstroSync Companion | FITS-Transfer für Seestar",
  description: "Unabhängige Windows-App für Astrofotografie: AstroSync Companion überträgt Light-FITs lokal vom Seestar auf den PC – mit Live-Vorschau und Session-Workflow.",
  applicationName: "AstroSync Companion",
  keywords: ["AstroSync Companion", "Seestar", "Astrofotografie", "Astrophotography", "FITS", "FITS transfer", "Windows", "Auto-Sync", "Live FIT"],
  alternates: { canonical: "/" },
  category: "technology",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "de_CH", alternateLocale: "en_US", title: "AstroSync Companion",
    description: "Unabhängige Windows-App für lokalen FITS-Transfer, Live-Vorschau und Astrofotografie-Sessions.", siteName: "AstroSync Companion",
    url: "https://arc4de89.github.io",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "AstroSync Companion – Deine Seestar-Aufnahmen automatisch auf deinem PC" }],
  },
  twitter: {
    card: "summary_large_image", title: "AstroSync Companion",
    description: "Lokaler FITS-Transfer vom Seestar auf Windows – sicher, geordnet und ohne Cloud-Upload.", images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AstroSync Companion",
  applicationCategory: "PhotographyApplication",
  applicationSubCategory: "Astrophotography",
  operatingSystem: "Windows",
  softwareVersion: "Private Beta",
  url: "https://arc4de89.github.io/",
  description: "Independent Windows application for local Light FIT transfer, live preview and astrophotography session workflows with Seestar telescopes.",
  featureList: [
    "Automatic local Light FIT transfer",
    "Live FIT preview with Auto Stretch",
    "Local session organization",
    "Safe partial-file copy workflow",
    "Tray mode and autostart",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
