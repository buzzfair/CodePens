//const a = 'Hello World!';
//function b(){
//    console.log('Called b!')
//}
//
//b(); // functions are automatically loaded into memory in JS, so if this code were placed at the top of the doc, the function would evaluate as expected even though the function was declared AFTER it was called
//console.log(a); // HOWEVER due to hoisting, if this code were at the top of the doc and the code were executed in the console, it would return undefined because of the way (or timing) variables are handled by JavaScript's exection mechanism aka execution context - PS all variables are automatically assigned 'undefined' value data type

//function b () {
//    let myVar;
//    console.log(myVar);
//}
//
//function a() {
//    let myVar = 2;
//    console.log(myVar);
//    b();
//}
//
//let myVar = 1;
//console.log(myVar);
//a();
//console.log(myVar);

// output of lines 9-22:
// 1
// 2
// undefined
// 1 (changes back to 1 due to it running in the Global Scope)

function b() {
    console.log(myVar)
} // b is declared lexically in the same scope/execution context as var myVar = 1 (Reference to the Outer Environment) which means output is 1 is logged to console!!!!!!!!

function a () {
     
    function c() {
        console.log(myVar)  // why does this code not run, ie, return 2? reason: c() has to be invoked inside its execution context (scope) !!! Uncomment line 42, and it'll return 2
    }
    
    var myVar = 2;
    c(); // c() is invoked, and so 2 is logged to the console
    b();
}

var myVar = 1;
// console.log(myVar); // outputs 1 to the console
a();
//console.log(myVar); // outputs 1 to the console
c(); // outputs ReferenceError: c is not defined because c() doesn't exist outside the function a() execution context
console.log(myVar); // outputs nothing...why?

// output of lines 31-47:
// 1
// Uncaught ReferenceError: c is not defined
// why? JS lexical environment + scoping rules state that when a variable is undefined (in a function), the execution context then looks (or references) the Outer Environment (parent scope) and pulls the value from there...aka Scope Chain (lexical references = where the code was written)
// why? JS lexical environment + scoping rules state that when a variable is undefined (in a function), the execution context t en looks (or references) the Outer Environment (parent scope) and pulls the value from there...aka Scope Chain (lexical references = where the code was written)