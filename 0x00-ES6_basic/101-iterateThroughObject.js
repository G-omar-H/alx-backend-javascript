export default function iterateThroughObject(reportWithIterator) {
  const employeesStr = [...reportWithIterator];
  return employeesStr.join(' | ');
}
