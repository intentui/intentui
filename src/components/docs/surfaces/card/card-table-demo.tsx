"use client"

import { Card } from "@/components/ui/card"
import { Menu } from "@/components/ui/menu"
import { Pagination } from "@/components/ui/pagination"
import { Table } from "@/components/ui/table"
import { IconDotsVertical, IconEye, IconHighlight, IconTrash } from "@intentui/icons"

export default function CardTableDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Users</Card.Title>
        <Card.Description>Manage users, groups, and roles.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Table
          bleed
          className="[--gutter:var(--card-spacing)] sm:[--gutter:var(--card-spacing)]"
          aria-label="Users"
        >
          <Table.Header>
            <Table.Column className="w-0">#</Table.Column>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Gender</Table.Column>
            <Table.Column>Age</Table.Column>
            <Table.Column>Occupation</Table.Column>
            <Table.Column />
          </Table.Header>
          <Table.Body items={users}>
            {(item) => (
              <Table.Row id={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.gender}</Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell>{item.occupation}</Table.Cell>
                <Table.Cell className="text-end last:pr-2.5">
                  <Menu>
                    <Menu.Trigger>
                      <IconDotsVertical />
                    </Menu.Trigger>
                    <Menu.Content placement="left top">
                      <Menu.Item>
                        <IconEye /> View
                      </Menu.Item>
                      <Menu.Item>
                        <IconHighlight /> Edit
                      </Menu.Item>
                      <Menu.Separator />
                      <Menu.Item isDanger>
                        <IconTrash /> Delete
                      </Menu.Item>
                    </Menu.Content>
                  </Menu>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Content>
      <Card.Footer>
        <Pagination>
          <Pagination.List>
            <Pagination.Item segment="first" />
            <Pagination.Item segment="previous" />
            <Pagination.Section className="rounded-lg border lg:hidden">
              <Pagination.Item segment="label">1</Pagination.Item>
              <Pagination.Item segment="separator" />
              <Pagination.Item className="text-muted-fg" segment="label">
                {users.length}
              </Pagination.Item>
            </Pagination.Section>
            <Pagination.Section className="hidden lg:flex" items={pages}>
              {(item) => (
                <Pagination.Item id={item.value.toString()} isCurrent={item.value === 4} href="#">
                  {item.value}
                </Pagination.Item>
              )}
            </Pagination.Section>
            <Pagination.Item segment="next" />
            <Pagination.Item segment="last" />
          </Pagination.List>
        </Pagination>
      </Card.Footer>
    </Card>
  )
}

const users = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 25,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Male",
    age: 40,
    occupation: "Doctor",
  },
  {
    id: 4,
    name: "Emily Chen",
    gender: "Female",
    age: 28,
    occupation: "Teacher",
  },
  {
    id: 5,
    name: "Michael Brown",
    gender: "Male",
    age: 35,
    occupation: "Lawyer",
  },
  {
    id: 6,
    name: "Sarah Lee",
    gender: "Female",
    age: 32,
    occupation: "Designer",
  },
  {
    id: 7,
    name: "Kevin White",
    gender: "Male",
    age: 45,
    occupation: "CEO",
  },
  {
    id: 8,
    name: "Lisa Nguyen",
    gender: "Female",
    age: 29,
    occupation: "Engineer",
  },
  {
    id: 9,
    name: "David Kim",
    gender: "Male",
    age: 38,
    occupation: "Consultant",
  },
  {
    id: 10,
    name: "Hannah Patel",
    gender: "Female",
    age: 26,
    occupation: "Writer",
  },
]
const pages = Array.from({ length: users.length / 2 }, (_, i) => ({ value: i + 1 }))
