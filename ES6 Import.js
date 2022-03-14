// Import
// The import statement is used to import read-only functions exported by another module.

//You can import functions individually.
    
import {sayHi, sayBye} from './say.js';

sayHi('Dave'); // Hello, Dave!
sayBye('John'); // Bye, Dave!

//or, if you use a lot of functions in the module file, you can import all of them using *. 

import * as say from './say.js';

say.sayHi('Dave');
say.sayBye('Dave');

//If you only use a few functions from a module file, don't use the * command 
// You'll get the answer when you get to webpacking.