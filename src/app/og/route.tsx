import { ImageResponse } from 'next/og'

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 500; style: 'normal' }[]
> {
  const [{ base64Font: normal }, { base64Font: semibold }] = await Promise.all([
    import('./inter-regular.json').then((mod) => mod.default || mod),
    import('./inter-semibold.json').then((mod) => mod.default || mod),
  ])

  return [
    {
      name: 'Inter',
      data: Buffer.from(normal, 'base64'),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: Buffer.from(semibold, 'base64'),
      weight: 500 as const,
      style: 'normal' as const,
    },
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  const fonts = await loadAssets()

  return new ImageResponse(
    <div
      tw="flex h-full w-full bg-zinc-900 text-white"
      style={{
        fontFamily: 'Inter',
        backgroundImage: `url(${new URL('/images/og-background.png', process.env.NEXT_PUBLIC_APP_URL).toString()})`,
      }}
    >
      <div tw="flex absolute flex-row top-0 left-32 top-32 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          fill="none"
          viewBox="0 0 25 24"
          className="intentui-icons size-4"
          data-slot="icon"
          aria-hidden="true"
        >
          <rect width={20} height={20} x="2.5" y={2} fill="#0D6DFD" rx="3.75" />
          <g fill="#fff" filter="url(#icon-brand-intentui_svg__a)" shapeRendering="crispEdges">
            <path d="M5.86 6.311c0-.525.426-.952.951-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952H6.811a.95.95 0 0 1-.952-.952V6.311Z" />
            <path
              fillOpacity="0.5"
              d="M10.605 6.311c0-.525.426-.952.952-.952h1.904c.525 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
            />
            <path d="M15.35 6.311c0-.525.426-.952.952-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z" />
            <path
              fillOpacity="0.5"
              d="M15.35 11.057c0-.526.426-.952.952-.952h1.904c.526 0 .952.426.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
            />
          </g>
          <defs>
            <filter
              id="icon-brand-intentui_svg__a"
              width="13.426"
              height="8.68"
              x="5.796"
              y="5.328"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.032" />
              <feGaussianBlur stdDeviation="0.032" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11777_624" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11777_624" result="shape" />
            </filter>
          </defs>
        </svg>
        <div tw="flex gap-x-2 ml-2 text-4xl tracking-tight items-center">
          <span>Intent</span>
          <span tw="ml-2 text-zinc-400">UI</span>
        </div>
      </div>
      <div tw="flex flex-col justify-start items-start inset-34 mt-20">
        <div
          tw="tracking-tight leading-[1.5] mt-9 mb-6"
          style={{
            textWrap: 'balance',
            fontWeight: 400,
            fontSize: 54,
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </div>
        <div
          tw="max-w-3xl text-white/80"
          style={{
            lineHeight: 1.7,
            fontSize: 33,
            textWrap: 'balance',
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts,
    }
  )
}
