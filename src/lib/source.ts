import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"
import { docs, meta } from "#site/content"

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
})
