export function convertToConditionalUpperCase(words: string[]): string[] {
  const capitalized = []

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > 5) {
      capitalized.push(words[i].toUpperCase())
    } else {
      capitalized.push(words[i].toLowerCase())
    }
  }

  return capitalized
}
