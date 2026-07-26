(function () {
  "use strict";

  const c = CONTENT;

  // --- Besucherzähler (GoatCounter, datenschutzfreundlich, kein Cookie-Banner
  // nötig) - nur einbinden, wenn ein Site-Code hinterlegt ist. ---
  if (c.analytics && c.analytics.goatcounterCode) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//gc.zgo.at/count.js";
    script.dataset.goatcounter = `https://${c.analytics.goatcounterCode}.goatcounter.com/count`;
    document.head.appendChild(script);
  }

  // --- Bild-Fallback: fehlt noch eine URL oder ist sie nicht erreichbar,
  // zeigen wir einen Platzhalter statt eines kaputten Bild-Icons. Sobald
  // die echte URL in js/config.js eingetragen ist, erscheint sie automatisch. ---
  function withFallback(img) {
    img.addEventListener(
      "error",
      function () {
        img.closest("figure, .hero")?.classList.add("img-missing");
        img.style.background = "#e9e5da";
        img.alt = img.alt + " (Bild folgt in Kürze)";
      },
      { once: true }
    );
  }

  // --- Mobile Burger-Menü ---
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // --- Texte / Inhalte aus config.js einsetzen ---
  document.getElementById("hero-title").textContent = c.title;
  document.getElementById("hero-subtitle").textContent = c.subtitle;
  document.getElementById("hero-location").textContent = "📍 " + c.location;
  document.title = c.title + " – zu verkaufen";

  const priceEl = document.getElementById("price");
  priceEl.textContent = c.price;

  // Hero-Bild = erstes Galerie-Foto (i.d.R. die Frontansicht)
  const heroImage = document.getElementById("hero-image");
  const heroSource = c.media.gallery.find((item) => item.url);
  if (heroSource) {
    heroImage.src = heroSource.url;
    heroImage.alt = heroSource.alt;
    withFallback(heroImage);
  } else {
    heroImage.closest(".hero").classList.add("img-missing");
    heroImage.style.background = "#8a9186";
  }

  // Highlights
  const highlightsList = document.getElementById("highlights-list");
  c.highlights.forEach((h) => {
    const div = document.createElement("div");
    div.className = "highlight-item";
    div.innerHTML = `<span class="icon">${h.icon}</span><span>${h.text}</span>`;
    highlightsList.appendChild(div);
  });

  // Facts
  const factLabels = {
    wohnflaeche: "Wohnfläche",
    grundstueck: "Grundstück",
    zimmer: "Zimmer",
    schlafzimmer: "Schlafzimmer",
    baeder: "Bäder",
    baujahr: "Baujahr",
    renovierungsjahr: "Renoviert",
  };
  const factsList = document.getElementById("facts-list");
  let anyFact = false;
  Object.entries(c.facts).forEach(([key, value]) => {
    if (!value) return;
    anyFact = true;
    const div = document.createElement("div");
    div.className = "fact";
    div.innerHTML = `<span class="label">${factLabels[key] || key}</span><span class="value">${value}</span>`;
    factsList.appendChild(div);
  });
  if (!anyFact) {
    factsList.innerHTML = `<p class="contact-placeholder">Eckdaten (Wohnfläche, Zimmer, Baujahr …) folgen in Kürze.</p>`;
  }

  // Ausstattung
  const ausstattungList = document.getElementById("ausstattung-list");
  if (c.ausstattung && c.ausstattung.length) {
    c.ausstattung.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ausstattungList.appendChild(li);
    });
  } else {
    ausstattungList.outerHTML = `<p class="contact-placeholder">Ausstattungsdetails folgen in Kürze.</p>`;
  }

  // Energieausweis
  const energyBlock = document.getElementById("energy-block");
  if (c.energyCertificate && c.energyCertificate.classes && c.energyCertificate.classes.length) {
    const title = document.createElement("div");
    title.className = "energy-block-title";
    title.textContent = "Energieausweis";
    const badges = document.createElement("div");
    badges.className = "energy-badges";
    c.energyCertificate.classes.forEach((entry) => {
      const badge = document.createElement("div");
      badge.className = "energy-badge";
      badge.dataset.class = entry.value;
      badge.innerHTML = `<span class="chip">${entry.value}</span><span class="name">${entry.label}</span>`;
      badges.appendChild(badge);
    });
    energyBlock.append(title, badges);
    if (c.energyCertificate.url) {
      const link = document.createElement("a");
      link.className = "energy-link";
      link.href = c.energyCertificate.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Vollständigen Energieausweis öffnen (PDF) ↗";
      energyBlock.appendChild(link);
    }
  } else {
    energyBlock.remove();
  }

  // Geschichte & Renovierungen
  const historyIntro = document.getElementById("history-intro");
  const historyList = document.getElementById("history-list");
  const historyNote = document.getElementById("history-note");
  if (c.history && c.history.items && c.history.items.length) {
    historyIntro.textContent = c.history.intro || "";
    c.history.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
    historyNote.textContent = c.history.note || "";
  } else {
    historyIntro.outerHTML = `<p class="contact-placeholder">Geschichte &amp; Renovierungen folgen in Kürze.</p>`;
    historyList.remove();
    historyNote.remove();
  }

  // Pläne
  const plaeneList = document.getElementById("plaene-list");
  if (c.plaene && c.plaene.length) {
    c.plaene.forEach((plan) => {
      const a = document.createElement("a");
      a.className = "plan-card";
      a.href = plan.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<span class="plan-icon">PDF öffnen ↗</span><span class="plan-title">${plan.title}</span>`;
      plaeneList.appendChild(a);
    });
  } else {
    plaeneList.innerHTML = `<p class="contact-placeholder">Pläne folgen in Kürze.</p>`;
  }

  // Contact
  const contactInfo = document.getElementById("contact-info");
  const rows = [];
  if (c.contact.name) rows.push(`<div>${c.contact.name}</div>`);
  if (c.contact.phone) rows.push(`<div><a href="tel:${c.contact.phone.replace(/\s+/g, "")}">${c.contact.phone}</a></div>`);
  if (c.contact.email) rows.push(`<div><a href="mailto:${c.contact.email}">${c.contact.email}</a></div>`);
  contactInfo.innerHTML = rows.length
    ? rows.join("")
    : `<p class="contact-placeholder">Kontaktdaten folgen in Kürze.</p>`;

  document.getElementById("year").textContent = new Date().getFullYear();

  // --- Galerie-Kachel erzeugen (wiederverwendet für Hero-Galerie & Innenräume) ---
  // Keine sichtbare Bildunterschrift mehr - die Kategorie-Überschrift reicht,
  // "alt" bleibt für Screenreader/Lightbox erhalten.
  function createGalleryItem(url, alt) {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    figure.dataset.full = url;
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    img.loading = "lazy";
    withFallback(img);
    figure.appendChild(img);
    return figure;
  }

  // --- Hero-Galerie: Kacheln aus config.js rendern ---
  const galleryEl = document.getElementById("gallery");
  const galleryItems = c.media.gallery.filter((item) => item.url);
  if (galleryItems.length) {
    galleryItems.forEach((item) => {
      galleryEl.appendChild(createGalleryItem(item.url, item.alt));
    });
  } else {
    galleryEl.innerHTML = `<p class="contact-placeholder">Fotos folgen in Kürze.</p>`;
  }

  // --- Innenräume: nach Kategorie gruppierte Galerien ---
  const innenraeumeEl = document.getElementById("innenraeume-list");
  if (c.innenraeume && c.innenraeume.length) {
    c.innenraeume.forEach((group) => {
      const items = group.items.filter((item) => item.url);
      if (!items.length) return;
      const wrapper = document.createElement("div");
      wrapper.className = "room-group";
      const h3 = document.createElement("h3");
      h3.textContent = group.label;
      const grid = document.createElement("div");
      grid.className = "room-grid gallery";
      items.forEach((item) => {
        grid.appendChild(createGalleryItem(item.url, item.title));
      });
      wrapper.append(h3, grid);
      innenraeumeEl.appendChild(wrapper);
    });
    if (!innenraeumeEl.children.length) {
      innenraeumeEl.innerHTML = `<p class="contact-placeholder">Weitere Fotos folgen in Kürze.</p>`;
    }
  } else {
    innenraeumeEl.innerHTML = `<p class="contact-placeholder">Weitere Fotos folgen in Kürze.</p>`;
  }

  // --- Galerie Lightbox mit Vor/Zurück (gilt für Hero-Galerie & Innenräume,
  // eine durchgehende Reihenfolge in Dokumentenreihenfolge) ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const allGalleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  let lightboxIndex = -1;

  function openLightboxAt(index) {
    if (!allGalleryItems.length) return;
    lightboxIndex = (index + allGalleryItems.length) % allGalleryItems.length;
    const item = allGalleryItems[lightboxIndex];
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.remove("hidden");
  }

  allGalleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightboxAt(index));
  });
  document.getElementById("lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    openLightboxAt(lightboxIndex - 1);
  });
  document.getElementById("lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    openLightboxAt(lightboxIndex + 1);
  });
  document.getElementById("lightbox-close").addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.add("hidden");
      document.getElementById("panorama-modal").classList.add("hidden");
    }
    if (!lightbox.classList.contains("hidden")) {
      if (e.key === "ArrowRight") openLightboxAt(lightboxIndex + 1);
      if (e.key === "ArrowLeft") openLightboxAt(lightboxIndex - 1);
    }
  });

  // --- Drohnen-Video: Klick-zum-Laden-Facade (schneller Seitenaufbau,
  // kein YouTube-Tracking beim reinen Seitenaufruf) ---
  const videoContainer = document.getElementById("video-container");
  function embedUrlToIframe(url) {
    const iframe = document.createElement("iframe");
    iframe.src = url + (url.includes("?") ? "&" : "?") + "autoplay=1";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = "Drohnen-Rundflug ums Haus";
    return iframe;
  }

  if (c.media.droneVideoUrl) {
    const posterUrl =
      c.media.droneVideoPosterUrl || (c.media.gallery.find((i) => i.key === "aerial") || {}).url;
    const facade = document.createElement("button");
    facade.type = "button";
    facade.className = "video-facade";
    if (posterUrl) facade.style.backgroundImage = `url('${posterUrl}')`;
    facade.setAttribute("aria-label", "Video abspielen: Drohnen-Rundflug");
    facade.innerHTML = `<span class="play-btn">▶</span>`;
    facade.addEventListener(
      "click",
      () => {
        videoContainer.innerHTML = "";
        videoContainer.appendChild(embedUrlToIframe(c.media.droneVideoUrl));
      },
      { once: true }
    );
    videoContainer.appendChild(facade);
  } else {
    videoContainer.innerHTML = `<div class="video-placeholder">🎬 Der Drohnen-Rundflug wird in Kürze ergänzt.<br />(Video-Link in <code>js/config.js</code> unter <code>media.droneVideoUrl</code> eintragen.)</div>`;
  }

  // --- 360°-Panorama (Pannellum) ---
  function initPanorama(containerId, autoLoad) {
    return window.pannellum.viewer(containerId, {
      type: "equirectangular",
      panorama: c.media.panoramaUrl,
      autoLoad: autoLoad,
      compass: false,
      showZoomCtrl: true,
      title: "360°-Ausblick",
    });
  }

  const panoramaEl = document.getElementById("panorama");
  const panoramaFullscreenBtn = document.getElementById("panorama-fullscreen");
  const panoramaHint = document.getElementById("panorama-hint");

  function panoramaUnavailable(message) {
    panoramaEl.innerHTML = `<div class="video-placeholder">${message}</div>`;
    panoramaFullscreenBtn.style.display = "none";
  }

  function showSwipeHint() {
    panoramaHint.classList.remove("hidden");
    const hide = () => panoramaHint.classList.add("hidden");
    panoramaEl.addEventListener("mousedown", hide, { once: true });
    panoramaEl.addEventListener("touchstart", hide, { once: true, passive: true });
    setTimeout(hide, 4000);
  }

  if (!c.media.panoramaUrl) {
    panoramaUnavailable("🌐 Das 360°-Foto wird in Kürze ergänzt.<br />(URL in <code>js/config.js</code> unter <code>media.panoramaUrl</code> eintragen.)");
  } else {
    const img = new Image();
    img.onload = () => {
      if (window.pannellum) {
        initPanorama("panorama", true);
        showSwipeHint();
      } else {
        panoramaUnavailable("⚠️ Der 360°-Viewer konnte nicht geladen werden (Internetverbindung/Blocker prüfen).");
      }
    };
    img.onerror = () => {
      panoramaUnavailable("⚠️ Das 360°-Foto konnte nicht geladen werden (Link in <code>js/config.js</code> prüfen).");
    };
    img.src = c.media.panoramaUrl;
  }

  document.getElementById("panorama-fullscreen").addEventListener("click", () => {
    const modal = document.getElementById("panorama-modal");
    modal.classList.remove("hidden");
    if (!modal.dataset.loaded) {
      initPanorama("panorama-fullscreen-view", true);
      modal.dataset.loaded = "true";
    }
  });
  document.getElementById("panorama-modal-close").addEventListener("click", () => {
    document.getElementById("panorama-modal").classList.add("hidden");
  });
})();
