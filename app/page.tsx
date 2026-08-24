"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type Language = "de" | "en";
type IconName =
  | "arrow"
  | "check"
  | "copy"
  | "eye"
  | "folder"
  | "home"
  | "lock"
  | "network"
  | "rocket"
  | "shield"
  | "spark"
  | "tray"
  | "windows";

const content = {
  de: {
    skip: "Zum Inhalt springen",
    nav: { features: "Funktionen", workflow: "Ablauf", privacy: "Datenschutz", faq: "FAQ", cta: "Beta & Release" },
    hero: {
      eyebrow: "Unabhängige Windows-App · Private Beta",
      titleTop: "Deine Seestar-Aufnahmen.",
      titleAccent: "Automatisch auf deinem PC.",
      text: "AstroSync Companion überträgt neue Light-FITs während deiner Beobachtung sicher und geordnet auf deinen Windows-PC – bereit für deinen Astrofotografie-Workflow.",
      primary: "Funktionen entdecken", secondary: "So funktioniert es",
      trust: ["Kein Cloud-Upload", "Quelle bleibt unverändert", "Für Windows"],
    },
    app: {
      version: "Beta", tabs: ["Übersicht", "Live FIT", "Astro-ID", "Einstellungen"], connected: "Seestar verbunden", auto: "Auto-Sync aktiv",
      source: "QUELLE", sourceValue: "Seestar · EMMC Images", target: "ZIEL", targetValue: "Astrophotography / Auto-Sync",
      recent: "Zuletzt synchronisiert", object: "M 31 · Andromedagalaxie", frames: "24 neue Light-FITs",
      ready: "Alles synchronisiert", synced: "4’771 FITs sicher übertragen", sync: "Jetzt synchronisieren",
    },
    proof: {
      kicker: "Gebaut für eine ruhige Nacht unter Sternen", title: "Weniger Dateiarbeit. Mehr Zeit für das Bild.",
      text: "AstroSync Companion übernimmt den wiederkehrenden Transfer, während deine Quelldaten dort bleiben, wo sie sind.",
    },
    showcase: {
      eyebrow: "Echte Einblicke", title: "Drei Ansichten. Ein ruhiger Workflow.",
      text: "Entdecke die zentralen Bereiche von AstroSync Companion anhand echter Screenshots aus der Beta.",
      previous: "Vorherige Ansicht", next: "Nächste Ansicht", carousel: "AstroSync Companion App-Ansichten",
      onlineNote: {
        title: "Online-Hinweis",
        text: "Astro-ID verwendet optionale externe Astronomiedienste. Es werden keine FIT-Dateien hochgeladen; übertragen werden nur die für die Abfrage notwendigen Objekt- und Koordinatendaten. Die Funktion ist standardmässig deaktiviert.",
        source: "Bildquelle: CDS / Aladin HiPS2FITS / DSS2",
        privacy: "Datenschutzdetails",
      },
      slides: [
        { label: "Übersicht", title: "Deine ganze Session auf einen Blick.", text: "Verbindung, Warteschlange, letzte Synchronisierung und laufender Transfer bleiben jederzeit sichtbar.", image: "/screens/overview.jpg", alt: "AstroSync Companion Übersicht mit Auto-Sync, letzter Session und laufendem FIT-Transfer", width: 1175, height: 716, portrait: false },
        { label: "Live FIT · Auto Stretch", title: "Neue FITs direkt beurteilen.", text: "Kontrolliere neue Aufnahmen mit Auto Stretch, während die originale FIT-Datei vollständig unverändert bleibt.", image: "/screens/auto-stretch.jpg", alt: "Live FIT Lab von AstroSync Companion mit Auto-Stretch-Vorschau und FIT-Informationen", width: 1101, height: 717, portrait: false },
        { label: "Astro-ID · M31", title: "Die Andromedagalaxie klar bestimmt.", text: "Löse M31 auf und vergleiche die Objektdaten mit einem echten DSS2-Himmelsausschnitt.", image: "/screens/astro-id-m31.jpg", alt: "Astro-ID von AstroSync Companion mit M31, Daten zur Andromedagalaxie und DSS2-Himmelsvorschau", width: 1343, height: 840, portrait: false },
      ],
    },
    features: {
      eyebrow: "Was AstroSync Companion übernimmt", title: "Vom Teleskop bis zur Bildbearbeitung – ohne Umwege.",
      text: "Die Funktionen konzentrieren sich auf einen zuverlässigen lokalen Workflow und klare Kontrolle.",
      items: [
        { icon: "network" as IconName, title: "Automatischer FIT-Transfer", text: "Neue Light-FITs werden fortlaufend erkannt und in dein gewähltes Ziel übertragen." },
        { icon: "eye" as IconName, title: "Live-FIT-Ansicht", text: "Kontrolliere neue Aufnahmen direkt in AstroSync Companion – mit Original-, Linear- und Auto-Stretch-Ansicht." },
        { icon: "folder" as IconName, title: "Sauber organisiert", text: "AstroSync Companion hält deinen lokalen Bestand übersichtlich und zeigt dir den effektiven Sync-Fortschritt." },
        { icon: "shield" as IconName, title: "Sicheres Kopieren", text: "Dateien werden zuerst geschützt übertragen und erst nach vollständigem Abschluss bereitgestellt." },
        { icon: "rocket" as IconName, title: "Schneller Start", text: "Ein lokaler Index und gezielte Sicherheitsprüfungen vermeiden unnötige Vollscans." },
        { icon: "tray" as IconName, title: "Unaufdringlich im Hintergrund", text: "Tray-Modus und Autostart lassen AstroSync Companion während deiner Session zuverlässig mitlaufen." },
      ],
    },
    workflow: {
      eyebrow: "In drei Schritten", title: "Einrichten. Beobachten. Weiterverarbeiten.",
      steps: [
        { number: "01", title: "Seestar verbinden", text: "AstroSync Companion findet den erreichbaren Bildordner in deinem lokalen Netzwerk." },
        { number: "02", title: "Zielordner wählen", text: "Lege einmal fest, wo deine FIT-Dateien auf dem Windows-PC gespeichert werden." },
        { number: "03", title: "Auto-Sync starten", text: "Neue Lights landen automatisch und sicher in deinem lokalen Workflow." },
      ],
    },
    privacy: {
      eyebrow: "Local first", title: "Deine Aufnahmen bleiben deine Aufnahmen.",
      text: "AstroSync Companion arbeitet in deinem lokalen Netzwerk. Es braucht weder ein Benutzerkonto noch einen Cloud-Speicher, um deine FIT-Dateien zu synchronisieren.",
      points: ["Keine FIT-Uploads in eine Cloud", "Keine Analyse- oder Werbe-SDKs", "Quelldateien werden nicht gelöscht", "Einstellungen und Verlauf bleiben lokal"],
      note: "AstroSync Companion kopiert passende Light-FITs vom lokalen Seestar-Speicher an dein gewähltes PC-Ziel. Die Originaldateien bleiben unangetastet. Optionale Astro-ID-Referenzbilder verwenden astronomische Onlinedienste und sind standardmässig deaktiviert.",
    },
    release: {
      eyebrow: "Der nächste Schritt", title: "Aktuell in Entwicklung.",
      text: "AstroSync Companion befindet sich derzeit noch in Entwicklung. Ein erster Build wird bald verfügbar sein.",
      cardLabel: "Aktueller Status", cardTitle: "Private Beta",
      cardText: "Stabilität, Live-Erkennung und der komplette Session-Workflow werden jetzt unter echten Bedingungen getestet.",
      points: ["Windows Desktop-App", "Lokaler FIT-Workflow", "DE / EN", "Release-Details folgen"],
      button: "Zur Funktionsübersicht", footnote: "",
    },
    faq: {
      eyebrow: "Kurz beantwortet", title: "Häufige Fragen",
      items: [
        { q: "Löscht AstroSync Companion Dateien auf meinem Seestar?", a: "Nein. AstroSync Companion kopiert passende Light-FITs auf deinen PC und verändert oder löscht die Quelldateien nicht." },
        { q: "Werden meine Aufnahmen hochgeladen?", a: "Nein. Der FIT-Transfer findet lokal zwischen deinem Seestar-Speicher und deinem Windows-PC statt." },
        { q: "Brauche ich ein Benutzerkonto?", a: "Für die lokale Synchronisation ist kein Benutzerkonto bei AstroSync Companion erforderlich." },
        { q: "Ist AstroSync Companion eine offizielle ZWO-Software?", a: "Nein. AstroSync Companion ist eine unabhängige, inoffizielle Drittanbieter-Software für Astrofotografie und nicht mit ZWO verbunden oder von ZWO unterstützt." },
      ],
    },
    footer: {
      text: "Lokaler FIT-Transfer für einen ruhigeren Astrofotografie-Workflow.",
      legal: "AstroSync Companion ist eine unabhängige, inoffizielle Drittanbieter-Software für Astrofotografie. Seestar und ZWO sind Marken ihrer jeweiligen Eigentümer. Es besteht keine Verbindung, Partnerschaft oder Unterstützung durch ZWO.",
      top: "Nach oben",
    },
  },
  en: {
    skip: "Skip to content",
    nav: { features: "Features", workflow: "Workflow", privacy: "Privacy", faq: "FAQ", cta: "Beta & release" },
    hero: {
      eyebrow: "Independent Windows app · Private beta", titleTop: "Your Seestar captures.", titleAccent: "Automatically on your PC.",
      text: "AstroSync Companion transfers new Light FITs safely and neatly to your Windows PC while you observe – ready for your astrophotography workflow.",
      primary: "Explore features", secondary: "How it works", trust: ["No cloud upload", "Source stays untouched", "Built for Windows"],
    },
    app: {
      version: "Beta", tabs: ["Overview", "Live FIT", "Astro-ID", "Settings"], connected: "Seestar connected", auto: "Auto-Sync active",
      source: "SOURCE", sourceValue: "Seestar · EMMC Images", target: "DESTINATION", targetValue: "Astrophotography / Auto-Sync",
      recent: "Recently synchronized", object: "M 31 · Andromeda Galaxy", frames: "24 new Light FITs",
      ready: "Everything synchronized", synced: "4,771 FITs transferred safely", sync: "Sync now",
    },
    proof: {
      kicker: "Built for a calm night under the stars", title: "Less file handling. More time for the image.",
      text: "AstroSync Companion handles the recurring transfer while your source data stays exactly where it is.",
    },
    showcase: {
      eyebrow: "Real app views", title: "Three views. One calm workflow.",
      text: "Explore the core areas of AstroSync Companion through real screenshots from the beta.",
      previous: "Previous view", next: "Next view", carousel: "AstroSync Companion app views",
      onlineNote: {
        title: "Online notice",
        text: "Astro-ID uses optional external astronomy services. No FIT files are uploaded; only the object and coordinate data required for the request is transmitted. The feature is disabled by default.",
        source: "Image source: CDS / Aladin HiPS2FITS / DSS2",
        privacy: "Privacy details",
      },
      slides: [
        { label: "Overview", title: "Your entire session at a glance.", text: "Connection, queue, latest synchronization and the active transfer remain visible at all times.", image: "/screens/overview.jpg", alt: "AstroSync Companion overview showing Auto-Sync, the latest session and an active FIT transfer", width: 1175, height: 716, portrait: false },
        { label: "Live FIT · Auto Stretch", title: "Inspect new FITs immediately.", text: "Review new captures with Auto Stretch while the original FIT file remains completely untouched.", image: "/screens/auto-stretch.jpg", alt: "AstroSync Companion Live FIT Lab with Auto Stretch preview and FIT information", width: 1101, height: 717, portrait: false },
        { label: "Astro-ID · M31", title: "Andromeda clearly identified.", text: "Resolve M31 and compare its object data with a real DSS2 sky survey cutout.", image: "/screens/astro-id-m31.jpg", alt: "AstroSync Companion Astro-ID showing M31, Andromeda Galaxy data and a DSS2 sky preview", width: 1343, height: 840, portrait: false },
      ],
    },
    features: {
      eyebrow: "What AstroSync Companion handles", title: "From telescope to post-processing – without detours.",
      text: "Every feature is focused on a dependable local workflow and clear control.",
      items: [
        { icon: "network" as IconName, title: "Automatic FIT transfer", text: "New Light FITs are detected continuously and copied to the destination you choose." },
        { icon: "eye" as IconName, title: "Live FIT view", text: "Inspect new captures inside AstroSync Companion with Original, Linear and Auto Stretch views." },
        { icon: "folder" as IconName, title: "Clean organization", text: "AstroSync Companion keeps your local collection clear and shows the effective synchronization progress." },
        { icon: "shield" as IconName, title: "Safe copying", text: "Files are transferred safely and only exposed at the destination after the copy is complete." },
        { icon: "rocket" as IconName, title: "Fast startup", text: "A local index and focused safety checks avoid unnecessary full scans." },
        { icon: "tray" as IconName, title: "Quiet in the background", text: "Tray mode and autostart keep AstroSync Companion running reliably throughout your session." },
      ],
    },
    workflow: {
      eyebrow: "Three simple steps", title: "Set up. Observe. Process.",
      steps: [
        { number: "01", title: "Connect Seestar", text: "AstroSync Companion finds the reachable image folder in your local network." },
        { number: "02", title: "Choose a destination", text: "Set once where your FIT files should be stored on your Windows PC." },
        { number: "03", title: "Start Auto-Sync", text: "New Lights arrive automatically and safely in your local workflow." },
      ],
    },
    privacy: {
      eyebrow: "Local first", title: "Your captures stay your captures.",
      text: "AstroSync Companion works inside your local network. It needs neither a user account nor cloud storage to synchronize your FIT files.",
      points: ["No FIT uploads to the cloud", "No analytics or advertising SDKs", "Source files are never deleted", "Settings and history stay local"],
      note: "AstroSync Companion copies matching Light FITs from local Seestar storage to the PC destination you choose. Your originals remain untouched. Optional Astro-ID reference images use astronomy web services and are disabled by default.",
    },
    release: {
      eyebrow: "What comes next", title: "Currently in development.",
      text: "AstroSync Companion is currently still in development. A first build will be available soon.",
      cardLabel: "Current status", cardTitle: "Private beta",
      cardText: "Stability, live detection and the complete session workflow are now being tested under real conditions.",
      points: ["Windows desktop app", "Local FIT workflow", "DE / EN", "Release details to come"],
      button: "See all features", footnote: "",
    },
    faq: {
      eyebrow: "Quick answers", title: "Frequently asked questions",
      items: [
        { q: "Does AstroSync Companion delete files from my Seestar?", a: "No. AstroSync Companion copies matching Light FITs to your PC and never changes or deletes the source files." },
        { q: "Are my captures uploaded anywhere?", a: "No. FIT transfer happens locally between your Seestar storage and your Windows PC." },
        { q: "Do I need a user account?", a: "No AstroSync Companion account is required for local synchronization." },
        { q: "Is AstroSync Companion official ZWO software?", a: "No. AstroSync Companion is independent, unofficial third-party astrophotography software. It is not affiliated with or endorsed by ZWO." },
      ],
    },
    footer: {
      text: "Local FIT transfer for a calmer astrophotography workflow.",
      legal: "AstroSync Companion is independent, unofficial third-party astrophotography software. Seestar and ZWO are trademarks of their respective owners. AstroSync Companion is not affiliated with, partnered with or endorsed by ZWO.",
      top: "Back to top",
    },
  },
};

