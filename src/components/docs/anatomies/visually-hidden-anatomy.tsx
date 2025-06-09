import { Label } from "@/components/ui/field"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

export default function VisuallyHiddenAnatomy() {
  return (
    <div>
      <Label>It's shown to you</Label>
      <VisuallyHidden>You can't see me, but I'm still accessible to screen readers.</VisuallyHidden>
    </div>
  )
}
