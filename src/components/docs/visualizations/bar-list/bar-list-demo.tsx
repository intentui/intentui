import { BarList } from "@/components/ui/bar-list"
import { Card } from "@/components/ui/card"

export default function BarListDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Page visits by section</Card.Title>
        <Card.Description>Unique visits for the most viewed docs pages this month</Card.Description>
      </Card.Header>
      <Card.Content>
        <BarList
          data={[
            { name: "Documentation", value: 1200, href: "/installation" },
            { name: "Components", value: 980, href: "/components" },
            { name: "Themes", value: 760, href: "/themes" },
            { name: "Colors", value: 430, href: "/colors" },
            { name: "Icons", value: 150, href: "/icons" },
          ]}
          valueFormatter={(value) => `${value} visits`}
        />
      </Card.Content>
    </Card>
  )
}
