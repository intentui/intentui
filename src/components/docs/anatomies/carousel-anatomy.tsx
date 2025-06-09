import { Carousel } from "@/components/ui/carousel"

export default function CarouselAnatomy() {
  return (
    <Carousel className="w-full max-w-xs">
      <Carousel.Content>
        <Carousel.Item className="basis-1/2">1</Carousel.Item>
        <Carousel.Item className="basis-1/2">2</Carousel.Item>
        <Carousel.Item className="basis-1/2">3</Carousel.Item>
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
