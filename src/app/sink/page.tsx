import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-32">
      <div className="flex gap-4">
        <Button intent="primary">Label</Button>
        <Button intent="secondary">Label</Button>
        <Button intent="warning">Label</Button>
        <Button intent="danger">Label</Button>
        <Button intent="outline">Label</Button>
        <Button intent="plain">Label</Button>
      </div>
    </div>
  )
}
