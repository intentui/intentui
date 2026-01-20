import { useEffect, useState } from "react"

export function useScrollPosition(ref?: React.RefObject<HTMLElement | null>) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        setScrollPosition(ref.current.scrollTop)
      } else {
        setScrollPosition(window.scrollY)
      }
    }

    if (ref?.current) {
      ref.current.addEventListener("scroll", handleScroll)
      return () => {
        ref.current?.removeEventListener("scroll", handleScroll)
      }
    } else {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [ref])

  return scrollPosition
}
