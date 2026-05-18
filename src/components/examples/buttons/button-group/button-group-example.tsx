import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button intent="secondary">Down</Button>
      <Button intent="secondary">Up</Button>
    </ButtonGroup>
  )
}
