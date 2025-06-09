import {
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandReactjs,
  IconBrandTailwindcss,
  IconBrandTypescript,
  IconFile,
} from "@intentui/icons"

export const BrandIcon = ({ label }: { label: string }) => {
  const ext = label.toLowerCase()
  if (ext.endsWith(".blade.php")) return <IconBrandLaravel className="size-4 text-red-500" />
  switch (label.split(".").pop()?.toLowerCase()) {
    case "php":
      return <IconBrandPhp className="size-4 text-indigo-500" />
    case "tsx":
      return <IconBrandReactjs className="size-4 text-cyan-500" />
    case "ts":
      return <IconBrandTypescript className="size-4 text-blue-500" />
    case "css":
      return <IconBrandTailwindcss className="size-4 text-sky-500" />
    default:
      return <IconFile />
  }
}
