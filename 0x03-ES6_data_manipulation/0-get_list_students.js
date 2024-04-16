export default function getListStudents() {
  const students = {
    1: { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    2: { id: 2, firstName: 'James', location: 'Columbia' },
    5: { id: 5, firstName: 'Serena', location: 'San Francisco' },
  };
  return Object.values(students);
}
