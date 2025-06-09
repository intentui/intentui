import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <Carousel.Content>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-1.jpg"
            alt="image 1"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-2.jpg"
            alt="image 2"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-3.jpg"
            alt="image 3"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-4.jpg"
            alt="image 4"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-5.jpg"
            alt="image 5"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-6.jpg"
            alt="image 6"
            width={400}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item className="basis-1/2">
          <Image
            className="rounded-xl"
            src="/slides/slide-7.jpg"
            alt="image 7"
            width={400}
            height={300}
          />
        </Carousel.Item>
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}
