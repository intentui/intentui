"use client"

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { createContext, use } from "react"
import { Button } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Group } from "react-aria-components/Group"
import type {
  CellProps,
  ColumnProps,
  ColumnResizerProps,
  TableHeaderProps as HeaderProps,
  RowProps,
  TableBodyProps,
  TableProps as TablePrimitiveProps,
} from "react-aria-components/Table"
import {
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
} from "react-aria-components/Table"
import { twJoin, twMerge } from "tailwind-merge"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { cx } from "@/lib/primitive"
import { Checkbox } from "./checkbox"

interface TableProps extends Omit<TablePrimitiveProps, "className"> {
  allowResize?: boolean
  className?: string
  bleed?: boolean
  grid?: boolean
  striped?: boolean
  ref?: React.Ref<HTMLTableElement>
}

const TableContext = createContext<TableProps>({
  allowResize: false,
})

const useTableContext = () => use(TableContext)

const Root = (props: TableProps) => {
  return (
    <TablePrimitive
      className="w-full min-w-full caption-bottom text-sm/6 outline-hidden [--table-selected-bg:var(--color-secondary)]/50"
      {...props}
    />
  )
}

const Table = ({
  allowResize,
  className,
  bleed = false,
  grid = false,
  striped = false,
  ref,
  ...props
}: TableProps) => {
  return (
    <TableContext.Provider value={{ allowResize, bleed, grid, striped }}>
      <div className="flow-root">
        <div
          className={twMerge(
            "relative -mx-(--gutter) overflow-x-auto whitespace-nowrap [--gutter-y:--spacing(2)] has-data-[slot=table-resizable-container]:overflow-auto",
            className,
          )}
        >
          <div
            className={twJoin("inline-block min-w-full align-middle", !bleed && "sm:px-(--gutter)")}
          >
            {allowResize ? (
              <ResizableTableContainer data-slot="table-resizable-container">
                <Root ref={ref} {...props} />
              </ResizableTableContainer>
            ) : (
              <Root {...props} ref={ref} />
            )}
          </div>
        </div>
      </div>
    </TableContext.Provider>
  )
}

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
  <ColumnResizerPrimitive
    {...props}
    className={cx(
      "absolute end-0 top-0 bottom-0 grid w-px &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize resizable-both:cursor-ew-resize touch-none place-content-center px-1 [&[data-resizing]>div]:bg-primary",
      className,
    )}
  >
    <div className="h-full w-px bg-border py-(--gutter-y)" />
  </ColumnResizerPrimitive>
)

