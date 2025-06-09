"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ToastActionDemo() {
  return (
    <div className="flex gap-3">
      <Button
        intent="outline"
        size="small"
        onPress={() =>
          toast("New comment on your post!", {
            action: {
              label: "View",
              onClick: () => alert("Viewed"),
            },
          })
        }
      >
        Action
      </Button>
      <Button
        intent="outline"
        size="small"
        onPress={() =>
          toast("New comment on your post!", {
            action: {
              label: "View",
              onClick: () => alert("Viewed"),
            },
            cancel: {
              label: "Cancel",
              onClick: () => alert("Cancelled"),
            },
          })
        }
      >
        Do or Not
      </Button>
      <Button
        intent="outline"
        size="small"
        onPress={() =>
          toast("New comment on your post!", {
            cancel: {
              label: "Cancel",
              onClick: () => alert("Cancelled"),
            },
          })
        }
      >
        Cancel
      </Button>
    </div>
  )
}
