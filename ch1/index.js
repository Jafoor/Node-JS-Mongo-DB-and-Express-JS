console.log("First Run")

// actually console.log("First Run") is wrapped into a function such way

// (function(exports, require, module, __filename, __dirname) {
//     console.log("First Run")
// })

console.log(__filename)
console.log(__dirname)
console.log(module)
console.log(exports)