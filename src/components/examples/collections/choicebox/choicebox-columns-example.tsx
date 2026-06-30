'use client'

import { ChoiceBox, ChoiceBoxItem } from '@/components/ui/choice-box'

export default function ChoiceboxColumnsDemo() {
  return (
    <div className="p-1">
      <ChoiceBox
        aria-label="Select prices"
        gap={2}
        columns={2}
        selectionMode="multiple"
        items={prices}
      >
        {(item) => <ChoiceBoxItem textValue={item.label} {...item} />}
      </ChoiceBox>
    </div>
  )
}

const prices = [
  { id: 1, label: 'Basic', description: 'Essentials, get started' },
  { id: 2, label: 'Standard', description: 'More features, support' },
  { id: 3, label: 'Premium', description: 'Advanced, growing needs' },
  {
    id: 4,
    label: 'Deluxe',
    description: 'Top-tier, maximum performance',
  },
  {
    id: 5,
    label: 'Ultimate',
    description: 'All-inclusive, every feature',
  },
  {
    id: 6,
    label: 'Enterprise',
    description: 'Custom, large-scale operations',
  },
]
