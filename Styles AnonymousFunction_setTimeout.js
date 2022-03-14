// Anonymous Callback Function
// An anonymous function is a function without function name. Only the function expression can be anonymous.  
// Anonymous function are useful when you use the function only once, as they are faster to write. 
// when a function doesnt have a name its considered an amonymous function
// Function declarations must have a name assigned.

//Anonymous function when used as an expression
const HelloWorld = function () {
    console.log('hello world!');
}
setTimeOut ((helloWorld, 2000)); 
// The .setTimeout expression runs code after some amount of time.
// prints HelloWorld after two seconds

setTimeout (function() { 
    console.log('hi')
    }, 5000); // hi printed after five seconds
    
    setTimeout(hi, 5000); // hi prints after five seconds
    
    
    //Calling setTimeOut with named function.
    //A named function is a function with a function name. We name our functions when we need to re-use them later on in our code. 

    //function declaration
    function hi() {        
        console.log('hi');
    }
    setTimeout(hi, 5000); 
    // hi prints after five seconds