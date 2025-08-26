import { Tracker } from "@/components/ui/tracker"

const deployments = [
  { status: "success", time: "2025-06-24T00:00:00Z" },
  { status: "success", time: "2025-06-24T01:00:00Z" },
  { status: "success", time: "2025-06-24T02:00:00Z" },
  { status: "error", time: "2025-06-24T03:00:00Z" },
  { status: "success", time: "2025-06-24T04:00:00Z" },
  { status: "warning", time: "2025-06-24T05:00:00Z" },
  { status: "success", time: "2025-06-24T06:00:00Z" },
  { status: "success", time: "2025-06-24T07:00:00Z" },
  { status: "error", time: "2025-06-24T08:00:00Z" },
  { status: "success", time: "2025-06-24T09:00:00Z" },
  { status: "success", time: "2025-06-24T10:00:00Z" },
  { status: "success", time: "2025-06-24T11:00:00Z" },
  { status: "success", time: "2025-06-24T12:00:00Z" },
  { status: "success", time: "2025-06-24T13:00:00Z" },
  { status: "success", time: "2025-06-24T14:00:00Z" },
  { status: "success", time: "2025-06-24T15:00:00Z" },
  { status: "success", time: "2025-06-24T16:00:00Z" },
  { status: "success", time: "2025-06-24T17:00:00Z" },
  { status: "success", time: "2025-06-24T18:00:00Z" },
  { status: "success", time: "2025-06-24T19:00:00Z" },
  { status: "success", time: "2025-06-24T20:00:00Z" },
  { status: "success", time: "2025-06-24T21:00:00Z" },
  { status: "warning", time: "2025-06-24T22:00:00Z" },
  { status: "success", time: "2025-06-24T23:00:00Z" },
  { status: "success", time: "2025-06-25T00:00:00Z" },
  { status: "success", time: "2025-06-25T01:00:00Z" },
  { status: "success", time: "2025-06-25T02:00:00Z" },
  { status: "success", time: "2025-06-25T03:00:00Z" },
  { status: "error", time: "2025-06-25T04:00:00Z" },
  { status: "success", time: "2025-06-25T05:00:00Z" },
  { status: "success", time: "2025-06-25T06:00:00Z" },
  { status: "success", time: "2025-06-25T07:00:00Z" },
  { status: "success", time: "2025-06-25T08:00:00Z" },
  { status: "success", time: "2025-06-25T09:00:00Z" },
  { status: "success", time: "2025-06-25T10:00:00Z" },
  { status: "success", time: "2025-06-25T11:00:00Z" },
  { status: "success", time: "2025-06-25T12:00:00Z" },
  { status: "success", time: "2025-06-25T13:00:00Z" },
  { status: "success", time: "2025-06-25T14:00:00Z" },
  { status: "success", time: "2025-06-25T15:00:00Z" },
  { status: "success", time: "2025-06-25T16:00:00Z" },
  { status: "success", time: "2025-06-25T17:00:00Z" },
  { status: "success", time: "2025-06-25T18:00:00Z" },
  { status: "success", time: "2025-06-25T19:00:00Z" },
  { status: "success", time: "2025-06-25T20:00:00Z" },
  { status: "success", time: "2025-06-25T21:00:00Z" },
  { status: "success", time: "2025-06-25T22:00:00Z" },
  { status: "success", time: "2025-06-25T23:00:00Z" },
]

const data = deployments.map((d) => ({
  color:
    d.status === "success"
      ? "bg-success"
      : d.status === "error"
        ? "bg-danger"
        : "bg-warning",
  tooltip: `${d.status} @ ${new Date(d.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
}))

export default function TrackerWithoutTooltipDemo() {
  return <Tracker disabledTooltip data={data} />
}
