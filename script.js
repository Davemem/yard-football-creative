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
const headerLogoVariantProbeLimit = 24;
const heroLogoVariantProbeLimit = 24;

const buildExplicitLogoOptions = (variants) =>
  variants
    .map((variant) => [
      {
        value: `${variant}-light`,
        label: `Icon ${variant} - Light mode`,
      },
      {
        value: `${variant}-dark`,
        label: `Icon ${variant} - Dark mode`,
      },
    ])
    .flat();

const buildSingleModeLogoOptions = (variants) =>
  variants.map((variant) => ({
    value: String(variant),
    label: `Icon ${variant}`,
  }));

const canLoadImage = (src) =>
  new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => resolve(true);
    probe.onerror = () => resolve(false);
    probe.src = src;
  });

const discoverHeroLogoVariants = async () => {
  const checks = await Promise.all(
    Array.from({ length: heroLogoVariantProbeLimit }, async (_, index) => {
      const variant = String(index + 1);
      const [hasLight, hasDark] = await Promise.all([
        canLoadImage(`assets/Logos/LOGO-${variant}_light.png`),
        canLoadImage(`assets/Logos/LOGO-${variant}_dark.png`),
      ]);

      return hasLight && hasDark ? variant : null;
    })
  );

  return checks.filter(Boolean);
};

const discoverHeaderLogoVariants = async () => {
  const checks = await Promise.all(
    Array.from({ length: headerLogoVariantProbeLimit }, async (_, index) => {
      const variant = String(index + 1);
      const hasHeader = await canLoadImage(`assets/Header Logos/LOGO-${variant}_header.png`);
      return hasHeader ? variant : null;
    })
  );

  return checks.filter(Boolean);
};

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

