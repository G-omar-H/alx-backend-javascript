const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv').then((studentsPerField) => {
      const sortedStudentsPerField = {};
      let output = 'This is the list of our students\n';
      Object.keys(studentsPerField).sort().forEach((key) => {
        sortedStudentsPerField[key] = studentsPerField[key];
      });
      Object.keys(sortedStudentsPerField).forEach((key) => {
        const value = sortedStudentsPerField[key];
        output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      });
      response.status(200).send(output.trim());
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase('./database.csv').then((studentsPerField) => {
      const field = request.params.major;
      console.log(field);
      if (field === 'CS' || field === 'SWE') {
        response.status(200);
        response.send(`List: ${studentsPerField[field].join(', ')}`);
      } else {
        response.status(500);
        response.send('Major parameter must be CS or SWE');
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
module.exports = StudentsController;
