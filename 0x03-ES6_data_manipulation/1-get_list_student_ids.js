export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const array = students.map((data) => data.id);
  return array;
}
