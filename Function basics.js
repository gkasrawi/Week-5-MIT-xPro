//  Functions are one of the fundamental building blocks in JavaScript. 
//  A function in JavaScript is similar to a procedure, a set of statements that perform a task or calculates a value;
//  But for a procedure to qualify as a function, it should take some input and return an output where there's some obvious relationship between the input and the output.
//  * Two major parts to a function
//  * 1. Definition
//  * 2.execution
//  */

function addFirst(x, y) {
    console.log('addFirst function');
    return x + y;
}

const addSecond = function (x, y) {
        return x + y; 
}

const addThird = (x + y) => {
    return x +y;
}

const addFourth = (x, y) => x +y;

function sayHello(); {
    console.log ('hello');
}

sayHello();

const results = addFirst(5, 4);
console.log(results);
console.log(addSecond(5, 4));
console.log(addThird(5, 4));
console.log(addFourth (5, 4));