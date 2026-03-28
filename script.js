const body = document.body;
const allowedThemes = ["core-field", "lime-signal", "lavender-night"];
const allowedModes = ["light", "dark"];
const themeLogos = document.querySelectorAll(".theme-logo");
const headerThemeLogos = document.querySelectorAll(".logo-slot-header-mark .theme-logo");
const heroThemeLogos = document.querySelectorAll(".logo-slot-hero .theme-logo");
const currentYearNodes = document.querySelectorAll("[data-current-year]");
const headerLogoStorageKey = "yard-header-logo-variant";
const heroLogoStorageKey = "yard-hero-logo-variant";
const modeStorageKey = "yard-mode";

const getThemeLogoKey = (theme, mode) =>
  `logo${theme
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}${mode.charAt(0).toUpperCase() + mode.slice(1)}`;

const syncThemeLogos = () => {
  if (!body) {
    return;
  }

  const theme = body.dataset.theme || "core-field";
  const mode = body.dataset.mode || "light";
  const key = getThemeLogoKey(theme, mode);

  themeLogos.forEach((logo) => {
    const nextSrc = logo.dataset[key];

    if (nextSrc) {
      logo.src = nextSrc;
    }
  });
};

const syncHeaderLogoVariant = () => {
  if (!body || headerThemeLogos.length === 0) {
    return;
  }

  const theme = body.dataset.theme || "core-field";
  const mode = body.dataset.mode || "light";
  const key = getThemeLogoKey(theme, mode);
  const selectedVariant = window.localStorage.getItem(headerLogoStorageKey) || "match";

  headerThemeLogos.forEach((logo) => {
    if (selectedVariant === "match") {
      const nextSrc = logo.dataset[key];

      if (nextSrc) {
        logo.src = nextSrc;
      }

      return;
    }

    logo.src = `assets/Header Logos/LOGO-${selectedVariant}_header.png`;
  });
};

const buildHeaderLogoSelector = () => {
  if (!body || headerThemeLogos.length === 0) {
    return;
  }

  const selectorShell = document.createElement("aside");
  selectorShell.className = "header-logo-selector";
  selectorShell.setAttribute("aria-label", "Header logo selector");

  const selectorLabel = document.createElement("label");
  selectorLabel.className = "header-logo-selector-label";
  selectorLabel.setAttribute("for", "header-logo-variant");
  selectorLabel.textContent = "Header logo";

  const selectorInput = document.createElement("select");
  selectorInput.className = "header-logo-selector-input";
  selectorInput.id = "header-logo-variant";

  const options = [
    { value: "match", label: "Match page logo" },
    ...Array.from({ length: 11 }, (_, index) => ({
      value: String(index + 1),
      label: `Logo ${index + 1}`,
    })),
  ];

  options.forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    selectorInput.append(option);
  });

  selectorInput.value = window.localStorage.getItem(headerLogoStorageKey) || "match";

  selectorInput.addEventListener("change", (event) => {
    const nextValue = event.target.value;
    window.localStorage.setItem(headerLogoStorageKey, nextValue);
    syncHeaderLogoVariant();
  });

  selectorShell.append(selectorLabel, selectorInput);
  body.append(selectorShell);
};

const syncHeroLogoVariant = () => {
  if (!body || heroThemeLogos.length === 0) {
    return;
  }

  const theme = body.dataset.theme || "core-field";
  const mode = body.dataset.mode || "light";
  const key = getThemeLogoKey(theme, mode);
  const selectedVariant = window.localStorage.getItem(heroLogoStorageKey) || "match";

  heroThemeLogos.forEach((logo) => {
    if (selectedVariant === "match") {
      const nextSrc = logo.dataset[key];

      if (nextSrc) {
        logo.src = nextSrc;
      }

      return;
    }

    logo.src = `assets/Logos/LOGO-${selectedVariant}_${mode}.png`;
  });
};

