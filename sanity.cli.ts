import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "e2l5fqsu",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  deployment: {
    appId: "grzxf5wwd2nia6tenxbib0h6",
  },
  studioHost: "yardfootballcreative",
});
