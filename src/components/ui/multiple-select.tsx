"use client"

import { IconPlus } from "@intentui/icons"
import { useRef } from "react"
import {
  Autocomplete,
  Select,
  type SelectProps,
  SelectValue,
  useFilter,
} from "react-aria-components"
import { cx } from "@/lib/primitive"
import { Button } from "./button"
import { Description, FieldError, type FieldProps, Label } from "./field"
import { ListBox, ListBoxItem } from "./list-box"
import { PopoverContent } from "./popover"
import { SearchField } from "./search-field"
import { Tag, TagGroup, TagList } from "./tag-group"

interface OptionBase {
  id: string | number
  name: string
}

interface MultipleSelectProps<T extends OptionBase>
  extends Omit<SelectProps<T, "multiple">, "selectionMode" | "children">,
    FieldProps {
  items: Iterable<T>
  placeholder?: string
  className?: string
  children?: (item: T) => React.ReactNode
}

function MultipleSelect<T extends OptionBase>({
  label,
  errorMessage,
  description,
  items,
  placeholder = "No selected items",
  className,
  children,
  ...props
}: MultipleSelectProps<T>) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const { contains } = useFilter({ sensitivity: "base" })

  return (
    <Select
      className={cx("group relative flex w-full flex-col gap-1 disabled:opacity-50", className)}
      selectionMode="multiple"
      {...props}
    >
      {label && <Label>{label}</Label>}
      <div ref={triggerRef} className="flex w-[250px] items-center gap-2 rounded-lg border p-1">
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
                renderEmptyState={() => <i className="pl-2 text-muted-fg text-sm">{placeholder}</i>}
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
          <IconPlus />
        </Button>
      </div>
      <PopoverContent
        triggerRef={triggerRef}
        placement="bottom"
        className="flex w-[250px] flex-col"
      >
        <Autocomplete filter={contains}>
          <SearchField
            autoFocus
            className="rounded-none border-b shadow-none **:[[role=group]]:inset-ring-0 **:[[role=group]]:ring-0"
          />
          <ListBox className="rounded-t-none border-0 bg-tranparent shadow-none" items={items}>
            {children}
          </ListBox>
        </Autocomplete>
      </PopoverContent>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </Select>
  )
}

const MultipleSelectItem = ListBoxItem

export { MultipleSelect, MultipleSelectItem }
