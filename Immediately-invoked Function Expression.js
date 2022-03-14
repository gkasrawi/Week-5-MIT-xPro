//  IIFE or Immediately-invoked Function Expression.
//  IIFE or Immediately-invoked Function Expressions are functions that we execute immediately after we define them. 
//  IIFE was used to isolate the variables and stop polluting the global object.
//  But with the introduction of block scope, modules, let & const statements IIFE is rarely needed.
const dog ={
    name = grace
    speak = function() {
    console.log(`${this.name} says meow`);
    }
};

    const cat ={
        name = nala
        speak = ' => ',
        console.log(`${this.name} says meow`)

    }
    (function (){
        console.log('I have no name')
    })();
