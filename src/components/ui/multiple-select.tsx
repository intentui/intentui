"use client"

import { PlusIcon } from "@heroicons/react/20/solid"
import React, { useMemo, useRef } from "react"
import {
  Autocomplete,
  Select,
  type SelectProps,
  SelectValue,
  useFilter,
} from "react-aria-components"
import { cx } from "@/lib/primitive"
import { Button } from "./button"
import { fieldStyles } from "./field"
import { ListBox, ListBoxItem } from "./list-box"
import { PopoverContent } from "./popover"
import { SearchField, SearchInput } from "./search-field"
import { Tag, TagGroup, TagList } from "./tag-group"

interface OptionBase {
  id: string | number
  name: string
}

interface MultipleSelectProps<T extends OptionBase>
  extends Omit<SelectProps<T, "multiple">, "selectionMode" | "children"> {
  placeholder?: string
  className?: string
  children?: React.ReactNode
  name?: string
}

interface MultipleSelectContentProps<T extends OptionBase> {
  items: Iterable<T>
  children: (item: T) => React.ReactNode
}

function MultipleSelectContent<T extends OptionBase>(_props: MultipleSelectContentProps<T>) {
  return null
}
;(MultipleSelectContent as any).displayName = "MultipleSelectContent"

function MultipleSelect<T extends OptionBase>({
  placeholder = "No selected items",
  className,
  children,
  name,
  ...props
}: MultipleSelectProps<T>) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const { contains } = useFilter({ sensitivity: "base" })

  const { before, after, list } = useMemo(() => {
    const arr = React.Children.toArray(children)
    const idx = arr.findIndex(
      (c) => React.isValidElement(c) && (c.type as any)?.displayName === "MultipleSelectContent",
    )
    if (idx === -1) {
      return { before: arr, after: [], list: null as null | MultipleSelectContentProps<T> }
    }
    const el = arr[idx] as React.ReactElement<MultipleSelectContentProps<T>>
    return { before: arr.slice(0, idx), after: arr.slice(idx + 1), list: el.props }
  }, [children])

  return (
    <Select
      name={name}
      data-slot="control"
      className={cx(fieldStyles(), className)}
      selectionMode="multiple"
      {...props}
    >
      {before}
      {list && (
        <>
          <div
            data-slot="control"
            ref={triggerRef}
            className="flex w-full items-center gap-2 rounded-lg border p-1"
          >
            <SelectValue<T> className="flex-1">
              {({ selectedItems, state }) => (
                <TagGroup
                  aria-label="Selected items"
                  onRemove={(keys) => {
                    if (Array.isArray(state.value)) {
                      state.setValue(state.value.filter((k) => !keys.has(k)))
                    }
                  }}
                >
                  <TagList
                    items={selectedItems.filter((i) => i != null)}
                    renderEmptyState={() => (
                      <i className="pl-2 text-muted-fg text-sm">{placeholder}</i>
                    )}
                  >
                    {(item) => <Tag className="rounded-md">{item.name}</Tag>}
                  </TagList>
                </TagGroup>
              )}
            </SelectValue>
            <Button
              intent="secondary"
              size="sq-xs"
              className="self-end rounded-[calc(var(--radius-lg)-(--spacing(1)))]"
            >
              <PlusIcon />
            </Button>
          </div>
          <PopoverContent
            triggerRef={triggerRef}
            placement="bottom"
            className="flex w-full flex-col"
          >
            <Autocomplete filter={contains}>
              <SearchField autoFocus className="rounded-none outline-hidden">
                <SearchInput className="border-none outline-hidden focus:ring-0" />
              </SearchField>
              <ListBox
                className="rounded-t-none border-0 border-t bg-transparent shadow-none"
                items={list.items}
              >
                {list.children}
              </ListBox>
            </Autocomplete>
          </PopoverContent>
        </>
      )}
      {after}
    </Select>
  )
}

const MultipleSelectItem = ListBoxItem

export { MultipleSelect, MultipleSelectItem, MultipleSelectContent }
