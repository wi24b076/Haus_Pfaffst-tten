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
  // Bilder einfach mit exakt diesem Dateinamen in den Ordner "media/" legen.
  media: {
    front: "media/front.jpg", // Bild von vorne
    back: "media/back-garden.jpg", // Bild von hinten + Garten
    aerial: "media/aerial.jpg", // Bild von oben
    panorama: "media/panorama-360.jpg", // 360°-Foto (Equirectangular, Verhältnis 2:1)

    // Drohnen-Rundflug-Video: da zu groß für Git, bitte extern hosten
    // (z.B. YouTube "nicht gelistet" oder Vimeo) und hier den Embed-Link eintragen.
    // Beispiel YouTube: "https://www.youtube.com/embed/VIDEO_ID"
    // Beispiel Vimeo:   "https://player.vimeo.com/video/VIDEO_ID"
    droneVideoUrl: "",
  },
};
