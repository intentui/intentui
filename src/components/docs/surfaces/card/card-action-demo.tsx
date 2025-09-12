"use client"

import { IconChevronLgDown } from "@intentui/icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"

export default function CardActionDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Customers</Card.Title>
        <Card.Description>
          Manage and view customer details with available actions aligned to the right.
        </Card.Description>
        <Card.Action>
          <Menu>
            <Button size="sm" intent="outline">
              Export... <IconChevronLgDown />
            </Button>
            <MenuContent placement="bottom end">
              <MenuItem>Export to PDF</MenuItem>
              <MenuItem>Export to CSV</MenuItem>
            </MenuContent>
          </Menu>
        </Card.Action>
      </Card.Header>
    </Card>
  )
}
