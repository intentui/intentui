"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

function simulateApiCall(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Data successfully saved!")
      } else {
        reject(new Error("Failed to save data"))
      }
    }, 2000)
  })
}

export default function ToastPromiseDemo() {
  const handleSuccess = () => {
    toast.promise(simulateApiCall(), {
      loading: "Saving your data...",
      success: (data) => data,
      error: (error) => error.message,
    })
  }

  const handleCustomSuccess = () => {
    toast.promise(simulateApiCall(), {
      loading: "Uploading file...",
      success: (data) => `${data} File uploaded successfully!`,
      error: "Upload failed. Please try again.",
    })
  }

  return (
    <div className="flex flex-col gap-3">
      <Button intent="outline" size="sm" onPress={handleSuccess}>
        Promise Toast
      </Button>
      <Button intent="outline" size="sm" onPress={handleCustomSuccess}>
        Custom Promise Toast
      </Button>
    </div>
  )
}
