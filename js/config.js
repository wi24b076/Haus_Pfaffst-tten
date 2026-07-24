// ============================================================
// Zentrale Inhalte der Verkaufs-Webseite "Haus Pfaffstätten"
// Alles, was sich noch ändern soll (Preis, Kontakt, Geschichte,
// Video-Link, Fotos), wird HIER angepasst — nicht in index.html.
// ============================================================

const CONTENT = {
  // --- Kopfzeile / Hero ---
  title: "Haus in Pfaffstätten",
  subtitle: "Frisch renoviertes Einfamilienhaus mit Garten",
  location: "Pfaffstätten, Niederösterreich",
  // TODO: genaue Adresse eintragen, sobald gewünscht (z.B. für Karte)
  address: "",
  price: "Preis auf Anfrage", // TODO: Kaufpreis eintragen

  // --- Eckdaten (leer lassen = wird auf der Seite ausgeblendet) ---
  facts: {
    wohnflaeche: "", // z.B. "140 m²"
    grundstueck: "", // z.B. "600 m²"
    zimmer: "", // z.B. "5"
    schlafzimmer: "",
    baeder: "",
    baujahr: "",
    renovierungsjahr: "", // Jahr der Fassaden-/Wärmepumpen-Renovierung
  },

  // --- Highlights (Badges unter dem Hero) ---
  highlights: [
    { icon: "🏠", text: "Kürzlich frisch renoviert" },
    { icon: "🧱", text: "Neue Fassade" },
    { icon: "♨️", text: "Neue Wärmepumpe" },
    { icon: "🌳", text: "Eigener Garten" },
  ],

  // --- Geschichte & Renovierungen (Fließtext) ---
  // TODO: wird von dir noch geliefert – Platzhalter bis dahin.
  history: `Die Geschichte dieses Hauses sowie Details zu den durchgeführten
    Renovierungen (Fassade, Wärmepumpe u.a.) folgen in Kürze.`,

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
      { key: "front", url: "", alt: "Hausansicht von vorne", caption: "Von vorne" },
      { key: "back-garden-1", url: "", alt: "Hausansicht von hinten mit Garten", caption: "Von hinten & Garten" },
      { key: "back-garden-2", url: "", alt: "Hausansicht von hinten mit Garten", caption: "Von hinten & Garten" },
      { key: "back-garden-angled", url: "", alt: "Hausansicht von hinten mit Garten, seitlich", caption: "Von hinten & Garten (seitlich)" },
      { key: "aerial", url: "", alt: "Luftaufnahme des Hauses von oben", caption: "Von oben" },
    ],

    // 360°-Foto (Equirectangular, Seitenverhältnis 2:1) – Direkt-Link zur Bilddatei.
    panoramaUrl: "",

    // Drohnen-Rundflug-Video (POI-Umkreisung ums Haus) – Embed-Link eintragen.
    // Beispiel YouTube: "https://www.youtube.com/embed/VIDEO_ID"
    // Beispiel Vimeo:   "https://player.vimeo.com/video/VIDEO_ID"
    droneVideoUrl: "",

    // Vorschaubild fürs Video, bevor draufgeklickt wird (z.B. die aerial-URL
    // oben nochmal, oder ein eigenes Standbild aus dem Video).
    droneVideoPosterUrl: "",
  },
};
