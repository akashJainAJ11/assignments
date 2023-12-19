const fs = require('fs');

let data = "This task is done successfully!"; 
fs.writeFile('demo.txt', data,'utf-8', function(err) {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Successfully wrote to file: demo.txt');
    } {
}});
