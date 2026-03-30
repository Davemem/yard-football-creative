import {createClient} from "@sanity/client";

const required = ["SANITY_STUDIO_PROJECT_ID", "SANITY_STUDIO_DATASET", "SANITY_API_WRITE_TOKEN"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "2026-03-28",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const documents = [
  {
    _id: "program-test-community-kickaround",
    _type: "program",
    title: "Community Kickaround",
    category: "community-football-experiences",
    pathway: "community",
    statusLabel: "Open",
    summary: "A welcoming football session focused on belonging, confidence, and connection.",
    audience: "Girls and young women",
    location: "Local community ground",
    startDate: "2026-04-12",
    primaryCtaLabel: "Contact Yard",
    primaryCtaUrl: "contact.html",
    displayOrder: 10,
  },
  {
    _id: "program-test-elite-session",
    _type: "program",
    title: "Elite Development Session",
    category: "elite-pathway-development",
    pathway: "elite",
    statusLabel: "Expression of Interest",
    summary: "A higher-ambition football development environment with clear progression support.",
    audience: "Players seeking progression",
    location: "Performance training venue",
    startDate: "2026-04-19",
    primaryCtaLabel: "Contact Yard",
    primaryCtaUrl: "contact.html",
    displayOrder: 20,
  },
  {
    _id: "event-test-gala-day",
    _type: "event",
    title: "Yard Gala Day",
    category: "gala-day",
    statusLabel: "Upcoming",
    summary: "A football-centred day bringing players, families, and the wider community together.",
    location: "Regional football hub",
    startDate: "2026-04-26",
    timeLabel: "10:00 AM - 3:00 PM",
    primaryCtaLabel: "Enquire About Events",
    primaryCtaUrl: "contact.html",
    displayOrder: 10,
  },
  {
    _id: "event-test-storytelling-workshop",
    _type: "event",
    title: "Afternoon of Storytelling",
    category: "workshop",
    statusLabel: "Featured",
    summary: "A creative football storytelling session grounded in memory, connection, and lived experience.",
    location: "Community space",
    startDate: "2026-05-03",
    timeLabel: "1:00 PM - 4:00 PM",
    primaryCtaLabel: "Enquire About Events",
    primaryCtaUrl: "contact.html",
    displayOrder: 20,
  },
];

for (const document of documents) {
  // Create or replace keeps the test fixtures deterministic across reruns.
  await client.createOrReplace(document);
  console.log(`Upserted ${document._id}`);
}

console.log("Sanity test content seeded successfully.");
