"use client"

import { usePathname } from "next/navigation"
import { docs } from "#site/content"
import { Choicebox } from "@/components/ui/choicebox"

export function DocComposed({
  components,
  text,
}: {
  components: string[]
  text?: string | React.ReactNode
}) {
  const pathname = usePathname()
  const name = getLatestOfString(pathname)

  const filteredComponents = docs.filter((doc) => {
    const filename = doc._file?.path?.split("/").at(-1)?.split(".")[0]
    return components.includes(filename!)
  })
  return (
    <div className="not-prose">
      {!text ? (
        <>
          <p className="mb-6">
            When you install this component via the CLI, it automatically loads all composed
            components, so you don’t need to add them individually.
          </p>
          <p className="mb-6">
            The <strong className="font-medium lowercase">{name}</strong> comes packed with several
            components to enhance functionality and provide a seamless experience.
          </p>
        </>
      ) : (
        <p className="mb-4">{text}</p>
      )}
      <Choicebox gap={2} columns={2} selectionMode="single" aria-label="Composed Components">
        {filteredComponents.map((item) => (
          <Choicebox.Item
            textValue={item.title}
            className="**:[[slot=description]]:line-clamp-2"
            key={item._file?.path}
            href={`/docs/${item._file?.path.replace(".mdx", "")}`}
            label={item.title}
            description={item.description}
          />
        ))}
      </Choicebox>
    </div>
  )
}

const getLatestOfString = (path: string): string => {
  const lastSegment = path.split("/").pop() || ""
  return lastSegment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}
