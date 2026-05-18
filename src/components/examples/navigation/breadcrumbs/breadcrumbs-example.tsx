"use client"

import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>

      <BreadcrumbsItem href="#">Design System</BreadcrumbsItem>

      <BreadcrumbsItem>Collections</BreadcrumbsItem>
    </Breadcrumbs>
  )
}
