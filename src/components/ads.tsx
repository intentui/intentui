import { Link } from "@/components/ui/link"
import { IconBrandIntentui } from "@intentui/icons"

const IconBrandIrsyadCo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="url(#a)"
        d="M7.024 21.639q-.521 0-.998-.166a2.2 2.2 0 0 1-.83-.523q-.357-.38-.57-1.021-.191-.665-.191-1.64V9.62q0-.309.238-.451.26-.165.76-.166.523 0 .783.166a.48.48 0 0 1 .262.451v8.456q0 .998.213 1.401.238.38.784.38.333 0 .5.285.165.262.118.618a.92.92 0 0 1-.285.594q-.261.285-.784.285M5.361 5.345q-.665 0-.997-.356-.333-.38-.333-1.117 0-.76.333-1.14.332-.38.997-.38t.974.38q.333.38.333 1.14.047.736-.309 1.117-.333.356-.998.356"
      />
      <path
        fill="url(#b)"
        d="M6.71 21.639a.49.49 0 0 1-.474-.285.85.85 0 0 1-.12-.594.94.94 0 0 1 .286-.618q.26-.285.76-.285.546 0 1.116-.403.57-.428 1.188-1.402t1.283-2.612q.689-1.664 1.448-4.157.12-.309.428-.333a.64.64 0 0 1 .546.167.45.45 0 0 1 .19.498q-.712 2.731-1.425 4.632-.69 1.9-1.473 3.088-.759 1.187-1.686 1.758a4 4 0 0 1-2.066.546"
      />
      <path
        fill="url(#c)"
        d="M12.672 21.591q-.498 0-.76-.166-.237-.142-.237-.451V9.62q0-.309.237-.451.261-.165.76-.166.523 0 .784.166a.48.48 0 0 1 .261.451v3.397q.404-1.093.903-1.877.498-.783 1.045-1.259.546-.498 1.069-.736a2.6 2.6 0 0 1 1.045-.237q.594 0 1.164.26.594.239.879.595.166.166.142.427 0 .239-.213.57-.214.332-.476.428a.75.75 0 0 1-.546-.071 4 4 0 0 0-.57-.238 1.8 1.8 0 0 0-.617-.095q-.547 0-1.14.499-.594.498-1.117 1.425-.522.926-.95 2.209-.404 1.26-.618 2.755v3.302a.48.48 0 0 1-.26.451q-.262.165-.785.166"
      />
      <defs>
        <linearGradient
          id="a"
          x1="11.215"
          x2="11.215"
          y1="-9.043"
          y2="30.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".575" stopColor="#1C72FF" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="11.215"
          x2="11.215"
          y1="-9.043"
          y2="30.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".575" stopColor="#1C72FF" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="11.215"
          x2="11.215"
          y1="-9.043"
          y2="30.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".575" stopColor="#1C72FF" />
          <stop offset="1" />
        </linearGradient>
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
}

function AdCard({ href, title, description, domain, icon }: AdCardProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="relative z-40 mt-6 flex w-56 flex-col gap-y-1 rounded-xl border border-dashed p-4 text-muted-fg **:[svg]:size-3.5 **:[svg]:shrink-0"
    >
      <span className="font-semibold text-fg text-sm/5">{title}</span>
      <div className="block text-pretty text-xs/5">{description}</div>
      <span className="mt-2 flex items-center gap-x-1 text-xs">
        {icon}
        {domain}
      </span>
    </Link>
  )
}

const ads = [
  <AdCard
    key="irsyad"
    href="https://dub.sh/irsyadco"
    title="Ready-to-use templates"
    description="Launch faster with complete, professional templates for modern web apps."
    domain="irsyad.co"
    icon={<IconBrandIrsyadCo />}
  />,
  <AdCard
    key="blocks"
    href="https://dub.sh/bintentui"
    title="Flexible blocks and templates"
    description="Use ready-made blocks to craft unique pages without starting from scratch."
    domain="blocks.intentui.com"
    icon={<IconBrandIntentui />}
  />,
]

export function Ads() {
  const randomAd = ads[Math.floor(Math.random() * ads.length)]
  return <>{randomAd}</>
}
