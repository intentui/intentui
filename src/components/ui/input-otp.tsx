"use client"

import { MinusIcon } from "@heroicons/react/20/solid"
import { OTPInput, OTPInputContext } from "input-otp"
import { use } from "react"
import { twMerge } from "tailwind-merge"
import { fieldStyles, Label } from "@/components/ui/field"

export function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) {
  return (
    <span data-slot="control" className="relative block">
      <OTPInput
        data-slot="input-otp"
        containerClassName={twMerge(
          fieldStyles({ className: "has-[:disabled]:opacity-50" }),
          containerClassName,
        )}
        {...props}
      />
    </span>
  )
}

export function InputOTPControl({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="control"
      className={twMerge("flex items-center gap-2 has-disabled:opacity-50", className)}
      {...props}
    />
  )
}

export function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={twMerge("flex items-center", className)}
      {...props}
    />
  )
}

export function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = use(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={twMerge(
        "relative flex size-9 items-center justify-center border-input border-y border-r shadow-xs outline-none transition-all [--input-otp-radius:calc(var(--radius-lg)-1px)] first:rounded-l-(--input-otp-radius) first:border-l last:rounded-r-(--input-otp-radius) aria-invalid:border-danger data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:bg-primary-subtle/10 data-[active=true]:ring-3 data-[active=true]:ring-ring/20 data-[active=true]:aria-invalid:border-danger-subtle-fg/70 data-[active=true]:aria-invalid:ring-danger-subtle-fg/20 sm:text-sm/6 dark:data-[active=true]:aria-invalid:ring-danger-subtle-fg/70",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-fg duration-1000" />
        </div>
      )}
    </div>
  )
}

export function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" {...props}>
      <MinusIcon className="size-4" />
    </div>
  )
}

export function InputOTPLabel(props: React.ComponentProps<typeof Label>) {
  return <Label elementType="span" {...props} />
}
