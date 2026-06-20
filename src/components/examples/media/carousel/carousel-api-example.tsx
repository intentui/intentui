'use client'

import { useEffect, useState } from 'react'
import { Button } from 'react-aria-components/Button'
import { twJoin } from 'tailwind-merge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselButton,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index)
      setCurrent(index + 1)
    }
  }

  return (
    <Carousel setApi={setApi} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 10 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <CarouselItem key={id}>
            <Card>
              <CardContent className="flex aspect-square h-40 items-center justify-center p-6">
                <span className="font-semibold text-4xl">{id}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1 py-2 text-center text-muted-fg text-sm">
          {Array.from({ length: 10 }).map((_, index) => (
            <Button
              className={twJoin(
                'rounded-xl transition focus:outline-hidden',
                current === index + 1
                  ? 'h-3 w-5 bg-primary transition-all hover:bg-primary/80'
                  : 'h-3 w-3 bg-fg/10 hover:bg-fg/15'
              )}
              aria-label={`Slide ${current} of ${count}`}
              onPress={() => handleSelect(index)}
              key={index}
            />
          ))}
        </div>

        <div className="space-x-2">
          <CarouselButton segment="previous" />
          <CarouselButton segment="next" />
        </div>
      </div>
    </Carousel>
  )
}
