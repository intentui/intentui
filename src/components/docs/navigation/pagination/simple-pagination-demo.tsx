"use client"

import { Pagination } from "@/components/ui/pagination"

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item segment="first" href="#" />
        <Pagination.Item segment="previous" href="#" />
        <Pagination.Section
          aria-label="Pagination Segment"
          className="inset-ring inset-ring-border rounded-[calc(var(--radius-lg)+0.5px)]"
        >
          <Pagination.Item segment="label">1</Pagination.Item>
          <Pagination.Item segment="separator" />
          <Pagination.Item className="text-muted-fg" segment="label">
            10
          </Pagination.Item>
        </Pagination.Section>
        <Pagination.Item segment="next" href="#" />
        <Pagination.Item segment="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
