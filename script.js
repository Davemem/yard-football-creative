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
let reviewToolsDock = null;
const logoVariantCount = 11;

const buildExplicitLogoOptions = () =>
  Array.from({ length: logoVariantCount }, (_, index) => {
    const variant = String(index + 1);

    return [
      {
        value: `${variant}-light`,
        label: `Icon ${variant} - Light mode`,
      },
      {
        value: `${variant}-dark`,
        label: `Icon ${variant} - Dark mode`,
      },
    ];
  }).flat();

const buildSingleModeLogoOptions = () =>
  Array.from({ length: logoVariantCount }, (_, index) => ({
    value: String(index + 1),
    label: `Icon ${index + 1}`,
  }));

const getThemeLogoKey = (theme, mode) =>
  `logo${theme
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}${mode.charAt(0).toUpperCase() + mode.slice(1)}`;

const getReviewToolsDock = () => {
  if (!body) {
    return null;
  }

  if (reviewToolsDock) {
    return reviewToolsDock;
  }

  reviewToolsDock = document.createElement("div");
  reviewToolsDock.className = "review-tools-dock";
  body.append(reviewToolsDock);
  return reviewToolsDock;
};

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

const parseLogoSelection = (value, fallbackMode) => {
  if (!value || value === "match") {
    return { variant: "match", mode: fallbackMode };
  }

  const [variant, explicitMode] = value.split("-");

  return {
    variant,
    mode: allowedModes.includes(explicitMode) ? explicitMode : fallbackMode,
  };
};

const getNormalizedLogoSelection = (storageKey, fallbackMode) => {
  const storedValue = window.localStorage.getItem(storageKey) || "match";
  const parsed = parseLogoSelection(storedValue, fallbackMode);

  return parsed.variant === "match" ? "match" : `${parsed.variant}-${parsed.mode}`;
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
  selectorShell.className = "header-logo-selector review-tool";
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
    ...buildSingleModeLogoOptions(),
  ];

  options.forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    selectorInput.append(option);
  });

  const storedHeaderValue = window.localStorage.getItem(headerLogoStorageKey) || "match";
  const normalizedHeaderValue =
    storedHeaderValue === "match" ? "match" : parseLogoSelection(storedHeaderValue, "light").variant;

  selectorInput.value = normalizedHeaderValue;

  selectorInput.addEventListener("change", (event) => {
    const nextValue = event.target.value;
    window.localStorage.setItem(headerLogoStorageKey, nextValue);
    syncHeaderLogoVariant();
  });

  selectorShell.append(selectorLabel, selectorInput);
  getReviewToolsDock()?.append(selectorShell);
};

const syncHeroLogoVariant = () => {
  if (!body || heroThemeLogos.length === 0) {
    return;
  }

  const theme = body.dataset.theme || "core-field";
  const mode = body.dataset.mode || "light";
  const key = getThemeLogoKey(theme, mode);
  const selectedVariant = window.localStorage.getItem(heroLogoStorageKey) || "match";
  const selectedLogo = parseLogoSelection(selectedVariant, mode);

  heroThemeLogos.forEach((logo) => {
    if (selectedLogo.variant === "match") {
      const nextSrc = logo.dataset[key];

      if (nextSrc) {
        logo.src = nextSrc;
      }

      return;
    }

    logo.src = `assets/Logos/LOGO-${selectedLogo.variant}_${selectedLogo.mode}.png`;
  });
};

const buildHeroLogoSelector = () => {
  if (!body || heroThemeLogos.length === 0) {
    return;
  }

  const selectorShell = document.createElement("aside");
  selectorShell.className = "home-logo-selector review-tool";
  selectorShell.setAttribute("aria-label", "Home page logo selector");

  const selectorLabel = document.createElement("label");
  selectorLabel.className = "home-logo-selector-label";
  selectorLabel.setAttribute("for", "home-logo-variant");
  selectorLabel.textContent = "Home logo";

  const selectorInput = document.createElement("select");
  selectorInput.className = "home-logo-selector-input";
  selectorInput.id = "home-logo-variant";
  const currentMode = body.dataset.mode || "light";

  const options = [
    { value: "match", label: "Match theme default" },
    ...buildExplicitLogoOptions(),
  ];

  options.forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    selectorInput.append(option);
  });

  selectorInput.value = getNormalizedLogoSelection(heroLogoStorageKey, currentMode);

  selectorInput.addEventListener("change", (event) => {
    const nextValue = event.target.value;
    window.localStorage.setItem(heroLogoStorageKey, nextValue);
    syncHeroLogoVariant();
  });

  selectorShell.append(selectorLabel, selectorInput);
  getReviewToolsDock()?.append(selectorShell);
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
  modeToggle.className = "mode-toggle review-tool-button";
  modeToggle.type = "button";
  modeToggle.setAttribute("aria-live", "polite");

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
  getReviewToolsDock()?.append(modeToggle);
};

const injectAboutEmphasisStyles = () => {
  if (!document.querySelector(".about-what")) {
    return;
  }

  const styleTag = document.createElement("style");
  styleTag.textContent = `
    .about-what-statements strong {
      display: inline-block;
      margin-right: 0.55rem;
      padding: 0.22rem 0.6rem 0.3rem;
      letter-spacing: 0.08em;
      color: var(--color-paper);
      background: var(--color-field-depth);
      border-radius: 999px;
      box-shadow: 0 0.45rem 1rem color-mix(in srgb, var(--color-shadow) 58%, transparent);
      transform-origin: center;
    }

    .about-what-statements p:first-child strong {
      transform: rotate(-5deg);
    }

    .about-what-statements p:last-child strong {
      transform: rotate(4deg);
    }

    .about-what-cta {
      display: inline-block;
      margin-left: auto;
      padding: 0.35rem 0.95rem 0.45rem;
      border-radius: 999px;
      background: color-mix(in srgb, var(--color-warm-whistle) 92%, transparent);
      box-shadow: 0 0.6rem 1.2rem color-mix(in srgb, var(--color-shadow) 45%, transparent);
      transform: rotate(-4deg);
      transform-origin: right center;
      font-family: "Barlow Condensed", Impact, sans-serif;
      font-size: clamp(1.05rem, 1.8vw, 1.4rem);
      line-height: 1;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--raw-ink);
    }

    @media (max-width: 48rem) {
      .about-what-statements strong {
        margin-right: 0.4rem;
        transform: none;
      }

      .about-what-cta {
        transform: rotate(-2deg);
      }
    }

    @media (max-width: 36rem) {
      .about-what-cta {
        margin-left: 0;
        text-align: center;
        transform: none;
      }
    }
  `;

  document.head.append(styleTag);
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
  injectAboutEmphasisStyles();

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
