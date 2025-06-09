import { notFound, redirect } from "next/navigation"
import { docs } from "#site/content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page(props: PageProps) {
  const params = await props.params

  const originalUrl = docs
    .map((i) => i._file?.path)
    .find((i) => i?.split("/").at(-1)?.split(".")[0] === params.slug)
    ?.replace(".mdx", "")

  if (!originalUrl) {
    notFound()
  }

  return redirect(`/docs/${originalUrl.toLowerCase()}`)
}
