const fs = require('fs');

function countStudents(path) {
  let studentNumber = 0;
  const departments = {};
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.toString().split('\n');
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] !== '') {
        // increment number of students
        studentNumber += 1;
        // get department and student name
        const words = lines[i].toString().split(',');
        const dep = words[3];
        // create a list if it doesnt exist and append student name
        if (departments[dep] === 'undefined' || !(departments[dep] instanceof Array)) {
          departments[dep] = [];
        }
        departments[dep].push(words[0]);
      }
    }
    console.log(`Number of students: ${studentNumber}`);
    if (departments) {
      for (const [key, value] of Object.entries(departments)) {
        const names = value.join(', ');
        console.log(`Number of students in ${key}: ${value.length}. List: ${names}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
