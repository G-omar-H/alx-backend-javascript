export default function iterateThroughObject(reportWithIterator) {
  let employeesStr = '';
  for (const name of reportWithIterator) {
    const temp = employeesStr;
    if (temp.length) {
      employeesStr = `${temp} | ${name}`;
    } else {
      employeesStr = name;
    }
  }
  return employeesStr;
}
