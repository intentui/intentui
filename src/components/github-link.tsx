import { BrandGithubIcon } from "@/components/icons/brand-github-icon"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

export function GithubLink() {
  return (
    <Link
      target="_blank"
      href={siteConfig.repo}
      className={buttonStyles({ intent: "plain", size: "sq-md", isCircle: true })}
    >
      <BrandGithubIcon />
    </Link>
  )
}
