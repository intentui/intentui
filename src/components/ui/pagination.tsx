"use client"

import { twMerge } from "tailwind-merge"
import { type ButtonProps, buttonStyles } from "@/components/ui/button"
import { Link, type LinkProps } from "@/components/ui/link"

const Pagination = ({ className, ref, ...props }: React.ComponentProps<"nav">) => (
  <nav
    data-slot="pagination"
    aria-label="pagination"
    className={twMerge(
      "mx-auto flex w-full items-center justify-center gap-(--pagination-gap) [--pagination-gap:--spacing(2)] [--section-radius:calc(var(--radius-lg)-1px)] **:data-[slot=control]:w-auto",
      "**:data-[slot=pagination-item]:cursor-default",
      className,
    )}
    ref={ref}
    {...props}
  />
)

const PaginationSection = ({ className, ref, ...props }: React.ComponentProps<"ul">) => (
  <li data-slot="pagination-section">
    <ul ref={ref} className={twMerge("flex h-full gap-1.5 text-sm/6", className)} {...props} />
  </li>
)

const PaginationList = ({ className, ref, ...props }: React.ComponentProps<"ul">) => {
  return (
    <ul
      ref={ref}
      data-slot="pagination-list"
      aria-label={props["aria-label"] || "Pagination"}
      className={twMerge("flex gap-[5px]", className)}
      {...props}
    />
  )
}

interface PaginationItemProps
  extends Omit<LinkProps, "children">,
    Pick<ButtonProps, "isCircle" | "size" | "intent"> {
  className?: string
  isCurrent?: boolean
  children?: string | number
}

const PaginationItem = ({
  className,
  size = "sm",
  isCircle,
  isCurrent,
  ...props
}: PaginationItemProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        href={isCurrent ? undefined : props.href}
        aria-current={isCurrent ? "page" : undefined}
        className={buttonStyles({
          size: size,
          isCircle: isCircle,
          intent: isCurrent ? "outline" : "plain",
          className: twMerge("touch-target min-w-9 shrink-0", className),
        })}
        {...props}
      />
    </li>
  )
}

interface PaginationAttributesProps
  extends Omit<LinkProps, "className">,
    Pick<ButtonProps, "size" | "isCircle" | "intent"> {
  className?: string
}

const PaginationFirst = ({
  className,
  children,
  size = "sq-sm",
  intent = "outline",
  isCircle,
  ...props
}: PaginationAttributesProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        aria-label="First page"
        className={buttonStyles({
          size: children ? "sm" : size,
          isCircle,
          intent,
          className: twMerge("shrink-0", className),
        })}
        {...props}
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 25 24"
            data-slot="icon"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m17.5 18-6-6 6-6m-10 0v12"
            />
          </svg>
          {children}
        </>
      </Link>
    </li>
  )
}
const PaginationPrevious = ({
  className,
  children,
  size = "sq-sm",
  intent = "outline",
  isCircle = false,
  ...props
}: PaginationAttributesProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        aria-label="Previous page"
        className={buttonStyles({
          size: children ? "sm" : size,
          isCircle,
          intent,
          className: twMerge("shrink-0", className),
        })}
        {...props}
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          {children}
        </>
      </Link>
    </li>
  )
}
const PaginationNext = ({
  className,
  children,
  size = "sq-sm",
  intent = "outline",
  isCircle = false,
  ...props
}: PaginationAttributesProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        aria-label="Next page"
        className={buttonStyles({
          size: children ? "sm" : size,
          isCircle,
          intent,
          className: twMerge("shrink-0", className),
        })}
        {...props}
      >
        <>
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </>
      </Link>
    </li>
  )
}
const PaginationLast = ({
  className,
  children,
  size = "sq-sm",
  intent = "outline",
  isCircle = false,
  ...props
}: PaginationAttributesProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        aria-label="Last page"
        className={buttonStyles({
          size: children ? "sm" : size,
          isCircle,
          intent,
          className: twMerge("shrink-0", className),
        })}
        {...props}
      >
        <>
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 25 24"
            className="intentui-icons size-4"
            data-slot="icon"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7.5 18 6-6-6-6m10 0v12"
            />
          </svg>
        </>
      </Link>
    </li>
  )
}

const PaginationSpacer = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return <div aria-hidden ref={ref} className={twMerge("flex-1", className)} {...props} />
}

const PaginationGap = ({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="pagination-gap"
      className={twMerge(
        "w-9 select-none text-center font-semibold text-fg text-sm/6 outline-hidden",
        className,
      )}
      {...props}
      aria-hidden
    >
      {children}
    </li>
  )
}

const PaginationLabel = ({ className, ref, ...props }: React.ComponentProps<"li">) => {
  return (
    <li
      ref={ref}
      data-slot="pagination-label"
      className={twMerge(
        "min-w-4 self-center text-fg *:[strong]:font-medium *:[strong]:text-fg",
        className,
      )}
      {...props}
    />
  )
}

const PaginationInfo = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={twMerge(
        "text-muted-fg text-sm/6 *:[strong]:font-medium *:[strong]:text-fg",
        className,
      )}
      {...props}
    />
  )
}

export {
  Pagination,
  PaginationLabel,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
  PaginationGap,
  PaginationInfo,
  PaginationSpacer,
  PaginationList,
  PaginationSection,
}
