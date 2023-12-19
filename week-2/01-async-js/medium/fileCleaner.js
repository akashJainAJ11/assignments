const fs = require('fs');

fs.readFile('a.txt', 'utf8', function(err, data) {
    console.log(data);
const cleanedData = data.replace(/\s+/g, ' ');

fs.writeFile('a.txt', cleanedData,'utf-8', function(err) {
    console.log(cleanedData);
});

});