const TableBody = <T extends object>({ renderEmptyState, ...props }: TableBodyProps<T>) => (
  <TableBodyPrimitive
    data-slot="table-body"
    renderEmptyState={(state) => (
      <>
        {renderEmptyState ? (
          renderEmptyState(state)
        ) : (
          <div aria-hidden className="relative flex h-72 items-center justify-center md:h-100">
            <div
              aria-hidden
              className="absolute top-1/2 m-auto grid size-15 -translate-y-1/2 place-content-center rounded-full border border-border/50 md:size-20"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.69098 5.27849C5.13311 4.48897 5.96736 4 6.87225 4H17.1278C18.0326 4 18.8669 4.48898 19.309 5.27849L22.6813 11.3004C22.8903 11.6736 23 12.0941 23 12.5219V17.5C23 18.8807 21.8807 20 20.5 20H3.5C2.11929 20 1 18.8807 1 17.5V12.5219C1 12.0941 1.10974 11.6736 1.31874 11.3004L4.69098 5.27849ZM22 13H16.5C16.0279 13 15.5833 13.2223 15.3 13.6L15 14C14.5279 14.6295 13.7869 15 13 15H11C10.2131 15 9.47214 14.6295 9 14L8.7 13.6C8.41672 13.2223 7.97214 13 7.5 13H2V17.5C2 18.3284 2.67157 19 3.5 19H20.5C21.3284 19 22 18.3284 22 17.5V13Z"
                  fill="currentColor"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-20 size-5 text-muted-fg/50"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 5.5H18.5C19.6046 5.5 20.5 6.39543 20.5 7.5V10.5M3.5 7.5V5.5C3.5 4.39543 4.39543 3.5 5.5 3.5H14.5C15.6046 3.5 16.5 4.39543 16.5 5.5V10.5M3.5 7.5V7.5C2.94772 7.5 2.5 7.94772 2.5 8.5V18.5C2.5 19.6046 3.39543 20.5 4.5 20.5H19.5C20.6046 20.5 21.5 19.6046 21.5 18.5V11.5C21.5 10.9477 21.0523 10.5 20.5 10.5V10.5M3.5 7.5H7.42157C7.95201 7.5 8.46071 7.71071 8.83579 8.08579L10.6642 9.91421C11.0393 10.2893 11.548 10.5 12.0784 10.5H16.5M20.5 10.5H16.5"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -start-10 top-0 size-5 text-muted-fg/80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.5 19.5H4.5C3.39543 19.5 2.5 18.6046 2.5 17.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H8.92963C9.59834 3.5 10.2228 3.8342 10.5937 4.3906L11.4063 5.6094C11.7772 6.1658 12.4017 6.5 13.0704 6.5H19.5C20.6046 6.5 21.5 7.39543 21.5 8.5V10.5M18.5 13.5V16.5M18.5 16.5V19.5M18.5 16.5H15.5M18.5 16.5H21.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -start-20 top-16 size-5 text-muted-fg/70"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.4729 15.5H17.5C16.3954 15.5 15.5 16.3954 15.5 17.5V20.4729M20.4729 15.5C20.4908 15.3922 20.5 15.2823 20.5 15.1716V5.5C20.5 4.39543 19.6046 3.5 18.5 3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V18.5C3.5 19.6046 4.39543 20.5 5.5 20.5H15.1716C15.2823 20.5 15.3922 20.4908 15.5 20.4729M20.4729 15.5C20.4048 15.9086 20.211 16.289 19.9142 16.5858L16.5858 19.9142C16.289 20.211 15.9086 20.4048 15.5 20.4729M8.5 8.5H15.5M8.5 12.5H11.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -end-24 top-16 size-5 text-muted-fg/50"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.5 13.5H12.5M8.5 17.5H15.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  d="M13 3V7C13 8.10457 13.8954 9 15 9H19"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 2.5H12.1716C12.702 2.5 13.2107 2.71071 13.5858 3.08579L18.9142 8.41421C19.2893 8.78929 19.5 9.29799 19.5 9.82843V19.5C19.5 20.6046 18.6046 21.5 17.5 21.5H6.5C5.39543 21.5 4.5 20.6046 4.5 19.5V4.5C4.5 3.39543 5.39543 2.5 6.5 2.5Z"
                  stroke="currentColor"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute start-24 top-0 size-5 text-muted-fg/80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.5 4.5V8.5H21.5M9.5 4.5H4.5C3.39543 4.5 2.5 5.39543 2.5 6.5V17.5C2.5 18.6046 3.39543 19.5 4.5 19.5H19.5C20.6046 19.5 21.5 18.6046 21.5 17.5V8.5M9.5 4.5H15.5M21.5 8.5V6.5C21.5 5.39543 20.6046 4.5 19.5 4.5H15.5M15.5 4.5V8.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -end-20 -top-20 size-5 text-muted-fg/80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.5 11V8.5C20.5 7.39543 19.6046 6.5 18.5 6.5H12.5352C12.2008 6.5 11.8886 6.3329 11.7031 6.0547L10.5937 4.3906C10.2228 3.8342 9.59834 3.5 8.92963 3.5H4.5C3.39543 3.5 2.5 4.39543 2.5 5.5V17.784C2.5 18.7317 3.26829 19.5 4.21601 19.5M20.5 11H9.49648C8.60926 11 7.82809 11.5845 7.57774 12.4357L5.8623 18.2682C5.6475 18.9985 4.97725 19.5 4.21601 19.5M20.5 11H20.9135C21.5811 11 22.0613 11.6417 21.8729 12.2822L20.1723 18.0643C19.9219 18.9155 19.1407 19.5 18.2535 19.5H4.21601"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -start-20 -top-10 size-5 text-muted-fg/50"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.59202 20.282L4.81901 19.8365H4.81901L4.59202 20.282ZM3.71799 19.408L4.16349 19.181H4.16349L3.71799 19.408ZM20.282 19.408L19.8365 19.181V19.181L20.282 19.408ZM19.408 20.282L19.181 19.8365H19.181L19.408 20.282ZM20.282 4.59202L19.8365 4.81901V4.81901L20.282 4.59202ZM19.408 3.71799L19.181 4.16349V4.16349L19.408 3.71799ZM3.71799 4.59202L3.27248 4.36502L3.27248 4.36502L3.71799 4.59202ZM4.59202 3.71799L4.36502 3.27248L4.36502 3.27248L4.59202 3.71799ZM20 6.7V17.3H21V6.7H20ZM17.3 20H6.7V21H17.3V20ZM4 17.3V6.7H3V17.3H4ZM6.7 4H17.3V3H6.7V4ZM6.7 20C6.1317 20 5.73554 19.9996 5.42712 19.9744C5.12454 19.9497 4.95069 19.9036 4.81901 19.8365L4.36502 20.7275C4.66117 20.8784 4.98126 20.9413 5.34569 20.9711C5.70428 21.0004 6.1482 21 6.7 21V20ZM3 17.3C3 17.8518 2.99961 18.2957 3.02891 18.6543C3.05868 19.0187 3.12159 19.3388 3.27248 19.635L4.16349 19.181C4.0964 19.0493 4.05031 18.8755 4.02559 18.5729C4.00039 18.2645 4 17.8683 4 17.3H3ZM4.81901 19.8365C4.53677 19.6927 4.3073 19.4632 4.16349 19.181L3.27248 19.635C3.51217 20.1054 3.89462 20.4878 4.36502 20.7275L4.81901 19.8365ZM20 17.3C20 17.8683 19.9996 18.2645 19.9744 18.5729C19.9497 18.8755 19.9036 19.0493 19.8365 19.181L20.7275 19.635C20.8784 19.3388 20.9413 19.0187 20.9711 18.6543C21.0004 18.2957 21 17.8518 21 17.3H20ZM17.3 21C17.8518 21 18.2957 21.0004 18.6543 20.9711C19.0187 20.9413 19.3388 20.8784 19.635 20.7275L19.181 19.8365C19.0493 19.9036 18.8755 19.9497 18.5729 19.9744C18.2645 19.9996 17.8683 20 17.3 20V21ZM19.8365 19.181C19.6927 19.4632 19.4632 19.6927 19.181 19.8365L19.635 20.7275C20.1054 20.4878 20.4878 20.1054 20.7275 19.635L19.8365 19.181ZM21 6.7C21 6.1482 21.0004 5.70428 20.9711 5.34569C20.9413 4.98126 20.8784 4.66117 20.7275 4.36502L19.8365 4.81901C19.9036 4.95069 19.9497 5.12454 19.9744 5.42712C19.9996 5.73554 20 6.1317 20 6.7H21ZM17.3 4C17.8683 4 18.2645 4.00039 18.5729 4.02559C18.8755 4.05031 19.0493 4.0964 19.181 4.16349L19.635 3.27248C19.3388 3.12159 19.0187 3.05868 18.6543 3.02891C18.2957 2.99961 17.8518 3 17.3 3V4ZM20.7275 4.36502C20.4878 3.89462 20.1054 3.51217 19.635 3.27248L19.181 4.16349C19.4632 4.3073 19.6927 4.53677 19.8365 4.81901L20.7275 4.36502ZM4 6.7C4 6.1317 4.00039 5.73554 4.02559 5.42712C4.05031 5.12454 4.0964 4.95069 4.16349 4.81901L3.27248 4.36502C3.12159 4.66117 3.05868 4.98126 3.02891 5.34569C2.99961 5.70428 3 6.1482 3 6.7H4ZM6.7 3C6.1482 3 5.70428 2.99961 5.34569 3.02891C4.98126 3.05868 4.66117 3.12159 4.36502 3.27248L4.81901 4.16349C4.95069 4.0964 5.12454 4.05031 5.42712 4.02559C5.73554 4.00039 6.1317 4 6.7 4V3ZM4.16349 4.81901C4.3073 4.53677 4.53677 4.3073 4.81901 4.16349L4.36502 3.27248C3.89462 3.51217 3.51217 3.89462 3.27248 4.36502L4.16349 4.81901Z"
                  fill="currentColor"
                />
                <path
                  d="M12 14H11.5V15H12V14ZM20.5 15H21V14H20.5V15ZM12 15H20.5V14H12V15Z"
                  fill="currentColor"
                />
                <path
                  d="M12 10H12.5V9H12V10ZM3.5 9H3V10H3.5V9ZM12 9H3.5V10H12V9Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 3.5V3H11.5V3.5H12.5ZM11.5 20.5V21H12.5V20.5H11.5ZM11.5 3.5V20.5H12.5V3.5H11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <i
              className="absolute top-1/2 m-auto size-30 -translate-y-1/2 rounded-full border border-border/40 md:size-40"
              aria-hidden
            />
            <i
              className="absolute top-1/2 m-auto size-45 -translate-y-1/2 rounded-full border border-border/30 md:size-60"
              aria-hidden
            />
            <i
              className="absolute top-1/2 m-auto size-60 -translate-y-1/2 rounded-full border border-border/20 md:size-80"
              aria-hidden
            />
            <i
              className="absolute top-1/2 m-auto size-80 -translate-y-1/2 rounded-full border border-border/10 md:size-100"
              aria-hidden
            />

            <div className="absolute top-[65%] space-y-0.5 px-2 text-center">
              <CardTitle className="font-semibold text-lg">No data found</CardTitle>
              <CardDescription>
                No information is currently available in this section.
              </CardDescription>
            </div>
          </div>
        )}
      </>
    )}
    {...props}
  />
)