function LogoMark({ small = false }: { small?: boolean }) {
  return <span className={small ? "logo-mark logo-mark-small" : "logo-mark"} aria-hidden="true"><img src="/app-icon.png" alt="" /></span>;
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    folder: <path d="M3 6.5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M12 7v4m0 0-7 5m7-5 7 5" /></>,
    rocket: <><path d="M14 5c2.3-2.3 5.3-2 5.3-2s.3 3-2 5.3l-5.6 5.6-4.6-4.6Z" /><path d="m9.3 7.1-3.8.5L3 10.1l4.1.6M14 11.7l-.7 4.1-2.5 2.5-.5-3.8M6.5 14.5 3 18" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
    spark: <><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9Z" /><path d="m19 15 .7 2.3L22 18.5l-2.3 1.2L19 22l-.7-2.3-2.3-1.2 2.3-1.2Z" /></>,
    tray: <><path d="M4 15V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" /><path d="M3 15h5l2 3h4l2-3h5v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></>,
    windows: <><path d="M3 5.5 10.5 4v7H3Zm8.5-1.7L21 2v9h-9.5ZM3 12h7.5v7L3 17.5Zm8.5 0H21v9l-9.5-1.8Z" /></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function ProductVisual({ lang }: { lang: Language }) {
  const c = content[lang].app;
  return (
    <div className="product-visual" aria-label={lang === "de" ? "Vorschau der Anwendung AstroSync Companion" : "Preview of the AstroSync Companion application"}>
      <div className="window-glow" />
      <div className="app-window">
        <div className="app-titlebar">
          <div className="app-brand"><LogoMark small /><span>AstroSync Companion</span><span className="app-version">{c.version}</span></div>
          <div className="window-actions" aria-hidden="true"><i className="window-minimize" /><i className="window-maximize" /><i className="window-close" /></div>
        </div>
        <div className="app-tabs">{c.tabs.map((tab, index) => <span className={index === 0 ? "active" : ""} key={tab}>{tab}</span>)}</div>
        <div className="app-body">
          <div className="status-row"><span><i className="status-dot" />{c.connected}</span><span><i className="pulse-dot" />{c.auto}</span></div>
          <div className="path-grid">
            <div className="path-card"><span>{c.source}</span><strong><Icon name="network" size={16} />{c.sourceValue}</strong></div>
            <div className="path-arrow"><Icon name="arrow" size={18} /></div>
            <div className="path-card"><span>{c.target}</span><strong><Icon name="folder" size={16} />{c.targetValue}</strong></div>
          </div>
          <div className="recent-card">
            <div className="fit-thumbnail" aria-hidden="true"><span className="galaxy-core" /><span className="galaxy-arm arm-one" /><span className="galaxy-arm arm-two" /><i className="star-one" /><i className="star-two" /><i className="star-three" /></div>
            <div className="recent-copy"><span>{c.recent}</span><strong>{c.object}</strong><small>{c.frames}</small></div><span className="fit-pill">FIT</span>
          </div>
          <div className="sync-ready"><span className="ready-icon"><Icon name="check" size={15} /></span><div><strong>{c.ready}</strong><small>{c.synced}</small></div><button type="button">{c.sync}<Icon name="arrow" size={15} /></button></div>
        </div>
      </div>
      <div className="float-card float-safe"><span><Icon name="shield" size={17} /></span><div><small>LOCAL</small><strong>{lang === "de" ? "Sicher kopiert" : "Copied safely"}</strong></div></div>
      <div className="float-card float-live"><span><Icon name="spark" size={17} /></span><div><small>LIVE FIT</small><strong>Auto Stretch</strong></div></div>
    </div>
  );
}

function AppShowcase({ lang }: { lang: Language }) {
  const c = content[lang].showcase;
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const slide = c.slides[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + c.slides.length) % c.slides.length);
  };

  return (
    <section className="showcase-section section-wrap" aria-labelledby="showcase-title">
      <div className="showcase-heading">
        <div><div className="eyebrow eyebrow-plain">{c.eyebrow}</div><h2 id="showcase-title">{c.title}</h2></div>
        <p>{c.text}</p>
      </div>

      <div className="showcase-shell">
        <div className="showcase-toolbar">
          <div className="showcase-position"><span>{String(active + 1).padStart(2, "0")}</span><i>/</i><small>{String(c.slides.length).padStart(2, "0")}</small><strong>{slide.label}</strong></div>
          <div className="showcase-arrows">
            <button className="showcase-arrow showcase-previous" type="button" onClick={() => move(-1)} aria-label={c.previous}><Icon name="arrow" size={17} /></button>
            <button className="showcase-arrow" type="button" onClick={() => move(1)} aria-label={c.next}><Icon name="arrow" size={17} /></button>
          </div>
        </div>

        <div
          className={`showcase-stage${slide.portrait ? " is-portrait" : ""}`}
          role="group"
          aria-roledescription="carousel"
          aria-label={c.carousel}
          tabIndex={0}
          onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            const touchEnd = event.changedTouches[0]?.clientX;
            if (touchStart !== null && touchEnd !== undefined && Math.abs(touchStart - touchEnd) > 45) move(touchStart > touchEnd ? 1 : -1);
            setTouchStart(null);
          }}
        >
          <div className="showcase-backdrop" style={{ backgroundImage: `url(${slide.image})` }} aria-hidden="true" />
          <figure className="showcase-slide" key={`${lang}-${slide.image}`}>
            <img src={slide.image} alt={slide.alt} width={slide.width} height={slide.height} draggable="false" />
          </figure>
        </div>

        <div className="showcase-footer">
          <div className="showcase-caption" aria-live="polite">
            <span>{slide.label}</span><h3>{slide.title}</h3><p>{slide.text}</p>
            {slide.image === "/screens/astro-id-m31.jpg" && (
              <div className="showcase-online-note">
                <Icon name="lock" size={14} />
                <div>
                  <strong>{c.onlineNote.title}</strong>
                  <p>{c.onlineNote.text}</p>
                  <div className="showcase-online-links">
                    <a href="https://aladin.cds.unistra.fr/hips/" target="_blank" rel="noreferrer">{c.onlineNote.source}</a>
                    <a href="#privacy">{c.onlineNote.privacy}</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="showcase-tabs" role="tablist" aria-label={c.carousel}>
            {c.slides.map((item, index) => <button type="button" role="tab" aria-selected={index === active} className={index === active ? "active" : ""} onClick={() => setActive(index)} key={item.label}><i>{String(index + 1).padStart(2, "0")}</i><span>{item.label}</span></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("de");
  const c = content[lang];

  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type !== "reload") return;

    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";

    if (window.location.hash) {
      history.replaceState(history.state, "", `${window.location.pathname}${window.location.search}`);
    }

    const resetScroll = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    };

    resetScroll();
    const animationFrame = window.requestAnimationFrame(resetScroll);
    const resetTimer = window.setTimeout(() => {
      resetScroll();
      history.scrollRestoration = previousRestoration;
    }, 250);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(resetTimer);
      history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main">{c.skip}</a>
      <div className="site-shell" id="top">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="AstroSync Companion home"><LogoMark /><span>AstroSync Companion</span></a>
          <nav className="main-nav" aria-label={lang === "de" ? "Hauptnavigation" : "Main navigation"}>
            <a href="#features">{c.nav.features}</a><a href="#workflow">{c.nav.workflow}</a><a href="#privacy">{c.nav.privacy}</a><a href="#faq">{c.nav.faq}</a>
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label={lang === "de" ? "Sprache wählen" : "Choose language"}>
              <button type="button" className={lang === "de" ? "active" : ""} onClick={() => setLang("de")} aria-pressed={lang === "de"}>DE</button><span>/</span>
              <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
            </div>
            <a className="header-cta" href="#release">{c.nav.cta}<Icon name="arrow" size={15} /></a>
          </div>
        </header>

        <main id="main">
          <section className="hero section-wrap">
            <div className="hero-atmosphere" aria-hidden="true"><span /><span /><span /></div>
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />{c.hero.eyebrow}</div>
              <h1>{c.hero.titleTop}<br /><span>{c.hero.titleAccent}</span></h1><p>{c.hero.text}</p>
              <div className="hero-actions"><a className="button button-primary" href="#features">{c.hero.primary}<Icon name="arrow" size={17} /></a><a className="button button-secondary" href="#workflow">{c.hero.secondary}</a></div>
              <div className="trust-row">{c.hero.trust.map((item, index) => <span key={item}><Icon name={index === 0 ? "lock" : index === 1 ? "copy" : "windows"} size={15} />{item}</span>)}</div>
            </div>
            <ProductVisual lang={lang} />
          </section>

          <section className="proof-strip"><div className="proof-inner section-wrap"><p>{c.proof.kicker}</p><div><h2>{c.proof.title}</h2><span>{c.proof.text}</span></div></div></section>

          <AppShowcase lang={lang} />

          <section className="features-section section-wrap" id="features">
            <div className="section-heading"><div className="eyebrow eyebrow-plain">{c.features.eyebrow}</div><h2>{c.features.title}</h2><p>{c.features.text}</p></div>
            <div className="feature-grid">{c.features.items.map((feature, index) => <article className="feature-card" key={feature.title}><div className="feature-topline"><span className="feature-icon"><Icon name={feature.icon} size={21} /></span><small>0{index + 1}</small></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </section>

          <section className="workflow-section" id="workflow"><div className="workflow-inner section-wrap">
            <div className="workflow-intro"><div className="eyebrow eyebrow-plain">{c.workflow.eyebrow}</div><h2>{c.workflow.title}</h2><div className="orbit-illustration" aria-hidden="true"><span className="orbit orbit-a" /><span className="orbit orbit-b" /><LogoMark /><span className="orbit-node node-a" /><span className="orbit-node node-b" /></div></div>
            <ol className="steps-list">{c.workflow.steps.map((step) => <li key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
          </div></section>

          <section className="privacy-section section-wrap" id="privacy">
            <div className="privacy-visual" aria-hidden="true"><div className="privacy-orbit privacy-orbit-one" /><div className="privacy-orbit privacy-orbit-two" /><div className="privacy-core"><Icon name="lock" size={31} /><span>LOCAL</span></div><span className="privacy-node node-source"><Icon name="network" size={20} /></span><span className="privacy-node node-target"><Icon name="windows" size={20} /></span><span className="data-dot dot-one" /><span className="data-dot dot-two" /><span className="data-dot dot-three" /></div>
            <div className="privacy-copy"><div className="eyebrow eyebrow-plain">{c.privacy.eyebrow}</div><h2>{c.privacy.title}</h2><p className="privacy-lead">{c.privacy.text}</p><ul>{c.privacy.points.map((point) => <li key={point}><span><Icon name="check" size={14} /></span>{point}</li>)}</ul><div className="privacy-note"><Icon name="shield" size={20} /><p>{c.privacy.note}</p></div></div>
          </section>

          <section className="release-section section-wrap" id="release">
            <div className="release-copy"><div className="eyebrow eyebrow-plain">{c.release.eyebrow}</div><h2>{c.release.title}</h2><p>{c.release.text}</p></div>
            <div className="release-card"><div className="release-card-head"><span>{c.release.cardLabel}</span><i><span />LIVE</i></div><h3>{c.release.cardTitle}</h3><p>{c.release.cardText}</p><ul>{c.release.points.map(point => <li key={point}><Icon name="check" size={14} />{point}</li>)}</ul><a className="button button-primary" href="#features">{c.release.button}<Icon name="arrow" size={17} /></a>{c.release.footnote && <small>{c.release.footnote}</small>}</div>
          </section>

          <section className="faq-section section-wrap" id="faq"><div className="section-heading faq-heading"><div className="eyebrow eyebrow-plain">{c.faq.eyebrow}</div><h2>{c.faq.title}</h2></div><div className="faq-list">{c.faq.items.map((item) => <details key={item.q}><summary><span>{item.q}</span><i aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></section>
        </main>

        <footer className="site-footer"><div className="footer-main section-wrap"><div><a className="brand" href="#top"><LogoMark /><span>AstroSync Companion</span></a><p>{c.footer.text}</p></div><a className="back-top" href="#top" aria-label={c.footer.top}>{c.footer.top}<span><Icon name="home" size={16} /></span></a></div><div className="footer-legal section-wrap"><p>{c.footer.legal}</p><span>© 2026 AstroSync Companion</span></div></footer>
      </div>
    </>
  );
}
