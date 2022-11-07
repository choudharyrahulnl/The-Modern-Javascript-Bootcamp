console.log("****************** DEFAULT PARAM ********************");

// DEFAULT PARAM

// OLD WAY
function multiply(x,y) {
    // CHECK IF X AND Y ARE UNDEFINED
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
};

console.log(multiply(4));
console.log(multiply(4,3));

// NEW WAY: PASS DEFAULT VALUE IN ARGUMENT
// WE CAN PASS VALUE/ARRAY...
// NOTE: DEFAULT PARAM SHOULD BE THE LAST PARAM
function multiplyNew(x,y=1) {
    return x * y;
};

console.log(multiply(4));
console.log(multiply(4,3));


console.log('\n');
console.log("****************** SPREAD ********************");

// SPREAD SYNTAX ALLOW AN ITERABLE SUCH AS AN ARRAY TO BE EXPANDED IN PLACE WHERE ZERO OR MORE ARGUMENTS ARE
// EXPECTED OR AN OBJECT EXPRESSION TO BE EXPANDED IN PLACE WHERE ZERO OR MORE KEY-VALUE PAIR ARE EXPECTED

// SPREAD IN FUNCTION CALL
const nums = [4,9,3,12,8];
console.log(Math.max(12,16));

// Argument type number[] is not assignable to parameter type number
// console.log(Math.max(nums));
console.log(Math.max(...nums));

//
function printFourParams(a,b,c,d) {
    console.log(`a is ${a}, b is ${b},c is ${c},d is ${d}`);
}
printFourParams(1,2,3,4);
// TAKE ARRAY AS 1 ARGUMENT & REST ARE UNDEFINED
printFourParams([1,2,3,4]);
// SPREAD ARRAY AS ARGUMENT
printFourParams(...[1,2,3,4]);
const str = "GOAT";
printFourParams(...str);

// CREATE NEW ARRAY USING EXISTING ARRAY
const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
console.log(...num1,...num2);
console.log([...num1,...num2]);
console.log([...num1,...num2,9,10]);

// SPREAD IN OBJECT
const user = {
    name: 'rahul',
    age: 32,
    country: 'India'
}
// country WILL BE OVERRIDDEN
const updatedRahul = {...user,country: 'Netherlands'};
console.log(updatedRahul);

// ORDER MATTERS
const updatedRahul2 = {country: 'Netherlands',...user};
console.log(updatedRahul2);

// NOTE SPREAD CAN ALSO BE USED TO CREATE A COPY WHICH HAS DIFF REFERENCE

// WE CAN'T SPREAD OBJECT IN ARRAY:  updatedRahul is not iterable
//console.log([...updatedRahul]);

// IF WE COMBINE ARRAY AND OBJECT USING SPREAD IN ARRAY
console.log([...'hello',{...user}]);

// IF WE SPREAD ARRAY IN OBJECT, IT WORKS WE GET KEY AS INDEX AND VALUE AS ELEMENT
const newObjectFromArr = {...[1,2,3,4]};
console.log(newObjectFromArr);

console.log('\n');
console.log("****************** REST  ********************");

// REST: IT COLLECTS

// arguments ARE BY DEFAULT AVAILABLE TO ALL FUNCTIONS
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total +=arguments[i];
    }
    return total;
}
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));

// arguments LOOKS LIKE ARRAY BUT THEY ARE NOT ARRAY WE CAN USE ARRAY METHODS ON ARGUMENTS LIKE PUSH/POP...
// function sumAll2() {
//     let total = 0;
//     return arguments.reduce((total,curVal) => {
//         return total + curVal;
//     });
// }

// BUT WE CAN USE SPREAD TO MAKE IT ARRAY
function sumAll2() {
    const newArgs = [...arguments];
    return newArgs.reduce((total,curVal) => {
        return total + curVal;
    });
}
console.log(sumAll2(1,2));
console.log(sumAll2(1,2,3));

// arguments ARE NOT PRESENT IN ARROW FUNCTIONS
// const sumUpAll = () => {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total +=arguments[i];
//     }
//     return total;
// }
// console.log(sumUpAll(1,2,3));

