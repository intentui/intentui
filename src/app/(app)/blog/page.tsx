import dayjs from "dayjs"
import Link from "next/link"
import { blog } from "#site/content"
import { PageContainer } from "@/components/page-container"
import { Avatar } from "@/components/ui/avatar"

export default function Page() {
  return (
    <div>
      <PageContainer className="py-6 sm:pb-12">
        <div className="mx-auto flex max-w-2xl flex-col">
          <h1 className="-mt-8 py-8 font-semibold text-2xl sm:px-6 sm:text-5xl md:mt-0">
            Bl
            <span className="text-muted-fg">og</span>
          </h1>
          {blog
            .sort(
              (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
            )
            .map((item) => (
              <div
                className="relative mb-12 flex flex-col rounded-2xl sm:p-8 md:mb-0 md:hover:bg-secondary"
                key={item.title}
              >
                <Link
                  href={`/blog/${item._file?.path.replace(".mdx", "")}`}
                  className="absolute inset-0 size-full"
                />
                <div>
                  <h3 className="mb-2 font-semibold text-2xl">{item.title}</h3>
                  <p className="text-pretty text-muted-fg text-sm/6">
                    {item.description || "No description available for this blog post."}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <div className="flex items-center gap-x-2">
                      <Avatar
                        alt={item.author}
                        src={`https://github.com/${item.author}.png`}
                        size="sm"
                      />
                      <strong className="font-semibold text-sm">{item.author}</strong>
                    </div>
                    <span className="font-mono text-muted-fg text-sm">
                      {dayjs(item.published).format("MMMM D, YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </PageContainer>
    </div>
  )
}
