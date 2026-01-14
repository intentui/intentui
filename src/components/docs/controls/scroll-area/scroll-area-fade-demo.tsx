import { ScrollArea } from "@/components/ui/scroll-area"

export default function ScrollAreaFadeDemo() {
  return (
    <ScrollArea orientation="vertical" scrollFade className="*:max-h-60">
      <div className="flex max-w-xl flex-col gap-y-3">
        {Array.from({ length: 120 }).map((_, i) => {
          const width = `${Math.floor(Math.random() * (100 - 40) + 40)}%`
          return (
            <i key={i} aria-hidden className="h-2 rounded-[2.5px] bg-fg/20" style={{ width }} />
          )
        })}
      </div>
    </ScrollArea>
  )
}
