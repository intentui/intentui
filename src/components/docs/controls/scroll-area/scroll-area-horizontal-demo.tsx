import { ScrollArea } from "@/components/ui/scroll-area"

export default function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea orientation="horizontal" className="w-full">
      <div className="flex h-56 min-w-max items-end gap-x-2 px-2">
        {Array.from({ length: 120 }).map((_, i) => {
          const height = `${Math.floor(Math.random() * (100 - 30) + 30)}%`
          return (
            <i
              key={i}
              aria-hidden
              className="w-2 rounded-[2.5px] bg-accent-fg/20"
              style={{ height }}
            />
          )
        })}
      </div>
    </ScrollArea>
  )
}
