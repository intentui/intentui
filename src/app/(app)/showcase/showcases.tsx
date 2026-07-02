'use client'
import showcases from './showcases.json'
import Image from 'next/image'
import { useRef } from 'react'

function getFillers(total: number, columns: number) {
  return (columns - (total % columns)) % columns
}

const xlFillers = getFillers(showcases.length, 4)
const twoXlFillers = getFillers(showcases.length, 5)

export function Showcases() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 sm:gap-px bg-page border-x border-page/10">
      {showcases.map((item) => (
        <ShowcaseCard {...item} key={item.name} />
      ))}

      {Array.from({ length: xlFillers }).map((_, index) => (
        <div key={`xl-filler-${index}`} className="hidden bg-bg xl:block 2xl:hidden" aria-hidden />
      ))}

      {Array.from({ length: twoXlFillers }).map((_, index) => (
        <div key={`2xl-filler-${index}`} className="hidden bg-bg 2xl:block" aria-hidden />
      ))}
    </div>
  )
}

interface ShowcaseCardProps {
  url: string
  target?: string
  name: string
  slug: string
  description: string
}

export function ShowcaseCard({
  url,
  target = '_blank',
  name,
  slug,
  description,
}: ShowcaseCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <a
      className="group/link bg-bg p-0 sm:p-6 outline-hidden"
      href={`${url}/?utm_source=intentui.com&utm_medium=referral&utm_campaign=showcase`}
      target={target}
    >
      <div
        className="group relative"
        onPointerLeave={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0
          }
        }}
      >
        <Image
          src={`/showcase/${slug}/${slug}.png`}
          width={400}
          height={225}
          alt={name}
          className="aspect-431/270 ring ring-page/50 w-full rounded-none sm:rounded-lg bg-secondary object-cover group-hover:hidden group-focus/link:hidden group-pressed/link:hidden sm:group-focus/link:block"
        />
        <video
          ref={videoRef}
          src={`/showcase/${slug}/${slug}.mp4`}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="hidden aspect-431/270 ring ring-page/50 w-full rounded-none sm:rounded-lg bg-secondary object-cover group-hover:block group-focus/link:block group-pressed/link:block sm:group-focus/link:hidden"
        />
      </div>
      <div className="p-4 sm:p-0 mt-0 sm:mt-4">
        <p className="font-semibold text-fg text-sm/6">{name}</p>
        <p className="text-muted-fg text-sm">{description}</p>
      </div>
    </a>
  )
}
