'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'

interface IconSearchContextValue {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const IconSearchContext = createContext<IconSearchContextValue | null>(null)

export function IconSearchProvider({
  children,
  initialQuery = '',
}: {
  children: ReactNode
  initialQuery?: string
}) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  return (
    <IconSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </IconSearchContext.Provider>
  )
}

export function useIconSearch() {
  const context = useContext(IconSearchContext)
  if (!context) {
    throw new Error('useIconSearch must be used within IconSearchProvider')
  }
  return context
}
