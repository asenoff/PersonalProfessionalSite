import { defineConfig } from "astro/config";
import { siteOrigin } from "./src/config/site-origin.js";

export default defineConfig({
  site: siteOrigin,
  output: "static",
  trailingSlash: "ignore"
});
