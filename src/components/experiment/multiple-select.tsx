"use client"

import { Badge } from "@/components/ui/badge"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"
import { SearchField } from "react-aria-components"
import { Autocomplete, Button, DialogTrigger, useFilter } from "react-aria-components"
import type { Key, ListBoxProps, Selection } from "react-aria-components"

import { Description, Input, Label } from "@/components/ui/field"
import { PopoverContent } from "@/components/ui/popover"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY, IconSearch } from "@intentui/icons"
import { useListData } from "react-stately"
import { twMerge } from "tailwind-merge"

interface MultipleSelectProps {
  label?: string
  description?: string
  placeholder?: string
  children?: React.ReactNode
}

const MultipleSelect = (props: MultipleSelectProps) => {
  return (
    <DialogTrigger>
      <div className="flex flex-col gap-y-1">
        {props.label && <Label>{props.label}</Label>}
        {props.children}
        {props.description && <Description>{props.description}</Description>}
      </div>
    </DialogTrigger>
  )
}

interface MultipleSelectContentProps<T extends object>
  extends Omit<ListBoxProps<T>, "selectionMode" | "className"> {
  placeholder?: string
  classNames?: {
    trigger?: string
    popover?: string
    listBox?: string
  }
}

const MultipleSelectContent = <T extends object>({
  items,
  classNames,
  placeholder = "Select items",
  onSelectionChange,
  ...props
}: MultipleSelectContentProps<T>) => {
  const { contains } = useFilter({ sensitivity: "base" })
  const list = useListData({
    initialItems: items as T[],
    initialSelectedKeys: [],
    // @ts-expect-error
    getKey: (item) => item.id,
  })

  function onChange(keys: Selection) {
    list.setSelectedKeys(keys)
    if (onSelectionChange) {
      onSelectionChange(keys)
    }
  }

  return (
    <>
      <Button
        className={composeTailwindRenderProps(
          classNames?.trigger,
          "relative flex min-h-10 w-full flex-wrap items-center gap-1 rounded-lg border py-1.5 pr-4 pl-2 text-left text-muted-fg text-sm outline-hidden focus:border-ring focus:ring-4 focus:ring-ring/20",
        )}
      >
        {Array.from(list.selectedKeys)
          ? Array.from(list.selectedKeys).map((key: Key | null | undefined) => {
              return (
                // @ts-expect-error
                <Badge key={key}>{list.items.find((item) => item.id === key)?.name || key}</Badge>
              )
            })
          : placeholder}

        <IconChevronsY className="absolute top-2.5 right-2" />
      </Button>
      <PopoverContent aria-label="Options" className={classNames?.popover} showArrow={false}>
        <Autocomplete filter={contains}>
          <div className="px-1 pt-1">
            <SearchField autoFocus className="flex h-9 items-center rounded-sm border bg-bg px-2.5">
              <IconSearch className="text-muted-fg" />
              <Input placeholder="Search..." />
            </SearchField>
          </div>
          <ListBox
            className={twMerge("border-none shadow-none", classNames?.listBox)}
            onSelectionChange={onChange}
            selectedKeys={list.selectedKeys}
            items={items}
            selectionMode="multiple"
            {...props}
          />
        </Autocomplete>
      </PopoverContent>
    </>
  )
}

const MultipleSelectItem = ListBoxItem

export { MultipleSelect, MultipleSelectContent, MultipleSelectItem }