const buildHeroLogoSelector = () => {
  if (!body || heroThemeLogos.length === 0) {
    return;
  }

  const selectorShell = document.createElement("aside");
  selectorShell.className = "home-logo-selector";
  selectorShell.setAttribute("aria-label", "Home page logo selector");

  const selectorLabel = document.createElement("label");
  selectorLabel.className = "home-logo-selector-label";
  selectorLabel.setAttribute("for", "home-logo-variant");
  selectorLabel.textContent = "Home logo";

  const selectorInput = document.createElement("select");
  selectorInput.className = "home-logo-selector-input";
  selectorInput.id = "home-logo-variant";

  const options = [
    { value: "match", label: "Match theme default" },
    ...Array.from({ length: 11 }, (_, index) => ({
      value: String(index + 1),
      label: `Logo ${index + 1}`,
    })),
  ];

  options.forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    selectorInput.append(option);
  });

  selectorInput.value = window.localStorage.getItem(heroLogoStorageKey) || "match";

  selectorInput.addEventListener("change", (event) => {
    const nextValue = event.target.value;
    window.localStorage.setItem(heroLogoStorageKey, nextValue);
    syncHeroLogoVariant();
  });

  selectorShell.append(selectorLabel, selectorInput);
  body.append(selectorShell);
};

const applyMode = (nextMode, persist = true) => {
  if (!body || !allowedModes.includes(nextMode)) {
    return;
  }

  body.dataset.mode = nextMode;
  syncThemeLogos();
  syncHeaderLogoVariant();
  syncHeroLogoVariant();

  if (persist) {
    window.localStorage.setItem(modeStorageKey, nextMode);
  }
};

const buildModeToggle = () => {
  if (!body) {
    return;
  }

  const modeToggle = document.createElement("button");
  modeToggle.type = "button";
  modeToggle.setAttribute("aria-live", "polite");

  Object.assign(modeToggle.style, {
    position: "fixed",
    right: "0.8rem",
    bottom: "3.2rem",
    zIndex: "30",
    minHeight: "1.75rem",
    minWidth: "6.75rem",
    padding: "0.3rem 0.45rem",
    border: "1px solid color-mix(in srgb, var(--color-line) 80%, transparent)",
    borderRadius: "0.5rem",
    background: "color-mix(in srgb, var(--color-panel) 88%, transparent)",
    boxShadow: "var(--shadow-soft)",
    backdropFilter: "blur(14px)",
    fontFamily: '"Barlow Condensed", Impact, sans-serif',
    fontSize: "0.72rem",
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--color-field-depth)",
    cursor: "pointer",
  });

  const syncModeButton = () => {
    const mode = body.dataset.mode || "light";
    const nextLabel = mode === "dark" ? "Dark mode" : "Light mode";
    modeToggle.textContent = nextLabel;
    modeToggle.setAttribute("aria-label", `Switch to ${mode === "dark" ? "light" : "dark"} mode`);
  };

  modeToggle.addEventListener("click", () => {
    const currentMode = body.dataset.mode || "light";
    const nextMode = currentMode === "dark" ? "light" : "dark";
    applyMode(nextMode);
    syncModeButton();
  });

  syncModeButton();
  body.append(modeToggle);
};

if (body) {
  const savedTheme = window.localStorage.getItem("yard-theme");
  const savedMode = window.localStorage.getItem(modeStorageKey);
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  if (allowedThemes.includes(savedTheme)) {
    body.dataset.theme = savedTheme;
  }

  if (allowedModes.includes(savedMode)) {
    body.dataset.mode = savedMode;
  } else {
    body.dataset.mode = prefersDarkMode.matches ? "dark" : "light";
  }

  syncThemeLogos();
  buildHeaderLogoSelector();
  syncHeaderLogoVariant();
  buildHeroLogoSelector();
  syncHeroLogoVariant();
  buildModeToggle();

  prefersDarkMode.addEventListener("change", (event) => {
    if (!window.localStorage.getItem(modeStorageKey)) {
      applyMode(event.matches ? "dark" : "light", false);
    }
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

currentYearNodes.forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
