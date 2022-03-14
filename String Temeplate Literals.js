 String temeplate literals
//Template literals are strings that allow for directly embedded expressions.
//They begin and end with backticks(`your string here`) and you can embed any data type within the string using ${put your data here}.
//This is very useful for "interpolating" (embedding) large quantities of data inside strings. 
//string concatenation combines two strings together to make a new single  string expression as shown below.
const sentence = myName + 'is awesome!';
console.log(sentence); // Gabriel is awesome!
const anotherSentence = `${myName} is really awesome`;
console.log(anotherSentence); // Gabriel is  really awesome!