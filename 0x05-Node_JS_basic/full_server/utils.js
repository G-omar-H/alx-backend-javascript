const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err.message);
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        reject(err.message);
        return;
      }
      const studentsPerField = {};
      lines.forEach((line, index) => {
        if (!line || index === 0) return;
        const words = line.split(',');
        const field = words[3];
        if (!studentsPerField[field]) {
          studentsPerField[words[3]] = [];
        }
        studentsPerField[field].push(words[0]);
      });
      resolve(studentsPerField);
    });
  });
}
module.exports = readDatabase;
