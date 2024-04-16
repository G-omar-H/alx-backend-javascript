export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += (result.length > 0) ? `-${value.substring(startString.length)}` : value.substring(startString.length);
    }
  });
  return result;
}
