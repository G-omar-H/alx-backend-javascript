# TypeScript Project

## Description

This TypeScript project contains several tasks aimed at enhancing your skills in TypeScript. Each task focuses on different aspects of TypeScript, including basic types, interfaces, classes, functions, generics, namespaces, declaration merging, and more.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Tasks](#tasks)
   - [Task 0: Creating an interface for a student](#task-0-creating-an-interface-for-a-student)
   - [Task 1: Let's build a Teacher interface](#task-1-lets-build-a-teacher-interface)
   - [Task 2: Extending the Teacher class](#task-2-extending-the-teacher-class)
   - [Task 3: Printing teachers](#task-3-printing-teachers)
   - [Task 4: Writing a class](#task-4-writing-a-class)
   - [Task 5: Advanced types Part 1](#task-5-advanced-types-part-1)
   - [Task 6: Creating functions specific to employees](#task-6-creating-functions-specific-to-employees)
   - [Task 7: String literal types](#task-7-string-literal-types)
   - [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
   - [Task 9: Namespace & Declaration merging](#task-9-namespace--declaration-merging)
   - [Task 10: Update task_4/js/main.ts](#task-10-update-task_4jsmaints)
   - [Task 11: Brand convention & Nominal typing](#task-11-brand-convention--nominal-typing)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/M-Burn/alx-backend-javascript.git`
2. Navigate to the project directory: `cd 0x04-TypeScript`

## Tasks

### Task 0: Creating an interface for a student

In this task, you'll create an interface named Student and initialize two students. The interface should include properties like firstName, lastName, age, and location.

### Task 1: Let's build a Teacher interface

Create a Teacher interface with specific attributes like firstName, lastName, fullTimeEmployee, yearsOfExperience, and location. Additionally, explore the possibility of adding custom attributes dynamically.

### Task 2: Extending the Teacher class

Extend the Teacher interface to include a Directors interface, requiring an additional attribute named numberOfReports.

### Task 3: Printing teachers

Write a function printTeacher that accepts firstName and lastName as arguments and returns the formatted name of the teacher. Explore defining interfaces for functions.

### Task 4: Writing a class

Create a StudentClass class with methods like workOnHomework and displayName. Ensure the constructor and class implementation adhere to the defined interfaces.

### Task 5: Advanced types Part 1

Implement Director and Teacher interfaces with respective methods. Create classes for Director and Teacher with the required functionality.

### Task 6: Creating functions specific to employees

Write functions like isDirector and executeWork that accept employee objects and execute specific tasks based on their type.

### Task 7: String literal types

Define a string literal type named Subjects and a function teachClass that works based on the specified subject.

### Task 8: Ambient Namespaces

Create and export interfaces and types in ambient namespaces. Utilize these interfaces to interact with an external library.

### Task 9: Namespace & Declaration merging

Organize code into namespaces and utilize declaration merging to add attributes dynamically.

### Task 10: Update task_4/js/main.ts

Update the main file with constants for different subjects and teachers. Implement methods and functionalities for each subject.

### Task 11: Brand convention & Nominal typing

Define interfaces with unique brands and write functions to sum credits for different subjects.

## Installation

To install the necessary dependencies, run the following command:
```
npm install
```

## Usage

To run the project and compile TypeScript files, use the following command:
```bash
npm run build
```

To run tests, use:
```
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
