'use client'

import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import {
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Menu, MenuContent, MenuItem } from '@/components/ui/menu'

export default function ButtonGroupWithMenuDemo() {
  return (
    <ButtonGroup>
      <Button intent="secondary">
        <RocketLaunchIcon />
        Deploy
      </Button>
      <Menu>
        <Button intent="secondary">
          <EllipsisHorizontalIcon />
        </Button>
        <MenuContent placement="bottom end">
          <MenuItem href="#">
            <ArrowPathIcon />
            Redeploy
          </MenuItem>
          <MenuItem href="#">
            <ArrowUturnLeftIcon />
            Rollback
          </MenuItem>
          <MenuItem href="#">
            <DocumentTextIcon />
            View logs
          </MenuItem>
          <MenuItem href="#">
            <Cog6ToothIcon />
            Settings
          </MenuItem>
        </MenuContent>
      </Menu>
    </ButtonGroup>
  )
}
