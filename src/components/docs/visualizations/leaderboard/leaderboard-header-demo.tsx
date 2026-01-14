import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import {
  Leaderboard,
  LeaderboardAction,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardHeader,
  LeaderboardItem,
  LeaderboardStart,
  LeaderboardTitle,
} from "@/components/ui/leaderboard"
import { Text } from "@/components/ui/text"

const topRevenueSources = [
  { label: "United States", amount: 30000 },
  { label: "Europe", amount: 24500 },
  { label: "Asia Pacific", amount: 19800 },
  { label: "Canada", amount: 12400 },
  { label: "Latin America", amount: 7600 },
]

const maxAmount = Math.max(...topRevenueSources.map((item) => item.amount))

export default function LeaderboardHeaderDemo() {
  return (
    <Leaderboard>
      <LeaderboardHeader>
        <LeaderboardTitle>Top revenue sources</LeaderboardTitle>
        <Text>Revenue by location for the last month</Text>
        <LeaderboardAction>
          <Button intent="secondary" size="sq-sm" isCircle>
            <ArrowPathIcon />
          </Button>
        </LeaderboardAction>
      </LeaderboardHeader>
      <LeaderboardContent>
        {topRevenueSources.map((item, index) => (
          <LeaderboardItem
            key={index}
            maxValue={maxAmount}
            value={item.amount}
            formatOptions={{
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }}
          >
            {({ valueText }) => (
              <>
                <LeaderboardStart>{item.label}</LeaderboardStart>
                <LeaderboardEnd>{valueText}</LeaderboardEnd>
              </>
            )}
          </LeaderboardItem>
        ))}
      </LeaderboardContent>
    </Leaderboard>
  )
}
