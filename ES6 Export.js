// Export
// The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module file into other files or programs. 
// Other programs then use the import statement to import the module.

//You can export functions, classes, and variables individually.

export var name1, name2, …, nameN; 
export function functionName(){...}
export class ClassName {...}

//Or you can export functions, etc in a list. 
function sayHi(name) {
  alert(`Hello, ${name}!`);
}

function sayBye(name) {
  alert(`Bye, ${name}!`);
}

export {sayHi, sayBye}; // a list of exported variables