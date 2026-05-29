"use client"

import { Checkbox, CheckboxGroup, CheckboxLabel } from "@/components/ui/checkbox"
import { Description } from "@/components/ui/field"

export default function CheckboxGroupIndeterminateExample() {
  return (
    <CheckboxGroup defaultValue={["encryption"]} className="ml-6" name="sets">
      <Checkbox isIndeterminate value="encryption" isReadOnly>
        <CheckboxLabel>Encryption</CheckboxLabel>
        <Description>Enable encryption.</Description>
      </Checkbox>
      <Checkbox value="firewall">
        <CheckboxLabel>Firewall</CheckboxLabel>
        <Description>Enable firewall protection.</Description>
      </Checkbox>
      <Checkbox value="backup">
        <CheckboxLabel>Backup</CheckboxLabel>
        <Description>Enable automatic backups.</Description>
      </Checkbox>
      <Checkbox isIndeterminate value="anomalyDetection">
        <CheckboxLabel>Anomaly Detection</CheckboxLabel>
        <Description>Enable anomaly detection.</Description>
      </Checkbox>
    </CheckboxGroup>
  )
}
