import {
  CodeBracketIcon,
  CubeIcon,
  CubeTransparentIcon,
  DocumentIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline"

export const BrandIcon = ({ label }: { label: string }) => {
  const ext = label.toLowerCase()
  if (ext.endsWith(".blade.php")) return <CubeIcon className="size-4 text-red-500" />
  switch (label.split(".").pop()?.toLowerCase()) {
    case "php":
      return <CodeBracketIcon className="size-4 text-indigo-500" />
    case "tsx":
      return <CubeTransparentIcon className="size-4 text-cyan-500" />
    case "ts":
      return <CodeBracketIcon className="size-4 text-blue-500" />
    case "css":
      return <PaintBrushIcon className="size-4 text-sky-500" />
    default:
      return <DocumentIcon />
  }
}
