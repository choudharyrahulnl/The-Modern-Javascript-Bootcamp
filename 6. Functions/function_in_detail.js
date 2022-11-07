console.log("****************** FUNCTION IN DETAIL ********************");

// GLOBAL SCOPE
let color = 'RED';
function getColorGlobal() {
    console.log('Color is ', color);
}
getColorGlobal();
console.log(color);

// LOCAL SCOPE
function getColorLocal() {
    let color = 'GREEN';
    console.log('Color is ', color);
}
getColorLocal();
console.log(color);

// LET & CONST ARE BLOCK SCOPED
// VAR IS NOT BLOCK SCOPED, IF DECLARE IN BLOCK EVEN THEN WE CAN ACCESS IT GLOBALLY


let movie = 'The Hero!!!';
function outer() {

    let movie = 'The Hero!!';

    function inner() {
        // FIRST IT SEARCH IN INNER FUNCTION SCOPE THEN IT LOOKS FOR OUTER FUNCTION SCOPE
        //let movie = 'The Hero!';

        // IF NOT PRESENT IN OUTER FUNCTION SCOPE THEN IT LOOKS IN GLOBAL SCOPE
        console.log(movie);
    }

    inner();
}

// WE DON'T HAVE ACCESS TO INNER
//inner()

outer();

console.log("****************** FUNCTION EXPRESSION ********************");

const add = function (x,y) {
    return x+y;
}
console.log(add(2,3));

console.log("****************** HIGHER ORDER FUNCTION ********************");

// ACCEPT OTHER FUNCTIONS AS ARGUMENT
function greet(name) {
    console.log(`Hi ${name}`);
}

function greetRahul(greet) {
    greet('Rahul!');
}

greetRahul(greet);

// RETURN A FUNCTION
function multiplyBy(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

// multiplyBy(2); return function
// function (num2) {
//     return 2 * num2;
// }

const double = multiplyBy(2);
console.log(double(5));

const triple = multiplyBy(3);
console.log(triple(5));

console.log("****************** CALLBACK FUNCTION ********************");

// FUNCTIONS WHICH IS PASSED INTO OTHER FUNCTION AS AN ARGUMENT, WHICH IS THEN INVOKED INSIDE OUTER FUNCTION
// AS WE SEE ABOVE
setTimeout(function (){
    console.log('Hello')
},2000)

// JAVASCRIPT READ FILE AND PUT FUNCTION DEFINITION IN START
// THAT MEANS WE CAN CALL A FUNCTION EVEN BEFORE WE DEFINE
// THIS IS KNOW AS HOISTING
// EX

hoist();

function hoist() {
    console.log('This is hoisting');
}

// HOISTING DOESN'T WORK ON LET & CONST


