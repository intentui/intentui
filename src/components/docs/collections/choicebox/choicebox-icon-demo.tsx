"use client"

import { BrandLaravelIcon } from "@/components/icons/brand-laravel-icon"
import { BrandReactjsIcon } from "@/components/icons/brand-reactjs-icon"
import { BrandTypescriptIcon } from "@/components/icons/brand-typescript-icon"
import {
  ChoiceBox,
  ChoiceBoxDescription,
  ChoiceBoxItem,
  ChoiceBoxLabel,
} from "@/components/ui/choice-box"

export default function ChoiceboxIconDemo() {
  return (
    <ChoiceBox
      className="mx-auto max-w-lg"
      selectionMode="multiple"
      defaultSelectedKeys={["Standard"]}
      aria-label="Select prices"
      gap={0}
      columns={1}
      items={frameworks}
    >
      {(item) => (
        <ChoiceBoxItem textValue={item.label}>
          <item.icon />
          <ChoiceBoxLabel>{item.label}</ChoiceBoxLabel>
          <ChoiceBoxDescription>{item.description}</ChoiceBoxDescription>
        </ChoiceBoxItem>
      )}
    </ChoiceBox>
  )
}

const frameworks = [
  {
    id: "laravel",
    label: "Laravel",
    description: "Laravel is a web application framework with expressive, elegant syntax.",
    icon: BrandLaravelIcon,
  },
  {
    id: "react",
    label: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: BrandReactjsIcon,
  },
  {
    id: "ts",
    label: "Typescript",
    description: "Typescript is a typed superset of JavaScript that compiles to plain JavaScript.",
    icon: BrandTypescriptIcon,
  },
]
