'use client'
import showcases from './showcases.json'
import Image from 'next/image'
import { useRef } from 'react'

export function Showcases() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 sm:gap-px bg-page border-x">
      {showcases.map(({ url, name, description, slug }) => (
        <ShowcaseCard
          {...{ name, description }}
          url={`${url}/?utm_source=intentui.com&utm_medium=referral&utm_campaign=showcase`}
          thumbnailUrl={`/showcase/${slug}/${slug}.png`}
          videoUrl={`/showcase/${slug}/${slug}.mp4`}
          key={name}
        />
      ))}
    </div>
  )
}

interface ShowcaseCardProps {
  url: string
  target?: string
  thumbnailUrl: string
  videoUrl?: string
  name: string
  description: string
}

export function ShowcaseCard({
  url,
  target = '_blank',
  thumbnailUrl,
  videoUrl,
  name,
  description,
}: ShowcaseCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <a className="group/link bg-bg p-0 sm:p-6 outline-hidden" href={url} target={target}>
      {videoUrl ? (
        <div
          className="group relative"
          onPointerLeave={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0
            }
          }}
        >
          <Image
            src={thumbnailUrl}
            width={400}
            height={225}
            alt=""
            className="aspect-431/270 ring ring-page/50 w-full rounded-none sm:rounded-lg bg-secondary object-cover group-hover:hidden group-focus/link:hidden group-pressed/link:hidden sm:group-focus/link:block"
          />
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="hidden aspect-431/270 ring ring-page/50 w-full rounded-none sm:rounded-lg bg-secondary object-cover group-hover:block group-focus/link:block group-pressed/link:block sm:group-focus/link:hidden"
          />
        </div>
      ) : (
        <div className="relative">
          <Image
            src={thumbnailUrl}
            width={400}
            height={225}
            alt=""
            className="aspect-431/270 w-full rounded-none sm:rounded-lg bg-mist-950 object-cover group-hover:hidden dark:bg-mist-900"
          />
        </div>
      )}
      <div className="p-4 sm:p-0 mt-0 sm:mt-4">
        <p className="font-semibold text-fg text-sm/6">{name}</p>
        <p className="text-muted-fg text-sm">{description}</p>
      </div>
    </a>
  )
}
