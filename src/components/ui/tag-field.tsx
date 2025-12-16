"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { Key, Selection, TextFieldProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { FieldError } from "@/components/ui/field"
import { Tag, TagGroup, TagList } from "@/components/ui/tag-group"
import { TextField } from "@/components/ui/text-field"

interface TagInputProps
  extends Pick<TextFieldProps, "children" | "aria-label" | "aria-labelledby"> {
  value?: Selection
  onChange?: (next: Selection) => void
  defaultValue?: string[]
  splitPattern?: RegExp
  className?: string
  inputValue?: string
  onInputValueChange?: (v: string) => void
  isRequired?: boolean
  requiredMessage?: string
  name?: string
}

export function TagField({
  value,
  onChange,
  defaultValue = [],
  splitPattern = /[,;]/,
  className,
  inputValue: controlledInput,
  onInputValueChange,
  isRequired,
  requiredMessage,
  name = "tags",
  children,
  ...props
}: TagInputProps) {
  const [internalSelection, setInternalSelection] = useState<Selection>(new Set(defaultValue))
  const [uncontrolledInput, setUncontrolledInput] = useState("")
  const [touched, setTouched] = useState(false)
  const hiddenRef = useRef<HTMLInputElement>(null)

  const selection: Selection = value ?? internalSelection
  const inputValue = controlledInput ?? uncontrolledInput
  const setInputValue = onInputValueChange ?? setUncontrolledInput
  const applySelection = (next: Selection) => (onChange ?? setInternalSelection)(next as Selection)

  const list = useMemo(() => {
    return selection === "all" ? [] : Array.from(selection).map((v) => String(v))
  }, [selection])

  const isInvalid = Boolean(isRequired && list.length === 0 && touched)
  const errorText = requiredMessage ?? "At least one item is required"

  useEffect(() => {
    const input = hiddenRef.current
    const form = input?.form
    if (!form || !input) return
    const onSubmit = (e: Event) => {
      if (isRequired && list.length === 0) {
        e.preventDefault()
        setTouched(true)
        input.setCustomValidity(errorText)
        form.reportValidity()
      } else {
        input.setCustomValidity("")
      }
    }
    form.addEventListener("submit", onSubmit)
    return () => form.removeEventListener("submit", onSubmit)
  }, [isRequired, list.length, errorText])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === "," || e.key === ";") {
      e.preventDefault()
      addTag()
    }
  }

  function addTag() {
    if (selection === "all") return
    const next = new Set<Key>(Array.from(selection))
    inputValue.split(splitPattern).forEach((raw) => {
      const formatted = raw
        .trim()
        .replace(/\s\s+/g, " ")
        .replace(/\t|\\t|\r|\\r|\n|\\n/g, "")
      if (formatted === "") return
      const exists = Array.from(next).some(
        (id) => String(id).toLocaleLowerCase() === formatted.toLocaleLowerCase(),
      )
      if (!exists) next.add(formatted)
    })
    applySelection(next)
    setInputValue("")
    setTouched(true)
  }

  function removeKeys(keys: Selection) {
    if (selection === "all") return
    const next = new Set<Key>(Array.from(selection))
    if (keys !== "all") {
      for (const k of keys) next.delete(k)
    }
    applySelection(next)
    setTouched(true)
  }

  return (
    <div className={twMerge("flex flex-col gap-y-1", className)}>
      <TextField
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={handleKeyDown}
        onBlur={() => setTouched(true)}
        isInvalid={isInvalid}
        {...props}
      >
        {(values) => (
          <>
            {typeof children === "function" ? children(values) : children}
            <FieldError>{isInvalid ? errorText : undefined}</FieldError>
          </>
        )}
      </TextField>
      {selection ? (
        <TagGroup className="mt-1" aria-label="Selected tags" onRemove={removeKeys}>
          <TagList>
            {list.map((id) => (
              <Tag key={id} id={id}>
                {id}
              </Tag>
            ))}
          </TagList>
        </TagGroup>
      ) : null}
      <input
        ref={hiddenRef}
        name={name}
        value={list.join(",")}
        required={Boolean(isRequired)}
        readOnly
        aria-hidden="true"
        tabIndex={-1}
        className="sr-only absolute -z-10 h-0 w-0 opacity-0"
      />
    </div>
  )
}
