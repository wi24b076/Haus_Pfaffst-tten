# Medien: extern gehostet

Die Fotos und das Video sind zu groß für Git und werden **nicht** in diesem Repo abgelegt. Stattdessen extern hochladen (z.B. Foto-Hosting/eigener Cloud-Speicher für Bilder, YouTube "nicht gelistet" oder Vimeo für das Video) und die Direkt-Links in [`js/config.js`](../js/config.js) eintragen.

## Zuordnung deiner Dateien → config.js

| Deine Datei | Ziel in `js/config.js` |
|---|---|
| `FrontView` | `media.gallery[0].url` (key: `front`) |
| `BackViewWithGarden` | `media.gallery[1].url` (key: `back-garden-1`) |
| `BackViewWithGarden2` | `media.gallery[2].url` (key: `back-garden-2`) |
| `BackViewWithGardenAngled` | `media.gallery[3].url` (key: `back-garden-angled`) |
| `TopDownView` | `media.gallery[4].url` (key: `aerial`) |
| `360Degree` | `media.panoramaUrl` (equirectangular, Seitenverhältnis 2:1) |
| `POIFly` (Drohnen-Rundflug-Video) | `media.droneVideoUrl` – als **Embed-Link**, z.B.: `https://www.youtube.com/embed/VIDEO_ID` oder `https://player.vimeo.com/video/VIDEO_ID` |

Optional: `media.droneVideoPosterUrl` für ein eigenes Vorschaubild vor dem Video – sonst wird automatisch die `aerial`-URL (TopDownView) verwendet.

Solange ein Feld leer ist, zeigt die Seite an der jeweiligen Stelle automatisch einen Platzhalter ("folgt in Kürze") statt eines kaputten Links.
