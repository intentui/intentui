import { useEffect, useState } from "react"

export function useScrollPosition(ref: React.RefObject<HTMLElement | null>) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(ref.current?.scrollTop || 0)
    }

    ref.current?.addEventListener("scroll", handleScroll)

    return () => {
      ref.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}
