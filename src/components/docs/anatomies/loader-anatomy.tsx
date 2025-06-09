import { Loader } from "@/components/ui/loader"

export default function LoaderAnatomy() {
  return (
    <div className="flex gap-6">
      <Loader variant="ring" />
      <Loader variant="spin" />
      <Loader variant="bars" />
    </div>
  )
}
