"use client"

import { useVisuallyHidden } from "react-aria"

type VisuallyHiddenSpanProps = {
  children: React.ReactNode
}

const VisuallyHidden = ({ children }: VisuallyHiddenSpanProps) => {
  const { visuallyHiddenProps } = useVisuallyHidden()

  return <span {...visuallyHiddenProps}>{children}</span>
}

export { VisuallyHidden }
