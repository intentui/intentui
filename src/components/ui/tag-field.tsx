"use client"

import { useCallback, useState } from "react"

import type { Key } from "react-aria-components"
import { Group, TextField } from "react-aria-components"
import type { ListData } from "react-stately"
import { twJoin, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

import type { FieldProps } from "./field"
import { Description, Input, Label } from "./field"
import { Tag, TagGroup, TagList } from "./tag-group"

const tagFieldsStyles = tv({
  base: "relative flex flex-row flex-wrap items-center transition",
  variants: {
    appearance: {
      outline: [
        "rounded-lg border px-1.5 shadow-xs hover:border-[color-mix(in_oklab,var(--color-fg)_10%,var(--color-border))]",
        "has-[input[data-invalid=true][focus=true]]:border-danger has-[input[data-invalid=true]]:border-danger has-[input[data-invalid=true]]:ring-danger/20",
        "focus-within:border-ring/70 focus-within:ring-3 focus-within:ring-ring/20 hover:focus-within:border-ring/70",
      ],
      plain: "focus:border-transparent",
    },
  },
})

interface TagItemProps {
  id: number
  name: string
}

interface TagFieldProps extends FieldProps {
  isDisabled?: boolean
  max?: number
  className?: string
  isCircle?: boolean
  children?: React.ReactNode
  name?: string
  list: ListData<TagItemProps>
  onItemInserted?: (tag: TagItemProps) => void
  onItemCleared?: (tag: TagItemProps | undefined) => void
  appearance?: "outline" | "plain"
  "aria-label"?: string
}

const TagField = ({
  appearance = "outline",
  isCircle = false,
  name,
  className,
  list,
  onItemCleared,
  onItemInserted,
  ...props
}: TagFieldProps) => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const existingTagCount = list.items.length
  const maxTags = props.max !== undefined ? props.max : Number.POSITIVE_INFINITY
  const maxTagsToAdd = maxTags - existingTagCount

  const insertTag = () => {
    const tagNames = inputValue.split(/,/)
    if (maxTagsToAdd <= 0) {
      setIsInvalid(true)
      setInputValue("")
      const timeoutId = setTimeout(() => {
        setIsInvalid(false)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }

    for (const tagName of tagNames.slice(0, maxTagsToAdd)) {
      const formattedName = tagName
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[\t\r\n]/g, "")

      if (
        formattedName &&
        !list.items.some(({ name }) => name.toLowerCase() === formattedName.toLowerCase())
      ) {
        const tag = {
          id: (list.items.at(-1)?.id ?? 0) + 1,
          name: formattedName,
        }

        list.append(tag)
        onItemInserted?.(tag)
      }
    }

    setInputValue("")
  }

  const clearInvalidFeedback = () => {
    if (maxTags - list.items.length <= maxTagsToAdd) {
      setIsInvalid(false)
    }
  }

  const onRemove = (keys: Set<Key>) => {
    list.remove(...keys)

    const firstKey = [...keys][0]
    if (firstKey !== undefined) {
      onItemCleared?.(list.getItem(firstKey))
    }

    clearInvalidFeedback()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      insertTag()
    }

    if (e.key === "Backspace" && inputValue === "") {
      popLast()
      clearInvalidFeedback()
    }
  }

  const popLast = useCallback(() => {
    if (list.items.length === 0) {
      return
    }

    const endKey = list.items[list.items.length - 1]!

    if (endKey !== null) {
      list.remove(endKey.id)
      onItemCleared?.(list.getItem(endKey.id))
    }
  }, [list, onItemCleared])

  return (
    <div className={twMerge("flex w-full flex-col gap-y-1.5", className)}>
      {props.label && <Label>{props.label}</Label>}
      <Group className={twJoin("flex flex-col", props.isDisabled && "opacity-50")}>
        <TagGroup aria-label="List item inserted" onRemove={onRemove}>
          <div className={tagFieldsStyles({ appearance })}>
            <TagList items={list.items}>
              {(item) => (
                <Tag className="rounded-[calc(var(--radius-lg)-(--spacing(1)))]">{item.name}</Tag>
              )}
            </TagList>
            <TextField
              isDisabled={props.isDisabled}
              aria-label={props?.label ?? (props["aria-label"] || props.placeholder)}
              isInvalid={isInvalid}
              onKeyDown={onKeyDown}
              onChange={setInputValue}
              value={inputValue}
              className="flex-1"
              {...props}
            >
              <Input
                className="ml-1.5 inline px-0 sm:px-0"
                placeholder={maxTagsToAdd <= 0 ? "Remove one to add more" : props.placeholder}
              />
            </TextField>
          </div>
        </TagGroup>
        {name && (
          <input hidden name={name} value={list.items.map((i) => i.name).join(",")} readOnly />
        )}
      </Group>
      {props.description && <Description>{props.description}</Description>}
    </div>
  )
}

export type { TagFieldProps, TagItemProps }
export { TagField }
