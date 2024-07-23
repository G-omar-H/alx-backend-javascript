const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

const newAppController = new AppController();

router.get('/', (request, response) => {
  newAppController.getHomepage(request, response);
});

const newStudentsController = new StudentsController();

router.get('/students', (request, response) => {
  newStudentsController.getAllStudents(request, response);
});

router.get('/students/:major', (request, response) => {
  newStudentsController.getAllStudentsByMajor(request, response);
});
module.exports = router;
