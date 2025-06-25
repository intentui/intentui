import { BarList } from "@/components/ui/bar-list"

export default function BarListDemo() {
  return (
    <BarList
      data={[
        { name: "/home", value: 843 },
        { name: "/imprint", value: 46 },
        { name: "/cancellation", value: 3 },
        { name: "/blocks", value: 108 },
        { name: "/documentation", value: 384 },
      ]}
    />
  )
}
