import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"
import { IconBrandGithub } from "@intentui/icons"

export function GithubLink() {
  return (
    <Link
      target="_blank"
      href={siteConfig.repo}
      className="inset-ring inset-ring-white/10 ml-1 inline-flex items-center gap-x-1 rounded-full bg-linear-to-r from-blue-600 via-blue-700 to-sky-500 px-2 py-1 font-medium text-white text-xs/5 tabular-nums shadow-black/50"
    >
      <IconBrandGithub className="-ml-0.5" />
      1.4K Github
    </Link>
  )
}
