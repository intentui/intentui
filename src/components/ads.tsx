import { twMerge } from "tailwind-merge"
import { Badge } from "@/components/ui/badge"

const DesignIntentUI = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width="20" height="20" x="2" y="2" fill="#009689" rx="3.75" />
      <g fill="#fff" filter="url(#a)" shapeRendering="crispEdges">
        <path d="M5.36 6.311c0-.525.426-.952.951-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952H6.311a.95.95 0 0 1-.952-.952z" />
        <path
          d="M10.105 6.311c0-.525.426-.952.952-.952h1.904c.525 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
        <path d="M14.85 6.311c0-.525.426-.952.952-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z" />
        <path
          d="M14.85 11.057c0-.526.426-.952.952-.952h1.904c.526 0 .952.426.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="13.426"
          height="8.681"
          x="5.296"
          y="5.328"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy=".032" />
          <feGaussianBlur stdDeviation=".032" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_419_1316" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_419_1316" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

interface AdCardProps {
  href: string
  title: string
  description: string
  domain: string
  icon: React.ReactNode
  className?: string
}

function AdCard({ href, title, description, domain, icon, className }: AdCardProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={twMerge(
        "not-prose relative z-20 mt-6 flex w-full flex-col gap-y-1 rounded-xl border border-fg/10 border-dashed bg-secondary/30 p-4 text-muted-fg hover:border-fg/15 hover:bg-secondary/20 sm:w-56 **:[svg]:size-4.5 **:[svg]:shrink-0",
        className,
      )}
    >
      <div>
        <Badge intent="info">40% off</Badge>
      </div>
      <span className="mt-2 font-semibold text-fg text-sm/5">{title}</span>
      <div className="block text-pretty text-xs/5">{description}</div>
      <span className="mt-2 flex items-center gap-x-1 text-xs">
        {icon}
        {domain}
      </span>
    </a>
  )
}

export function Ads({ className }: { className?: string }) {
  const ad: Omit<AdCardProps, "className"> = {
    href: "https://dub.sh/designiui",
    title: "Get full access to Design Intent UI",
    description: "Launch faster with 300+ blocks and professional templates for modern web apps.",
    domain: "design.intentui.com",
    icon: <DesignIntentUI />,
  }

  return <AdCard {...ad} className={className} />
}
