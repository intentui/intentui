interface ReleaseNote {
  name: string
  component: string
  url: string
  type: "component" | "demo" | "block"
  category: string
  kind: string | null
  description: string | null
  additions: number
  deletions: number
  date: string
}
