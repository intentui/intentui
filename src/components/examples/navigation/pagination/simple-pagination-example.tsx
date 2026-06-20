'use client'

import {
  Pagination,
  PaginationFirst,
  PaginationLabel,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSection,
} from '@/components/ui/pagination'

export default function SimplePaginationDemo() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationFirst href="#" />
        <PaginationPrevious href="#" />
        <PaginationSection className="rounded-(--section-radius) border px-3 *:min-w-4">
          <PaginationLabel>3</PaginationLabel>
          <PaginationLabel className="text-muted-fg">/</PaginationLabel>
          <PaginationLabel>10</PaginationLabel>
        </PaginationSection>
        <PaginationNext href="#" />
        <PaginationLast href="#" />
      </PaginationList>
    </Pagination>
  )
}
