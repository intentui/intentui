"use client"

import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"

export default function CardActionDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>
          Manage and view customer details with available actions aligned to the right.
        </CardDescription>
        <CardAction>
          <Menu>
            <Button size="sm" intent="outline">
              Export... <ChevronDownIcon />
            </Button>
            <MenuContent placement="bottom end">
              <MenuItem>Export to PDF</MenuItem>
              <MenuItem>Export to CSV</MenuItem>
            </MenuContent>
          </Menu>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
