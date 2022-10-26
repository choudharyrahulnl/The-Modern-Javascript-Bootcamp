// String
const name = 'Rahul Choudhary'; // We can't change const value once defined
console.log('Name ', name);

let firstName = 'Rahul';
firstName = firstName + 1; // This will convert number to string
console.log('FirstName ', firstName);

firstName = firstName / 'f'; // if we do math operation on string we get NaN
console.log('FirstName divided ', firstName);


// Index
console.log('****************************************')
let nonVeg = 'CHICKEN'; // String are indexed from 0 like C 0, H 1, I 2, C 3, K 4, E 5, N 6
console.log('String Length ', nonVeg.length) // Length count start from 1
console.log('String get by index ', nonVeg[0]) // Get string value by index
console.log('String out of index ', nonVeg[7]) // Get undefined if out of index
console.log('String last char ', nonVeg[nonVeg.length - 1]) // Get last char

nonVeg[0] = 'K';
console.log('String are immutable ', nonVeg[0]) // String are immutable


// Upper Case
console.log('****************************************')

let message = 'hello';
console.log('Uppercase ', message.toUpperCase()); // String methods

// Trim
console.log('****************************************')
let trim = ' hello ';
console.log('Trim ', trim.trim().toUpperCase()); // trim will remove leading and trailing spaces


// Index Of
console.log('****************************************')
let textIndexOf = 'catidogi';
console.log('Index of ', textIndexOf.indexOf('cat')); // find cat index
console.log('Index of ', textIndexOf.indexOf('dog'));
console.log('Index of ', textIndexOf.indexOf('i')); // it will tell first index
console.log('Index of ', textIndexOf.indexOf('i',4)); // find i index search after index 4
console.log('Index of ', textIndexOf.indexOf('test')); // If not found then it return -1


// Slice
console.log('****************************************')
let textSlice = 'baseball'; // we need only ball
console.log('Slice ', textSlice.slice(4)); // slice index start from 1
console.log('Slice ', textSlice.slice(4,7)); // we need bal, last index is excluded in this case

// Replace
console.log('****************************************')
let textReplace = 'rahul singh';
console.log('Replace ', textReplace.replace('singh','choudhary'));


// String Immutable
console.log('****************************************')
let testString = "test";
testString.toUpperCase();
console.log('String immutable ', testString);

testString = testString.toUpperCase();
console.log('String assigned back ',testString);


// Special char
console.log('****************************************')
let special1 = 'I don\'t know';
console.log(special1);

let special2 = 'Today\nTomorrow';
console.log(special2);

// Template Literals
console.log('****************************************')
let template = `I counted ${3+4} mangoes`;
console.log(template);

let template2 = `I don't know`;
console.log(template2);
