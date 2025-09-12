import { IconCircleCheckFill, IconCircleExclamationFill, IconCircleInfoFill } from "@intentui/icons"
import { twJoin, twMerge } from "tailwind-merge"

interface NoteProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  intent?: "default" | "info" | "warning" | "danger" | "success"
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
    <div
      className={twMerge([
        "inset-ring inset-ring-current/15 grid w-full grid-cols-[auto_1fr] overflow-hidden rounded-lg p-4 backdrop-blur-2xl sm:text-sm/6",
        "*:[a]:hover:underline **:[strong]:font-medium",
        intent === "default" && "bg-muted text-secondary-fg",
        intent === "info" && "bg-info-subtle text-info-subtle-fg",
        intent === "warning" && "bg-warning-subtle text-warning-subtle-fg",
        intent === "danger" && "bg-danger-subtle text-danger-subtle-fg",
        intent === "success" && "bg-success-subtle text-success-subtle-fg",
        className,
      ])}
      {...props}
    >
      {IconComponent && indicator && (
        <div
          className={twJoin(
            "mr-3 grid size-8 place-content-center rounded-full border-2",
            intent === "warning" && "border-warning-subtle-fg/40",
            intent === "success" && "border-success-subtle-fg/40",
            intent === "danger" && "border-danger-subtle-fg/40",
            intent === "info" && "border-info-subtle-fg/40",
          )}
        >
          <div
            className={twJoin(
              "grid size-6 place-content-center rounded-full border-2",
              intent === "warning" && "border-warning-subtle-fg/85",
              intent === "success" && "border-success-subtle-fg/85",
              intent === "danger" && "border-danger-subtle-fg/85",
              intent === "info" && "border-info-subtle-fg/85",
            )}
          >
            <IconComponent className="size-5 shrink-0" />
          </div>
        </div>
      )}
      <div className="text-pretty text-base/6 group-has-data-[slot=icon]:col-start-2 sm:text-sm/6">
        {props.children}
      </div>
    </div>
  )
}

export type { NoteProps }
export { Note }
