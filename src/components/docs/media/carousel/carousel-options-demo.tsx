import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export default function CarouselOptionsDemo() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-2xl"
    >
      <Carousel.Content>
        {Array.from({ length: 16 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <Carousel.Item key={id} className="basis-1/2 lg:basis-1/3">
            <Card className="flex aspect-square items-center justify-center">
              <Card.Title>{id}</Card.Title>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