const analyzeLogoAsset = (logo) => {
  if (!logo?.naturalWidth || !logo?.naturalHeight) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return null;
  }

  const maxDimension = 512;
  const widthScale = Math.min(1, maxDimension / logo.naturalWidth);
  const heightScale = Math.min(1, maxDimension / logo.naturalHeight);
  const sampleScale = Math.min(widthScale, heightScale);
  const sampleWidth = Math.max(1, Math.round(logo.naturalWidth * sampleScale));
  const sampleHeight = Math.max(1, Math.round(logo.naturalHeight * sampleScale));

  canvas.width = sampleWidth;
  canvas.height = sampleHeight;
  context.drawImage(logo, 0, 0, sampleWidth, sampleHeight);

  const { data } = context.getImageData(0, 0, sampleWidth, sampleHeight);
  const alphaThreshold = 24;
  let top = sampleHeight;
  let left = sampleWidth;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < sampleHeight; y += 1) {
    for (let x = 0; x < sampleWidth; x += 1) {
      const alpha = data[(y * sampleWidth + x) * 4 + 3];

      if (alpha > alphaThreshold) {
        top = Math.min(top, y);
        left = Math.min(left, x);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }

  if (right === -1 || bottom === -1) {
    return null;
  }

  const sampleAlpha = (x, y) => data[(y * sampleWidth + x) * 4 + 3];
  const cornerCoords = [
    [0, 0],
    [sampleWidth - 1, 0],
    [0, sampleHeight - 1],
    [sampleWidth - 1, sampleHeight - 1],
  ];
  const cornersOpaque = cornerCoords.every(([x, y]) => sampleAlpha(x, y) > 180);
  const fullAspect = sampleWidth / sampleHeight;
  const squareish = fullAspect > 0.85 && fullAspect < 1.15;
  const shape = cornersOpaque && squareish ? "bounded" : "freeform";

  const visibleWidthRatio = (right - left + 1) / sampleWidth;
  const visibleHeightRatio = (bottom - top + 1) / sampleHeight;
  const trimLeft = (left / sampleWidth) * 100;
  const trimRight = ((sampleWidth - right - 1) / sampleWidth) * 100;
  const trimTop = (top / sampleHeight) * 100;
  const trimBottom = ((sampleHeight - bottom - 1) / sampleHeight) * 100;
  const scaleBoost =
    shape === "freeform"
      ? Math.min(1.55, Math.max(1 / visibleWidthRatio, 1 / visibleHeightRatio))
      : 1;

  return {
    shape,
    trimLeft,
    trimRight,
    trimTop,
    trimBottom,
    scaleBoost,
  };
};

const syncHeroLogoPresentation = () => {
  heroThemeLogos.forEach((logo) => {
    const slot = logo.closest(".logo-slot-hero");

    if (!slot) {
      return;
    }

    const applyPresentation = () => {
      const analysis = analyzeLogoAsset(logo);

      if (!analysis) {
        slot.dataset.logoShape = "freeform";
        logo.style.removeProperty("--logo-trim-left");
        logo.style.removeProperty("--logo-trim-right");
        logo.style.removeProperty("--logo-trim-top");
        logo.style.removeProperty("--logo-trim-bottom");
        logo.style.removeProperty("--logo-scale-boost");
        return;
      }

      slot.dataset.logoShape = analysis.shape;
      logo.style.setProperty("--logo-trim-left", `${analysis.trimLeft.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-right", `${analysis.trimRight.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-top", `${analysis.trimTop.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-bottom", `${analysis.trimBottom.toFixed(2)}%`);
      logo.style.setProperty("--logo-scale-boost", analysis.scaleBoost.toFixed(3));
    };

    if (logo.complete) {
      applyPresentation();
      return;
    }

    logo.addEventListener("load", applyPresentation, { once: true });
  });
};

const syncHeaderLogoPresentation = () => {
  headerThemeLogos.forEach((logo) => {
    const applyPresentation = () => {
      const analysis = analyzeLogoAsset(logo);

      if (!analysis) {
        logo.style.removeProperty("--logo-trim-left");
        logo.style.removeProperty("--logo-trim-right");
        logo.style.removeProperty("--logo-trim-top");
        logo.style.removeProperty("--logo-trim-bottom");
        logo.style.removeProperty("--logo-scale-boost");
        return;
      }

      logo.style.setProperty("--logo-trim-left", `${analysis.trimLeft.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-right", `${analysis.trimRight.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-top", `${analysis.trimTop.toFixed(2)}%`);
      logo.style.setProperty("--logo-trim-bottom", `${analysis.trimBottom.toFixed(2)}%`);
      logo.style.setProperty("--logo-scale-boost", analysis.scaleBoost.toFixed(3));
    };

    if (logo.complete) {
      applyPresentation();
      return;
    }

    logo.addEventListener("load", applyPresentation, { once: true });
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

  syncHeaderLogoPresentation();
};

const buildHeaderLogoSelector = async () => {
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
  const discoveredVariants = await discoverHeaderLogoVariants();

  const options = [
    { value: "match", label: "Match page logo" },
    ...buildSingleModeLogoOptions(discoveredVariants),
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
    const slot = logo.closest(".logo-slot-hero");

    if (selectedLogo.variant === "match") {
      const nextSrc = logo.dataset[key];

      if (nextSrc) {
        logo.src = nextSrc;
      }

      if (slot) {
        slot.dataset.logoVariant = "match";
      }

      return;
    }

    logo.src = `assets/Logos/LOGO-${selectedLogo.variant}_${selectedLogo.mode}.png`;

    if (slot) {
      slot.dataset.logoVariant = selectedLogo.variant;
    }
  });

  syncHeroLogoPresentation();
};

const buildHeroLogoSelector = async () => {
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
  const discoveredVariants = await discoverHeroLogoVariants();

  const options = [
    { value: "match", label: "Match theme default" },
    ...buildExplicitLogoOptions(discoveredVariants),
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
  buildHeaderLogoSelector().then(() => {
    syncHeaderLogoVariant();
  });
  buildHeroLogoSelector().then(() => {
    syncHeroLogoVariant();
  });
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
  { threshold: 0.05 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

/* ── Scroll-snap panel transitions (about + home) ── */
const initSnapPanels = (containerSelector, panelSelector) => {
  const container = document.querySelector(containerSelector);
  const panels = document.querySelectorAll(panelSelector);

  if (!container || panels.length === 0) {
    return;
  }

  const syncVisiblePanel = () => {
    const containerRect = container.getBoundingClientRect();
    const containerMid = containerRect.top + containerRect.height / 2;

    panels.forEach((panel) => {
      const rect = panel.getBoundingClientRect();
      const isVisible = rect.top < containerMid && rect.bottom > containerMid;

      if (isVisible) {
        panel.classList.add("visible");
      } else {
        panel.classList.remove("visible");
      }
    });

    if (body && containerSelector === ".snap-scroll-container") {
      const heroPanel = container.querySelector(".snap-panel-hero");
      const heroIsVisible = heroPanel?.classList.contains("visible");
      body.classList.toggle("home-hero-active", Boolean(heroIsVisible));
    }
  };

  container.addEventListener("scroll", syncVisiblePanel, { passive: true });
  syncVisiblePanel();
};

initSnapPanels(".about-scroll-container", ".about-panel");
initSnapPanels(".snap-scroll-container", ".snap-panel");

currentYearNodes.forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

/* ── Listing date sort (events / programs) ── */
const sortListings = () => {
  const upcomingGrids = document.querySelectorAll('[data-listing="upcoming"]');

  if (upcomingGrids.length === 0) {
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  upcomingGrids.forEach((upcomingGrid) => {
    const type = upcomingGrid.dataset.type;
    const previousSection = document.querySelector(
      `.listing-previous-section [data-listing="previous"][data-type="${type}"]`
    );

    if (!previousSection) {
      return;
    }

    const cards = Array.from(upcomingGrid.querySelectorAll(".listing-card[data-date]"));
    const pastCards = [];

    cards.forEach((card) => {
      const cardDate = new Date(card.dataset.date + "T00:00:00");

      if (cardDate < today) {
        pastCards.push(card);
      }
    });

    if (pastCards.length > 0) {
      pastCards
        .sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
        .forEach((card) => {
          card.classList.add("listing-card-past");
          previousSection.append(card);
        });

      const previousSectionShell = previousSection.closest(".listing-previous-section");

      if (previousSectionShell) {
        previousSectionShell.removeAttribute("hidden");
      }
    }

    const remainingCards = upcomingGrid.querySelectorAll(".listing-card[data-date]");
    const emptyMsg = upcomingGrid.querySelector(".listing-empty");

    if (remainingCards.length === 0 && emptyMsg) {
      emptyMsg.removeAttribute("hidden");
    } else if (emptyMsg && remainingCards.length > 0) {
      emptyMsg.hidden = true;
    }
  });
};

sortListings();

const renderListingCard = (template, entry) => {
  if (!(template instanceof HTMLTemplateElement)) {
    return null;
  }

  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".listing-card");

  if (!card) {
    return null;
  }

  if (entry.date) {
    card.dataset.date = entry.date;
  }

  const categoryNode = card.querySelector('[data-field="category"]');
  const statusNode = card.querySelector('[data-field="status"]');
  const titleNode = card.querySelector('[data-field="title"]');
  const summaryNode = card.querySelector('[data-field="summary"]');
  const metaNode = card.querySelector('[data-field="meta"]');
  const linkNode = card.querySelector('[data-field="primary-link"]');

  if (categoryNode) {
    categoryNode.textContent = entry.category || "";
  }

  if (statusNode) {
    statusNode.textContent = entry.statusLabel || "";

    if (!entry.statusLabel) {
      statusNode.hidden = true;
    }
  }

  if (titleNode) {
    titleNode.textContent = entry.title || "";
  }

  if (summaryNode) {
    summaryNode.textContent = entry.summary || "";
  }

  if (metaNode) {
    metaNode.replaceChildren();

    (entry.meta || []).forEach((value) => {
      const item = document.createElement("p");
      item.className = "listing-card-meta-item";
      item.textContent = value;
      metaNode.append(item);
    });
  }

  if (linkNode) {
    linkNode.textContent = entry.primaryCtaLabel || "Contact Yard";
    linkNode.href = entry.primaryCtaUrl || "contact.html";
  }

  return card;
};

const setListingState = (type, nextState) => {
  const stateShell = document.querySelector(`[data-listing-status="${type}"]`);

  if (!stateShell) {
    return;
  }

  stateShell.querySelectorAll(".listing-status").forEach((node) => {
    node.hidden = node.dataset.state !== nextState;
  });
};

const hideListingStates = (type) => {
  const stateShell = document.querySelector(`[data-listing-status="${type}"]`);

  if (!stateShell) {
    return;
  }

  stateShell.querySelectorAll(".listing-status").forEach((node) => {
    node.hidden = true;
  });
};

const hydrateSanityListing = async ({ type, fetchEntries }) => {
  const upcomingGrid = document.querySelector(`[data-listing="upcoming"][data-type="${type}"]`);
  const template = document.querySelector("[data-listing-card-template]");
  const client = window.YardSanity;

  if (!upcomingGrid || !template || !client || typeof fetchEntries !== "function") {
    return;
  }

  setListingState(type, "loading");

  if (!client.hasConfig?.()) {
    setListingState(type, "empty");
    return;
  }

  try {
    const entries = await fetchEntries();

    if (entries.length === 0) {
      setListingState(type, "empty");
      return;
    }

    upcomingGrid.replaceChildren(...entries.map((entry) => renderListingCard(template, entry)).filter(Boolean));
    hideListingStates(type);
    sortListings();
  } catch (error) {
    console.error(`Unable to load ${type} from Sanity.`, error);
    setListingState(type, "error");
  }
};

hydrateSanityListing({
  type: "programs",
  fetchEntries: () => window.YardSanity?.fetchPrograms?.() || Promise.resolve([]),
});

hydrateSanityListing({
  type: "events",
  fetchEntries: () => window.YardSanity?.fetchEvents?.() || Promise.resolve([]),
});

const initContactForm = () => {
  const form = document.querySelector("[data-contact-form]");

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const urlInput = form.querySelector("[data-contact-url]");
  const validationNode = form.querySelector("[data-contact-validation]");
  const pendingNode = form.querySelector("[data-contact-pending]");
  const successNode = form.querySelector("[data-contact-success]");
  const errorNode = form.querySelector("[data-contact-error]");
  const submitButton = form.querySelector("[data-contact-submit]");
  const currentUrl = new URL(window.location.href);
  const requiredFields = Array.from(form.querySelectorAll("[name='name'], [name='email'], [name='message']"));

  if (urlInput instanceof HTMLInputElement) {
    urlInput.value = currentUrl.toString();
  }

  const setContactState = (state) => {
    if (validationNode instanceof HTMLElement) {
      validationNode.hidden = state !== "validation";
    }

    if (pendingNode instanceof HTMLElement) {
      pendingNode.hidden = state !== "pending";
    }

    if (successNode instanceof HTMLElement) {
      successNode.hidden = state !== "success";
    }

    if (errorNode instanceof HTMLElement) {
      errorNode.hidden = state !== "error";
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = state === "pending";
      submitButton.textContent = state === "pending" ? "Sending..." : "Send";
    }
  };

  const validateField = (field) => {
    const group = field.closest(".field-group");
    const errorNodeForField = form.querySelector(`[data-field-error="${field.name}"]`);
    let valid = true;

    if (field.name === "email") {
      valid = Boolean(field.value.trim()) && field.validity.valid;
    } else {
      valid = Boolean(field.value.trim());
    }

    if (group) {
      group.classList.toggle("has-error", !valid);
    }

    if (errorNodeForField instanceof HTMLElement) {
      errorNodeForField.hidden = valid;
    }

    return valid;
  };

  const validateForm = () => requiredFields.every((field) => validateField(field));

  setContactState("idle");

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);

      if (validationNode instanceof HTMLElement && !validationNode.hidden) {
        const allValid = requiredFields.every((currentField) => validateField(currentField));

        if (allValid) {
          setContactState("idle");
        }
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formIsValid = validateForm();

    if (!formIsValid) {
      setContactState("validation");
      return;
    }

    setContactState("pending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with ${response.status}`);
      }

      setContactState("success");
      form.reset();

      if (urlInput instanceof HTMLInputElement) {
        urlInput.value = currentUrl.toString();
      }
    } catch (error) {
      console.error("Unable to submit the contact form.", error);
      setContactState("error");
    }
  });
};

initContactForm();
