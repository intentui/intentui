import { cache } from "react"

export const createFetchRegistryFile = (basePath: string) =>
  cache(async (key: string): Promise<string | null> => {
    try {
      const response = await fetch(`${basePath}/${key}.json`)
      if (response.ok) {
        const registryEntry = await response.json()
        return registryEntry.files?.[0]?.content || null
      }
      console.error(`Failed to fetch registry file at ${basePath}:`, response.status)
      return null
    } catch (error) {
      console.error(`Error loading source code from ${basePath}:`, error)
      return null
    }
  })
