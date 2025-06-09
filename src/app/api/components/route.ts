import { source } from "@/lib/source"

const sources = source.getPageTree()

export const GET = () => {
  const version2 = sources.children[0]
  if (version2?.type === "folder") {
    return Response.json(
      // @ts-expect-error
      version2.children.find((child) => child.name?.toString() === "Components").children,
    )
  }

  return Response.json([])
}
