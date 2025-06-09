import type { LazyExoticComponent } from "react"

export type RegistryItem = {
  component: LazyExoticComponent<any>
  files: string[]
  [key: string]: any
}
