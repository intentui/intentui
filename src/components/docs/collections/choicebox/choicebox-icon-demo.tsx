import { Choicebox } from "@/components/ui/choicebox"
import { IconBrandLaravel, IconBrandReactjs, IconBrandTypescript } from "@intentui/icons"

export default function ChoiceboxIconDemo() {
  return (
    <Choicebox
      className="mx-auto max-w-lg"
      selectionMode="single"
      defaultSelectedKeys={["Standard"]}
      aria-label="Select prices"
      gap={0}
      columns={1}
      items={frameworks}
    >
      {(item) => (
        <Choicebox.Item textValue={item.id}>
          <item.icon />
          <Choicebox.Label>{item.label}</Choicebox.Label>
          <Choicebox.Description>{item.description}</Choicebox.Description>
        </Choicebox.Item>
      )}
    </Choicebox>
  )
}

const frameworks = [
  {
    id: "laravel",
    label: "Laravel",
    description: "Laravel is a web application framework with expressive, elegant syntax.",
    icon: IconBrandLaravel,
  },
  {
    id: "react",
    label: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: IconBrandReactjs,
  },
  {
    id: "ts",
    label: "Typescript",
    description: "Typescript is a typed superset of JavaScript that compiles to plain JavaScript.",
    icon: IconBrandTypescript,
  },
]
