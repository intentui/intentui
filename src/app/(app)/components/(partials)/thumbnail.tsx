import { ThumbAreaChart } from "@/app/(app)/components/(partials)/(svg)/thumb-area-chart"
import { ThumbBarChart } from "@/app/(app)/components/(partials)/(svg)/thumb-bar-chart"
import { ThumbButton } from "@/app/(app)/components/(partials)/(svg)/thumb-button"
import { ThumbCalendar } from "@/app/(app)/components/(partials)/(svg)/thumb-calendar"
import { ThumbCheckbox } from "@/app/(app)/components/(partials)/(svg)/thumb-checkbox"
import { ThumbCheckboxGroup } from "@/app/(app)/components/(partials)/(svg)/thumb-checkbox-group"
import { ThumbChoicebox } from "@/app/(app)/components/(partials)/(svg)/thumb-choicebox"
import { ThumbFileTrigger } from "@/app/(app)/components/(partials)/(svg)/thumb-file-trigger"
import { ThumbGridList } from "@/app/(app)/components/(partials)/(svg)/thumb-grid-list"
import { ThumbLineChart } from "@/app/(app)/components/(partials)/(svg)/thumb-line-chart"
import { ThumbListBox } from "@/app/(app)/components/(partials)/(svg)/thumb-list-box"
import { ThumbMenu } from "@/app/(app)/components/(partials)/(svg)/thumb-menu"
import { ThumbNavbar } from "@/app/(app)/components/(partials)/(svg)/thumb-navbar"
import { ThumbPieChart } from "@/app/(app)/components/(partials)/(svg)/thumb-pie-chart"
import { ThumbSidebar } from "@/app/(app)/components/(partials)/(svg)/thumb-sidebar"
import { ThumbTable } from "@/app/(app)/components/(partials)/(svg)/thumb-table"
import { ThumbToggle } from "@/app/(app)/components/(partials)/(svg)/thumb-toggle"
import { ThumbToggleGroup } from "@/app/(app)/components/(partials)/(svg)/thumb-toggle-group"
import { ThumbTree } from "@/app/(app)/components/(partials)/(svg)/thumb-tree"

export function Thumbnail({ name }: { name: string }) {
  const svgMap = {
    button: <ThumbButton />,
    "file-trigger": <ThumbFileTrigger />,
    "toggle-group": <ThumbToggleGroup />,
    toggle: <ThumbToggle />,
    checkbox: <ThumbCheckbox />,
    "checkbox-group": <ThumbCheckboxGroup />,
    "area-chart": <ThumbAreaChart />,
    "pie-chart": <ThumbPieChart />,
    "line-chart": <ThumbLineChart />,
    "bar-chart": <ThumbBarChart />,
    calendar: <ThumbCalendar />,
    tree: <ThumbTree />,
    table: <ThumbTable />,
    navbar: <ThumbNavbar />,
    choicebox: <ThumbChoicebox />,
    sidebar: <ThumbSidebar />,
    menu: <ThumbMenu />,
    "list-box": <ThumbListBox />,
    "grid-list": <ThumbGridList />,
  }

  // @ts-ignore
  const svg = svgMap[name] || null

  return (
    <div className="relative flex aspect-video items-center justify-center bg-bg">
      <div className="absolute bottom-0 h-28 w-full bg-linear-to-t from-bg to-transparent" />
      {svg}
    </div>
  )
}
