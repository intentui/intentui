"use client"

import React from "react"

import { cn } from "@/utils/classes"
import { IconChevronLgDown, IconHamburger } from "@intentui/icons"
import type {
  CellProps,
  ColumnProps,
  ColumnResizerProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps as TablePrimitiveProps
} from "react-aria-components"
import {
  Button,
  Cell,
  Collection,
  Column,
  ColumnResizer as ColumnResizerPrimitive,
  composeRenderProps,
  ResizableTableContainer,
  Row,
  Table as TablePrimitive,
  TableBody,
  TableHeader,
  useTableOptions
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Checkbox } from "./checkbox"

const table = tv({
  slots: {
    root: "table [&_[data-drop-target]]:border [&_[data-drop-target]]:border-primary w-full caption-bottom border-spacing-0 text-sm outline-none",
    header: "border-b x32",
    row: "tr group relative cursor-default border-b text-fg/70 outline-none ring-primary focus-visible:ring-1 selected:bg-accent-subtle selected:hover:bg-accent-subtle/50 dark:selected:hover:bg-accent-subtle/60",
    cellIcon:
      "flex-none rounded bg-secondary text-fg [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:size-3.5 [&>[data-slot=icon]]:transition-transform [&>[data-slot=icon]]:duration-200 size-[1.15rem] grid place-content-center shrink-0",
    columnResizer: [
      "touch-none absolute [&[data-resizing]>div]:bg-primary right-0 top-0 bottom-0 w-px px-1 grid place-content-center",
      "[&[data-resizable-direction=both]]:cursor-ew-resize &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize"
    ]
  }
})

const { root, header, row, cellIcon, columnResizer } = table()

interface TableProps extends TablePrimitiveProps {
  className?: string
  allowResize?: boolean
}

const TableContext = React.createContext<TableProps>({
  allowResize: false
})

const useTableContext = () => React.useContext(TableContext)

const Table = ({ children, className, ...props }: TableProps) => (
  <TableContext.Provider value={props}>
    <div className="relative w-full overflow-auto">
      {props.allowResize ? (
        <ResizableTableContainer className="overflow-auto">
          <TablePrimitive {...props} className={root({ className })}>
            {children}
          </TablePrimitive>
        </ResizableTableContainer>
      ) : (
        <TablePrimitive {...props} className={root({ className })}>
          {children}
        </TablePrimitive>
      )}
    </div>
  </TableContext.Provider>
)

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
  <ColumnResizerPrimitive
    {...props}
    className={composeRenderProps(className, (className, renderProps) =>
      columnResizer({
        ...renderProps,
        className
      })
    )}
  >
    <div className="bg-border h-full w-px py-3" />
  </ColumnResizerPrimitive>
)

const Body = <T extends object>(props: TableBodyProps<T>) => (
  <TableBody {...props} className={cn("[&_.tr:last-child]:border-0")} />
)

interface TableCellProps extends CellProps {
  className?: string
}

const cellStyles = tv({
  base: "group px-3 py-3 outline-none",
  variants: {
    allowResize: {
      true: "overflow-hidden truncate"
    }
  }
})
const TableCell = ({ children, className, ...props }: TableCellProps) => {
  const { allowResize } = useTableContext()
  return (
    <Cell {...props} className={cellStyles({ allowResize, className })}>
      {children}
    </Cell>
  )
}

const columnStyles = tv({
  base: "whitespace-nowrap relative allows-sorting:cursor-pointer px-3 py-3 text-left dragging:cursor-grabbing font-medium outline-none [&:has([slot=selection])]:pr-0",
  variants: {
    isResizable: {
      true: "overflow-hidden truncate"
    }
  }
})

interface TableColumnProps extends ColumnProps {
  className?: string
  isResizable?: boolean
}

const TableColumn = ({ isResizable = false, className, ...props }: TableColumnProps) => {
  return (
    <Column
      {...props}
      className={columnStyles({
        isResizable,
        className
      })}
    >
      {({ allowsSorting, sortDirection, isHovered }) => (
        <div className="flex [&_[data-slot=icon]]:shrink-0 items-center gap-2">
          <>
            {props.children as React.ReactNode}
            {allowsSorting && (
              <>
                <span className={cellIcon({ className: isHovered ? "bg-secondary-fg/10" : "" })}>
                  <IconChevronLgDown
                    className={sortDirection === "ascending" ? "rotate-180" : ""}
                  />
                </span>
              </>
            )}
            {isResizable && <ColumnResizer />}
          </>
        </div>
      )}
    </Column>
  )
}

interface HeaderProps<T extends object> extends TableHeaderProps<T> {
  className?: string
}

const Header = <T extends object>({ children, className, columns, ...props }: HeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <TableHeader {...props} className={header({ className })}>
      {allowsDragging && <Column className="w-0" />}
      {selectionBehavior === "toggle" && (
        <Column className="pl-4 w-0">
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeader>
  )
}

interface TableRowProps<T extends object> extends RowProps<T> {
  className?: string
}

const TableRow = <T extends object>({
  children,
  className,
  columns,
  id,
  ...props
}: TableRowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()
  return (
    <Row
      id={id}
      {...props}
      className={row({
        className: "href" in props ? cn("cursor-pointer hover:bg-secondary/50", className) : ""
      })}
    >
      {allowsDragging && (
        <Cell className="ring-primary pr-0 group cursor-grab dragging:cursor-grabbing">
          <Button
            className="relative bg-transparent pl-3.5 py-1.5 text-muted-fg pressed:text-fg"
            slot="drag"
          >
            <IconHamburger />
          </Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell className="pl-4">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block"
          />
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

Table.Body = Body
Table.Cell = TableCell
Table.Column = TableColumn
Table.Header = Header
Table.Row = TableRow

export { Table }
