// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// For GitHub Pages the site is served under /<repo>/. Set BASE_PATH in CI.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://konqidam.github.io',
  base,
});
