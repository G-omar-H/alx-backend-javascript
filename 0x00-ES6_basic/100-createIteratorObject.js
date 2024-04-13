export default function createIteratorObject(report) {
  const iterator = [];

  for (const employees of Object.values(report.allEmployees)) {
    for (const employee of Object.values(employees)) {
      iterator.push(employee);
    }
  }
  return iterator;
}
