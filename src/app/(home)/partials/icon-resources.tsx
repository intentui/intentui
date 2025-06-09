"use client"
import { InstallIcon } from "@/app/(app)/icons/partials/controller/install-icon"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import {
  IconArrowRight,
  IconCheck,
  IconCircleCheckFill,
  IconCirclePerson,
  IconCirclePersonFill,
  IconClapperboard,
  IconClapperboardFill,
  IconCreditCard,
  IconCreditCardFill,
  IconCube,
  IconCubeFill,
  IconDeviceDesktop2,
  IconDeviceDesktop2Fill,
  IconDuplicateFill,
  IconFileText,
  IconFileTextFill,
  IconFolderCloud,
  IconFolderCloudFill,
  IconGiroCards,
  IconGiroCardsFill,
  IconInboxEmpty,
  IconInboxEmptyFill,
  IconLayoutAlignLeft,
  IconLayoutAlignLeftFill,
  IconLayoutColumnLeftside,
  IconLayoutColumnLeftsideFill,
  IconMoon,
  IconMoonFill,
  IconNotepad,
  IconNotepadFill,
  IconPackage,
  IconPackageFill,
  IconPercentBadge,
  IconPercentBadgeFill,
  IconPieChart,
  IconPieChartFill,
  IconRainy,
  IconRainyFill,
  IconRunShortcut,
  IconRunShortcutFill,
  IconScreenSharing,
  IconScreenSharingFill,
  IconSearch,
  IconSearchFill,
  IconSend,
  IconSendFill,
  IconService,
  IconServiceFill,
  IconShield,
  IconShieldFill,
  IconShoppingBag,
  IconShoppingBagFill,
  IconStorage,
  IconStorageFill,
  IconStore3,
  IconStore3Fill,
  IconTicket,
  IconTicketFill,
  IconTrash,
  IconTrashFill,
  IconTriangleExclamation,
  IconTriangleExclamationFill,
} from "@intentui/icons"
import { useEffect, useState } from "react"

export function IconResources() {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000)
    }
    return () => clearTimeout(timer)
  }, [isCopied])
  return (
    <div className="border-y py-8 sm:py-16">
      <PageContainer>
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-10">
          <div className="">
            <div className="grid size-10 place-content-center rounded-xl bg-secondary/50 ring-1 ring-fg/20 group-hover:bg-secondary">
              <IconDuplicateFill className="size-5" />
            </div>
            <h2 className="mt-4 max-w-md font-semibold text-3xl tracking-tight md:text-2xl">
              Empower your design with Intent Icons
            </h2>
            <p className="mt-3 mb-6 text-pretty text-muted-fg leading-relaxed lg:text-lg">
              Intent Icons is a powerful open-source SVG icon library with over{" "}
              <strong className="text-fg">1,191 symbols</strong>, and more added with every release.
              Designed to seamlessly integrate into any project, they work perfectly whether or not
              you use <strong className="text-fg">Intent UI</strong> components.
            </p>
            <InstallIcon />
          </div>
          <div>
            <div className="grid flex-1 items-start gap-2 **:data-[slot=icon]:size-5 **:data-[slot=icon]:text-muted-fg **:data-[slot=icon]:hover:text-fg md:grid-cols-2">
              <div className="flex flex-wrap gap-6 rounded-lg border p-6">
                <IconCheck />
                <IconShoppingBag />
                <IconTriangleExclamation />
                <IconCirclePerson />
                <IconCube />
                <IconClapperboard />
                <IconPieChart />
                <IconFileText />
                <IconFolderCloud />
                <IconInboxEmpty />
                <IconCreditCard />
                <IconDeviceDesktop2 />
                <IconGiroCards />
                <IconMoon />
                <IconShield />
                <IconStore3 />
                <IconPackage />
                <IconTicket />
                <IconService />
                <IconLayoutAlignLeft />
                <IconLayoutColumnLeftside />
                <IconNotepad />
                <IconPercentBadge />
                <IconSearch />
                <IconStorage />
                <IconRainy />
                <IconTrash />
                <IconSend />
                <IconRunShortcut />
                <IconScreenSharing />
              </div>
              <div className="flex flex-wrap gap-6 rounded-lg border p-6">
                <IconCircleCheckFill />
                <IconShoppingBagFill />
                <IconTriangleExclamationFill />
                <IconCirclePersonFill />
                <IconCubeFill />
                <IconClapperboardFill />
                <IconPieChartFill />
                <IconFileTextFill />
                <IconFolderCloudFill />
                <IconInboxEmptyFill />
                <IconCreditCardFill />
                <IconDeviceDesktop2Fill />
                <IconGiroCardsFill />
                <IconMoonFill />
                <IconShieldFill />
                <IconStore3Fill />
                <IconPackageFill />
                <IconTicketFill />
                <IconServiceFill />
                <IconLayoutAlignLeftFill />
                <IconLayoutColumnLeftsideFill />
                <IconNotepadFill />
                <IconPercentBadgeFill />
                <IconSearchFill />
                <IconStorageFill />
                <IconRainyFill />
                <IconTrashFill />
                <IconSendFill />
                <IconRunShortcutFill />
                <IconScreenSharingFill />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link className={buttonStyles({ intent: "outline" })} href="/icons">
                View all icons <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
