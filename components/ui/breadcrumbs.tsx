"use client"

import { cn } from "@/utils/classes"
import { IconChevronLgRight } from "@intentui/icons"
import type { BreadcrumbProps, BreadcrumbsProps } from "react-aria-components"
import {
  Breadcrumb,
  Breadcrumbs as BreadcrumbsPrimitive,
  type LinkProps
} from "react-aria-components"

import { Link } from "./link"
import { ctr } from "./primitive"

const Breadcrumbs = <T extends object>({ className, ...props }: BreadcrumbsProps<T>) => {
  return <BreadcrumbsPrimitive {...props} className={cn("flex items-center gap-2", className)} />
}

interface ItemProps extends BreadcrumbProps {
  href?: string
  separator?: "slash" | "chevron" | boolean
}

const Item = ({
  href,
  separator = true,
  className,
  ...props
}: ItemProps & Partial<Omit<LinkProps, "className">>) => {
  const separatorValue = separator === true ? "chevron" : separator

  return (
    <Breadcrumb {...props} className={ctr(className, "flex text-sm items-center gap-2")}>
      {({ isCurrent }) => (
        <>
          {<Link href={href} {...props} />}
          {!isCurrent && separator !== false && <Separator separator={separatorValue} />}
        </>
      )}
    </Breadcrumb>
  )
}

const Separator = ({ separator = "chevron" }: { separator?: ItemProps["separator"] }) => {
  return (
    <span className={cn("[&>*]:shrink-0 [&>[data-slot=icon]]:size-3.5 [&>*]:text-muted-fg")}>
      {separator === "chevron" && <IconChevronLgRight />}
      {separator === "slash" && <span className="text-muted-fg">/</span>}
    </span>
  )
}

Breadcrumbs.Item = Item

export { Breadcrumbs }
