"use client"

import { IconPlus } from "@intentui/icons"
import { cloneElement, isValidElement, useRef } from "react"
import {
  Autocomplete,
  Select,
  type SelectProps,
  SelectValue,
  useFilter,
} from "react-aria-components"
import { Button } from "./button"
import { Label } from "./field"
import { ListBox, ListBoxItem } from "./list-box"
import { PopoverContent } from "./popover"
import { SearchField } from "./search-field"
import { Tag, TagGroup, TagList } from "./tag-group"

interface OptionBase {
  id: string | number
  name: string
}

interface MultipleSelectProps<T extends OptionBase>
  extends Omit<SelectProps<T>, "selectionMode" | "children"> {
  label?: string
  items: Iterable<T>
  placeholder?: string
  className?: string
  children?: (item: T) => React.ReactNode
}

interface MultipleSelectItemProps {
  textValue?: string
  className?: string
  children: React.ReactNode
}

function MultipleSelectItem(props: MultipleSelectItemProps) {
  return <ListBoxItem {...props} />
}

function MultipleSelect<T extends OptionBase>({
  label,
  items,
  placeholder = "No selected items",
  className,
  children,
}: MultipleSelectProps<T>) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const { contains } = useFilter({ sensitivity: "base" })

  return (
    <Select
      selectionMode="multiple"
      className={["group relative mx-auto mt-4 flex w-fit flex-col gap-1", className]
        .filter(Boolean)
        .join(" ")}
    >
      {label && <Label>{label}</Label>}
      <div
        ref={triggerRef}
        className="flex w-[250px] items-center gap-2 rounded-lg border border-black/10 bg-white p-2"
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
                renderEmptyState={() => <i className="pl-2 text-gray-600 text-sm">{placeholder}</i>}
              >
                {(item) => <Tag>{item.name}</Tag>}
              </TagList>
            </TagGroup>
          )}
        </SelectValue>
        <Button size="sq-xs">
          <IconPlus />
        </Button>
      </div>
      <PopoverContent
        triggerRef={triggerRef}
        placement="bottom end"
        className="flex w-[250px] flex-col p-2"
      >
        <Autocomplete filter={contains}>
          <SearchField
            autoFocus
            className="rounded-none border-b shadow-none **:[[role=group]]:inset-ring-0 **:[[role=group]]:ring-0"
          />
          <ListBox className="rounded-t-none border-0 bg-tranparent shadow-none" items={items}>
            {(item) => {
              const node = children ? (
                children(item)
              ) : (
                <MultipleSelectItem>{item.name}</MultipleSelectItem>
              )
              if (isValidElement(node) && (node.type as any) === MultipleSelectItem) {
                return cloneElement(node as React.ReactElement<MultipleSelectItemProps>, {
                  key: item.id as React.Key,
                  textValue: item.name,
                })
              }
              return node
            }}
          </ListBox>
        </Autocomplete>
      </PopoverContent>
    </Select>
  )
}

export { MultipleSelect, MultipleSelectItem }
