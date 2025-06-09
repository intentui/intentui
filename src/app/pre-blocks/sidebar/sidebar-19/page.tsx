import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Heading level={1}>Latest Videos</Heading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} className="aspect-video bg-secondary/50" />
        ))}
      </div>
    </div>
  )
}
