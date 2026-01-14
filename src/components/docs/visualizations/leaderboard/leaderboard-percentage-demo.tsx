import {
  Leaderboard,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardItem,
  LeaderboardStart,
} from "@/components/ui/leaderboard"

const trafficSources = [
  { label: "Organic search", visits: 30000 },
  { label: "Direct", visits: 22000 },
  { label: "Referral", visits: 18000 },
  { label: "Email", visits: 12000 },
  { label: "Social", visits: 8000 },
]

const totalVisits = trafficSources.reduce((sum, item) => sum + item.visits, 0)

export default function LeaderboardPercentageDemo() {
  return (
    <Leaderboard>
      <LeaderboardContent>
        {trafficSources.map((item, index) => (
          <LeaderboardItem
            key={index}
            maxValue={totalVisits}
            value={item.visits}
            formatOptions={{
              style: "percent",
              minimumFractionDigits: 0,
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
