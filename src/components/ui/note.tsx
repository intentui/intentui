import { IconCircleCheckFill, IconCircleExclamationFill, IconCircleInfoFill } from "@intentui/icons"
import { type VariantProps, tv } from "tailwind-variants"

const noteStyles = tv({
  base: [
    "inset-ring-1 inset-ring-current/10 w-full overflow-hidden rounded-lg p-4 sm:text-sm/6",
    "[&_a]:underline hover:[&_a]:underline **:[strong]:font-semibold",
  ],
  variants: {
    intent: {
      default: [
        "border-border bg-secondary/50 text-secondary-fg **:data-[slot=icon]:text-secondary-fg [&_a]:text-secondary-fg",
        "dark:**:data-[slot=icon]:text-secondary-fg dark:[&_a]:text-secondary-fg",
      ],
      info: [
        "bg-sky-500/5 text-sky-700 group-hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-hover:bg-sky-500/20",
      ],
      warning:
        "bg-amber-400/20 text-amber-700 group-hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-hover:bg-amber-400/15",
      danger:
        "bg-red-500/15 text-red-700 group-hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-hover:bg-red-500/20",
      success: [
        "border-success/20 bg-success/50 text-emerald-900 leading-4 **:data-[slot=icon]:text-success [&_a]:text-emerald-600",
        "dark:bg-success/10 dark:text-emerald-200 dark:**:data-[slot=icon]:text-emerald-400 dark:[&_a]:text-emerald-50",
      ],
    },
  },
  defaultVariants: {
    intent: "default",
  },
})

interface NoteProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noteStyles> {
  indicator?: boolean
}

const Note = ({ indicator = true, intent = "default", className, ...props }: NoteProps) => {
  const iconMap: Record<string, React.ElementType | null> = {
    info: IconCircleInfoFill,
    warning: IconCircleExclamationFill,
    danger: IconCircleExclamationFill,
    success: IconCircleCheckFill,
    default: null,
  }

  const IconComponent = iconMap[intent] || null

  return (
    <div className={noteStyles({ intent, className })} {...props}>
      <div className="flex grow items-start">
        {IconComponent && indicator && (
          <div className="shrink-0">
            <IconComponent className="mr-3 size-5 rounded-full leading-loose ring-4 ring-current/30" />
          </div>
        )}
        <div className="text-pretty">{props.children}</div>
      </div>
    </div>
  )
}

export type { NoteProps }
export { Note }
