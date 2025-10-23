"use client"

import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

export default function BreadcrumbsSeparatorDemo() {
  return (
    <Breadcrumbs separator="slash">
      <BreadcrumbsItem separator="slash" href="#">
        Home
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#">Design System</BreadcrumbsItem>
      <BreadcrumbsItem>Collections</BreadcrumbsItem>
    </Breadcrumbs>
  )
}
