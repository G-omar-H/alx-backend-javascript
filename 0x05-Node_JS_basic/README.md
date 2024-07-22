# 0x05. NodeJS Basics

## Back-end | JavaScript | ES6 | NodeJS | ExpressJS

### Resources
- **Read or watch:**
  - [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
  - [Process API doc](https://nodejs.org/dist/latest-v14.x/docs/api/process.html)
  - [Child process](https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html)
  - [Express getting started](https://expressjs.com/en/starter/installing.html)
  - [Mocha documentation](https://mochajs.org/)
  - [Nodemon documentation](https://nodemon.io/)

### Learning Objectives
By the end of this project, you should be able to:
- Run JavaScript using NodeJS.
- Use NodeJS modules.
- Use specific NodeJS modules to read files.
- Use `process` to access command line arguments and the environment.
- Create a small HTTP server using NodeJS.
- Create a small HTTP server using ExpressJS.
- Create advanced routes with ExpressJS.
- Use ES6 with NodeJS via Babel-node.
- Use Nodemon for faster development.

### Requirements
- **Editors:** `vi`, `vim`, `emacs`, `Visual Studio Code`
- **Environment:** Ubuntu 18.04 LTS, Node (version 12.x.x)
- **Style:**
  - All files should end with a new line.
  - Use the `.js` extension.
  - Code tested using Jest and `npm run test`.
  - Code verified against lint using ESLint.
  - Code must pass all tests and lint (`npm run full-test`).
  - Export functions/classes using `module.exports = myFunction`.

### Provided Files
- **database.csv:**
  ```csv
  firstname,lastname,age,field
  Johann,Kerbrou,30,CS
  Guillaume,Salou,30,SWE
  Arielle,Salou,20,CS
  Jonathan,Benou,30,CS
  Emmanuel,Turlou,40,CS
  Guillaume,Plessous,35,CS
  Joseph,Crisou,34,SWE
  Paul,Schneider,60,SWE
  Tommy,Schoul,32,SWE
  Katie,Shirou,21,CS
  ```
```bash
    package.json (run $ npm install)
```

### Tasks

  1   Executing basic JavaScript with NodeJS
        File: 0-console.js
        Function: displayMessage(string)
        Usage:

  ```sh

   node 0-main.js
  ```

  2    Using Process stdin
        File: 1-stdin.js
        Requirements: Interactive input and output via command line.

  3    Reading a file synchronously with NodeJS
        File: 2-read_file.js
        Function: countStudents(path)

  4   Reading a file asynchronously with NodeJS
        File: 3-read_file_async.js
        Function: countStudents(path)

  5  Create a small HTTP server using Node's HTTP module
        File: 4-http.js
        Server: Listens on port 1245, responds with "Hello Holberton School!" for any endpoint.

  6  Create a more complex HTTP server using Node's HTTP module
        File: 5-http.js
        Server: Listens on port 1245, responds with student list from database.csv on /students endpoint.

  7  Create a small HTTP server using Express
        File: 6-http_express.js
        Server: Listens on port 1245, responds with "Hello Holberton School!" for the / endpoint.

   8 Create a more complex HTTP server using Express
        File: 7-http_express.js
        Server: Listens on port 1245, responds with student list from database.csv on /students endpoint.

   9  Organize a complex HTTP server using Express
        Structure:
            Directories: controllers, routes
            Files: full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js

## Usage

    Start server: npm run dev

## Example Commands

```sh

# Run JavaScript file
node 0-main.js

# Interactively input via stdin
node 1-stdin.js

# Count students synchronously
node 2-main_1.js

# Count students asynchronously
node 3-main_1.js

# Start HTTP server
node 4-http.js

# Start more complex HTTP server
node 5-http.js database.csv

# Start Express server
node 6-http_express.js

# Start more complex Express server
node 7-http_express.js database.csv

# Start full server
npm run dev
```
## GitHub Repository

    Repo: alx-backend-javascript
    Directory: 0x05-Node_JS_basic

Copyright © 2024 ALX, All rights reserved.
