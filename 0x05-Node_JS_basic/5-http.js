const { createServer } = require('http');
const fs = require('fs');

const port = 1245;

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
      let result = `Number of students: ${count}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      resolve(result);
    });
  });
}

const app = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const file = process.argv[2];

    try {
      const output = await countStudents(file);
      res.end(output);
    } catch (error) {
      res.end(error.message);
    }
    return;
  }
  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(port);
module.exports = app;
