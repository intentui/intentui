"use client"

import { Avatar } from "@/components/ui/avatar"
import { Heading } from "@/components/ui/heading"
import { Table } from "@/components/ui/table"

export default function Page() {
  return (
    <>
      <Heading>Users</Heading>
      <Table aria-label="Users" bleed className="[--gutter:var(--layout-padding)]">
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column isRowHeader>Name</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Username</Table.Column>
          <Table.Column>Phone</Table.Column>
          <Table.Column>Address</Table.Column>
          <Table.Column>City</Table.Column>
          <Table.Column>State</Table.Column>
          <Table.Column>Country</Table.Column>
          <Table.Column>Postal Code</Table.Column>
          <Table.Column>Avatar</Table.Column>
          <Table.Column>Status</Table.Column>
          <Table.Column>Role</Table.Column>
          <Table.Column>Last Login</Table.Column>
          <Table.Column>Created At</Table.Column>
          <Table.Column>Updated At</Table.Column>
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell>{item.phone}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              <Table.Cell>{item.city}</Table.Cell>
              <Table.Cell>{item.state}</Table.Cell>
              <Table.Cell>{item.country}</Table.Cell>
              <Table.Cell>{item.postalCode}</Table.Cell>
              <Table.Cell>
                <Avatar size="extra-small" src={item.avatar} alt="Avatar" />
              </Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell>{item.role}</Table.Cell>
              <Table.Cell>{new Date(item.lastLogin).toLocaleString()}</Table.Cell>
              <Table.Cell>{new Date(item.createdAt).toLocaleString()}</Table.Cell>
              <Table.Cell>{new Date(item.updatedAt).toLocaleString()}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  )
}

const users = [
  {
    id: "1",
    name: "Michael Carter",
    email: "michael.carter@example.com",
    username: "mcarter",
    phone: "+1-202-555-0173",
    address: "742 Evergreen Terrace, Springfield",
    city: "Springfield",
    state: "Illinois",
    country: "USA",
    postalCode: "62704",
    avatar: "https://i.pravatar.cc/150?u=1",
    status: "active",
    role: "admin",
    lastLogin: "2025-05-10T13:42:00Z",
    createdAt: "2023-01-10T10:15:00Z",
    updatedAt: "2025-04-30T09:00:00Z",
  },
  {
    id: "2",
    name: "Ava Thompson",
    email: "ava.thompson@example.com",
    username: "avt",
    phone: "+44-7911-123456",
    address: "19 Church Street, London",
    city: "London",
    state: "England",
    country: "UK",
    postalCode: "SW1A 1AA",
    avatar: "https://i.pravatar.cc/150?u=2",
    status: "pending",
    role: "editor",
    lastLogin: "2025-05-08T16:00:00Z",
    createdAt: "2022-12-05T09:00:00Z",
    updatedAt: "2025-04-29T13:00:00Z",
  },
  {
    id: "3",
    name: "Liam Nguyen",
    email: "liam.nguyen@example.com",
    username: "liamng",
    phone: "+61-401-234-567",
    address: "22 Collins Street, Melbourne",
    city: "Melbourne",
    state: "Victoria",
    country: "Australia",
    postalCode: "3000",
    avatar: "https://i.pravatar.cc/150?u=3",
    status: "inactive",
    role: "viewer",
    lastLogin: "2025-04-20T14:30:00Z",
    createdAt: "2021-06-15T11:45:00Z",
    updatedAt: "2025-04-01T08:10:00Z",
  },
  {
    id: "4",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    username: "smartinez",
    phone: "+1-305-555-0199",
    address: "301 Ocean Drive, Miami",
    city: "Miami",
    state: "Florida",
    country: "USA",
    postalCode: "33139",
    avatar: "https://i.pravatar.cc/150?u=4",
    status: "active",
    role: "manager",
    lastLogin: "2025-05-10T10:22:00Z",
    createdAt: "2022-04-08T13:30:00Z",
    updatedAt: "2025-05-01T11:50:00Z",
  },
  {
    id: "5",
    name: "Noah Kim",
    email: "noah.kim@example.com",
    username: "noahk",
    phone: "+82-10-1234-5678",
    address: "55 Gangnam-daero, Seoul",
    city: "Seoul",
    state: "Seoul",
    country: "South Korea",
    postalCode: "06000",
    avatar: "https://i.pravatar.cc/150?u=5",
    status: "banned",
    role: "viewer",
    lastLogin: "2025-03-15T17:00:00Z",
    createdAt: "2020-09-21T10:00:00Z",
    updatedAt: "2025-02-18T15:30:00Z",
  },
  {
    id: "6",
    name: "Emma Dubois",
    email: "emma.dubois@example.com",
    username: "emmad",
    phone: "+33-6-12-34-56-78",
    address: "10 Rue de Rivoli, Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    postalCode: "75001",
    avatar: "https://i.pravatar.cc/150?u=6",
    status: "active",
    role: "admin",
    lastLogin: "2025-05-09T12:00:00Z",
    createdAt: "2023-07-22T08:00:00Z",
    updatedAt: "2025-05-09T12:15:00Z",
  },
  {
    id: "7",
    name: "Ethan Schmidt",
    email: "ethan.schmidt@example.com",
    username: "ethansch",
    phone: "+49-171-1234567",
    address: "5 Alexanderplatz, Berlin",
    city: "Berlin",
    state: "Berlin",
    country: "Germany",
    postalCode: "10178",
    avatar: "https://i.pravatar.cc/150?u=7",
    status: "active",
    role: "developer",
    lastLogin: "2025-05-07T18:30:00Z",
    createdAt: "2023-10-10T09:30:00Z",
    updatedAt: "2025-04-20T08:40:00Z",
  },
  {
    id: "8",
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    username: "bellar",
    phone: "+39-320-1234567",
    address: "Via Roma 12, Milan",
    city: "Milan",
    state: "Lombardy",
    country: "Italy",
    postalCode: "20100",
    avatar: "https://i.pravatar.cc/150?u=8",
    status: "pending",
    role: "editor",
    lastLogin: "2025-04-28T20:15:00Z",
    createdAt: "2022-05-15T14:00:00Z",
    updatedAt: "2025-04-30T07:10:00Z",
  },
  {
    id: "9",
    name: "Lucas Silva",
    email: "lucas.silva@example.com",
    username: "lucsilva",
    phone: "+55-11-91234-5678",
    address: "Av. Paulista, São Paulo",
    city: "São Paulo",
    state: "SP",
    country: "Brazil",
    postalCode: "01311-000",
    avatar: "https://i.pravatar.cc/150?u=9",
    status: "active",
    role: "manager",
    lastLogin: "2025-05-03T08:00:00Z",
    createdAt: "2021-03-05T10:00:00Z",
    updatedAt: "2025-04-10T10:30:00Z",
  },
  {
    id: "10",
    name: "Yuki Tanaka",
    email: "yuki.tanaka@example.com",
    username: "yuki_t",
    phone: "+81-90-1234-5678",
    address: "1 Chome-1-2 Oshiage, Tokyo",
    city: "Tokyo",
    state: "Tokyo",
    country: "Japan",
    postalCode: "131-0045",
    avatar: "https://i.pravatar.cc/150?u=10",
    status: "active",
    role: "designer",
    lastLogin: "2025-05-11T02:45:00Z",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2025-05-10T22:00:00Z",
  },
]
