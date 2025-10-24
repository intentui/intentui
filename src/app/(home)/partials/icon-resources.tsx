"use client"
import {
  AdjustmentsHorizontalIcon,
  ArchiveBoxIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChartPieIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  CloudIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  CubeIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  FilmIcon,
  FolderIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PercentBadgeIcon,
  PresentationChartBarIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  TicketIcon,
  TrashIcon,
  UserCircleIcon,
  ViewColumnsIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconSolid,
  ArchiveBoxIcon as ArchiveBoxIconSolid,
  BanknotesIcon as BanknotesIconSolid,
  BoltIcon as BoltIconSolid,
  BuildingStorefrontIcon as BuildingStorefrontIconSolid,
  ChartPieIcon as ChartPieIconSolid,
  CheckCircleIcon,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  CloudIcon as CloudIconSolid,
  ComputerDesktopIcon as ComputerDesktopIconSolid,
  CreditCardIcon as CreditCardIconSolid,
  CubeIcon as CubeIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid,
  FilmIcon as FilmIconSolid,
  FolderIcon as FolderIconSolid,
  InboxIcon as InboxIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  MoonIcon as MoonIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
  PercentBadgeIcon as PercentBadgeIconSolid,
  PresentationChartBarIcon as PresentationChartBarIconSolid,
  ServerStackIcon as ServerStackIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  TicketIcon as TicketIconSolid,
  TrashIcon as TrashIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  ViewColumnsIcon as ViewColumnsIconSolid,
  WrenchScrewdriverIcon as WrenchScrewdriverIconSolid,
} from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { InstallIcon } from "@/app/(app)/icons/partials/controller/install-icon"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"

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
    <div className="border-t py-8 sm:py-16">
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex h-full flex-col">
            <div className="flex-1">
              <Heading level={3}>Intent UI Icons</Heading>
              <p className="mt-3 mb-6 text-pretty text-muted-fg lg:text-sm/6">
                Intent UI Icons is a powerful open-source SVG icon library with over{" "}
                <strong className="text-fg">1,191 symbols</strong>, and more added with every
                release. Designed to seamlessly integrate into any project, they work perfectly
                whether or not you use Intent UI components.
              </p>
              <InstallIcon />
            </div>
            <div className="mt-4">
              <Link className={buttonStyles({ intent: "secondary" })} href="/icons">
                View all icons <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div>
            <div className="grid flex-1 items-start gap-2 **:data-[slot=icon]:size-5 **:data-[slot=icon]:text-muted-fg **:data-[slot=icon]:hover:text-fg sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-wrap gap-6 rounded-lg border p-6">
                <CheckIcon />
                <ShoppingBagIcon />
                <ExclamationTriangleIcon />
                <UserCircleIcon />
                <CubeIcon />
                <FilmIcon />
                <ChartPieIcon />
                <DocumentTextIcon />
                <FolderIcon />
                <InboxIcon />
                <CreditCardIcon />
                <ComputerDesktopIcon />
                <BanknotesIcon />
                <MoonIcon />
                <ShieldCheckIcon />
                <BuildingStorefrontIcon />
                <ArchiveBoxIcon />
                <TicketIcon />
                <WrenchScrewdriverIcon />
                <AdjustmentsHorizontalIcon />
                <ViewColumnsIcon />
                <ClipboardDocumentListIcon />
                <PercentBadgeIcon />
                <MagnifyingGlassIcon />
                <ServerStackIcon />
                <CloudIcon />
                <TrashIcon />
                <PaperAirplaneIcon />
                <BoltIcon />
                <PresentationChartBarIcon />
              </div>
              <div className="flex flex-wrap gap-6 rounded-lg border p-6">
                <CheckCircleIcon />
                <ShoppingBagIconSolid />
                <ExclamationTriangleIconSolid />
                <UserCircleIconSolid />
                <CubeIconSolid />
                <FilmIconSolid />
                <ChartPieIconSolid />
                <DocumentTextIconSolid />
                <FolderIconSolid />
                <InboxIconSolid />
                <CreditCardIconSolid />
                <ComputerDesktopIconSolid />
                <BanknotesIconSolid />
                <MoonIconSolid />
                <ShieldCheckIconSolid />
                <BuildingStorefrontIconSolid />
                <ArchiveBoxIconSolid />
                <TicketIconSolid />
                <WrenchScrewdriverIconSolid />
                <AdjustmentsHorizontalIconSolid />
                <ViewColumnsIconSolid />
                <ClipboardDocumentListIconSolid />
                <PercentBadgeIconSolid />
                <MagnifyingGlassIconSolid />
                <ServerStackIconSolid />
                <CloudIconSolid />
                <TrashIconSolid />
                <PaperAirplaneIconSolid />
                <BoltIconSolid />
                <PresentationChartBarIconSolid />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
