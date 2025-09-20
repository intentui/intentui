import { IconBrandReactjs } from "@intentui/icons"
import Link from "next/link"

export function DocComposed({
  components,
  text,
}: {
  components: string[]
  text?: string | React.ReactNode
}) {
  return (
    <div className="not-prose">
      {!text ? (
        <>
          <p className="mb-6">
            When you install this component via the CLI, it automatically loads all composed
            components, so you don’t need to add them individually.
          </p>
          <p className="mb-6">
            This component comes packed with several components to enhance functionality and provide
            a seamless experience.
          </p>
        </>
      ) : (
        <p className="mb-4">{text}</p>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((item, i) => (
          <Link
            key={i}
            href={`/${item}`}
            className="flex items-center gap-x-1.5 rounded-xl border bg-muted px-3 py-1.5 font-medium text-fg text-sm/6 capitalize hover:bg-secondary"
          >
            <IconBrandReactjs />
            {item.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </div>
  )
}
