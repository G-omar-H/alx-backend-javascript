const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let count = 0;
      const fields = {};
      lines.forEach((line, index) => {
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
      resolve();
    });
  });
}
module.exports = countStudents;
