import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import dayjs from "dayjs"
import Link from "next/link"
import { blog } from "#site/content"

export default function Page() {
  return (
    <div>
      <Header>
        Bl
        <span className="text-muted-fg">og</span>
      </Header>
      <PageContainer className="py-6 sm:pb-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {blog
            .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
            .map((item) => (
              <Card className="relative flex flex-col" key={item.title}>
                <Link
                  href={`/blog/${item._file?.path.replace(".mdx", "")}`}
                  className="absolute inset-0 size-full"
                />
                <Card.Header className="flex-1" title={item.title}>
                  <Card.Description className="line-clamp-2">{item.description}</Card.Description>
                </Card.Header>
                <Card.Footer>
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <Avatar
                      alt={item.author}
                      src={`https://github.com/${item.author}.png`}
                      isCircle={false}
                      size="sm"
                    />
                    <span className="font-mono text-muted-fg text-sm">
                      {dayjs(item.published).format("MMMM D, YYYY")}
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            ))}
        </div>
      </PageContainer>
    </div>
  )
}
