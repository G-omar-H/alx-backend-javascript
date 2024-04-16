export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += value.substring(startString.length);
    }
  });
  return result;
}
