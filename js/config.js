// ============================================================
// Zentrale Inhalte der Verkaufs-Webseite "Haus Pfaffstätten"
// Alles, was sich noch ändern soll (Preis, Kontakt, Geschichte,
// Video-Link, Fotos), wird HIER angepasst — nicht in index.html.
// ============================================================

const CONTENT = {
  // --- Kopfzeile / Hero ---
  title: "Ein Wohlfühl-Bungalow in Pfaffstätten",
  subtitle: "Einziehen und wohlfühlen!",
  // Wird oben rechts unter dem Titel angezeigt.
  location: "Franz Josef-Straße 6, 2511 Pfaffstätten, Niederösterreich",
  address: "Franz Josef-Straße 6, 2511 Pfaffstätten",
  price: "Preis auf Anfrage", // TODO: Kaufpreis eintragen

  // --- Eckdaten (leer lassen = wird auf der Seite ausgeblendet) ---
  facts: {
    wohnflaeche: "123 m²",
    grundstueck: "617 m²",
    zimmer: "", // im Text nicht als Gesamtzahl angegeben
    schlafzimmer: "3",
    baeder: "2 WCs",
    baujahr: "1980",
    renovierungsjahr: "2024/2025",
  },

  // --- Highlights (Badges unter dem Hero) ---
  highlights: [
    { icon: "🏠", text: "Komplett saniert 2024/25" },
    { icon: "🧱", text: "Neue Fassade" },
    { icon: "♨️", text: "Neue Luftwärmepumpe" },
    { icon: "🔆", text: "PV-vorbereitet" },
    { icon: "🔒", text: "Fingerprint-Eingang" },
    { icon: "🌳", text: "Garten & Terrasse" },
  ],

  // --- Ausstattung & Räume ---
  ausstattung: [
    "Bungalow mit Möglichkeit eines Dachausbaus",
    "Keller (teilunterkellert) mit 3 Räumen & Waschküche",
    "Garage mit direktem Durchgang zum Haus",
    "Vorzimmer",
    "2 WCs",
    "3 Schlafzimmer, 2 begehbare Schränke",
    "Offene Küche & Esszimmer",
    "Wohnzimmer mit Panoramafenster zu den Wienerbergen",
    "Überdachte Terrasse, begehbar von Wohnzimmer & Esszimmer",
  ],

  // --- Geschichte & Renovierungen ---
  history: {
    intro: "Im Zeitraum von Oktober 2024 bis März 2025 wurde das Haus komplett saniert:",
    items: [
      "Komplette Elektrik neu, inkl. Vorbereitung für PV-Anlage",
      "Alle Leitungen im ganzen Haus neu",
      "Neue Luftwärmepumpe",
      "Fassade komplett neu",
      "Wärmedämmung am Dachboden mit Fassade erneuert",
      "Berechnung Generalsanierung vom Baumeister vorhanden",
      "Energieausweis vorhanden",
      "Neue Einbauküche (XXXLutz)",
      "Bäder, WC, Duschen, Waschbecken & Armaturen komplett neu",
      "Jalousien mit Alexa steuerbar",
      "Eingangstüre mit Fingerprint, Code & Schlüssel",
      "Blitzableiter komplett neu",
    ],
    note: "Für alle Arbeiten liegen Rechnungen und Garantien vor.",
  },

  // --- Besucherzähler (optional) ---
  // Kostenloser Account auf https://www.goatcounter.com/signup, dort einen
  // Site-Code wählen (z.B. "haus-pfaffstaetten") und hier eintragen.
  // Leer lassen = kein Tracking eingebunden. Statistik-Dashboard danach unter
  // https://DEIN-CODE.goatcounter.com (einloggen).
  analytics: {
    goatcounterCode: "pyewaked",
  },

  // --- Kontakt ---
  contact: {
    name: "Friederike Fiala",
    email: "friederike.fiala@aon.at",
    phone: "+43 676 338 08 72",
  },

  // --- Pläne (Grundrisse als PDF) ---
  plaene: [
    { title: "Erdgeschoss", url: "media/plaene/Grundriss-Erdgeschoss.pdf" },
    { title: "Keller", url: "media/plaene/Grundriss-Keller.pdf" },
    { title: "Ansicht & Schnitt A-A", url: "media/plaene/Ansicht-und-Schnitt.pdf" },
    { title: "Schnitt A-A (Detail)", url: "media/plaene/Schnitt-AA.pdf" },
    // media/plaene/Grundriss-Erdgeschoss-markiert.pdf liegt im Repo, ist aber
    // (noch) nicht verlinkt - unklare farbige Markierungen, siehe Rückfrage.
  ],

  // --- Weitere Eindrücke (alle Innenraum-/Zusatzfotos, nach Räumen gruppiert) ---
  innenraeume: [
    {
      label: "Außenansicht",
      items: [
        { title: "Außenansicht", url: "media/fotos/aussenansicht-2.jpg" },
        { title: "Außenansicht", url: "media/fotos/aussenansicht-3.jpg" },
        { title: "Außenansicht", url: "media/fotos/aussenansicht-5.jpg" },
        { title: "Außenansicht", url: "media/fotos/aussenansicht-8.jpg" },
        { title: "Von der Straße", url: "media/fotos/haus-von-strasse.jpg" },
      ],
    },
    {
      label: "Garten & Terrasse",
      items: [
        { title: "Garten", url: "media/fotos/garten-1.jpg" },
        { title: "Garten", url: "media/fotos/garten-2.jpg" },
        { title: "Terrasse", url: "media/fotos/terrasse-1.jpg" },
        { title: "Terrasse", url: "media/fotos/terrasse-2.jpg" },
        { title: "Terrasse", url: "media/fotos/terrasse-5.jpg" },
        { title: "Terrasse", url: "media/fotos/terrasse-7.jpg" },
        { title: "Terrasse", url: "media/fotos/terrasse-8.jpg" },
      ],
    },
    {
      label: "Wohnzimmer",
      items: [
        { title: "Wohnzimmer", url: "media/fotos/wohnzimmer-1.jpg" },
        { title: "Wohnzimmer", url: "media/fotos/wohnzimmer-2.jpg" },
        { title: "Panoramafenster", url: "media/fotos/panoramafenster.jpg" },
      ],
    },
    {
      label: "Küche & Esszimmer",
      items: [
        { title: "Küche", url: "media/fotos/kueche-gesamt.jpg" },
        { title: "Herd & Backofen", url: "media/fotos/kueche-herd-backofen.jpg" },
        { title: "Kühlschrank", url: "media/fotos/kueche-kuehlschrank.jpg" },
        { title: "Küche", url: "media/fotos/kueche-links.jpg" },
        { title: "Küche", url: "media/fotos/kueche-rechts.jpg" },
        { title: "Küche", url: "media/fotos/kueche-regal.jpg" },
        { title: "Spüle", url: "media/fotos/kueche-waschbecken.jpg" },
        { title: "Kücheninsel", url: "media/fotos/kuecheninsel.jpg" },
        { title: "Armaturen", url: "media/fotos/kueche-amaturen.jpg" },
        { title: "Esstisch", url: "media/fotos/esstisch.jpg" },
      ],
    },
    {
      label: "Bad & WC",
      items: [
        { title: "Bad", url: "media/fotos/bad-wand.jpg" },
        { title: "Bad", url: "media/fotos/bad-waschbecken-1.jpg" },
        { title: "Bad", url: "media/fotos/bad-waschbecken-2.jpg" },
        { title: "Dusche", url: "media/fotos/dusche.jpg" },
        { title: "WC", url: "media/fotos/wc-2.jpg" },
        { title: "WC", url: "media/fotos/wc-geschlossen.jpg" },
        { title: "WC", url: "media/fotos/wc-offen.jpg" },
      ],
    },
    {
      label: "Schlafzimmer",
      items: [
        { title: "Schlafzimmer", url: "media/fotos/schlafzimmer-1.jpg" },
        { title: "Schlafzimmer", url: "media/fotos/schlafzimmer-2.jpg" },
        { title: "Schlafzimmer", url: "media/fotos/schlafzimmer-3.jpg" },
        { title: "Begehbarer Schrank", url: "media/fotos/schrank.jpg" },
        { title: "Schrankraum", url: "media/fotos/schrankraum.jpg" },
      ],
    },
    {
      label: "Vorzimmer & Eingang",
      items: [
        { title: "Vorzimmer", url: "media/fotos/vorzimmer-1.jpg" },
        { title: "Vorzimmer", url: "media/fotos/vorzimmer-2.jpg" },
        { title: "Vorzimmer", url: "media/fotos/vorzimmer-3.jpg" },
        { title: "Eingang", url: "media/fotos/eingang.jpg" },
        { title: "Eingangstüre", url: "media/fotos/eingangstuere.jpg" },
      ],
    },
    {
      label: "Garage & Nebenräume",
      items: [
        { title: "Garage", url: "media/fotos/garage.jpg" },
        { title: "Durchgang Garage-Haus", url: "media/fotos/garage-durchgang.jpg" },
        { title: "Tür zur Garage", url: "media/fotos/tuer-garage.jpg" },
        { title: "Abstellraum", url: "media/fotos/abstellraum.jpg" },
        { title: "Luftwärmepumpe", url: "media/fotos/waermepumpe.jpg" },
      ],
    },
  ],

  // --- Medien ---
  // Alle Fotos/Videos sind zu groß für Git und werden extern gehostet
  // (z.B. Imgur/eigener Cloud-Speicher für Fotos, YouTube "nicht gelistet"
  // für das Video). Hier einfach die jeweilige Direkt-URL eintragen.
  media: {
    gallery: [
      { key: "front", url: "https://i.imgur.com/FUThtA6.jpg", alt: "Hausansicht von vorne", caption: "Von vorne" },
      { key: "back-garden-1", url: "https://i.imgur.com/xnoib14.jpg", alt: "Hausansicht von hinten mit Garten", caption: "Von hinten & Garten" },
      { key: "back-garden-2", url: "https://i.imgur.com/f2iN69D.jpg", alt: "Hausansicht von hinten mit Garten", caption: "Von hinten & Garten" },
      { key: "back-garden-angled", url: "https://i.imgur.com/XtvPttR.jpg", alt: "Hausansicht von hinten mit Garten, seitlich", caption: "Von hinten & Garten (seitlich)" },
      { key: "aerial", url: "https://i.imgur.com/eY46J4d.jpg", alt: "Luftaufnahme des Hauses von oben", caption: "Von oben" },
    ],

    // 360°-Foto (Equirectangular, Seitenverhältnis 2:1) – Direkt-Link zur Bilddatei.
    panoramaUrl: "https://i.imgur.com/aErbpT4.jpg",

    // Drohnen-Rundflug-Video (POI-Umkreisung ums Haus) – Embed-Link eintragen.
    // Beispiel YouTube: "https://www.youtube.com/embed/VIDEO_ID"
    // Beispiel Vimeo:   "https://player.vimeo.com/video/VIDEO_ID"
    droneVideoUrl: "https://www.youtube.com/embed/Llq3prdaClg",

    // Vorschaubild fürs Video, bevor draufgeklickt wird (z.B. die aerial-URL
    // oben nochmal, oder ein eigenes Standbild aus dem Video).
    droneVideoPosterUrl: "",
  },
};
