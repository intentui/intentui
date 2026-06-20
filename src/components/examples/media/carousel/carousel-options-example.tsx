import { Card, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselHandler,
  CarouselItem,
} from '@/components/ui/carousel'

export default function CarouselOptionsDemo() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full max-w-2xl"
    >
      <CarouselContent>
        {Array.from({ length: 16 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <CarouselItem key={id} className="basis-1/2 lg:basis-1/3">
            <Card className="flex aspect-square items-center justify-center">
              <CardTitle>{id}</CardTitle>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton segment="previous" />
        <CarouselButton segment="next" />
      </CarouselHandler>
    </Carousel>
  )
}
