function countStudents(path) {
  const fs = require('fs');

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error("Cannot load the database");
    } 
  });
}

module.exports = countStudents;
