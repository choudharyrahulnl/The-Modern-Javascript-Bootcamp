// Math
console.log(Math.PI);
console.log(Math.floor(3.444)); // shop after .
console.log(Math.round(4.4));
console.log(Math.round(4.9));
console.log(Math.random());
console.log(Math.abs(-49));
console.log(Math.pow(6,2));


//Random Number between 1 and 10
console.log('****************************************')
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step5 = step3 + 1;
console.log(step5);

// OR
console.log(Math.floor(Math.random() * 10) + 1);