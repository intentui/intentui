"use client"

import {
  Choicebox,
  ChoiceboxDescription,
  ChoiceboxItem,
  ChoiceboxLabel,
} from "@/components/ui/choicebox"

export default function ChoiceboxDemo() {
  return (
    <Choicebox aria-label="Select items" selectionMode="multiple">
      <ChoiceboxItem textValue="premium">
        <ChoiceboxLabel>Premium</ChoiceboxLabel>
        <ChoiceboxDescription>Advanced options for growing needs.</ChoiceboxDescription>
      </ChoiceboxItem>
      <ChoiceboxItem textValue="deluxe">
        <ChoiceboxLabel>Deluxe</ChoiceboxLabel>
        <ChoiceboxDescription>Top-tier features for maximum performance.</ChoiceboxDescription>
      </ChoiceboxItem>
      <ChoiceboxItem textValue="ultimate">
        <ChoiceboxLabel>Ultimate</ChoiceboxLabel>
        <ChoiceboxDescription>
          All-inclusive plan with every feature available.
        </ChoiceboxDescription>
      </ChoiceboxItem>
      <ChoiceboxItem textValue="enterprise">
        <ChoiceboxLabel>Enterprise</ChoiceboxLabel>
        <ChoiceboxDescription>Customized solutions for large organizations.</ChoiceboxDescription>
      </ChoiceboxItem>
    </Choicebox>
  )
}
