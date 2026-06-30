import { promises as fs } from 'node:fs'
import path from 'node:path'
import { NextResponse } from 'next/server'

const TYPE_TO_SEGMENT: Record<string, string> = {
  'registry:ui': 'ui',
  'registry:hook': 'hook',
  'registry:lib': 'lib',
  'registry:block': 'block',
  'registry:component': 'component',
  'registry:page': 'page',
  'registry:file': 'file',
  'registry:style': 'style',
  'registry:theme': 'theme',
  'registry:item': 'item',
}
const SEGMENT_TO_TYPE = Object.fromEntries(Object.entries(TYPE_TO_SEGMENT).map(([k, v]) => [v, k]))

const stripJson = (s: string) => (s.endsWith('.json') ? s.slice(0, -5) : s)

export async function GET(_: Request, { params }: { params: { slug?: string[] } }) {
  const segs = params.slug ?? []
  if (segs.length === 0) return NextResponse.json({ error: 'missing slug' }, { status: 400 })

  let typeFilter: string | undefined
  let name: string

  if (segs.length === 1) {
    name = stripJson(segs[0]!)
  } else {
    const seg0 = segs[0]!
    const seg1 = segs[1]!
    const maybeType = SEGMENT_TO_TYPE[seg0]
    if (maybeType) {
      typeFilter = maybeType
      name = stripJson(seg1)
    } else {
      name = stripJson(segs[segs.length - 1]!)
    }
  }

  const file = path.resolve(process.cwd(), 'registry.json')
  const raw = await fs.readFile(file, 'utf8')
  const registry = JSON.parse(raw) as { items: any[] }

  const item = registry.items.find((it) => {
    if (typeFilter && it.type !== typeFilter) return false
    return it.name === name
  })

  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 })

  return NextResponse.json(item, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60, stale-while-revalidate=600',
    },
  })
}
