import { Container } from '@/components/ui/container'
import {
  Pagination,
  PaginationFirst,
  PaginationGap,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSection,
} from '@/components/ui/pagination'

export default function PaginationDemo() {
  return (
    <Container className="py-6">
      <Pagination>
        <PaginationList className="hidden md:flex">
          <PaginationFirst href="#" />
          <PaginationPrevious href="#" />
          <PaginationSection>
            <PaginationItem href="#">1</PaginationItem>
            <PaginationItem href="#">2</PaginationItem>
            <PaginationItem href="#">3</PaginationItem>
            <PaginationGap />
            <PaginationItem href="#">23</PaginationItem>
            <PaginationItem href="#" isCurrent>
              24
            </PaginationItem>
            <PaginationItem href="#">25</PaginationItem>
          </PaginationSection>

          <PaginationNext href="#" />
          <PaginationLast href="#" />
        </PaginationList>

        <PaginationList className="md:hidden">
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
    </Container>
  )
}
