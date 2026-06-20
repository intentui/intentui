import { BrandGithubIcon } from '@/components/icons/brand-github-icon'
import { buttonStyles } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { app } from '@/config/app'

export function GithubLink() {
  return (
    <Link
      target="_blank"
      href={app.repo.url}
      className={buttonStyles({ intent: 'plain', size: 'sq-sm' })}
    >
      <BrandGithubIcon />
    </Link>
  )
}
