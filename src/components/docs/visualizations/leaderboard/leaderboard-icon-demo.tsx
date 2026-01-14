"use client"

import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  TvIcon,
} from "@heroicons/react/24/outline"
import {
  Leaderboard,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardHeader,
  LeaderboardItem,
  LeaderboardStart,
  LeaderboardTitle,
} from "@/components/ui/leaderboard"

const devices = [
  { label: "Desktop", sessions: 48200, icon: ComputerDesktopIcon },
  { label: "Mobile", sessions: 36500, icon: DevicePhoneMobileIcon },
  { label: "Tablet", sessions: 12800, icon: DeviceTabletIcon },
  { label: "TV", sessions: 4100, icon: TvIcon },
]

const maxSessions = Math.max(...devices.map((item) => item.sessions))

export default function LeaderboardDevicesDemo() {
  return (
    <Leaderboard>
      <LeaderboardHeader>
        <LeaderboardTitle>Sessions by device</LeaderboardTitle>
      </LeaderboardHeader>
      <LeaderboardContent>
        {devices.map((item, index) => {
          const Icon = item.icon

          return (
            <LeaderboardItem
              key={index}
              maxValue={maxSessions}
              value={item.sessions}
              formatOptions={{
                notation: "compact",
              }}
            >
              {({ valueText }) => (
                <>
                  <LeaderboardStart>
                    <span className="flex items-center gap-2">
                      <Icon className="size-4" />
                      {item.label}
                    </span>
                  </LeaderboardStart>
                  <LeaderboardEnd>{valueText}</LeaderboardEnd>
                </>
              )}
            </LeaderboardItem>
          )
        })}
      </LeaderboardContent>
    </Leaderboard>
  )
}
