# Medien-Ordner

Lege die Fotos hier **exakt mit diesen Dateinamen** ab – die Webseite bindet sie automatisch ein, es muss kein Code geändert werden:

| Datei | Inhalt |
|---|---|
| `front.jpg` | Hausansicht von vorne |
| `back-garden.jpg` | Hausansicht von hinten inkl. Garten |
| `aerial.jpg` | Ansicht von oben (Drohne) |
| `panorama-360.jpg` | 360°-Foto, **equirectangular**, Seitenverhältnis 2:1 (z.B. 6000×3000 px) |

## Drohnen-Rundflug-Video

Das Video ist zu groß für Git und wird **nicht** hier abgelegt. Stattdessen extern hochladen (z.B. YouTube als "nicht gelistet", oder Vimeo) und den Embed-Link in `js/config.js` unter `media.droneVideoUrl` eintragen, z.B.:

```js
droneVideoUrl: "https://www.youtube.com/embed/VIDEO_ID",
```

Bis dahin zeigt die Seite automatisch einen Platzhalter im Rundflug-Bereich.
