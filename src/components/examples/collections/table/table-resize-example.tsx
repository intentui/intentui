'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TableResizeDemo() {
  return (
    <div className="rounded-lg border p-4">
      <Table allowResize aria-label="Vocalists">
        <TableHeader>
          <TableColumn className="max-w-10">ID</TableColumn>
          <TableColumn isRowHeader isResizable>
            Name
          </TableColumn>
          <TableColumn isResizable>Email</TableColumn>
          <TableColumn>Age</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn isResizable>Band</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow id={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.band}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

const items = [
  {
    id: 1,
    name: 'Randy Blythe',
    email: 'randy.blythe@example.com',
    age: 52,
    role: 'Vocalist',
    band: 'Lamb of God',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Phil Anselmo',
    email: 'phil.anselmo@example.com',
    age: 55,
    role: 'Vocalist',
    band: 'Pantera',
    status: 'Active',
  },
  {
    id: 3,
    name: 'George Fisher',
    email: 'george.fisher@example.com',
    age: 53,
    role: 'Vocalist',
    band: 'Cannibal Corpse',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Corey Taylor',
    email: 'corey.taylor@example.com',
    age: 50,
    role: 'Vocalist',
    band: 'Slipknot',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Trevor Strnad',
    email: 'trevor.strnad@example.com',
    age: 41,
    role: 'Vocalist',
    band: 'The Black Dahlia Murder',
    status: 'Inactive',
  },
  {
    id: 6,
    name: 'Chuck Schuldiner',
    email: 'chuck.schuldiner@example.com',
    age: 34,
    role: 'Vocalist',
    band: 'Death',
    status: 'Deceased',
  },
  {
    id: 7,
    name: 'Mitch Lucker',
    email: 'mitch.lucker@example.com',
    age: 28,
    role: 'Vocalist',
    band: 'Suicide Silence',
    status: 'Deceased',
  },
]
