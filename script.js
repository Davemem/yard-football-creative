const body = document.body;
const allowedThemes = ["core-field", "lime-signal", "lavender-night"];
const allowedModes = ["light", "dark"];
const themeLogos = document.querySelectorAll(".theme-logo");
const headerThemeLogos = document.querySelectorAll(".logo-slot-header-mark .theme-logo");
const currentYearNodes = document.querySelectorAll("[data-current-year]");
const headerLogoStorageKey = "yard-header-logo-variant";

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

if (body) {
  const savedTheme = window.localStorage.getItem("yard-theme");
  const savedMode = window.localStorage.getItem("yard-mode");
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

  prefersDarkMode.addEventListener("change", (event) => {
    if (!window.localStorage.getItem("yard-mode")) {
      body.dataset.mode = event.matches ? "dark" : "light";
      syncThemeLogos();
      syncHeaderLogoVariant();
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
