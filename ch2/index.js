// Path Module

const path = require('path');
console.log(path.basename('/home/jafor/Jafoor/Project/javascript/Node-JS-Mongo-DB-and-Express-JS/ch2/index.js'))
console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js'))
console.log(__filename)


console.log(path.dirname(__filename))
console.log(path.extname(__filename))

// join method
console.log(path.join('/search', 'label', 'course/python', 'oop'))
console.log(path.join('/search', 'label', 'course/python', 'oop', '..'))
console.log(path.join(__dirname, 'code', 'allcode.js'))

// Normalize
console.log(path.normalize('///search/sf/sssf/file/index.js///'))
console.log(path.normalize('\\search///\\sf/sssf/file/index.js//\/'))

// parse
console.log(path.parse(__filename))