# Node-JS-Mongo-DB-and-Express-JS

### `What is Node.js?`

* Node.js is a Javascript runtime built on Chrome's V8 Javascript engine
* Node.js allows you to run Javascript on the server
* Node.js also provides library of various Javascript modules which helps to develop * web application
* Node.js was developed by Ryan Dahl in 2009
* Node.js is not a language or framework

### `Advantages of Node.js`

* Open Source
* Efficient, Fast and Highly Scalable
* Event Driven
* Very Popular

### `REPL`

The repl module provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone program or includible in other applications.

* Javascript Expression
* Variable
* Global and Local Varible
* _(underscore) Variable
* Function

#### `Some Commands`
* `.break` Something you get stuck, this get you out
* `.clear` Alise for .break
* `.editor` Enter editor mode (Ctrl + D to finish, Ctrl + C to cancel).
* `.exit` Exit the REPL
* `.help` Print this heml message
* `.load` Load JS from a file into the REPL session e.g. .load./file/to/load.js
* `.save` Save all evaluated commands in this REPL session to a file e.g. .save./file/to/save.js

Prss Ctrl + C to abort current expression, Ctrl+D to exit the REPL

### `Module Wrapper`

Before a module's code is executed, Node.js will warp it with a function wrapper that looks like following:
```
(function(exports, require, module, __filename, __dirname) {
    ///Module code actually lives in here
})
```
By doing this, Node.js achives a few things:
* It keeps top-level variables (defined with var, constant ot let) scoped to the module rather than the global object.
* It helps to provide some global-looking varibales that are actually specified to the module, such as:
    The modules and exports objects that the implementor can use to ecport calues from the module.
    The convence varibles __filename and __dirname, containing the module's absolute filename and directory path.

* `export` A reference to the module.exports that is short to type
* `require` Used to import modules
* `module` A reference to the current module.
* `__dirname` The directory name of the current module. This is the same as the path.dirname() of the __filename. Ex: `console.log(__dirname)`
* `__filename` The file name of the current module. This is the current module file's absolute path with symlinks resolved. Example: `console.log(__filename)`