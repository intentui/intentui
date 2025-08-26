"use client"
import { IconDotsVertical } from "@intentui/icons"
import { use, useMemo } from "react"
import { Autocomplete, AutocompleteStateContext, useFilter } from "react-aria-components"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu } from "@/components/ui/menu"
import { SearchField } from "@/components/ui/search-field"
import { Table } from "@/components/ui/table"

export default function TableDemo() {
  const { contains } = useFilter({
    sensitivity: "base",
  })
  return (
    <div className="rounded-lg border p-4">
      <Autocomplete filter={contains}>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>A list of users with search functionality.</CardDescription>
        </CardHeader>
        <div className="flex justify-end">
          <SearchField aria-label="Search" />
        </div>
        <Table className="mt-4" aria-label="Users">
          <Table.Header>
            <Table.Column className="w-0">#</Table.Column>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Joined</Table.Column>
            <Table.Column />
          </Table.Header>
          <Table.Body items={users}>
            {(item) => (
              <Table.Row id={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell textValue={item.name}>
                  <AutocompleteHighlight>{item.name}</AutocompleteHighlight>
                </Table.Cell>
                <Table.Cell textValue={item.email}>
                  <AutocompleteHighlight>{item.email}</AutocompleteHighlight>
                </Table.Cell>
                <Table.Cell textValue={item.role}>
                  <AutocompleteHighlight>{item.role}</AutocompleteHighlight>
                </Table.Cell>
                <Table.Cell textValue={item.status}>
                  <AutocompleteHighlight>{item.status}</AutocompleteHighlight>
                </Table.Cell>
                <Table.Cell>{item.joined}</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-end">
                    <Menu>
                      <Menu.Trigger className="size-6">
                        <IconDotsVertical />
                      </Menu.Trigger>
                      <Menu.Content aria-label="Actions" placement="left top">
                        <Menu.Item>View</Menu.Item>
                        <Menu.Item>Edit</Menu.Item>
                        <Menu.Separator />
                        <Menu.Item isDanger>Delete</Menu.Item>
                      </Menu.Content>
                    </Menu>
                  </div>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Autocomplete>
    </div>
  )
}

const users = [
  {
    id: "1",
    name: "Justice Larkin",
    email: "justice.larkin@example.com",
    role: "Admin",
    status: "Active",
    joined: "2022-01-15",
  },
  {
    id: "2",
    name: "Megan Smith",
    email: "megan.smith@example.com",
    role: "Editor",
    status: "Active",
    joined: "2022-03-12",
  },
  {
    id: "3",
    name: "Daniel Wu",
    email: "daniel.wu@example.com",
    role: "Viewer",
    status: "Inactive",
    joined: "2022-04-08",
  },
  {
    id: "4",
    name: "Sophia Hernandez",
    email: "sophia.hernandez@example.com",
    role: "Admin",
    status: "Active",
    joined: "2022-05-25",
  },
  {
    id: "5",
    name: "Liam Johnson",
    email: "liam.johnson@example.com",
    role: "Editor",
    status: "Suspended",
    joined: "2022-06-14",
  },
  {
    id: "6",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "Viewer",
    status: "Active",
    joined: "2022-07-09",
  },
  {
    id: "7",
    name: "Noah Miller",
    email: "noah.miller@example.com",
    role: "Admin",
    status: "Active",
    joined: "2022-08-02",
  },
  {
    id: "8",
    name: "Ava Wilson",
    email: "ava.wilson@example.com",
    role: "Editor",
    status: "Inactive",
    joined: "2022-09-19",
  },
  {
    id: "9",
    name: "Ethan Davis",
    email: "ethan.davis@example.com",
    role: "Viewer",
    status: "Active",
    joined: "2022-10-21",
  },
  {
    id: "10",
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    role: "Editor",
    status: "Active",
    joined: "2022-11-30",
  },
]

function AutocompleteHighlight({ children }: { children: string }) {
  const state = use(AutocompleteStateContext)!
  const index = useMemo(() => {
    // TODO: use a better case-insensitive matching algorithm
    return children.toLowerCase().indexOf(state.inputValue.toLowerCase())
  }, [children, state.inputValue])

  if (index >= 0) {
    return (
      <>
        {children.slice(0, index)}
        <mark className="bg-primary text-primary-fg">
          {children.slice(index, index + state.inputValue.length)}
        </mark>
        {children.slice(index + state.inputValue.length)}
      </>
    )
  }

  return children
}
