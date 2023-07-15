export function convertToConditionalUpperCase(words: string[]): string[] {
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      capitalized.push(words[i].toUpperCase());
    } else {
      capitalized.push(words[i].toLowerCase());
    }
  }

  return capitalized;
}
