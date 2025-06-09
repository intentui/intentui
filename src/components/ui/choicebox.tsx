"use client"

import type { GridListItemProps, GridListProps, TextProps } from "react-aria-components"
import { GridList, GridListItem, Text, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

import { Checkbox } from "@/components/ui/checkbox"
import { focusStyles } from "@/lib/primitive"
import { createContext, use } from "react"
import { twJoin, twMerge } from "tailwind-merge"

const choiceboxStyles = tv({
  base: "grid",
  variants: {
    columns: {
      1: "col-span-full grid-cols-[auto_1fr]",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-3",
      4: "sm:grid-cols-4",
      5: "sm:grid-cols-5",
      6: "sm:grid-cols-6",
    },
    gap: {
      0: "gap-0",
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
    },
  },
  defaultVariants: {
    columns: 2,
    gap: 4,
  },
  compoundVariants: [
    {
      gap: 0,
      columns: 1,
      className:
        "*:data-[slot=choicebox-item]:-mt-px rounded-lg *:data-[slot=choicebox-item]:inset-ring-1 *:data-[slot=choicebox-item]:rounded-none *:data-[slot=choicebox-item]:last:rounded-b-[calc(var(--radius-lg)-1px)] *:data-[slot=choicebox-item]:first:rounded-t-[calc(var(--radius-lg)-1px)]",
    },
  ],
})

const ChoiceboxContext = createContext<{ columns?: number; gap?: number }>({})

const useChoiceboxContext = () => use(ChoiceboxContext)

interface ChoiceboxProps<T extends object>
  extends GridListProps<T>,
    VariantProps<typeof choiceboxStyles> {
  className?: string
}

const Choicebox = <T extends object>({
  columns,
  gap,
  className,
  selectionMode = "multiple",
  ...props
}: ChoiceboxProps<T>) => {
  return (
    <ChoiceboxContext.Provider value={{ columns, gap }}>
      <GridList
        layout={columns === 1 ? "stack" : "grid"}
        selectionMode={selectionMode}
        className={choiceboxStyles({
          columns,
          gap,
          className,
        })}
        {...props}
      />
    </ChoiceboxContext.Provider>
  )
}

const choiceboxItemStyles = tv({
  extend: focusStyles,
  base: [
    "group/choicebox-item relative bg-bg text-sm [--choicebox-fg:var(--color-primary)] [--choicebox:color-mix(in_oklab,var(--color-primary)_4%,white_96%)]",
    "[--choicebox-selected-hovered:color-mix(in_oklab,var(--color-primary)_15%,white_85%)]",
    "dark:[--choicebox-selected-hovered:color-mix(in_oklab,var(--color-primary)_25%,black_75%)]",
    "dark:[--choicebox-fg:color-mix(in_oklab,var(--color-primary)_45%,white_55%)] dark:[--choicebox:color-mix(in_oklab,var(--color-primary)_20%,black_70%)]",
    "inset-ring inset-ring-border cursor-default rounded-lg p-4 **:data-[slot=label]:font-medium",
    "**:data-[slot=avatar]:*:mr-2 **:data-[slot=avatar]:*:size-5 **:data-[slot=avatar]:size-5 **:data-[slot=avatar]:shrink-0",
    "**:data-[slot=icon]:mr-2 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0",
    "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
  ],
  variants: {
    isOneColumn: {
      true: "col-span-full",
    },
    init: {
      true: [
        "bg-(--choicebox) text-(--choicebox-fg)",
        "inset-ring-ring/70 z-20 hover:bg-(--choicebox-selected-hovered)",
        "**:data-[slot=label]:text-(--choicebox-fg)",
        "**:[[slot=description]]:text-(--choicebox-fg)",
      ],
    },
    isDisabled: {
      true: "z-10 opacity-50 **:data-[slot=label]:text-muted-fg forced-colors:text-[GrayText] **:[[slot=description]]:text-muted-fg/70",
    },
  },
})

interface ChoiceboxItemProps extends GridListItemProps, VariantProps<typeof choiceboxItemStyles> {
  label?: string
  description?: string
}

const ChoiceboxItem = ({ className, children, ...props }: ChoiceboxItemProps) => {
  const textValue = props.textValue || (typeof children === "string" ? children : undefined)
  const { columns } = useChoiceboxContext()
  return (
    <GridListItem
      textValue={textValue}
      data-slot="choicebox-item"
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        choiceboxItemStyles({
          ...renderProps,
          isOneColumn: columns === 1,
          init: renderProps.isSelected || renderProps.isHovered || renderProps.isFocusVisible,
          className,
        }),
      )}
    >
      {(values) => (
        <div
          className={twJoin(
            "col-span-full grid",
            columns === 1 ? "grid-cols-subgrid" : "grid-cols-[auto_1fr]",
          )}
        >
          {props.label && <ChoiceboxLabel>{props.label}</ChoiceboxLabel>}
          {props.description && <ChoiceboxDescription>{props.description}</ChoiceboxDescription>}
          {typeof children === "function" ? children(values) : children}
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <div className="absolute top-0 right-0 px-2 pt-4">
              <Checkbox slot="selection" />
            </div>
          )}
        </div>
      )}
    </GridListItem>
  )
}

interface ChoiceboxLabelProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}

const ChoiceboxLabel = ({ className, ref, ...props }: ChoiceboxLabelProps) => {
  return (
    <Text
      data-slot="label"
      ref={ref}
      className={twMerge(
        "col-start-2 group-has-data-[slot=icon]/choicebox-item:text-sm/3",
        className,
      )}
      {...props}
    />
  )
}

type ChoiceboxDescriptionProps = ChoiceboxLabelProps

const ChoiceboxDescription = ({ className, ref, ...props }: ChoiceboxDescriptionProps) => {
  const { columns } = useChoiceboxContext()
  return (
    <Text
      slot="description"
      ref={ref}
      className={twMerge("col-start-2 text-muted-fg", className)}
      {...props}
    />
  )
}

Choicebox.Item = ChoiceboxItem
Choicebox.Label = ChoiceboxLabel
Choicebox.Description = ChoiceboxDescription

export type { ChoiceboxProps, ChoiceboxItemProps }
export { Choicebox }
