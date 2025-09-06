import { remarkHeading, remarkImage } from "fumadocs-core/mdx-plugins"
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config"
import { z } from "zod"

export const { docs, meta } = defineDocs({
  dir: "src/content/docs",
  docs: {
    async: false,
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      references: z.array(z.string()).optional(),
      status: z.string().optional(),
    }),
  },
})

export const blog = defineCollections({
  type: "doc",
  dir: "src/content/blog",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    author: z.string().optional(),
  }),
})

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      langs: ["ts", "tsx", "json", "css", "bash"],
      defaultLanguage: "tsx",
    },
    remarkPlugins: [[remarkHeading, { generateToc: true }], remarkImage],
  },
})
