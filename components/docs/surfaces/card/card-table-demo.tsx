"use client"

import { IconDotsVertical, IconEye, IconHighlight, IconTrash } from "@intentui/icons"
import { Card, Menu, Pagination, Table } from "ui"

export default function CardTableDemo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Users</Card.Title>
        <Card.Description>Manage users, groups, and roles.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Table aria-label="Users">
          <Table.Header>
            <Table.Column>#</Table.Column>
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
                <Table.Cell className="flex justify-end">
                  <Menu>
                    <Menu.Trigger>
                      <IconDotsVertical />
                    </Menu.Trigger>
                    <Menu.Content showArrow placement="left top">
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
            <Pagination.Item variant="first" />
            <Pagination.Item variant="previous" />
            <Pagination.Section className="lg:hidden rounded-lg border">
              <Pagination.Item variant="label">1</Pagination.Item>
              <Pagination.Item variant="separator" />
              <Pagination.Item className="text-muted-fg" variant="label">
                {users.length}
              </Pagination.Item>
            </Pagination.Section>
            <Pagination.Section className="lg:flex hidden" items={pages}>
              {(item) => (
                <Pagination.Item id={item.value.toString()} isCurrent={item.value === 4} href="#">
                  {item.value}
                </Pagination.Item>
              )}
            </Pagination.Section>
            <Pagination.Item variant="next" />
            <Pagination.Item variant="last" />
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
    occupation: "Software Engineer"
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 25,
    occupation: "Marketing Manager"
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Male",
    age: 40,
    occupation: "Doctor"
  },
  {
    id: 4,
    name: "Emily Chen",
    gender: "Female",
    age: 28,
    occupation: "Teacher"
  },
  {
    id: 5,
    name: "Michael Brown",
    gender: "Male",
    age: 35,
    occupation: "Lawyer"
  },
  {
    id: 6,
    name: "Sarah Lee",
    gender: "Female",
    age: 32,
    occupation: "Designer"
  },
  {
    id: 7,
    name: "Kevin White",
    gender: "Male",
    age: 45,
    occupation: "CEO"
  },
  {
    id: 8,
    name: "Lisa Nguyen",
    gender: "Female",
    age: 29,
    occupation: "Engineer"
  },
  {
    id: 9,
    name: "David Kim",
    gender: "Male",
    age: 38,
    occupation: "Consultant"
  },
  {
    id: 10,
    name: "Hannah Patel",
    gender: "Female",
    age: 26,
    occupation: "Writer"
  }
]
const pages = Array.from({ length: users.length / 2 }, (_, i) => ({ value: i + 1 }))
