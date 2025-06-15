"use client"

import { use } from "react"

import { IconBulletFill } from "@intentui/icons"
import { OTPInput, OTPInputContext } from "input-otp"
import { twMerge } from "tailwind-merge"

type InputOTOPProps = React.ComponentProps<typeof OTPInput>
const InputOTP = ({
  className,
  autoFocus = true,
  containerClassName,
  ref,
  ...props
}: InputOTOPProps) => (
  <OTPInput
    data-1p-ignore
    ref={ref}
    autoFocus={autoFocus}
    containerClassName={twMerge(
      "flex items-center gap-2 has-disabled:opacity-50",
      containerClassName,
    )}
    className={twMerge("mt-auto h-[2.5rem] bg-danger disabled:cursor-not-allowed", className)}
    {...props}
  />
)

type InputOTPGroupProps = React.ComponentProps<"div">
const InputOTPGroup = ({ className, ref, ...props }: InputOTPGroupProps) => (
  <div ref={ref} className={twMerge("flex items-center gap-x-1.5", className)} {...props} />
)

interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number
}

const InputOTPSlot = ({ index, className, ref, ...props }: InputOTPSlotProps) => {
  const inputOTPContext = use(OTPInputContext)
  const slot = inputOTPContext.slots[index]

  if (!slot) {
    throw new Error("Slot not found")
  }

  const { char, hasFakeCaret, isActive } = slot

  return (
    <div
      ref={ref}
      className={twMerge(
        "relative flex size-10 items-center justify-center rounded-md border border-input text-sm tabular-nums transition-all",
        isActive && "z-10 border-ring/70 ring-3 ring-ring/20",
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

type InputOTPSeparatorProps = React.ComponentProps<"div">
const InputOTPSeparator = ({ ref, ...props }: InputOTPSeparatorProps) => (
  <div ref={ref} {...props}>
    <IconBulletFill className="size-2" />
  </div>
)

InputOTP.Group = InputOTPGroup
InputOTP.Slot = InputOTPSlot
InputOTP.Separator = InputOTPSeparator

export type { InputOTPGroupProps, InputOTOPProps, InputOTPSlotProps, InputOTPSeparatorProps }
export { InputOTP }
