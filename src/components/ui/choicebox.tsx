"use client"

import { createContext, use } from "react"
import type { GridListItemProps, GridListProps, TextProps } from "react-aria-components"
import { composeRenderProps, GridList, GridListItem, Text } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { Checkbox } from "./checkbox"

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
    columns: 1,
    gap: 0,
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
  columns = 1,
  gap = 0,
  className,
  selectionMode = "single",
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
  base: [
    "group outline-hidden [--choicebox-fg:var(--color-primary)] [--choicebox:color-mix(in_oklab,var(--color-primary)_4%,white_96%)]",
    "[--choicebox-selected-hovered:color-mix(in_oklab,var(--color-primary)_15%,white_85%)]",
    "dark:[--choicebox-selected-hovered:color-mix(in_oklab,var(--color-primary)_25%,black_75%)]",
    "dark:[--choicebox-fg:color-mix(in_oklab,var(--color-primary)_45%,white_55%)] dark:[--choicebox:color-mix(in_oklab,var(--color-primary)_20%,black_70%)]",
    "inset-ring inset-ring-border rounded-lg p-4 **:data-[slot=label]:font-medium",
    " **:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-5 **:data-[slot=avatar]:shrink-0",
    "**:data-[slot=icon]:mt-[--spacing(0.7)] **:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0",
    "grid grid-cols-[1fr_auto] content-start items-start gap-x-4 gap-y-1 has-data-[slot=icon]:grid-cols-[auto_1fr_auto]",
    "has-[[slot=description]]:**:data-[slot=label]:font-medium",
  ],
  variants: {
    isLink: {
      true: "cursor-pointer",
      false: "cursor-default",
    },
    isFocused: { true: "inset-ring-ring/70 ring-3 ring-ring/20 invalid:ring-danger/20" },
    isInvalid: { true: "ring-3 ring-danger/20" },
    isOneColumn: {
      true: "col-span-full",
    },
    isHocuset: {
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

const ChoiceboxItem = ({
  className,
  label,
  description,
  children,
  ...props
}: ChoiceboxItemProps) => {
  const textValue = typeof children === "string" ? children : undefined
  const { columns } = useChoiceboxContext()
  return (
    <GridListItem
      textValue={textValue}
      data-slot="choicebox-item"
      {...props}
      className={composeRenderProps(
        className,
        (className, { isHovered, isFocusVisible, isSelected, ...renderProps }) =>
          choiceboxItemStyles({
            ...renderProps,
            isOneColumn: columns === 1,
            isLink: "href" in props,
            isHocuset: isSelected || isHovered || isFocusVisible,
            className,
          }),
      )}
    >
      {composeRenderProps(children, (children, { selectionMode }) => {
        const isStringChild = typeof children === "string"
        const hasCustomChildren = typeof children !== "undefined"

        const content = hasCustomChildren ? (
          isStringChild ? (
            <ChoiceboxLabel>{children}</ChoiceboxLabel>
          ) : (
            children
          )
        ) : (
          <>
            {label && <ChoiceboxLabel>{label}</ChoiceboxLabel>}
            {description && <ChoiceboxDescription>{description}</ChoiceboxDescription>}
          </>
        )
        return (
          <>
            {content}
            {selectionMode === "multiple" && (
              <Checkbox
                className="col-start-2 self-start group-has-data-[slot=icon]:col-start-3 group-hover:not-group-selected:**:data-[slot=indicator]:bg-primary/15 sm:mt-0.5"
                slot="selection"
              />
            )}
          </>
        )
      })}
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
        "select-none text-base/6 text-fg group-disabled:opacity-50 sm:text-sm/6",
        "col-start-1 row-start-1",
        "group-has-data-[slot=icon]:col-start-2",
        className,
      )}
      {...props}
    />
  )
}

type ChoiceboxDescriptionProps = ChoiceboxLabelProps

const ChoiceboxDescription = ({ className, ref, ...props }: ChoiceboxDescriptionProps) => {
  return (
    <Text
      slot="description"
      ref={ref}
      className={twMerge(
        "col-start-1 row-start-2",
        "group-has-data-[slot=icon]:col-start-2",
        "text-base/6 text-muted-fg sm:text-sm/6",
        "group-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

Choicebox.Item = ChoiceboxItem
Choicebox.Label = ChoiceboxLabel
Choicebox.Description = ChoiceboxDescription

export type { ChoiceboxProps, ChoiceboxItemProps }
export { Choicebox }
