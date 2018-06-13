var fs = require('fs');

fs.rename('mynewfile.txt', 'myrenamedfile1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 