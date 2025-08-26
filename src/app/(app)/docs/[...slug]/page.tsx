import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { twJoin } from "tailwind-merge"
import { Ads } from "@/components/ads"
import { DocRefs } from "@/components/doc-refs"
import { Mdx } from "@/components/mdx"
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

const extractSegment = (str: string): string | null => {
  const segments = str.split("/")
  return segments.length === 5 ? title(segments[3]!) : title(segments[3]!)
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
  return (
    <>
      <div className="min-w-0 max-w-3xl flex-auto px-4 pt-8 pb-32 sm:pt-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-10">
        <main className="prose prose-blue dark:prose-invert prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0">
          <div className="pb-6 sm:border-b">
            <div
              aria-hidden="true"
              className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-linear-to-tr from-cyan-500 to-blue-600 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20"
              />
            </div>
            <div className="font-mono text-blue-600 text-xs uppercase dark:text-blue-400">
              {extractSegment(page.url)}
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <h1 className="mt-2 font-semibold text-xl tracking-tight sm:text-3xl">
                {doc.title}
              </h1>
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
              <div className="ml-auto">
                <OpenIn tree={source.pageTree} url={page.url} />
              </div>
            </div>
          </div>

          <Toc className="mt-4 block sm:mt-8 xl:hidden" items={doc.toc} />
          <Mdx code={doc.body} />

          <Ads className="flex md:hidden" />

          <Pager tree={source.pageTree} url={page.url} />
        </main>
      </div>
      <Toc className="hidden xl:block" items={page.data.toc} />
    </>
  )
}
