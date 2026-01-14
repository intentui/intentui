import {
  Leaderboard,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardItem,
  LeaderboardStart,
} from "@/components/ui/leaderboard"

const topRevenueSources = [
  { label: "United States", amount: 30000 },
  { label: "Europe", amount: 24500 },
  { label: "Asia Pacific", amount: 19800 },
  { label: "Canada", amount: 12400 },
  { label: "Latin America", amount: 7600 },
]

const maxAmount = Math.max(...topRevenueSources.map((item) => item.amount))

export default function LeaderboardCurrencyDemo() {
  return (
    <Leaderboard>
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
