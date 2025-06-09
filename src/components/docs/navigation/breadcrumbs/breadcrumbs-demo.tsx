"use client"

import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>

      <Breadcrumbs.Item href="#">Design System</Breadcrumbs.Item>

      <Breadcrumbs.Item>Collections</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
