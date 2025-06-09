"use client"

import { Pagination } from "@/components/ui/pagination"

export default function PaginationDemo() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item segment="first" href="#" />
        <Pagination.Item segment="previous" href="#" />
        <Pagination.Item href="#">1</Pagination.Item>
        <Pagination.Item href="#" isCurrent>
          2
        </Pagination.Item>
        <Pagination.Item segment="ellipsis" />
        <Pagination.Item segment="next" href="#" />
        <Pagination.Item segment="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
