"use client"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuSubMenu,
} from "@/components/ui/menu"

export default function MenuSubDemo() {
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <MenuContent popover={{ placement: "bottom" }}>
        <MenuItem>
          <MenuLabel>Dashboard</MenuLabel>
        </MenuItem>
        <MenuItem>
          <MenuLabel>Reports</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuSubMenu>
          <MenuItem>
            <MenuLabel>Settings</MenuLabel>
          </MenuItem>
          <MenuContent>
            <MenuItem>
              <MenuLabel>General</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuLabel>Security</MenuLabel>
            </MenuItem>
            <MenuSeparator />
            <MenuSubMenu>
              <MenuItem>
                <MenuLabel>Privacy</MenuLabel>
              </MenuItem>
              <MenuContent>
                <MenuItem>
                  <MenuLabel>Data Sharing</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <MenuLabel>Cookies</MenuLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuSubMenu>
                  <MenuItem>
                    <MenuLabel>Advanced</MenuLabel>
                  </MenuItem>
                  <MenuContent>
                    <MenuItem>
                      <MenuLabel>Encryption</MenuLabel>
                    </MenuItem>
                    <MenuItem>
                      <MenuLabel>Access Logs</MenuLabel>
                    </MenuItem>
                    <MenuItem>
                      <MenuLabel>API Keys</MenuLabel>
                    </MenuItem>
                  </MenuContent>
                </MenuSubMenu>
              </MenuContent>
            </MenuSubMenu>
          </MenuContent>
        </MenuSubMenu>
        <MenuItem>
          <MenuLabel>Help</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
