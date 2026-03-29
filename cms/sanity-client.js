(function attachYardSanityClient() {
  const defaultConfig = {
    apiVersion: "2026-03-28",
    projectId: "",
    dataset: "",
    useCdn: true,
  };

  const categoryLabels = {
    "community-football-experiences": "Community Football Experiences",
    "elite-pathway-development": "Elite Pathway Development",
    "workshops-and-education": "Workshops and Education",
    "events-and-gala-days": "Events and Gala Days",
    "all-abilities-and-inclusive-football": "All-Abilities and Inclusive Football",
    "storytelling-art-and-creative-projects": "Storytelling, Art, and Creative Projects",
    event: "Event",
    "gala-day": "Gala Day",
    workshop: "Workshop",
    collaboration: "Collaboration",
    "current-activity": "Current Activity",
  };

  const pathwayLabels = {
    community: "Community",
    elite: "Elite",
    shared: "Shared",
  };

  const getConfig = () => ({
    ...defaultConfig,
    ...(window.YARD_SANITY_CONFIG || {}),
  });

  const hasConfig = () => {
    const config = getConfig();
    return Boolean(config.projectId && config.dataset);
  };

  const humanize = (value) =>
    String(value || "")
      .split("-")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

  const formatDateLabel = (value) => {
    if (!value) {
      return "";
    }

    const date = new Date(`${value}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const buildQueryUrl = (query) => {
    const config = getConfig();
    const host = config.useCdn === false ? "api" : "apicdn";
    const params = new URLSearchParams({
      query,
    });

    return `https://${config.projectId}.${host}.sanity.io/v${config.apiVersion}/data/query/${config.dataset}?${params.toString()}`;
  };

  const runQuery = async (query) => {
    if (!hasConfig()) {
      return [];
    }

    const response = await fetch(buildQueryUrl(query), {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Sanity request failed with ${response.status}`);
    }

    const payload = await response.json();
    return Array.isArray(payload.result) ? payload.result : [];
  };

  const normalizeProgram = (entry) => ({
    id: entry._id,
    date: entry.startDate || "",
    category: categoryLabels[entry.category] || humanize(entry.category),
    statusLabel: entry.statusLabel || "",
    title: entry.title || "",
    summary: entry.summary || "",
    meta: [
      pathwayLabels[entry.pathway] || humanize(entry.pathway),
      entry.audience || "",
      entry.location || "",
      formatDateLabel(entry.startDate),
    ].filter(Boolean),
    primaryCtaLabel: entry.primaryCtaLabel || "Contact Yard",
    primaryCtaUrl: entry.primaryCtaUrl || "contact.html",
  });

  const fetchPrograms = async () => {
    const query = `*[_type == "program"] | order(startDate asc, displayOrder asc){
      _id,
      title,
      category,
      pathway,
      statusLabel,
      summary,
      audience,
      location,
      startDate,
      primaryCtaLabel,
      primaryCtaUrl
    }`;

    const result = await runQuery(query);
    return result.map(normalizeProgram);
  };

  window.YardSanity = {
    fetchPrograms,
    hasConfig,
  };
})();
