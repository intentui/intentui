"use client"

import { EllipsisVerticalIcon } from "@heroicons/react/16/solid"
import { IdentificationIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Autocomplete } from "react-aria-components/Autocomplete"
import { BlocksCard } from "@/app/(home)/partials/blocks"
import ChoiceboxDemo from "@/components/docs/collections/choicebox/choicebox-demo"
import AreaChartDemo from "@/components/docs/visualizations/area-chart/area-chart-demo"
import BarChartDemo from "@/components/docs/visualizations/bar-chart/bar-chart-demo"
import BarListDemo from "@/components/docs/visualizations/bar-list/bar-list-demo"
import LineChartDemo from "@/components/docs/visualizations/line-chart/line-chart-demo"
import { PageContainer } from "@/components/page-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Menu, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export function Examples() {
  return (
    <div className="-mt-4 pt-6 sm:pt-12">
      <PageContainer>
        <CardHeader
          className="max-w-lg"
          title="Common components"
          description="Explore foundational components commonly used across web applications."
        />
      </PageContainer>
      <PageContainer className="mt-6 flex snap-x gap-4 overflow-x-auto pb-6 *:shrink-0 *:snap-center sm:pb-12">
        <BlocksCard className="w-full lg:w-1/3">
          <div className="flex flex-col gap-y-6">
            <CardHeader title="Sign in" description="Enter your email and password to sign in." />
            <TextField>
              <Label>Email</Label>
              <Input type="email" placeholder="you@domain.com" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <Input type="password" placeholder="Shhh..." />
            </TextField>
            <Checkbox>
              <Label>Remember me</Label>
              <Description>
                Keep me signed in on this device. This will set a cookie to remember your
                preferences.
              </Description>
            </Checkbox>
            <Button>Sign in</Button>
          </div>
        </BlocksCard>

        <BlocksCard className="w-full lg:w-2/3">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Products"
              description="Manage product details, pricing, and availability."
            />
            <TableExpandableDemo />
          </div>
        </BlocksCard>
        <BlocksCard className="hidden lg:block lg:w-1/2">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Packages"
              description="Select a package to view details, pricing, and availability."
            />
            <ChoiceboxDemo />
          </div>
        </BlocksCard>
        <BlocksCard className="w-full lg:w-2/5">
          <div className="flex w-full flex-col gap-y-6">
            <CardHeader
              title="Settings"
              description="Update your profile information and preferences."
            />
            <TextField>
              <Label>Name</Label>
              <Input placeholder="Irsyad A. Panjaitan" />
            </TextField>
            <TextField>
              <Label>Email</Label>
              <Input type="email" placeholder="you@domain.com" />
            </TextField>
            <TextField>
              <Label>About me</Label>
              <Textarea placeholder="Introduce your self." />
            </TextField>
            <Button className="self-end">Save changes</Button>
          </div>
        </BlocksCard>
      </PageContainer>
      <PageContainer className="mt-6">
        <CardHeader
          className="max-w-lg"
          title="Visualizations"
          description="Explore various data visualizations to represent information effectively."
        />
      </PageContainer>
      <PageContainer className="mt-6 flex snap-x gap-4 overflow-x-auto pb-6 *:shrink-0 *:snap-center **:data-[slot=card]:border-transparent **:data-[slot=card]:bg-transparent **:data-[slot=card]:shadow-none sm:pb-12 **:data-[slot=card]:[--card-spacing:--spacing(4)] sm:**:data-[slot=card]:[--card-spacing:--spacing(6)]">
        <div className="w-full rounded-lg border lg:w-1/2 dark:bg-secondary/50">
          <AreaChartDemo />
        </div>
        <div className="w-full rounded-lg border lg:w-1/2 dark:bg-secondary/50">
          <LineChartDemo />
        </div>
        <div className="w-full rounded-lg border lg:w-1/2 dark:bg-secondary/50">
          <BarChartDemo />
        </div>
        <div className="w-full rounded-lg border lg:w-1/3 dark:bg-secondary/50">
          <BarListDemo />
        </div>
      </PageContainer>
    </div>
  )
}

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

function TableExpandableDemo() {
  return (
    <>
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
    </>
  )
}

function getStatusVariant(status: string) {
  if (status === "Blocked") return "danger"
  if (status === "In progress") return "secondary"
  if (status === "Planned") return "info"
  if (status === "Done") return "success"
  return "primary"
}
