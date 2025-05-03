import TableBulkDemo from "@/components/docs/collections/table/table-bulk-demo"
import TableDragDemo from "@/components/docs/collections/table/table-drag-demo"
import TableResizeDemo from "@/components/docs/collections/table/table-resize-demo"

export default function Page() {
  return (
    <div className="grid gap-6 p-32">
      <TableBulkDemo />
      <TableResizeDemo />
      <TableDragDemo />
    </div>
  )
}
