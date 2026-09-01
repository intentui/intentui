'use client'

import { Table as TablePrimitive } from 'react-aria-components/Table'
import { TableLayout, Virtualizer } from 'react-aria-components/Virtualizer'
import { TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/ui/table'

const categories = ['Electronics', 'Computers', 'Accessories', 'Wearables']
const brands = ['Apple', 'Samsung', 'Dell', 'Sony']

const items = Array.from({ length: 2000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: categories[index % categories.length],
  brand: brands[index % brands.length],
  price: `$${(49 + (index % 950)).toFixed(2)}`,
  stock: 10 + ((index * 7) % 191),
}))

export default function TableVirtualizerExample() {
  return (
    <Virtualizer layout={TableLayout} layoutOptions={{ rowHeight: 41 }}>
      <TablePrimitive
        aria-label="Virtualized products"
        selectionMode="multiple"
        className="block h-96 w-full min-w-full overflow-auto rounded-lg border text-sm/6 outline-hidden [--gutter-y:--spacing(2)] [--table-selected-bg:var(--color-secondary)]/50 [&_[data-slot=table-cell]]:h-full [&_[data-slot=table-column]]:h-full [&_[data-slot=table-column]:has([slot=selection])]:flex [&_[data-slot=table-column]:has([slot=selection])]:items-center"
      >
        <TableHeader
          style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-muted)' }}
        >
          <TableColumn width={54} minWidth={54} style={{ width: 54 }}>
            #
          </TableColumn>
          <TableColumn width="2fr" isRowHeader>
            Name
          </TableColumn>
          <TableColumn width="2fr">Category</TableColumn>
          <TableColumn width="1fr">Brand</TableColumn>
          <TableColumn width="1fr">Price</TableColumn>
          <TableColumn width="1fr">Stock</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow id={item.id} className="h-full w-[inherit]">
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.stock}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </TablePrimitive>
    </Virtualizer>
  )
}
