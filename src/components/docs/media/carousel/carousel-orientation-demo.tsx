import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export default function CarouselOrientationDemo() {
  return (
    <Carousel orientation="vertical" className="relative w-full max-w-xs">
      <Carousel.Content className="h-64 snap-y py-4">
        {items.map((item) => (
          <Carousel.Item key={item.id} className="basis-1/2 snap-center pt-1 md:basis-1/3">
            <Card>
              <Card.Header>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.description}</Card.Description>
              </Card.Header>
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

const items = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    description: "Classic brown leather jacket, perfect for a stylish retro look.",
  },
  {
    id: 2,
    title: "Wireless Bluetooth Headphones",
    description:
      "Experience high-quality sound with these comfortable, noise-canceling headphones.",
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    description: "Soft and eco-friendly t-shirt made from 100% organic cotton.",
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    description: "Keep your drinks cold or hot with this durable, insulated water bottle.",
  },
  {
    id: 5,
    title: "Running Shoes",
    description: "Lightweight and comfortable shoes designed for optimal performance.",
  },
  {
    id: 6,
    title: "Smartwatch",
    description: "Stay connected and track your fitness with this sleek smartwatch.",
  },
  {
    id: 7,
    title: "Portable Charger",
    description: "Never run out of battery with this high-capacity portable charger.",
  },
  {
    id: 8,
    title: "Noise-Canceling Earbuds",
    description: "Compact and powerful earbuds that block out unwanted noise.",
  },
  {
    id: 9,
    title: "Yoga Mat",
    description: "Non-slip, cushioned yoga mat for a comfortable workout experience.",
  },
  {
    id: 10,
    title: "LED Desk Lamp",
    description: "Bright and energy-efficient LED lamp with adjustable brightness.",
  },
]
