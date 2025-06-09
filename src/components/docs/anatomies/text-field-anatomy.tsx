import { TextField } from "@/components/ui/text-field"

export default function TextFieldAnatomy() {
  return (
    <TextField
      name="name"
      type="text"
      label="Name"
      description="Enter your name"
      placeholder="John Doe"
      errorMessage="This field is required"
      prefix="..."
      suffix="..."
    />
  )
}
