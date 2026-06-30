'use client'

import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from '@/components/ui/menu'
import {
  Pagination,
  PaginationFirst,
  PaginationGap,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSection,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function CardTableDemo() {
  return (
    <Card className="[--card-spacing:var(--gutter)]">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage users, groups, and roles.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table
          bleed
          className="[--gutter:var(--card-spacing)] sm:[--gutter:var(--card-spacing)]"
          aria-label="Users"
        >
          <TableHeader>
            <TableColumn className="w-0">#</TableColumn>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Gender</TableColumn>
            <TableColumn>Age</TableColumn>
            <TableColumn>Occupation</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow id={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.occupation}</TableCell>
                <TableCell className="text-end last:pr-2.5">
                  <Menu>
                    <MenuTrigger>
                      <EllipsisVerticalIcon />
                    </MenuTrigger>
                    <MenuContent placement="left top">
                      <MenuItem>
                        <EyeIcon /> View
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
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationList className="hidden md:flex">
            <PaginationFirst href="#" />
            <PaginationPrevious href="#" />
            <PaginationSection>
              <PaginationItem href="#">1</PaginationItem>
              <PaginationItem href="#">2</PaginationItem>
              <PaginationItem href="#">3</PaginationItem>
              <PaginationGap />
              <PaginationItem href="#">23</PaginationItem>
              <PaginationItem href="#" isCurrent>
                24
              </PaginationItem>
              <PaginationItem href="#">25</PaginationItem>
            </PaginationSection>

            <PaginationNext href="#" />
            <PaginationLast href="#" />
          </PaginationList>

          <PaginationList className="md:hidden">
            <PaginationFirst href="#" />
            <PaginationPrevious href="#" />
            <PaginationSection className="rounded-(--section-radius) border px-3 *:min-w-4">
              <PaginationLabel>3</PaginationLabel>
              <PaginationLabel className="text-muted-fg">/</PaginationLabel>
              <PaginationLabel>10</PaginationLabel>
            </PaginationSection>
            <PaginationNext href="#" />
            <PaginationLast href="#" />
          </PaginationList>
        </Pagination>
      </CardFooter>
    </Card>
  )
}

const users = [
  {
    id: 1,
    name: 'John Doe',
    gender: 'Male',
    age: 30,
    occupation: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    gender: 'Female',
    age: 25,
    occupation: 'Marketing Manager',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    gender: 'Male',
    age: 40,
    occupation: 'Doctor',
  },
  {
    id: 4,
    name: 'Emily Chen',
    gender: 'Female',
    age: 28,
    occupation: 'Teacher',
  },
  {
    id: 5,
    name: 'Michael Brown',
    gender: 'Male',
    age: 35,
    occupation: 'Lawyer',
  },
  {
    id: 6,
    name: 'Sarah Lee',
    gender: 'Female',
    age: 32,
    occupation: 'Designer',
  },
  {
    id: 7,
    name: 'Kevin White',
    gender: 'Male',
    age: 45,
    occupation: 'CEO',
  },
  {
    id: 8,
    name: 'Lisa Nguyen',
    gender: 'Female',
    age: 29,
    occupation: 'Engineer',
  },
  {
    id: 9,
    name: 'David Kim',
    gender: 'Male',
    age: 38,
    occupation: 'Consultant',
  },
  {
    id: 10,
    name: 'Hannah Patel',
    gender: 'Female',
    age: 26,
    occupation: 'Writer',
  },
]
