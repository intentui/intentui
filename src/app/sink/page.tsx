"use client"
import CheckboxGroupDescriptionDemo from "@/components/docs/forms/checkbox/checkbox-group-description-demo"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field";
import { useEffect, useRef } from "react";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="flex items-center justify-center p-20">
    </div>
  )
}
