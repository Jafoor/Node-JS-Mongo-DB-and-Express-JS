# Node-JS-Mongo-DB-and-Express-JS

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Update Node](#update-node)
  - [Windows](#windows)
  - [Mac](#mac)
- [Install and Update Yarn](#install-and-update-yarn)
  - [Windows](#on-windows)
  - [Mac](#on-mac)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
  - [Set Line Breaks](#set-line-breaks)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Setup Linting Configuration file](#setup-linting-configuration-file)
- [Contact](#contact)

<!-- UPDATE NODE -->

## Update Node

Please follow the below instructions to update node in your machine:

### Windows

1. Update npm
   ```sh
   npm install npm@latest -g
   ```
2. Clear npm cache
   ```sh
   npm cache clean -f
   ```
3. Install n
   ```sh
   npm install -g n
   ```
4. Update node to latest version
   ```sh
   n latest
   ```

### Mac

1. With Homebrew
   ```sh
   brew update
   brew upgrade node
   ```

<!-- INSTALL & UPDATE YARN -->

## Install and Update yarn

Please follow the below instructions to install or update yarn in your machine.

### On Windows

1. Install yarn
   ```sh
   npm install -g yarn
   ```
2. Update yarn
   ```sh
   yarn set version latest
   ```

### On Mac

1. Install yarn
   ```sh
   brew install yarn
   ```
2. Update yarn
   ```sh
   brew update
   brew upgrade yarn
   ```

<!-- EDITOR SETUP -->

## VS Code Editor Setup

In order to follow along the tutorial series, I recommend you to use Visual Studio Code Editor and install & apply the below extensions and settings.

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### Settings

Go to your Visual Stuido Code `settings.json` file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.

<img src="images/line-feed.jpg" alt="Line Feed" width="700">

<!-- LINTING SETUP -->

## Linting Setup

In order to lint and format your code automatically according to popular airbnb style guide, I recommend you to follow the instructions as described in video. References are as below.

### Install Dev Dependencies

```sh
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Setup Linting Configuration file

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier"]
}
```

### `What is Node.js?`

- Node.js is a Javascript runtime built on Chrome's V8 Javascript engine
- Node.js allows you to run Javascript on the server
- Node.js also provides library of various Javascript modules which helps to develop \* web application
- Node.js was developed by Ryan Dahl in 2009
- Node.js is not a language or framework

### `Advantages of Node.js`

- Open Source
- Efficient, Fast and Highly Scalable
- Event Driven
- Very Popular

### `REPL`

The repl module provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone program or includible in other applications.

- Javascript Expression
- Variable
- Global and Local Varible
- \_(underscore) Variable
- Function

#### `Some Commands`

- `.break` Something you get stuck, this get you out
- `.clear` Alise for .break
- `.editor` Enter editor mode (Ctrl + D to finish, Ctrl + C to cancel).
- `.exit` Exit the REPL
- `.help` Print this heml message
- `.load` Load JS from a file into the REPL session e.g. .load./file/to/load.js
- `.save` Save all evaluated commands in this REPL session to a file e.g. .save./file/to/save.js

Prss Ctrl + C to abort current expression, Ctrl+D to exit the REPL

### `Module Wrapper`

Before a module's code is executed, Node.js will warp it with a function wrapper that looks like following:

```
(function(exports, require, module, __filename, __dirname) {
    ///Module code actually lives in here
})
```

By doing this, Node.js achives a few things:

- It keeps top-level variables (defined with var, constant ot let) scoped to the module rather than the global object.
- It helps to provide some global-looking varibales that are actually specified to the module, such as:
  The modules and exports objects that the implementor can use to ecport calues from the module.
  The convence varibles **filename and **dirname, containing the module's absolute filename and directory path.

- `export` A reference to the module.exports that is short to type
- `require` Used to import modules
- `module` A reference to the current module.
- `__dirname` The directory name of the current module. This is the same as the path.dirname() of the **filename. Ex: `console.log(**dirname)`
- `__filename` The file name of the current module. This is the current module file's absolute path with symlinks resolved. Example: `console.log(__filename)`

### `Path`

The path module provides utilities for working with file and directory paths. It can be accessed using:
`const path = require('path');`

- `basename()` this method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored. Syntax: `basename(path[,ext])` Example: `basename('/test/something.html', '.html')`

- `dirname()` this method returns the directory name of the path. Syntax: `dirname(path)` Example: `dirname('/test/something.html')`
  Here is details on [NodePath]

[nodepath]: https://www.w3schools.com/nodejs/ref_path.asp
