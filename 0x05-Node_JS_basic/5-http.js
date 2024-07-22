var { createServer } = require('http');
var countStudents = require('./3-read_file_async');

port  = 1245;

const app = createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
        return;
    };
    if (req.url === '/students') {
        res.write('This is the list of our students\n');
        file = process.argv[2]
        try {
            const output = await countStudents(file);
            res.end(output);
        } catch (error) {
            res.end(error.message);
        }
        return;
    };
    res.statusCode = 404;
    res.end('Not Found');
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;
