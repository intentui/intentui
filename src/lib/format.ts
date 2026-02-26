export function format(date: Date) {
  const formatter = new Intl.DateTimeFormat()
  return formatter.format(date)
}
