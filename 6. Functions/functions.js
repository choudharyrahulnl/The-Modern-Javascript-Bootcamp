// FUNCTIONS

console.log("****************** FUNCTION ********************");
// DEFINE A FUNCTION
function funcName() {
    console.log("Hello from function");
}

// THIS WILL GIVE FUNCTION REFERENCE
// funcName

// CALL A FUNCTION
funcName();

console.log("****************** ROLL DIE FUNCTION ********************");

function rollDie() {
    return Math.floor(Math.random()*6) + 1;
}

for (let i = 0; i < 10; i++) {
    if(rollDie() === 6) {
        console.log('We get 6!!! after ',i, ' attempts');
        break;
    }
}

console.log("****************** FUNCTION ARGUMENT ********************");

function greet(name) {
    console.log(`Hi ${name}`);
}

greet('Rahul');

function sum(x,y) {
    console.log(`x is ${x} & y is ${y}`);
    console.log(x+y);
}

sum(2,3);
sum(2);

console.log("****************** FUNCTION RETURN ********************");

function sumTwoNumber(x,y) {
    return x+y;
}

console.log('sumTwoNumber return',sumTwoNumber(2,3));




console.log("****************** EXERCISE ********************");

function findAvg(arr) {
    let sum=0;
    for (const arrElement of arr) {
        sum +=arrElement;
    }
    return sum/arr.length;
}

console.log(findAvg([0,50]));
console.log(findAvg([75,76,80,95,100]));


