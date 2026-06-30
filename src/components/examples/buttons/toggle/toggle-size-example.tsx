'use client'

import { HandRaisedIcon as HandRaisedIconOutline } from '@heroicons/react/24/outline'
import { HandRaisedIcon as HandRaisedIconSolid } from '@heroicons/react/24/solid'
import { Separator } from '@/components/ui/separator'
import { Toggle } from '@/components/ui/toggle'

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-end gap-2">
        <Toggle intent="outline" size="sq-xs">
          {({ isSelected }) => (
            <>{isSelected ? <HandRaisedIconSolid /> : <HandRaisedIconOutline />}</>
          )}
        </Toggle>
        <Toggle intent="outline" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <HandRaisedIconSolid /> : <HandRaisedIconOutline />}</>
          )}
        </Toggle>
        <Toggle intent="outline" size="sq-md">
          {({ isSelected }) => (
            <>{isSelected ? <HandRaisedIconSolid /> : <HandRaisedIconOutline />}</>
          )}
        </Toggle>
        <Toggle intent="outline" size="sq-lg">
          {({ isSelected }) => (
            <>{isSelected ? <HandRaisedIconSolid /> : <HandRaisedIconOutline />}</>
          )}
        </Toggle>
      </div>
      <Separator />
      <div className="flex flex-wrap items-end gap-2">
        <Toggle intent="outline" size="xs">
          {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
        </Toggle>
        <Toggle intent="outline" size="sm">
          {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
        </Toggle>
        <Toggle intent="outline" size="md">
          {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
        </Toggle>
        <Toggle intent="outline" size="lg">
          {({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}
        </Toggle>
      </div>
    </div>
  )
}
