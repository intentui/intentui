"use client"

import { IconSearch, IconX } from "@intentui/icons"
import { SearchField as SearchFieldPrimitive } from "react-aria-components"

import type {
  SearchFieldProps as SearchFieldPrimitiveProps,
  ValidationResult,
} from "react-aria-components"

import { Button } from "@/components/ui/button"
import { Description, FieldError, FieldGroup, Input, Label } from "@/components/ui/field"
import { Loader } from "@/components/ui/loader"
import { composeTailwindRenderProps } from "@/lib/primitive"

interface SearchFieldProps extends SearchFieldPrimitiveProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  isPending?: boolean
}

const SearchField = ({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  isPending,
  ...props
}: SearchFieldProps) => {
  return (
    <SearchFieldPrimitive
      aria-label={placeholder ?? props["aria-label"] ?? "Search..."}
      {...props}
      className={composeTailwindRenderProps(className, "group/search-field flex flex-col gap-y-1")}
    >
      {!props.children ? (
        <>
          {label && <Label>{label}</Label>}
          <FieldGroup>
            {isPending ? <Loader variant="spin" /> : <IconSearch />}
            <Input placeholder={placeholder ?? "Search..."} />

            <Button
              intent="plain"
              className="size-8 pressed:bg-transparent pressed:text-fg text-muted-fg hover:bg-transparent hover:text-fg group-data-empty/search-field:invisible"
            >
              <IconX />
            </Button>
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ) : (
        props.children
      )}
    </SearchFieldPrimitive>
  )
}

export type { SearchFieldProps }
export { SearchField }
