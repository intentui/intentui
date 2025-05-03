"use client"

import React from "react"

import { IconChevronLgDown, IconHamburger } from "@intentui/icons"
import type {
  CellProps,
  ColumnProps,
  ColumnResizerProps,
  TableHeaderProps as HeaderProps,
  RowProps,
  TableBodyProps,
  TableProps as TablePrimitiveProps,
} from "react-aria-components"
import {
  Button,
  Cell,
  Collection,
  Column,
  ColumnResizer as ColumnResizerPrimitive,
  ResizableTableContainer,
  Row,
  TableBody as TableBodyPrimitive,
  TableHeader as TableHeaderPrimitive,
  Table as TablePrimitive,
  useTableOptions,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { composeTailwindRenderProps } from "@/components/ui/primitive"
import { twMerge } from "tailwind-merge"
import { Checkbox } from "./checkbox"

interface TableProps extends TablePrimitiveProps {
  className?: string
  allowResize?: boolean
}

const TableContext = React.createContext<TableProps>({
  allowResize: false,
})

const useTableContext = () => React.useContext(TableContext)

const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <TableContext.Provider value={props}>
      <div className="relative w-full overflow-auto **:data-[slot=table-resizable-container]:overflow-auto">
        {props.allowResize ? (
          <ResizableTableContainer>
            <TablePrimitive
              {...props}
              className={twMerge(
                "table w-full min-w-full caption-bottom border-spacing-0 text-sm outline-hidden [--table-selected-bg:color-mix(in_oklab,var(--color-primary)_5%,white_90%)] **:data-drop-target:border **:data-drop-target:border-primary dark:[--table-selected-bg:color-mix(in_oklab,var(--color-primary)_25%,black_70%)]",
                className,
              )}
            >
              {children}
            </TablePrimitive>
          </ResizableTableContainer>
        ) : (
          <TablePrimitive
            {...props}
            className={twMerge(
              "table w-full min-w-full caption-bottom border-spacing-0 text-sm outline-hidden [--table-selected-bg:color-mix(in_oklab,var(--color-primary)_5%,white_90%)] **:data-drop-target:border **:data-drop-target:border-primary dark:[--table-selected-bg:color-mix(in_oklab,var(--color-primary)_25%,black_70%)]",
              className,
            )}
          >
            {children}
          </TablePrimitive>
        )}
      </div>
    </TableContext.Provider>
  )
}

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
  <ColumnResizerPrimitive
    {...props}
    className={composeTailwindRenderProps(
      className,
      "absolute top-0 right-0 bottom-0 grid w-px &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize touch-none place-content-center px-1 data-[resizable-direction=both]:cursor-ew-resize [&[data-resizing]>div]:bg-primary",
    )}
  >
    <div className="h-full w-px bg-border py-3" />
  </ColumnResizerPrimitive>
)

const TableBody = <T extends object>(props: TableBodyProps<T>) => (
  <TableBodyPrimitive
    data-slot="table-body"
    {...props}
    className={twMerge("[&_.tr:last-child]:border-0")}
  />
)

interface TableCellProps extends CellProps {
  className?: string
}

const cellStyles = tv({
  base: "group whitespace-nowrap px-3 py-3 outline-hidden",
  variants: {
    allowResize: {
      true: "overflow-hidden truncate",
    },
  },
})
const TableCell = ({ children, className, ...props }: TableCellProps) => {
  const { allowResize } = useTableContext()
  return (
    <Cell data-slot="table-cell" {...props} className={cellStyles({ allowResize, className })}>
      {children}
    </Cell>
  )
}

const columnStyles = tv({
  base: "relative allows-sorting:cursor-pointer whitespace-nowrap px-3 py-3 text-left font-medium outline-hidden data-dragging:cursor-grabbing [&:has([slot=selection])]:pr-0",
  variants: {
    isResizable: {
      true: "overflow-hidden truncate",
    },
  },
})

interface TableColumnProps extends ColumnProps {
  className?: string
  isResizable?: boolean
}

const TableColumn = ({ isResizable = false, className, ...props }: TableColumnProps) => {
  return (
    <Column
      data-slot="table-column"
      {...props}
      className={columnStyles({
        isResizable,
        className,
      })}
    >
      {({ allowsSorting, sortDirection, isHovered }) => (
        <div className="flex items-center gap-2 **:data-[slot=icon]:shrink-0">
          <>
            {props.children as React.ReactNode}
            {allowsSorting && (
              <span
                className={twMerge(
                  "grid size-[1.15rem] flex-none shrink-0 place-content-center rounded bg-secondary text-fg *:data-[slot=icon]:size-3.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:transition-transform *:data-[slot=icon]:duration-200",
                  isHovered ? "bg-secondary-fg/10" : "",
                  className,
                )}
              >
                <IconChevronLgDown className={sortDirection === "ascending" ? "rotate-180" : ""} />
              </span>
            )}
            {isResizable && <ColumnResizer />}
          </>
        </div>
      )}
    </Column>
  )
}

interface TableHeaderProps<T extends object> extends HeaderProps<T> {
  className?: string
  ref?: React.Ref<HTMLTableSectionElement>
}

const TableHeader = <T extends object>({
  children,
  ref,
  className,
  columns,
  ...props
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <TableHeaderPrimitive
      data-slot="table-header"
      ref={ref}
      className={twMerge("border-b", className)}
      {...props}
    >
      {allowsDragging && <Column className="w-0 max-w-6" />}
      {selectionBehavior === "toggle" && (
        <Column className="w-0 max-w-8 pl-4">
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  )
}

interface TableRowProps<T extends object> extends RowProps<T> {
  className?: string
  ref?: React.Ref<HTMLTableRowElement>
}

const TableRow = <T extends object>({
  children,
  className,
  columns,
  id,
  ref,
  ...props
}: TableRowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()
  return (
    <Row
      ref={ref}
      data-slot="table-row"
      id={id}
      {...props}
      className={twMerge(
        "tr group relative cursor-default border-b bg-bg selected:bg-(--table-selected-bg) text-muted-fg outline-hidden ring-primary selected:hover:bg-(--table-selected-bg)/70 focus:ring-0 focus-visible:ring-1 dark:selected:hover:bg-[color-mix(in_oklab,var(--color-primary)_30%,black_70%)]",
        ((props.href && !props.isDisabled) || props.onAction) &&
          "cursor-pointer hover:bg-secondary/50 hover:text-secondary-fg",
        className,
      )}
    >
      {allowsDragging && (
        <Cell className="group cursor-grab pr-0 ring-primary data-dragging:cursor-grabbing">
          <Button
            className="relative bg-transparent py-1.5 pl-3.5 pressed:text-fg text-muted-fg"
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

Table.Body = TableBody
Table.Cell = TableCell
Table.Column = TableColumn
Table.Header = TableHeader
Table.Row = TableRow

export type { TableProps, TableBodyProps, TableCellProps, TableColumnProps, TableRowProps }
export { Table }
