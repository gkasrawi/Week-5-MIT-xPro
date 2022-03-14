
Array/String Manipulation.filter Method

const numbers = [4, 7, 1, 3, 5, 4, 9, 23]

console.log(numbers.filter((number) => number > 5));// [7, 9, 23]
.filter //  filters out elements out of the array based on some criteria ie. >5.
        //  The .filter method takes a function as a parameter or its arguement anytime you pass a function to another function; which is a callback.
