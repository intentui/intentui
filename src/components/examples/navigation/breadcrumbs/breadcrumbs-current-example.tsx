"use client"
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

export default function BreadcrumbsCurrentDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Components</BreadcrumbsItem>

      <BreadcrumbsItem className="data-current:text-primary">Navbar</BreadcrumbsItem>
    </Breadcrumbs>
  )
}
