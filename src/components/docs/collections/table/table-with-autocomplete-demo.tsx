"use client"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import { use, useMemo } from "react"
import { Autocomplete, AutocompleteStateContext, useFilter } from 'react-aria-components/Autocomplete';
import { CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from "@/components/ui/menu"
import { SearchField, SearchInput } from "@/components/ui/search-field"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
          <CardAction>
            <SearchField aria-label="Search">
              <SearchInput placeholder="Search" />
            </SearchField>
          </CardAction>
        </CardHeader>
        <Table className="mt-4" aria-label="Users">
          <TableHeader>
            <TableColumn className="w-0">#</TableColumn>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Joined</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow id={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell textValue={item.name}>
                  <AutocompleteHighlight>{item.name}</AutocompleteHighlight>
                </TableCell>
                <TableCell textValue={item.email}>
                  <AutocompleteHighlight>{item.email}</AutocompleteHighlight>
                </TableCell>
                <TableCell textValue={item.role}>
                  <AutocompleteHighlight>{item.role}</AutocompleteHighlight>
                </TableCell>
                <TableCell textValue={item.status}>
                  <AutocompleteHighlight>{item.status}</AutocompleteHighlight>
                </TableCell>
                <TableCell>{item.joined}</TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Menu>
                      <MenuTrigger className="size-6">
                        <EllipsisVerticalIcon />
                      </MenuTrigger>
                      <MenuContent aria-label="Actions" placement="left top">
                        <MenuItem>View</MenuItem>
                        <MenuItem>Edit</MenuItem>
                        <MenuSeparator />
                        <MenuItem intent="danger">Delete</MenuItem>
                      </MenuContent>
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
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
