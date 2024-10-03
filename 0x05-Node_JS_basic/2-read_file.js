const fs = require('fs');

function countStudents(path) {
  let studentNumber = 0;
  const departments = {};
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split(/\r?\n/);
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] === '') {
        continue;
      }
      // increment number of students
      studentNumber += 1;
      // get department and student name
      const words = lines[i].split(',');
      const dep = words[words.length - 1];
      // create a list if it doesnt exist and append student name
      if (departments[dep] === 'undefined' || !(departments[dep] instanceof Array)) {
        departments[dep] = [];
      }
      departments[dep].push(words[0]);
    }
    console.log('Number of students: %d', studentNumber);
    if (departments) {
      for (const dep in departments) {
        const names = departments[dep].join(', ');
        console.log('Number of students in %s: %d. List: %s', dep, departments[dep].length, names);
      }
    }
  });
}

module.exports = countStudents;
