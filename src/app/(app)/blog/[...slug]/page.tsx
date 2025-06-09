import type { DocPageProps } from "@/app/(app)/docs/[...slug]/page"
import { Mdx } from "@/components/mdx"
import { Toc } from "@/components/toc"
import { siteConfig } from "@/config/site"
import dayjs from "dayjs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blog } from "#site/content"

export default async function Page(props: DocPageProps) {
  const { slug } = await props.params
  const article = blog.find((i) => i._file?.path.replace(".mdx", "") === slug[0])

  if (!article) {
    notFound()
  }

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 pt-16 pb-32 lg:max-w-none lg:pr-0">
        <main className="prose prose-blue dark:prose-invert prose-headings:mb-[0.3rem] max-w-[inherit] prose-headings:scroll-mt-24 prose-img:rounded-lg prose-pre:p-0">
          <div className="-mx-4 sm:mx-0">
            <div className="-mt-8 not-prose relative inset-shadow-xs isolate overflow-hidden p-4 ring-1 ring-fg/5 sm:mt-0 sm:rounded-xl sm:p-10 sm:ring-inset dark:ring-fg/10">
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
                {dayjs(article.published).format("MMMM D, YYYY")}
              </div>
              <h1 className="mt-2 font-semibold text-2xl tracking-tight sm:text-3xl">
                {article.title}
              </h1>
              {article.description ? (
                <p className="mt-2.5 text-pretty text-base text-fg/60 leading-relaxed">
                  {article.description}
                </p>
              ) : null}
            </div>
          </div>

          <Toc className="mt-4 block sm:mt-8 xl:hidden" items={article.toc} />
          <Mdx code={article.body} />
        </main>
      </div>
      <Toc className="hidden xl:block" items={article.toc} />
    </>
  )
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const { slug } = await props.params
  const article = blog.find((i) => i._file?.path.replace(".mdx", "") === slug[0])

  if (!article) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", article.title)

  return {
    title: article.title,
    description: article.description,
    applicationName: siteConfig.name,
    category: "Blog",
    keywords: [
      article.title,
      `${article.title} components`,
      `${article.title} component`,
      `${article.title} on React`,
      "React",
      "Next.js",
      "Inertia.js",
      "Tailwind CSS",
      "UI Components",
      "UI Kit",
      "UI Library",
      "UI Framework",
      "Intent",
      "React Aria",
      "React Aria Components",
      "Server Components",
      "React Components",
      "Next UI Components",
      "UI Design System",
      "UI for Laravel Inertia",
      "Intent Components",
      "Intent UI Components",
      "Intent UI Kit",
      "Intent UI Library",
      "Intent UI Framework",
      "Intent Laravel Inertia",
      "Intent Laravel",
      "Intent Inertia",
    ],
  }
}
