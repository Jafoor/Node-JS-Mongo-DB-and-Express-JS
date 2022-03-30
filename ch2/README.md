### `Path`
The path module provides utilities for working with file and directory paths. It can be accessed using:
`const path = require('path');`
* `basename()` this method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored. Syntax: `basename(path[,ext])` Example: `basename('/test/something.html', '.html')`

* `dirname()` this method returns the directory name of the path. Syntax: `dirname(path)` Example: `dirname('/test/something.html')`
Here is details on [NodePath]


[NodePath]: https://www.w3schools.com/nodejs/ref_path.asp