// REST PARAMS: COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL ARRAY
// WE ARE COLLECTING ALL ARGUMENTS AS AN ARRAY
function sumAll3(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}
console.log(sumAll3(1,2));
console.log(sumAll3(1,2,3));

// REST WITH REDUCE
function sumAll4(...nums) {
    return nums.reduce((total,curVal) => {
        return total + curVal;
    });
}
console.log(sumAll4(1,2));
console.log(sumAll4(1,2,3));

function fullName(first,last,...titles) {
    console.log(`first ${first}, last ${last}, titles ${titles}, No of titles ${titles.length}`);
}
fullName('rahul','choudhary','thecrazzyrahul','choudharyrahul');

// REST PARAM SHOULD BE THE LAST PARAM
// ERROR: No parameter is allowed after rest parameter
// function fullName(...titles,first,last) {
//     console.log(`first ${first}, last ${last}, titles ${titles}, No of titles ${titles.length}`);
// }

// WE CAN USE REST PARAM IN ARROW FUNCTION
const sumUpAll5 = (...nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total +=nums[i];
    }
    return total;
}
console.log(sumUpAll5(1,2,3));


console.log('\n');
console.log("****************** DESTRUCTURING ********************");

// DESTRUCTURING: SHORT AND CLEAN SYNTAX TO UNPACK
// VALUES FORM ARRAY & PROPERTIES FROM OBJECT INTO DISTINCT VARIABLES
const raceResult = ['rahul-1','rahul-2','rahul-3','rahul-4','rahul-5'];
const gold = raceResult[0];
const silver = raceResult[1];
const bronze = raceResult[2];
console.log(`Gold ${gold}, Silver ${silver}, Bronze ${bronze}`);

const [gold1,silver1,bronze1] = raceResult;
console.log(`Gold ${gold1}, Silver ${silver1}, Bronze ${bronze1}`);

// WE CAN SKIP AS WELL
const [gold2,,silver2,,bronze2] = raceResult;
console.log(`Gold ${gold2}, Silver ${silver2}, Bronze ${bronze2}`);

const [gold3,...silver3] = raceResult;
console.log(`Gold ${gold3}, Silver ${silver3}`);

// DESTRUCTURING OBJECTS
// IN ARRAY WE DESTRUCTURE BASED ON INDEX
// IN OBJECT WE DESTRUCTURE BASED ON PROPERTY KEY/NAME
const user2 = {
    name: 'rahul',
    age: 32,
    country: 'India'
}
// WE TRY TIME WHICH IS NOT PRESENT IN USER OBJECT
// SO DESTRUCTURE WILL DECLARE THAT VARIABLE
const {name, age,time} = user2;
// AND WE GET TIME AS UNDEFINED
console.log(`Name: ${name}, Age: ${age}, Time: ${time}`);

// WE CAN RENAME THE VARIABLE FROM WHAT WE HAVE IN OBJECT
const {name: NAME, age: AGE} = user2;
console.log(`Name: ${NAME}, Age: ${AGE}`);

const {name:Name, ...other} = user2;
console.log(`Name: ${Name}, Other: ${other}`);

// NESTED DESTRUCTURING
const results = [
    {
        first: 'rahul',
        country: 'Netherlands'
    },
    {
        first: 'choudhary',
        country: 'India'
    }
];
// GET SECOND USER COUNTRY
const [,{country}] = results;
console.log(`Second user country is ${country}`);

// CLEANER WAY
const [,secondUser] = results;
const {country:secondUserCountry} = secondUser;
console.log(`Second user country is ${secondUserCountry}!!`);

// PARAM DESTRUCTING OBJECT
const paramDestructureUser = {
    first: 'Rahul',
    last: 'Choudhary',
    country: 'India'
}
const fullNameDestructureUser = ({first,last}) => {
    return `${first} ${last}`;
};
console.log(fullNameDestructureUser(paramDestructureUser));

// PARAM DESTRUCTING ARRAY
const response = ['HTTP/1.1','200 OK','application/json'];
function parseResponse([protocol, statusCode, contextType]) {
    console.log(`Status: ${statusCode}`);
}
parseResponse(response);
