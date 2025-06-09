"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function MenuSubDemo() {
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <Menu.Content placement="bottom">
        <Menu.Item>
          <Menu.Label>Dashboard</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <Menu.Label>Reports</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Submenu>
          <Menu.Item>
            <Menu.Label>Settings</Menu.Label>
          </Menu.Item>
          <Menu.Content>
            <Menu.Item>
              <Menu.Label>General</Menu.Label>
            </Menu.Item>
            <Menu.Item>
              <Menu.Label>Security</Menu.Label>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Submenu>
              <Menu.Item>
                <Menu.Label>Privacy</Menu.Label>
              </Menu.Item>
              <Menu.Content>
                <Menu.Item>
                  <Menu.Label>Data Sharing</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Label>Cookies</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Submenu>
                  <Menu.Item>
                    <Menu.Label>Advanced</Menu.Label>
                  </Menu.Item>
                  <Menu.Content>
                    <Menu.Item>
                      <Menu.Label>Encryption</Menu.Label>
                    </Menu.Item>
                    <Menu.Item>
                      <Menu.Label>Access Logs</Menu.Label>
                    </Menu.Item>
                    <Menu.Item>
                      <Menu.Label>API Keys</Menu.Label>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Submenu>
              </Menu.Content>
            </Menu.Submenu>
          </Menu.Content>
        </Menu.Submenu>
        <Menu.Item>
          <Menu.Label>Help</Menu.Label>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
