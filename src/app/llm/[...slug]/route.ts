import { notFound } from 'next/navigation'
import { type NextRequest, NextResponse } from 'next/server'
import { processMdxForLLMs } from '@/lib/llm'
import { source } from '@/lib/source'

export const revalidate = false

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug
  const page = source.getPage(slug)

  if (!page) {
    notFound()
  }

  const processedContent = processMdxForLLMs(await page.data.getText('raw'))
  return new NextResponse(processedContent, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}

export function generateStaticParams() {
  return source.generateParams()
}
