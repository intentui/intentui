import { getRawDoc } from "@/lib/raw-doc"

export async function GET(_req: Request, { params }: { params: { slug: string[] } }) {
  const last = params.slug.at(-1)!
  if (!last.endsWith(".md")) return new Response(null, { status: 404 })

  const slug = [...params.slug.slice(0, -1), last.slice(0, -3)]
  const raw = await getRawDoc(slug)
  if (!raw) return new Response(null, { status: 404 })

  return new Response(raw, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  })
}
