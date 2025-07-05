import PaginationDemo from "@/components/docs/navigation/pagination/pagination-demo"
import PaginationDynamicDemo from "@/components/docs/navigation/pagination/pagination-dynamic-demo"
import SimplePaginationDemo from "@/components/docs/navigation/pagination/simple-pagination-demo"

export default function Page() {
  return (
    <div className="flex flex-col gap-y-2 p-32">
      <PaginationDemo />
      <SimplePaginationDemo />
      <PaginationDynamicDemo />
    </div>
  )
}
