        
Array/String Manipulation.map Method

const numbers = [4, 7, 1, 3, 5, 4, 9, 23]

const doubledNumbers = (numbers.map((number) => number *2));
console.log(numbers.map((number) => number *2)); // [8, 14, 2, 6, 10, 8, 18, 46]
//.map method takes a callback function of its arguement and it also iterates through every element, which is changing every element in the array. 
//After the .map method calls a defined callback function on each element of an array,it will ultimately returns an array that contains the results.

