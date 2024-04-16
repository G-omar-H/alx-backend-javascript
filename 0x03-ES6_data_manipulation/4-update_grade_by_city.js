export default function updateStudentGradeByCity(students, city, newGrades) {
  if (typeof city !== 'string' || !Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const updatedStudents = students.filter((student) => student.location === city).map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents;
}
