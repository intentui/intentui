'use client'
import { Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs'

export default function BreadcrumbsCurrentDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Components</BreadcrumbsItem>

      <BreadcrumbsItem className="current:text-primary">Navbar</BreadcrumbsItem>
    </Breadcrumbs>
  )
}
