var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello', function (err) {
  if (err) throw err;
  console.log('Appended!');
}); 