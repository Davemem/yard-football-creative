import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {phase6Schemas} from "./cms/schemas/index.js";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "";
const fallbackProjectId = "e2l5fqsu";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "yard-football-creative",
  title: "Yard Football Creative",
  projectId: projectId || fallbackProjectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: phase6Schemas,
  },
});
