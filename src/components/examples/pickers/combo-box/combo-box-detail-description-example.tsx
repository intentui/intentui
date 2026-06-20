'use client'

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxDescription,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
} from '@/components/ui/combo-box'

export default function ComboBoxDetailDescriptionDemo() {
  return (
    <ComboBox aria-label="Roles" name="roles">
      <ComboBoxInput placeholder="Select role" />
      <ComboBoxContent className="max-w-(--trigger-width)" items={roles}>
        {(item) => (
          <ComboBoxItem id={item.id} textValue={item.name}>
            <ComboBoxLabel>{item.name}</ComboBoxLabel>
            <ComboBoxDescription>{item.description}</ComboBoxDescription>
          </ComboBoxItem>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}

export const roles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Has full access to all resources',
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Can edit content but has limited access to settings',
  },
  {
    id: 3,
    name: 'Viewer',
    description: 'Can view content but cannot make changes',
  },
  {
    id: 4,
    name: 'Contributor',
    description: 'Can contribute content for review',
  },
  {
    id: 5,
    name: 'Guest',
    description: 'Limited access, mostly for viewing purposes',
  },
]
