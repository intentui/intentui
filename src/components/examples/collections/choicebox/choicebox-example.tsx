'use client'

import {
  ChoiceBox,
  ChoiceBoxDescription,
  ChoiceBoxItem,
  ChoiceBoxLabel,
} from '@/components/ui/choice-box'

export default function ChoiceboxDemo() {
  return (
    <ChoiceBox aria-label="Select items" selectionMode="multiple">
      <ChoiceBoxItem textValue="premium">
        <ChoiceBoxLabel>Premium</ChoiceBoxLabel>
        <ChoiceBoxDescription>Advanced options for growing needs.</ChoiceBoxDescription>
      </ChoiceBoxItem>
      <ChoiceBoxItem textValue="deluxe">
        <ChoiceBoxLabel>Deluxe</ChoiceBoxLabel>
        <ChoiceBoxDescription>Top-tier features for maximum performance.</ChoiceBoxDescription>
      </ChoiceBoxItem>
      <ChoiceBoxItem textValue="ultimate">
        <ChoiceBoxLabel>Ultimate</ChoiceBoxLabel>
        <ChoiceBoxDescription>
          All-inclusive plan with every feature available.
        </ChoiceBoxDescription>
      </ChoiceBoxItem>
      <ChoiceBoxItem textValue="enterprise">
        <ChoiceBoxLabel>Enterprise</ChoiceBoxLabel>
        <ChoiceBoxDescription>Customized solutions for large organizations.</ChoiceBoxDescription>
      </ChoiceBoxItem>
    </ChoiceBox>
  )
}
