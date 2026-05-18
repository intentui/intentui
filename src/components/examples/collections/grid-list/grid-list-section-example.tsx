"use client"

import { Collection } from "react-aria-components/Collection"
import {
  GridList,
  GridListDescription,
  GridListHeader,
  GridListItem,
  GridListLabel,
  GridListSection,
  GridListSpacer,
  GridListStart,
} from "@/components/ui/grid-list"

export default function GridListSectionDemo() {
  return (
    <GridList className="sm:min-w-96" items={servers} aria-label="Servers" selectionMode="single">
      {(server) => (
        <GridListSection id={server.id}>
          <GridListHeader>
            <div>
              <div>{server.name}</div>
              <span className="font-normal text-muted-fg">{server.ipaddress}</span>
            </div>
          </GridListHeader>

          <Collection items={server.sites}>
            {(item) => (
              <GridListItem className="sm:items-center" textValue={item.name}>
                <GridListStart className="sm:items-center">
                  <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
                    <GridListLabel>{item.name}</GridListLabel>
                    <span className="hidden text-muted-fg sm:inline">/</span>
                    <GridListDescription>{item.domain}</GridListDescription>
                  </div>
                </GridListStart>
                <GridListSpacer />
                <span className="flex items-center gap-x-2 *:block *:size-1.5 *:rounded-full">
                  {item.status === "online" ? (
                    <i className="bg-primary-subtle-fg" />
                  ) : item.status === "deploying" ? (
                    <i className="bg-info-subtle-fg" />
                  ) : item.status === "maintenance" ? (
                    <i className="bg-warning-subtle-fg" />
                  ) : item.status === "error" ? (
                    <i className="bg-danger-subtle-fg" />
                  ) : item.status === "paused" ? (
                    <i className="bg-secondary-fg" />
                  ) : item.status === "degraded" ? (
                    <i className="bg-warning-subtle-fg" />
                  ) : (
                    <i className="bg-secondary-fg" />
                  )}
                  {item.status}
                </span>
              </GridListItem>
            )}
          </Collection>
        </GridListSection>
      )}
    </GridList>
  )
}

const servers = [
  {
    id: "srv_nyc_1",
    name: "NYC-1",
    avatar: "https://avatar.vercel.sh/nyc.svg?text=NY",
    ipaddress: "192.168.10.21",
    status: "online",
    sites: [
      {
        id: "site_001",
        name: "Atlas blog",
        domain: "atlasblog.com",
        repo: "github.com/atlas/blog",
        avatar: "https://avatar.vercel.sh/atlas.svg?text=AB",
        status: "online",
      },
      {
        id: "site_002",
        name: "Northwind shop",
        domain: "northwind.shop",
        repo: "github.com/northwind/shop",
        avatar: "https://avatar.vercel.sh/northwind.svg?text=NS",
        status: "deploying",
      },
      {
        id: "site_003",
        name: "Beacon docs",
        domain: "docs.beacon.io",
        repo: "github.com/beacon/docs",
        avatar: "https://avatar.vercel.sh/beacon.svg?text=BD",
        status: "maintenance",
      },
    ],
  },
  {
    id: "srv_lon_1",
    name: "LON-1",
    avatar: "https://avatar.vercel.sh/lon.svg?text=LO",
    ipaddress: "10.0.3.44",
    status: "degraded",
    sites: [
      {
        id: "site_007",
        name: "Evergreen health",
        domain: "evergreen.health",
        repo: "github.com/evergreen/health",
        avatar: "https://avatar.vercel.sh/evergreen.svg?text=EH",
        status: "online",
      },
      {
        id: "site_008",
        name: "Glacier analytics",
        domain: "glacier.ai",
        repo: "github.com/glacier/analytics",
        avatar: "https://avatar.vercel.sh/glacier.svg?text=GA",
        status: "deploying",
      },
    ],
  },
]
