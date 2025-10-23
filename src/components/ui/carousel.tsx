"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { createContext, use, useCallback, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Button, type ButtonProps } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
  const context = use(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

interface CarouselRootProps {
  CarouselContent?: typeof CarouselContent
  CarouselHandler?: typeof CarouselHandler
  CarouselItem?: typeof CarouselItem
  CarouselButton?: typeof CarouselButton
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, CarouselRootProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={twMerge("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

const CarouselContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={twMerge(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  )
}

const CarouselItem = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { orientation } = useCarousel()

  return (
    <div
      className={twMerge(
        "group/carousel-item relative min-w-0 shrink-0 grow-0 basis-full focus:outline-hidden focus-visible:outline-hidden",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  )
}

const CarouselHandler = ({ ref, className, ...props }: React.ComponentProps<"div">) => {
  const { orientation } = useCarousel()
  return (
    <div
      data-slot="carousel-handler"
      ref={ref}
      className={twMerge(
        "relative z-10 mt-6 flex items-center gap-x-2",
        orientation === "horizontal" ? "justify-end" : "justify-center",
        className,
      )}
      {...props}
    />
  )
}

const CarouselButton = ({
  segment,
  className,
  intent = "outline",
  isCircle = true,
  size = "sq-sm",
  ref,
  ...props
}: ButtonProps & { segment: "previous" | "next" }) => {
  const { orientation, scrollPrev, canScrollPrev, scrollNext, canScrollNext } = useCarousel()
  const isNext = segment === "next"
  const canScroll = isNext ? canScrollNext : canScrollPrev
  const scroll = isNext ? scrollNext : scrollPrev
  const Icon = isNext ? ChevronRightIcon : ChevronLeftIcon

  return (
    <Button
      aria-label={isNext ? "Next slide" : "Previous slide"}
      data-handler={segment}
      intent={intent}
      ref={ref}
      size={size}
      isCircle={isCircle}
      className={cx([orientation === "vertical" ? "rotate-90" : "", "shrink-0"], className)}
      isDisabled={!canScroll}
      onPress={scroll}
      {...props}
    >
      <Icon className="size-4" />
    </Button>
  )
}

export type { CarouselApi }
export { Carousel, CarouselContent, CarouselHandler, CarouselItem, CarouselButton }
