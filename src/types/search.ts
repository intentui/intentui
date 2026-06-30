export interface CollectionComponent {
  title: string
  slug: string
  status?: 'new' | 'updated' | 'beta' | 'alpha'
}

export interface Component {
  section: string
  children: {
    subsection: string
    children: CollectionComponent[]
  }[]
}

export type SubSection = {
  id: number
  subsection: string
  children: CollectionComponent[]
}

export type Grouped =
  | {
      id: number
      section: string
      children: CollectionComponent[]
    }
  | {
      id: number
      section: string
      children: SubSection[]
    }
