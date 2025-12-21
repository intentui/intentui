import SheetFloatDemo from "@/components/docs/overlays/sheet/sheet-float-demo"
import SheetStickyDemo from "@/components/docs/overlays/sheet/sheet-sticky-demo"

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <SheetStickyDemo />
      <SheetFloatDemo />
    </div>
  )
}
