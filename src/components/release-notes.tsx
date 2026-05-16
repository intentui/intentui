"use client"

import { CheckIcon } from "@heroicons/react/20/solid"
import { Text, TextLink } from "@/components/ui/text"
import releaseNotes from "@/json/release-notes.json"

type GroupedByYear = Record<string, Record<string, ReleaseNote[]>>

function groupByYearAndDate(notes: ReleaseNote[]): GroupedByYear {
  const grouped: GroupedByYear = {}

  for (const note of notes) {
    const [year, month, day] = note.date.split("-")
    const monthDay = `${month}-${day}`

    if (!grouped[year]) {
      grouped[year] = {}
    }
    if (!grouped[year][monthDay]) {
      grouped[year][monthDay] = []
    }
    grouped[year][monthDay].push(note)
  }

  return grouped
}

function formatMonthDay(monthDay: string): string {
  const [month, day] = monthDay.split("-")
  const date = new Date(2000, Number.parseInt(month) - 1, Number.parseInt(day))
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" })
}

export function ReleaseNotes() {
  const grouped = groupByYearAndDate(releaseNotes as ReleaseNote[])
  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <div className="space-y-8">
      {years.map((year) => {
        const dates = Object.keys(grouped[year]).sort((a, b) => b.localeCompare(a))

        return (
          <div key={year} className="space-y-6">
            <h2 className="font-bold text-2xl">{year}</h2>
            {dates.map((monthDay) => {
              const notes = grouped[year][monthDay]

              return (
                <div key={monthDay} className="space-y-3">
                  <h3 className="font-semibold text-lg">{formatMonthDay(monthDay)}</h3>
                  <Text>
                    {notes.length} {notes.length === 1 ? "change" : "changes"}
                  </Text>
                  <ul className="not-prose space-y-1.5 text-sm/6">
                    {notes.map((note) => (
                      <li key={note.component}>
                        <div className="flex gap-x-2.5">
                          <CheckIcon className="h-lh w-4 shrink-0 text-success-subtle-fg" />
                          <div className="space-y-1">
                            {note.url ? (
                              <div className="inline-flex gap-x-2">
                                <TextLink href={note.url} className="inline-block sm:text-sm/6">
                                  {note.name}
                                </TextLink>
                                <span className="space-x-2 group-hover:no-underline">
                                  <span className="text-success-subtle-fg">+{note.additions}</span>
                                  <span className="text-danger-subtle-fg">-{note.deletions}</span>
                                </span>
                              </div>
                            ) : (
                              <span className="inline-block text-fg sm:text-sm/6">{note.name}</span>
                            )}
                            {note.description && <Text>{note.description}</Text>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
