export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const sum = students.reduce(
    (count, value) => value.id + count,
    0,
  );
  return sum;
}
