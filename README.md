# Haus Pfaffstätten – Verkaufs-Webseite

Statische Einseiten-Webseite (reines HTML/CSS/JS, kein Build-Schritt nötig) zum Verkauf des Hauses in Pfaffstätten.

## Struktur

- `index.html` – Seitenaufbau
- `css/styles.css` – Design
- `js/config.js` – **alle Inhalte** (Preis, Adresse, Eckdaten, Geschichte, Kontakt, Medien-Pfade) – hier anpassen
- `js/main.js` – Logik (Galerie, Video, 360°-Viewer)
- `media/` – Fotos (siehe `media/README.md` für erwartete Dateinamen)

## Lokal ansehen

Da es keine Build-Schritte gibt, reicht ein einfacher lokaler Server, z.B.:

```bash
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000` öffnen.

## Inhalte anpassen

Alles Inhaltliche (Preis, Eckdaten, Geschichte/Renovierungen, Kontaktdaten, Video-Link) wird zentral in `js/config.js` gepflegt. Fotos einfach mit den in `media/README.md` genannten Dateinamen in `media/` ablegen.
