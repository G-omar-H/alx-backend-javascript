export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((string) => string && string.startsWith(startString))
    .map((string) => string.replace(startString, ''))
    .join('-');
}
