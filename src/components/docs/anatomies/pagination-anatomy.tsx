import { Pagination } from "@/components/ui/pagination"

export default function PaginationAnatomy() {
  return (
    <Pagination>
      <Pagination.List>
        <Pagination.Item segment="first" href="#" />
        <Pagination.Item segment="previous" href="#" />
        <Pagination.Section aria-label="Pagination Segment" className="rounded-lg border lg:hidden">
          <Pagination.Item segment="label">1</Pagination.Item>
          <Pagination.Item segment="separator" />
          <Pagination.Item className="text-muted-fg" segment="label">
            10
          </Pagination.Item>
        </Pagination.Section>
        <Pagination.Section aria-label="Pagination Segment" className="hidden lg:flex">
          <Pagination.Item href="#">1</Pagination.Item>
        </Pagination.Section>
        <Pagination.Item segment="next" href="#" />
        <Pagination.Item segment="last" href="#" />
      </Pagination.List>
    </Pagination>
  )
}
