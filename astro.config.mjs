import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// `site` is your final URL. Change it if you end up on a different domain.
export default defineConfig({
  site: 'https://alexandertucker.me',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
