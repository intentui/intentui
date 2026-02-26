'use client'

import { twMerge } from "tailwind-merge";
import { fieldStyles } from "@/components/ui/field";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export function NativeSelect({className, children, ...props}: React.ComponentProps<"div">) {
  return (
    <div data-slot="control" className={fieldStyles({className: twMerge('relative', className)})} {...props}>
      {children}
      <ChevronUpDownIcon className="pointer-events-none absolute inset-e-2 top-1/2 size-5 -translate-y-1/2 text-muted-fg sm:size-4"/>
    </div>
  );
}

export function NativeSelectContent({className, ...props}: React.ComponentProps<"select">) {
  return (
    <select data-slot="control" className={twMerge(
      "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
      "text-base/6 text-fg placeholder:text-muted-fg sm:text-sm/6",
      "border border-input enabled:hover:border-muted-fg/30",
      "outline-hidden focus:border-ring/70 focus:ring-3 focus:ring-ring/20 focus:enabled:hover:border-ring/80",
      "invalid:border-danger-subtle-fg/70 focus:invalid:border-danger-subtle-fg/70 focus:invalid:ring-danger-subtle-fg/20 invalid:enabled:hover:border-danger-subtle-fg/80 focus:invalid:enabled:hover:border-danger-subtle-fg/80",
      "[&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
      "disabled:bg-muted forced-colors:in-disabled:text-[GrayText]",
      "in-disabled:bg-muted forced-colors:in-disabled:text-[GrayText]",
      "dark:scheme-dark",
      className)} {...props}/>
  );
}
