import { BarList } from "@/components/ui/bar-list"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BarListDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page visits by section</CardTitle>
        <CardDescription>Unique visits for the most viewed docs pages this month</CardDescription>
      </CardHeader>
      <CardContent>
        <BarList
          data={[
            {
              name: "Documentation",
              value: 1200,
              href: "/installation",
            },
            { name: "Components", value: 980, href: "/components" },
            { name: "Themes", value: 760, href: "/themes" },
            { name: "Colors", value: 430, href: "/colors" },
            { name: "Icons", value: 150, href: "/icons" },
            {
              name: "Templates",
              value: 150,
              href: "https://irsyad.co",
            },
            {
              name: "Plus",
              value: 150,
              href: "https://dub.sh/designiui",
            },
          ]}
          valueFormatter={(value) => `${value} visits`}
        />
      </CardContent>
    </Card>
  )
}
