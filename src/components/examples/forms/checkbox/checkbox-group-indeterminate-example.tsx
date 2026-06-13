"use client"

import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox"
import { Description } from "@/components/ui/field"

export default function CheckboxGroupIndeterminateExample() {
  return (
    <CheckboxGroup aria-label="Settings" defaultValue={["encryption"]} className="ml-6" name="sets">
      <CheckboxField value="encryption" isIndeterminate isReadOnly>
        <Checkbox>Encryption</Checkbox>
        <Description>Enable encryption.</Description>
      </CheckboxField>
      <CheckboxField value="firewall">
        <Checkbox>Firewall</Checkbox>
        <Description>Enable firewall protection.</Description>
      </CheckboxField>
      <CheckboxField value="backup">
        <Checkbox>Backup</Checkbox>
        <Description>Enable automatic backups.</Description>
      </CheckboxField>
      <CheckboxField value="anomalyDetection" isIndeterminate>
        <Checkbox>Anomaly Detection</Checkbox>
        <Description>Enable anomaly detection.</Description>
      </CheckboxField>
    </CheckboxGroup>
  )
}
