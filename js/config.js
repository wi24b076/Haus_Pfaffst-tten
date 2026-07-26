// ============================================================
// Zentrale Inhalte der Verkaufs-Webseite "Haus Pfaffstätten"
// Alles, was sich noch ändern soll (Preis, Kontakt, Geschichte,
// Video-Link, Fotos), wird HIER angepasst — nicht in index.html.
// ============================================================

const CONTENT = {
  // --- Kopfzeile / Hero ---
  title: "Ein Wohlfühl-Bungalow in Pfaffstätten",
  subtitle: "Einziehen und wohlfühlen!",
  location: "Pfaffstätten, Niederösterreich",
  // TODO: genaue Adresse eintragen, sobald gewünscht (z.B. für Karte)
  address: "",
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

  // --- Kontakt ---
  // TODO: gewünschte Kontaktdaten eintragen.
  contact: {
    name: "",
    email: "",
    phone: "",
  },

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
