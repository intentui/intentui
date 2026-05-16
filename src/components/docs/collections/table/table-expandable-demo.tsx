"use client"

import { EllipsisVerticalIcon } from "@heroicons/react/16/solid"
import { IdentificationIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Autocomplete } from "react-aria-components/Autocomplete"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const rows = [
  {
    id: "marketing-site",
    project: "Website redesign",
    owner: "Emma Taylor",
    team: "Brand",
    status: "In progress",
    progress: "72%",
    updated: "Apr 10, 2026",
    children: [
      {
        id: "homepage-refresh",
        project: "Homepage refresh",
        owner: "Noah Wilson",
        team: "Brand",
        status: "In review",
        progress: "91%",
        updated: "Apr 12, 2026",
      },
      {
        id: "pricing-page",
        project: "Pricing page update",
        owner: "Ava Martinez",
        team: "Growth",
        status: "In progress",
        progress: "64%",
        updated: "Apr 9, 2026",
      },
      {
        id: "faq-rewrite",
        project: "FAQ rewrite",
        owner: "Liam Anderson",
        team: "Content",
        status: "Planned",
        progress: "18%",
        updated: "Apr 6, 2026",
      },
    ],
  },
  {
    id: "mobile-app",
    project: "Mobile app onboarding",
    owner: "Sophia Brown",
    team: "Product",
    status: "In progress",
    progress: "58%",
    updated: "Apr 14, 2026",
    children: [
      {
        id: "welcome-flow",
        project: "Welcome flow",
        owner: "Mason Thomas",
        team: "Product",
        status: "In progress",
        progress: "67%",
        updated: "Apr 13, 2026",
      },
      {
        id: "permissions-screen",
        project: "Permissions screen",
        owner: "Olivia Harris",
        team: "Mobile",
        status: "Blocked",
        progress: "39%",
        updated: "Apr 11, 2026",
      },
      {
        id: "profile-setup",
        project: "Profile setup",
        owner: "James Clark",
        team: "Mobile",
        status: "Done",
        progress: "100%",
        updated: "Apr 8, 2026",
      },
    ],
  },
  {
    id: "analytics-dashboard",
    project: "Analytics dashboard",
    owner: "Isabella Lewis",
    team: "Data",
    status: "In review",
    progress: "84%",
    updated: "Apr 15, 2026",
    children: [
      {
        id: "traffic-widget",
        project: "Traffic widget",
        owner: "Benjamin Walker",
        team: "Data",
        status: "Done",
        progress: "100%",
        updated: "Apr 7, 2026",
      },
      {
        id: "conversion-widget",
        project: "Conversion widget",
        owner: "Mia Hall",
        team: "Growth",
        status: "In progress",
        progress: "76%",
        updated: "Apr 15, 2026",
      },
    ],
  },
  {
    id: "security-audit",
    project: "Security audit",
    owner: "Charlotte Allen",
    team: "Platform",
    status: "Planned",
    progress: "12%",
    updated: "Apr 5, 2026",
  },
  {
    id: "billing-system",
    project: "Billing system upgrade",
    owner: "Elijah Young",
    team: "Finance",
    status: "Blocked",
    progress: "43%",
    updated: "Apr 3, 2026",
  },
]

export default function TableExpandableDemo() {
  return (
    <div className="rounded-lg border p-4">
      <Autocomplete>
        <Table aria-label="Projects" treeColumn="project" selectionMode="multiple">
          <TableHeader>
            <TableColumn id="project" isRowHeader>
              Project
            </TableColumn>
            <TableColumn id="owner">Owner</TableColumn>
            <TableColumn id="team">Team</TableColumn>
            <TableColumn id="status">Status</TableColumn>
            <TableColumn id="progress">Progress</TableColumn>
            <TableColumn id="updated">Last updated</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} id={row.id}>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>
                  <Badge intent={getStatusVariant(row.status)}>{row.status}</Badge>
                </TableCell>
                <TableCell>{row.progress}</TableCell>
                <TableCell>{row.updated}</TableCell>
                <TableCell className="flex justify-end">
                  <Menu>
                    <Button intent="plain" size="sq-sm" aria-label="Options">
                      <EllipsisVerticalIcon />
                    </Button>
                    <MenuContent aria-label="Actions" placement="left top">
                      <MenuItem>
                        <IdentificationIcon /> View details
                      </MenuItem>
                      <MenuItem>
                        <PencilSquareIcon /> Edit
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem intent="danger">
                        <TrashIcon /> Delete
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </TableCell>
                {row.children?.map((child) => (
                  <TableRow key={child.id} id={child.id}>
                    <TableCell>{child.project}</TableCell>
                    <TableCell>{child.owner}</TableCell>
                    <TableCell>{child.team}</TableCell>
                    <TableCell>
                      <Badge intent={getStatusVariant(child.status)}>{child.status}</Badge>
                    </TableCell>
                    <TableCell>{child.progress}</TableCell>
                    <TableCell>{child.updated}</TableCell>
                    <TableCell className="flex justify-end">
                      <Menu>
                        <Button intent="plain" size="sq-sm" aria-label="Options">
                          <EllipsisVerticalIcon />
                        </Button>
                        <MenuContent aria-label="Actions" placement="left top">
                          <MenuItem>
                            <IdentificationIcon /> View details
                          </MenuItem>
                          <MenuItem>
                            <PencilSquareIcon /> Edit
                          </MenuItem>
                          <MenuSeparator />
                          <MenuItem intent="danger">
                            <TrashIcon /> Delete
                          </MenuItem>
                        </MenuContent>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Autocomplete>
    </div>
  )
}

function getStatusVariant(status: string) {
  if (status === "Blocked") return "danger"
  if (status === "In progress") return "secondary"
  if (status === "Planned") return "info"
  if (status === "Done") return "success"
  return "primary"
}
