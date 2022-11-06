// LOOP

console.log("****************** FOR LOOP ********************");

// FOR LOOP
for (let i=0; i <= 5; i++) {
    console.log(i);
}

// INFINITE LOOP
// for (let i = 20; i >= 0 ; i++) {
//     console.log(i);
// }

console.log("****************** WHILE LOOP ********************");

// WHILE LOOP: USE WHEN WE DON'T KNOW HOW MANY TIMES IT WILL RUN

// INITIALIZE
let i = 0;

// CONDITION
while (i<=5) {
    // LOGIC
    console.log(i);
    // INCREMENT/DECREMENT
    i++;
}

console.log("****************** BREAK LOOP ********************");

for (let i=0; i <= 10; i++) {
    console.log(i);
    if(i===5) {
        break;
    }
}

// IF WE HAVE INNER LOOP THEN BREAK WILL ONLY WORK ON INNER LOOP FOR OUTER LOOP WE NEED ANOTHER BREAK

// while (true) {
//     // CONDITION/LOGIC MATCH BREAK
//     // CONTINUE
// }

console.log("****************** FOR OF LOOP ********************");

// USE WHEN WE DON'T NEED A INDEX
let array = [1,2,3,4,5]
for (const arrayElement of array) {
    console.log(arrayElement);
}

console.log('\n');

for (const name of 'Rahul Choudhary') {
    console.log(name.toUpperCase());
}

console.log("****************** FOR OF LOOP ON OBJECT ********************");

// FOR OF LOOP OVER ITERABLE
const forOfObject = {
    firstName: 'rahul',
    lastName: 'choudhary'
}

for (const forOfObjectElement of Object.keys(forOfObject)) {
    console.log('Keys: ', forOfObjectElement)
}

console.log('\n');

for (const forOfObjectElement of Object.values(forOfObject)) {
    console.log('Values: ', forOfObjectElement)
}

console.log('\n');

for (const forOfObjectElement of Object.keys(forOfObject)) {
    console.log(`${forOfObjectElement} : ${forOfObject[forOfObjectElement]}`)
}


console.log("****************** FOR IN LOOP ON OBJECT KEYS ********************");

// FOR IN LOOPS OVER KEYS IN OBJECTS
for (const forOfObjectKey in forOfObject) {
    console.log(forOfObjectKey);
}

for (const forOfObjectKey in forOfObject) {
    console.log(forOfObjectKey, forOfObject[forOfObjectKey] );
}

// WE CAN'T USE IT WITH ARRAYS, IT ONLY BE USED WITH OBJECT
// KEYS IN ARRAY ARE INDEX SO WE GET OUTPUT AS INDEX
// WHEN WE SAY WE CAN'T USE WE MEAN IT OF NO USE AS WE ONLY GET INDEX
for (const forOfObjectKey in [1,2,3,4,5]) {
    console.log(forOfObjectKey);
}