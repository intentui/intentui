"use client"

import { DropdownItem, DropdownLabel, DropdownSection } from "@/components/ui/dropdown"
import { Description, FieldGroup, type FieldProps, Input, Label } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import { PopoverContent } from "@/components/ui/popover"
import {
  type RestrictedIntent,
  Tag,
  TagGroup,
  type TagGroupProps,
  TagList,
} from "@/components/ui/tag-group"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronLgDown } from "@intentui/icons"
import {
  Children,
  type KeyboardEvent,
  type RefObject,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react"
import type { ComboBoxProps, GroupProps, Key, ListBoxProps, Selection } from "react-aria-components"
import { Button, ComboBox, Group } from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface MultipleSelectProps<T>
  extends Omit<ListBoxProps<T>, "renderEmptyState">,
    Pick<
      ComboBoxProps<T & { selectedKeys: Selection }>,
      "isRequired" | "validate" | "validationBehavior"
    >,
    FieldProps,
    Pick<TagGroupProps, "shape">,
    Pick<GroupProps, "isDisabled" | "isInvalid"> {
  className?: string
  errorMessage?: string
  intent?: RestrictedIntent
  maxItems?: number
  renderEmptyState?: (inputValue: string) => React.ReactNode
}

function mapToNewObject<T extends object>(array: T[]): { id: T[keyof T]; textValue: T[keyof T] }[] {
  return array.map((item) => {
    const idProperty = Object.keys(item).find((key) => key === "id" || key === "key")
    const textProperty = Object.keys(item).find((key) => key !== "id" && key !== "key")
    return {
      id: item[idProperty as keyof T],
      textValue: item[textProperty as keyof T],
    }
  })
}

const MultipleSelect = <T extends object>({
  className,
  maxItems = Number.POSITIVE_INFINITY,
  renderEmptyState,
  children,
  ...props
}: MultipleSelectProps<T>) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const [inputValue, setInputValue] = useState("")
  const [selectedKeys, onSelectionChange] = useState<Selection>(new Set(props.selectedKeys))

  const isMax = [...selectedKeys].length >= maxItems

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setInputValue("")
    return () => {
      inputRef.current?.focus()
    }
  }, [props?.selectedKeys, selectedKeys])

  const addItem = (e: Key | null) => {
    if (!e || isMax) return
    onSelectionChange?.((s) => new Set([...s, e!]))
    // @ts-expect-error incompatible type Key and Selection
    props.onSelectionChange?.((s) => new Set([...s, e!]))
  }

  const removeItem = (e: Set<Key>) => {
    onSelectionChange?.((s) => new Set([...s].filter((i) => i !== e.values().next().value)))
    props.onSelectionChange?.(
      // @ts-expect-error incompatible type Key and Selection
      (s) => new Set([...s].filter((i) => i !== e.values().next().value)),
    )
  }

  const onKeyDownCapture = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue === "") {
      onSelectionChange?.((s) => new Set([...s].slice(0, -1)))
      // @ts-expect-error incompatible type Key and Selection
      props.onSelectionChange?.((s) => new Set([...s].slice(0, -1)))
    }
  }

  const parsedItems = props.items
    ? mapToNewObject(props.items as T[])
    : mapToNewObject(
        Children.map(
          children as React.ReactNode,
          (child) => isValidElement(child) && child.props,
        ) as T[],
      )

  const availableItemsToSelect = props.items
    ? parsedItems.filter((item) => ![...selectedKeys].includes(item.id as Key))
    : parsedItems

  const filteredChildren = props.items
    ? parsedItems.filter((item) => ![...selectedKeys].includes(item.id as Key))
    : Children.map(
        children as React.ReactNode,
        (child) => isValidElement(child) && child.props,
      )?.filter((item: T & any) => ![...selectedKeys].includes(item.id))

  return (
    <Group
      isDisabled={props.isDisabled}
      isInvalid={props.isInvalid}
      className={composeTailwindRenderProps(className, "group flex h-fit flex-col gap-y-1")}
    >
      {({ isInvalid, isDisabled }) => (
        <>
          {props.label && <Label onClick={() => inputRef.current?.focus()}>{props.label}</Label>}
          <FieldGroup
            ref={triggerRef as RefObject<HTMLDivElement>}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            className="flex h-fit min-h-10 flex-wrap items-center"
          >
            <TagGroup
              onRemove={removeItem}
              aria-hidden
              shape={props.shape}
              intent={props.intent}
              aria-label="Selected items"
            >
              <TagList
                className={twMerge(
                  [...selectedKeys].length !== 0 && "flex flex-1 flex-wrap py-1.5 pl-2",
                  "[&_.jdt3lr2x]:last:-mr-1 gap-1.5 outline-hidden",
                  props.shape === "square" && "[&_.jdt3lr2x]:rounded-[calc(var(--radius-lg)-4px)]",
                )}
                items={[...selectedKeys].map((key) => ({
                  id: key,
                  textValue: parsedItems.find((item) => item.id === key)?.textValue as string,
                }))}
              >
                {(item: { id: Key; textValue: Key }) => (
                  <Tag isDisabled={isDisabled} textValue={item.textValue as string}>
                    {item.textValue as string}
                  </Tag>
                )}
              </TagList>
            </TagGroup>
            <ComboBox
              isRequired={props.isRequired}
              validate={props.validate}
              validationBehavior={props.validationBehavior}
              isReadOnly={isMax}
              isDisabled={isDisabled}
              className="flex flex-1"
              aria-label="Search"
              onSelectionChange={addItem}
              inputValue={inputValue}
              onInputChange={isMax ? () => {} : setInputValue}
            >
              <div className="flex w-full flex-row items-center justify-between px-2">
                <Input
                  onFocus={() => triggerButtonRef.current?.click()}
                  ref={inputRef as RefObject<HTMLInputElement>}
                  className="flex-1 px-0.5 py-1.5 shadow-none ring-0"
                  onBlur={() => {
                    setInputValue("")
                  }}
                  onKeyDownCapture={onKeyDownCapture}
                  placeholder={isMax ? "Maximum reached" : props.placeholder}
                />
                <Button
                  ref={triggerButtonRef}
                  aria-label="Chevron"
                  className="ml-auto inline-flex items-center justify-center rounded-lg text-muted-fg outline-hidden"
                >
                  <IconChevronLgDown
                    className={twMerge("group-has-open:-rotate-180 size-4 transition")}
                  />
                </Button>
              </div>
              <PopoverContent
                showArrow={false}
                respectScreen={false}
                triggerRef={triggerRef}
                className="min-w-(--trigger-width) overflow-hidden"
                style={{
                  minWidth: triggerRef.current?.offsetWidth,
                  width: triggerRef.current?.offsetWidth,
                }}
              >
                <ListBox
                  className="max-h-[inherit] min-w-[inherit] border-0 shadow-0"
                  renderEmptyState={() =>
                    renderEmptyState ? (
                      renderEmptyState(inputValue)
                    ) : (
                      <Description className="block p-3">
                        {inputValue ? (
                          <>
                            No results found for:{" "}
                            <strong className="font-medium text-fg">{inputValue}</strong>
                          </>
                        ) : (
                          "No options"
                        )}
                      </Description>
                    )
                  }
                  items={(availableItemsToSelect as T[]) ?? props.items}
                  {...props}
                >
                  {filteredChildren?.map((item: any) => (
                    <MultipleSelect.Item
                      key={item.id as Key}
                      id={item.id as Key}
                      textValue={item.textValue as string}
                    >
                      {item.textValue as string}
                    </MultipleSelect.Item>
                  )) ?? children}
                </ListBox>
              </PopoverContent>
            </ComboBox>
          </FieldGroup>
          {props.description && <Description>{props.description}</Description>}
          {props.errorMessage && isInvalid && (
            <Description className="text-danger text-sm/5">{props.errorMessage}</Description>
          )}
        </>
      )}
    </Group>
  )
}

MultipleSelect.Item = DropdownItem
MultipleSelect.Label = DropdownLabel
MultipleSelect.Section = DropdownSection

export { MultipleSelect }
export type { MultipleSelectProps }
