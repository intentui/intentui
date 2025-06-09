// source.config.ts
import { remarkHeading, remarkImage } from "fumadocs-core/mdx-plugins";
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var { docs, meta } = defineDocs({
  dir: "src/content/docs",
  docs: {
    async: false,
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      references: z.array(z.string()).optional(),
      status: z.string().optional()
    })
  }
});
var blog = defineCollections({
  type: "doc",
  dir: "src/content/blog",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    author: z.string().optional()
  })
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      langs: ["ts", "tsx", "js", "jsx", "json", "css", "html", "md", "mdx"],
      defaultLanguage: "tsx"
    },
    remarkPlugins: [[remarkHeading, { generateToc: true }], remarkImage]
  }
});
export {
  blog,
  source_config_default as default,
  docs,
  meta
};
