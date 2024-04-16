export default function updateStudentGradeByCity(students, city, newGrades) {
  if (typeof city !== 'string' || !Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const StudentGradeByCity = [];
  students.forEach((student) => {
    const matchingGrade = newGrades.find((studentGrade) => studentGrade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    const updatedStudent = { ...student, grade };
    StudentGradeByCity.push(updatedStudent);
  });
  return StudentGradeByCity;
}
