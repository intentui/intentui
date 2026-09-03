'use client'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { twJoin } from 'cn'
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from '@/components/header'
import { PageContainer } from '@/components/page-container'
import { buttonStyles } from '@/components/ui/button'
import { Link, type LinkProps } from '@/components/ui/link'

export function BlocksHeader() {
  return (
    <div>
      <Header>
        <HeaderInner>
          <HeaderTitle>Blocks</HeaderTitle>
          <HeaderDescription className="mb-6">
            Clean and modern blocks you can copy and paste into your apps, compatible with any React
            framework, open source and free forever
          </HeaderDescription>

          <Link
            href="https://design.intentui.com?utm_source=intentui.com&utm_medium=referral&utm_campaign=blocks"
            className={buttonStyles({ intent: 'secondary' })}
          >
            Explore premium blocks
            <ArrowUpRightIcon />
          </Link>
        </HeaderInner>
      </Header>
      <div className="border-page border-y bg-overlay">
        <PageContainer>
          <div className="flex items-center justify-center gap-x-2 sm:justify-start sm:border-x sm:px-4">
            <NavLink href="/blocks">Featured</NavLink>
            <NavLink href="/blocks/sidebar">Sidebar</NavLink>
            <NavLink href="/blocks/navbar">Navbar</NavLink>
            <NavLink href="/blocks/auth">Auth</NavLink>
            <NavLink href="/blocks/chart">Charts</NavLink>
          </div>
        </PageContainer>
      </div>
    </div>
  )
}

function NavLink(props: LinkProps) {
  const pathname = usePathname()
  return (
    <Link
      className={twJoin(
        'inline-flex items-center gap-x-2.5 px-2 py-3 text-sm/6 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0',
        'text-muted-fg hover:text-fg',
        pathname === props.href ? 'text-fg' : 'text-muted-fg'
      )}
      {...props}
    />
  )
}
