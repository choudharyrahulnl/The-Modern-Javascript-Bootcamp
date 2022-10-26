// Number
let age = 32;
console.log('Age ', age);

let notANumber = NaN;
console.log('Not a number', notANumber);

let addNAN = 20 + NaN;
console.log('Add Number with NaN ', addNAN);

let counter = 0;
counter++; // This will increment counter by 1 and return 0 (or the previous value)
console.log('Counter ', counter);

counter = 0;
++counter; // // This will increment counter by 1 and return 1 ( or the incremented value)
console.log('Counter ', counter);

counter = 0;
counter = counter + 1;
console.log('Counter ', counter);

console.log(parseInt('24'));
console.log(parseInt('26.12'));
console.log(parseFloat('26.12'));
console.log(parseInt('25dayslater')); // string should start with number
console.log(parseInt('dayslater25'));
console.log(parseInt('i logged in at 8 am'));