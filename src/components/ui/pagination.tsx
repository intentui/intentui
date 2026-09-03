'use client'

import { cn } from 'cn'
import { type ButtonProps, buttonStyles } from '@/components/ui/button'
import { Link, type LinkProps } from '@/components/ui/link'
import { Text } from '@/components/ui/text'

const Pagination = ({ className, ref, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    data-slot="pagination"
    aria-label="pagination"
    className={cn(
      'mx-auto flex w-full items-center justify-center gap-(--pagination-gap) [--pagination-gap:--spacing(2)] [--section-radius:calc(var(--radius-lg)-1px)] **:data-[slot=control]:w-auto',
      '**:data-[slot=pagination-item]:cursor-default',
      className
    )}
    ref={ref}
    {...props}
  />
)

const PaginationSection = ({ className, ref, ...props }: React.ComponentProps<'ul'>) => (
  <li data-slot="pagination-section">
    <ul ref={ref} className={cn('flex h-full gap-1.5 text-sm/6', className)} {...props} />
  </li>
)

const PaginationList = ({ className, ref, ...props }: React.ComponentProps<'ul'>) => {
  return (
    <ul
      ref={ref}
      data-slot="pagination-list"
      aria-label={props['aria-label'] || 'Pagination'}
      className={cn('flex gap-1.25', className)}
      {...props}
    />
  )
}

interface PaginationItemProps
  extends Omit<LinkProps, 'children'>, Pick<ButtonProps, 'isCircle' | 'size' | 'intent'> {
  className?: string
  isCurrent?: boolean
  children?: string | number | React.ReactNode
}

const PaginationItem = ({
  className,
  size = 'sm',
  isCircle,
  isCurrent,
  ...props
}: PaginationItemProps) => {
  return (
    <li>
      <Link
        data-slot="pagination-item"
        href={isCurrent ? undefined : props.href}
        aria-current={isCurrent ? 'page' : undefined}
        className={buttonStyles({
          size: size,
          isCircle: isCircle,
          intent: isCurrent ? 'outline' : 'plain',
          className: cn('touch-target min-w-9 shrink-0', className),
        })}
        {...props}
      />
    </li>
  )
}

const PaginationFirst = (props: PaginationItemProps) => {
  return (
    <PaginationItem data-slot="pagination-item" aria-label="First page" {...props}>
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
          viewBox="0 0 25 24"
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
        {props.children}
      </>
    </PaginationItem>
  )
}

const PaginationPrevious = (props: PaginationItemProps) => {
  return (
    <PaginationItem {...props}>
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
        {props.children}
      </>
    </PaginationItem>
  )
}

const PaginationNext = (props: PaginationItemProps) => {
  return (
    <PaginationItem aria-label="Next page" {...props}>
      <>
        {props.children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </>
    </PaginationItem>
  )
}

const PaginationLast = (props: PaginationItemProps) => {
  return (
    <PaginationItem aria-label="Last page" {...props}>
      <>
        {props.children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
          viewBox="0 0 25 24"
          className="intentui-icons size-4"
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
    </PaginationItem>
  )
}

const PaginationSpacer = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  return <div aria-hidden className={cn('flex-1', className)} {...props} />
}

const PaginationGap = ({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentProps<'li'>) => {
  return (
    <li
      data-slot="pagination-gap"
      className={cn(
        'w-9 select-none text-center font-semibold text-fg text-sm/6 outline-hidden',
        className
      )}
      {...props}
      aria-hidden
    >
      {children}
    </li>
  )
}

const PaginationLabel = ({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) => {
  return (
    <li
      data-slot="pagination-label"
      className={cn(
        'min-w-4 self-center text-fg *:[strong]:font-medium *:[strong]:text-fg',
        className
      )}
      {...props}
    />
  )
}

const PaginationInfo = Text

export {
  Pagination,
  PaginationFirst,
  PaginationGap,
  PaginationInfo,
  PaginationItem,
  PaginationLabel,
  PaginationLast,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  PaginationSection,
  PaginationSpacer,
}
