export default function getStudentsByLocation(students, city) {
  if (city instanceof String || !Array.isArray(students)) {
    return [];
  }
  return students.filter((data) => data.location === city);
}
