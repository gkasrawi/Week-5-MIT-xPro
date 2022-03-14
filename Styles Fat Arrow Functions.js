// Fat Arrow
// An arrow function expression is a compact alternative to the traditional function expression but is limited and can't be used in all situations. They are inherently anonymous but can be stored in variables and re-used.

//With one parameter
param1 => {do stuff}

//With multiple parameters
(param1, param2) => {do stuff};

//With multiple parameters stored in a variable
var myFunction = (param1, param2) => {do stuff};

//Now a more complex example with an object

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]