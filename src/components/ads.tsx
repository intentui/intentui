import { IconBrandIntentui } from "@intentui/icons"
import { twMerge } from "tailwind-merge"

const IconBrandIrsyadCo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="#00BBA7"
        d="M8.878 18.103c-.219 0-.427-.035-.626-.105a1.369 1.369 0 0 1-.522-.328 1.717 1.717 0 0 1-.357-.64A3.797 3.797 0 0 1 7.253 16v-5.44c0-.13.05-.224.15-.283.109-.07.268-.105.476-.105.219 0 .383.035.492.105a.3.3 0 0 1 .164.283v5.306c0 .417.045.71.134.88.1.158.264.238.492.238.14 0 .244.06.313.179.07.109.095.238.075.387a.575.575 0 0 1-.18.373c-.108.119-.272.179-.491.179ZM7.835 7.878c-.279 0-.487-.075-.626-.224-.14-.159-.209-.392-.209-.7 0-.318.07-.557.209-.716.139-.159.347-.238.626-.238.278 0 .482.08.61.238.14.16.21.398.21.716.02.308-.045.541-.194.7-.14.15-.348.224-.626.224Z"
      />
      <path
        fill="#00BBA7"
        d="M8.681 18.103a.308.308 0 0 1-.298-.18.532.532 0 0 1-.074-.372.588.588 0 0 1 .179-.387c.109-.12.268-.18.477-.18.228 0 .462-.084.7-.253.239-.179.487-.472.745-.879.259-.407.527-.954.805-1.64.288-.695.591-1.564.91-2.608.049-.129.138-.199.268-.208a.4.4 0 0 1 .342.104.28.28 0 0 1 .12.313 29.982 29.982 0 0 1-.895 2.906c-.288.795-.596 1.441-.924 1.938-.318.497-.67.864-1.058 1.103-.387.228-.82.343-1.297.343Z"
      />
      <path
        fill="#00BBA7"
        d="M12.422 18.073c-.208 0-.367-.035-.477-.105-.099-.06-.149-.154-.149-.283v-7.124c0-.13.05-.224.15-.283.109-.07.268-.105.476-.105.219 0 .383.035.492.105a.3.3 0 0 1 .164.283v2.131c.17-.457.358-.85.567-1.177.208-.328.427-.591.655-.79.229-.209.452-.363.671-.462.229-.1.447-.15.656-.15.248 0 .492.055.73.165.249.099.433.223.552.372.07.07.1.16.09.268 0 .1-.046.22-.135.358-.09.14-.189.229-.298.268a.47.47 0 0 1-.343-.044c-.12-.06-.238-.11-.358-.15-.109-.039-.238-.059-.387-.059-.229 0-.467.104-.716.313-.248.209-.482.507-.7.894a7.95 7.95 0 0 0-.596 1.387 10.543 10.543 0 0 0-.388 1.729v2.071a.3.3 0 0 1-.164.284c-.11.069-.273.104-.492.104Z"
      />
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
        "not-prose relative z-20 mt-6 flex w-full flex-col gap-y-1 rounded-xl border border-fg/10 border-dashed bg-secondary/30 p-4 text-muted-fg hover:border-fg/15 hover:bg-secondary/20 sm:w-56 **:[svg]:size-3.5 **:[svg]:shrink-0",
        className,
      )}
    >
      <span className="font-semibold text-fg text-sm/5">{title}</span>
      <div className="block text-pretty text-xs/5">{description}</div>
      <span className="mt-2 flex items-center gap-x-1 text-xs">
        {icon}
        {domain}
      </span>
    </a>
  )
}

export function Ads({ className }: { className?: string }) {
  const ads = [
    {
      href: "https://dub.sh/irsyadco",
      title: "Ready-to-use templates",
      description:
        "Launch faster with 150+ blocks and professional templates for modern web apps.",
      domain: "irsyad.co",
      icon: <IconBrandIrsyadCo />,
    },
    {
      href: "https://dub.sh/bintentui",
      title: "Flexible blocks and templates",
      description:
        "Use ready-made blocks to craft unique pages without starting from scratch.",
      domain: "blocks.intentui.com",
      icon: <IconBrandIntentui />,
    },
  ] as const satisfies readonly Omit<AdCardProps, "className">[]

  const randomAd = ads[Math.floor(Math.random() * ads.length)] as Omit<
    AdCardProps,
    "className"
  >

  return <AdCard {...randomAd} className={className} />
}
