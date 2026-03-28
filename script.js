const body = document.body;
const allowedThemes = ["core-field", "lime-signal", "lavender-night"];
const allowedModes = ["light", "dark"];
const themeLogos = document.querySelectorAll(".theme-logo");
const currentYearNodes = document.querySelectorAll("[data-current-year]");

const syncThemeLogos = () => {
  if (!body) {
    return;
  }

  const theme = body.dataset.theme || "core-field";
  const mode = body.dataset.mode || "light";

  themeLogos.forEach((logo) => {
    const key = `logo${theme
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")}${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
    const nextSrc = logo.dataset[key];

    if (nextSrc) {
      logo.src = nextSrc;
    }
  });
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

  prefersDarkMode.addEventListener("change", (event) => {
    if (!window.localStorage.getItem("yard-mode")) {
      body.dataset.mode = event.matches ? "dark" : "light";
      syncThemeLogos();
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
