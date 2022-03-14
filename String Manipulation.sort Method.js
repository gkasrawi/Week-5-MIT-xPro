Array/String Manipulation.sort Method 

const numbers = [4, 7, 1, 3, 5, 4, 9, 23]

console.log(numbers.sort());// [1, 23, 3, 4, 5, 7, 9]
//The method .sort Sorts an array in place. This method changes the array and returns a reference to the same array.

console.log(numbers.sort((a, b) => a-b));// [1, 3, 4, 5, 7, 9, 23]
//changing the original variable working with can be considered "mutating.
//This method mutates the orginal array and returns a referral to the same array. 