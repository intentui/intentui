export function title(title: string) {
  const minorWords = [
    'and',
    'but',
    'for',
    'or',
    'nor',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
    'vs',
    'via',
  ]
  const spacedTitle = title
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()

  return spacedTitle
    .split(' ')
    .map((word, index) => {
      const lowerWord = word.toLowerCase()
      if (
        index === 0 ||
        index === spacedTitle.split(' ').length - 1 ||
        !minorWords.includes(lowerWord)
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return lowerWord
    })
    .join(' ')
    .replaceAll('-', ' ')
}

export function slugify(str: string) {
  return str
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function wait(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number))
}
