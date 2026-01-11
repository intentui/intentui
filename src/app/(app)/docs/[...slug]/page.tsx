import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { twJoin } from "tailwind-merge"
import { Ads } from "@/components/ads"
import { DocRefs } from "@/components/doc-refs"
import { mdxComponents } from "@/components/mdx-components"
import { OpenIn } from "@/components/open-in"
import { Pager } from "@/components/pager"
import { Toc } from "@/components/toc"
import { source } from "@/lib/source"
import { title } from "@/lib/utils"

export interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

function extractSegment (str: string): string | null {
  const segments = str.split("/")
  return segments.length === 4 ? title(segments[2]!) : title(segments[3]!)
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    return {}
  }
  const doc = page.data

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", page.data.title)

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      type: "article",
      url: `https://intentui.com${page.url}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title,
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} / Intent UI`,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title,
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@irsyadadl",
    },
  }
}

export default async function Page(props: DocPageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }
  const doc = page.data
  const MDX = doc.body
  const pageText = await doc.getText("raw")

  return (
    <>
      <div className="min-w-0 max-w-3xl flex-auto px-4 py-8 lg:max-w-none lg:pr-0 lg:pl-8 sm:lg:py-16 xl:px-16">
        <div className="prose prose-blue dark:prose-invert prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0">
          <div className="pb-6 sm:border-b">
            <div className="font-mono text-blue-600 text-xs uppercase dark:text-blue-400">
              {extractSegment(page.url)}
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <h1 className="mt-2 font-semibold text-xl tracking-tight sm:text-3xl">{doc.title}</h1>
            </div>
            {doc.description ? (
              <p className="mt-2.5 text-pretty text-base text-fg/60 leading-relaxed">
                {doc.description}
              </p>
            ) : null}

            <div
              className={twJoin(
                "flex items-center",
                ((doc.references && doc.references?.length > 0) || doc.status) && "mt-6",
              )}
            >
              {doc.references && doc.references?.length > 0 && (
                <DocRefs references={doc.references} />
              )}
              <OpenIn page={pageText} tree={source.pageTree} url={page.url} />
            </div>
          </div>

          <Toc className="mt-4 block sm:mt-8 xl:hidden" items={doc.toc} />

          <MDX components={mdxComponents} />

          <Ads className="mt-4 md:hidden" />

          <Pager tree={source.pageTree} url={page.url} />
        </div>
      </div>
      <div className="hidden flex-col xl:flex">
        <div className="flex-1">
          <Toc items={page.data.toc} />
        </div>
        <Ads className="sticky right-0 bottom-8 mb-16 self-start" />
      </div>
    </>
  )
}
