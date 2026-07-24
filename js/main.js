(function () {
  "use strict";

  const c = CONTENT;

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

  // History
  document.getElementById("history-text").textContent = c.history.trim();

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

  // --- Galerie: Kacheln aus config.js rendern ---
  const galleryEl = document.getElementById("gallery");
  const galleryItems = c.media.gallery.filter((item) => item.url);
  if (galleryItems.length) {
    galleryItems.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item";
      figure.dataset.full = item.url;
      const img = document.createElement("img");
      img.src = item.url;
      img.alt = item.alt;
      img.loading = "lazy";
      withFallback(img);
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = item.caption;
      figure.append(img, figcaption);
      galleryEl.appendChild(figure);
    });
  } else {
    galleryEl.innerHTML = `<p class="contact-placeholder">Fotos folgen in Kürze.</p>`;
  }

  // --- Galerie Lightbox ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  galleryEl.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImage.src = item.dataset.full;
      lightboxImage.alt = item.querySelector("img").alt;
      lightbox.classList.remove("hidden");
    });
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
      title: "360°-Rundumblick",
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
