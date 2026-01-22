"use client"
import { usePathname } from "next/navigation"
import { twJoin } from "tailwind-merge"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Link, type LinkProps } from "@/components/ui/link"

export function BlocksHeader() {
  return (
    <div>
      <Header>
        <HeaderInner>
          <HeaderTitle>Blocks</HeaderTitle>
          <HeaderDescription>
            Clean and modern blocks you can copy and paste into your apps, compatible with any React
            framework, open source and free forever
          </HeaderDescription>
        </HeaderInner>
      </Header>
      <div className="border-y bg-overlay">
        <PageContainer>
          <div className="sm:-mx-2">
            <div className="flex items-center justify-center gap-x-2 sm:justify-start">
              <NavLink href="/blocks">Featured</NavLink>
              <NavLink href="/blocks/sidebar">Sidebar</NavLink>
              <NavLink href="/blocks/navbar">Navbar</NavLink>
              <NavLink href="/blocks/auth">Auth</NavLink>
              <NavLink href="/blocks/chart">Charts</NavLink>
            </div>
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
        "px-2 py-3 text-sm/6",
        "text-muted-fg hover:text-fg",
        pathname === props.href ? "text-fg" : "text-muted-fg",
      )}
      {...props}
    />
  )
}
