const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf8', function(err, data) {
    console.log(data);
});

// let a = 0;
// for(let i = 0; i <100000000000000000; i++){
//     a += i;
// }

// console.log('a: ' + a);