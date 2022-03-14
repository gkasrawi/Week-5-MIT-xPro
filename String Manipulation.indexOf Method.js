Array/String Manipulation.indexOf Method

const numbers = [4, 7, 1, 3, 5, 4, 9, 23]

console.log(numbers.indexOf(4));    // 0
console.log(numbers.lastIndexOf(4));// 5
console.log(numbers.indexOf(100));  // -1
//The indexOf method returns the index within the string of the first occurance of the specified value.
//The indexOf method starts its search at fromIndex(which is the beggining).
//The value returned is automatically -1 if not found. 