interface TableColumnProps extends ColumnProps {
  isResizable?: boolean
}

const TableColumn = ({ isResizable = false, className, ...props }: TableColumnProps) => {
  const { bleed, grid } = useTableContext()
  return (
    <Column
      data-slot="table-column"
      {...props}
      className={cx(
        [
          "text-start font-medium text-muted-fg",
          "relative allows-sorting:cursor-default dragging:cursor-grabbing outline-hidden",
          "px-4 py-(--gutter-y)",
          "first:ps-(--gutter,--spacing(2)) last:pe-(--gutter,--spacing(2))",
          !bleed && "sm:last:pe-1 sm:first:ps-1",
          grid && "border-l first:border-l-0",
          isResizable && "overflow-hidden truncate",
        ],
        className,
      )}
    >
      {(values) => (
        <Group
          role="presentation"
          tabIndex={-1}
          className={twJoin(["inline-flex items-center gap-2 **:[svg]:shrink-0"])}
        >
          {typeof props.children === "function" ? props.children(values) : props.children}
          {values.allowsSorting && (
            <span
              className={twJoin(
                "touch-target grid size-[1.15rem] flex-none shrink-0 place-content-center rounded bg-secondary text-fg *:[svg]:size-3.5 *:[svg]:shrink-0 *:[svg]:transition-transform *:[svg]:duration-200",
                values.isHovered ? "bg-secondary-fg/10" : "",
              )}
            >
              <ChevronDownIcon
                className={values.sortDirection === "ascending" ? "rotate-180" : ""}
              />
            </span>
          )}
          {isResizable && <ColumnResizer />}
        </Group>
      )}
    </Column>
  )
}

