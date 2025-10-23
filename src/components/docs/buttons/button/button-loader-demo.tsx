"use client"

import { CheckCircleIcon, KeyIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"

export default function ButtonLoaderDemo() {
  const [loading, setLoading] = useState<"idle" | "loading" | "success">("idle")

  const pressHandler = () => {
    setLoading("loading")

    setTimeout(() => setLoading("success"), 3000)

    setTimeout(() => setLoading("idle"), 6000)
  }

  return (
    <Button
      isPending={loading === "loading"}
      className="w-52 justify-between"
      onPress={pressHandler}
      intent="primary"
    >
      {loading === "success" ? (
        <CheckCircleIcon />
      ) : loading === "loading" ? (
        <Loader variant="spin" />
      ) : (
        <KeyIcon />
      )}
      {loading === "loading"
        ? "Generating Key..."
        : loading === "success"
          ? "Key Generated!"
          : "Generate API Key"}
    </Button>
  )
}
