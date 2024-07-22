const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8').split('\n');
    if (!data || data.length === 0) {
      throw new Error('Cannot load the database');
    }

    let count = 0;
    const fields = {};
    data.forEach((line, index) => {
      if (index === 0 || !line) return;
      const words = line.split(',');
      if (words.length >= 4) {
        count += 1;
        const field = words[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(words[0]);
      }
    });
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