interface TableHeaderProps<T extends object> extends HeaderProps<T> {
  ref?: React.Ref<HTMLTableSectionElement>
}

const TableHeader = <T extends object>({
  children,
  ref,
  columns,
  className,
  ...props
}: TableHeaderProps<T>) => {
  const { bleed } = useTableContext()
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <TableHeaderPrimitive
      data-slot="table-header"
      className={cx("border-b", className)}
      ref={ref}
      {...props}
    >
      {allowsDragging && (
        <Column
          data-slot="table-column"
          className={twMerge(
            "first:ps-(--gutter,--spacing(2))",
            !bleed && "sm:last:pe-1 sm:first:ps-1",
          )}
        />
      )}
      {selectionBehavior === "toggle" && (
        <Column
          data-slot="table-column"
          className={twMerge(
            "first:ps-(--gutter,--spacing(2))",
            !bleed && "sm:last:pe-1 sm:first:ps-1",
          )}
        >
          {selectionMode === "multiple" && (
            <Checkbox className="[--indicator-mt:0] sm:[--indicator-mt:0]" slot="selection" />
          )}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  )
}

interface TableRowProps<T extends object> extends RowProps<T> {
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
  const { striped } = useTableContext()
  return (
    <Row
      ref={ref}
      data-slot="table-row"
      id={id}
      {...props}
      className={composeRenderProps(
        className,
        (
          className,
          {
            isSelected,
            selectionMode,
            isFocusVisibleWithin,
            isDragging,
            isDisabled,
            isFocusVisible,
          },
        ) =>
          twMerge(
            "group relative cursor-default outline outline-transparent",
            isFocusVisible &&
              "bg-primary/5 outline-primary ring-3 ring-ring/20 hover:bg-primary/10",
            isDragging && "cursor-grabbing bg-primary/10 text-fg outline-primary",
            isSelected && "bg-(--table-selected-bg) text-fg hover:bg-(--table-selected-bg)/50",
            striped && "even:bg-muted",
            (props.href || props.onAction || selectionMode === "multiple") &&
              "hover:bg-(--table-selected-bg) hover:text-fg",
            (props.href || props.onAction || selectionMode === "multiple") &&
              isFocusVisibleWithin &&
              "bg-(--table-selected-bg)/50 selected:bg-(--table-selected-bg)/50 text-fg",
            isDisabled && "opacity-50",
            className,
          ),
      )}
    >
      {allowsDragging && (
        <TableCell className="px-0">
          <Button
            slot="drag"
            className="grid place-content-center rounded-xs px-[calc(var(--gutter)/2)] outline-hidden focus-visible:ring focus-visible:ring-ring"
          >
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={9} cy={12} r={1} />
              <circle cx={9} cy={5} r={1} />
              <circle cx={9} cy={19} r={1} />
              <circle cx={15} cy={12} r={1} />
              <circle cx={15} cy={5} r={1} />
              <circle cx={15} cy={19} r={1} />
            </svg>
          </Button>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell className="px-0">
          <Checkbox className="[--indicator-mt:0] sm:[--indicator-mt:0]" slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

interface TableCellProps extends CellProps {
  ref?: React.Ref<HTMLTableCellElement>
}
const TableCell = ({ className, ref, ...props }: TableCellProps) => {
  const { allowResize, bleed, grid, striped } = useTableContext()
  return (
    <Cell
      ref={ref}
      data-slot="table-cell"
      {...props}
      className={cx(
        twJoin(
          "group px-4 py-(--gutter-y) align-middle outline-hidden first:ps-(--gutter,--spacing(2)) last:pe-(--gutter,--spacing(2)) group-has-data-focus-visible-within:text-fg",
          !striped && "border-b",
          grid && "border-l first:border-l-0",
          !bleed && "sm:last:pe-1 sm:first:ps-1",
          allowResize && "overflow-hidden truncate",
        ),
        className,
      )}
      style={({ hasChildItems, isTreeColumn, level }) => ({
        paddingInlineStart: isTreeColumn
          ? 4 + (hasChildItems ? 0 : 24) + (level - 1) * 20
          : undefined,
      })}
    >
      {composeRenderProps(
        props.children,
        (children, { hasChildItems, isTreeColumn, isExpanded, isDisabled }) => (
          <div className="flex items-center">
            {hasChildItems && isTreeColumn && (
              <Button
                slot="chevron"
                className={twJoin(
                  isDisabled && "opacity-50",
                  "mr-2 grid size-[1.15rem] flex-none shrink-0 place-content-center rounded text-fg hover:bg-secondary",
                )}
              >
                <ChevronRightIcon
                  className={twJoin(
                    "size-4 transition-transform duration-200",
                    isExpanded && "rotate-90",
                  )}
                />
              </Button>
            )}

            {children}
          </div>
        ),
      )}
    </Cell>
  )
}

export type { TableColumnProps, TableProps, TableRowProps }
export { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow }
