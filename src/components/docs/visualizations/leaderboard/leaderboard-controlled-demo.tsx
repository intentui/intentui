import {
  Leaderboard,
  LeaderboardContent,
  LeaderboardEnd,
  LeaderboardItem,
  LeaderboardStart,
} from "@/components/ui/leaderboard"

const users = [
  { name: "Sarah Anderson", score: 98 },
  { name: "Michael Chen", score: 87 },
  { name: "Emma Rodriguez", score: 82 },
  { name: "James Wilson", score: 76 },
  { name: "Olivia Taylor", score: 65 },
]

const maxScore = Math.max(...users.map((u) => u.score))

export default function LeaderboardControlledDemo() {
  return (
    <Leaderboard>
      <LeaderboardContent>
        {users.map((user, index) => (
          <LeaderboardItem
            onAction={() => alert(`You clicked on ${user.name}`)}
            key={index}
            maxValue={maxScore}
            formatOptions={{
              style: "decimal",
            }}
            value={user.score}
          >
            {({ valueText }) => (
              <>
                <LeaderboardStart>{user.name}</LeaderboardStart>
                <LeaderboardEnd>{valueText}</LeaderboardEnd>
              </>
            )}
          </LeaderboardItem>
        ))}
      </LeaderboardContent>
    </Leaderboard>
  )
}
