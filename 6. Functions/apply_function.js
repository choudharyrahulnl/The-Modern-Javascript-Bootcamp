console.log("****************** FOR EACH ********************");

// FOR EACH ACCEPT CALL BACK FUNCTION
// CALLS THE FUNCTION ONCE PER ELEMENT IN THE ARRAY
const nums = [1,2,3,4];
nums.forEach(function (x){
    console.log(x);
});

console.log('\n');

// PASS FUNCTION TO FOR EACH
function even(x) {
    if(x%2 === 0) console.log(x);
}
nums.forEach(even);

console.log('\n');

// INDEX: FOR EACH PASS INDEX AS A SECOND ARGUMENT TO CALL BACK FUNCTION
nums.forEach(function (x,index) {
    console.log(index,x);
})

console.log('\n');
console.log("****************** FOR EACH ********************");

// MAP IS USED TO CREATE A NEW ARRAY WITH THE RESULT OF CALLING A CALLBACK ON EVERY ELEMENT IN THE ARRAY
// ACCEPTS THE CALLBACK
const newNums = nums.map(function (x){
    return x*2;
})
console.log(newNums);

const newNumsWithIndex = nums.map(function (x,index){
    return {
        index: index,
        value: x,
        isEven: x % 2 === 0
    };
});
console.log(newNumsWithIndex);

console.log('\n');
console.log("****************** ARROW FUNCTIONS ********************");

const square = (x) => {
    return x * x;
}
console.log(square(2));

// ARROW FUNCTION SHORTER VERSIONS

// const isEVen = (num) => {
//     return num % 2 === 0;
// }

// IF WE HAVE ONLY 1 ARGUMENT THEN WE CAN OMIT ()
// const isEVen = num => {
//     return num % 2 === 0;
// }

// IF WE HAVE ONLY 1 LINE/EXPRESSION WHICH WE RETURN THEN WE CAN USE THIS ()
// const isEVen = num => (
//      num % 2 === 0
// );

// IF RETURN FITS IN SINGLE LINE USE THIS
const isEVen = num => num%2 === 0;
console.log(isEVen(42));

// WE DO THIS ABOVE
// const newNumsWithIndex = nums.map(function (x,index){
//     return {
//         index: index,
//         value: x,
//         isEven: x % 2 === 0
//     };
// });
// console.log(newNumsWithIndex);

// USING ARROW FUNCTION
// const newNumsWithIndexMap = nums.map((x,index) => {
//     return {
//         index: index,
//         value: x,
//         isEven: x % 2 === 0
//     };
// });
// console.log(newNumsWithIndexMap);

// USING ARROW FUNCTION RETURN ()
const newNumsWithIndexMap = nums.map((x,index) => (
     {
        index: index,
        value: x,
        isEven: x % 2 === 0
     }
));
console.log(newNumsWithIndexMap);

console.log('\n');
console.log("****************** FIND FUNCTIONS ********************");

// RETURNS THE VALUE OF FIRST ELEMENT IN THE ARRAY THAT SATISFIES THE PROVIDED TESTING FUNCTION
// IT RETURN ONLY 1 VALUE WHICH MATCHES FIRST
const num = nums.find(x => {
    return x % 2 === 0;
});
console.log(num);


console.log('\n');
console.log("****************** FILTER FUNCTIONS ********************");

// CREATE A NEW ARRAY WITH ALL ELEMENT THAT PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION

const numFilter = nums.filter(x => {
    return x % 2 === 0;
});
console.log(numFilter);


console.log('\n');
console.log("****************** SOME & EVERY FUNCTIONS ********************");

// EVERY : TEST WHETHER ALL ELEMENTS IN THE ARRAY PASS THE PROVIDED FUNCTION, IT RETURNS A BOOLEAN VALUE
// TAKES CALL BACK FUNCTION WHICH RETURNS A BOOLEAN VALUE
const words  = ['dog','cat','bag'];
const result = words.every(word => {
    return word.length === 3;
});
console.log(result);

const words2  = ['dog','cat','bag','hi'];
const result2 = words2.every(word => {
    return word.length === 3;
});
console.log(result2);


// SOME: RETURN TRUE IF ANY OF THE ARRAY ELEMENTS PASS THE TEST FUNCTION
const words3  = ['dog','cat','bag'];
const result3 = words3.some(word => {
    return word.length === 3;
});
console.log(result3);


console.log('\n');
console.log("****************** SORT FUNCTIONS ********************");

// DEFAULT SORT, WITHOUT COMPARE, WHICH TAKES EACH ELEMENT AS STRING AND THEN SORT
// SO WE CAN USE THE DEFAULT SORT TO SORT THE STRINGS
// THIS IS NOT DESIRED FOR NUMBERS AS 5 IS SMALLER THAN ALL (12,15,..)
// SP WE USE COMPARE FUNCTION

// SORT CHANGES THE ORIGINAL ARRAY
// FOR THIS WE CAN USE SLICE WHICH MAKES COPY, LIKE: prices.slice().sort((a,b)=> a-b);
const prices = [12,15,11,20,19,5];
prices.sort();
console.log(prices);

// SORT ASC: USE COMPARE FUNCTION WHEN USE NUMBER
// WE CAN EVEN PASS OUR SORT FUNCTION AS WELL
// RULE: IF compareFunction(a,b) returns less than 0 : SORT a before b
// RULE: IF compareFunction(a,b) returns 0 : LEAVE a & b unchanged
// RULE: IF compareFunction(a,b) returns greater than 0 : SORT b before a
prices.sort((a,b) => a - b );
console.log(prices);

// SORT DESC: USE COMPARE FUNCTION WHEN USE NUMBER
prices.sort((a,b) => b - a );
console.log(prices);


console.log('\n');
console.log("****************** REDUCE FUNCTIONS ********************");

// REDUCE EXECUTE A REDUCER FUNCTION ON EACH ELEMENT OF THE ARRAY, RESULTING INTO SINGLE VALUE
// EX SUM/MULTIPLY
// nums = [ 1, 2, 3, 4 ] accumulator = 1 & currentValue = 2 , result is 3
// accumulator = result/3 & currentValue = 3 , result is 6
// accumulator = result/6 & currentValue = 4 , result is 10
// NOTE: WHATEVER IS RETURN BY FUNCTION (return accumulator + currentValue) WILL BECOME MAX
// IT CANE BE MULTIPLY OR COMPARE ...
const reduceResult = nums.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
});
console.log(reduceResult);

// reduce(callback,initial-value)
// THIS MEAN FIRST ELEMENT WILL BE INITIAL VALUE (100) NOT (1) FROM nums ARRAY
// nums = [ 1, 2, 3, 4 ] accumulator = 100 & currentValue = 1 , result is 101
// accumulator = result/101 & currentValue = 2 , result is 103
// accumulator = result/103 & currentValue = 3 , result is 106
// accumulator = result/106 & currentValue = 4 , result is 110
const reduceResult2= nums.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},100);
console.log(reduceResult2);

// TALLYING WITH REDUCE
const votes = ['y','n','y','y','n'];
const votesResult = votes.reduce((tally,val) => {
    // FIRST: {} has y NO GO TO ELSE
    // SECOND: {y:1} has y YES GO TO IF
    if(tally[val]) {
        // SECOND: {y:1}
        tally[val]++;
        // SECOND: {y:2}
    }
    else {
        // FIRST: {}
        tally[val] = 1;
        // FIRST: {y: 1}
    }
    return tally;
},{});
console.log(votesResult);

