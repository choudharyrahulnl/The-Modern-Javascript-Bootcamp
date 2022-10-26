console.log('Rahul', 32, 'Voermanweg', 'Swisscom');
console.log('****************************************')

// Conditional Statement if else
console.log('****************************************')
let num  = 2;
if ((num % 2) === 0) {
    console.log(`Even number ${num}`)
} else {
    console.log(`Odd number ${num}`)
}

console.log('****************************************')
let rating = 4;
if(rating === 1) {
    console.log('Needs improvement');
} else if(rating === 2) {
    console.log('Meet expectation');
} else if(rating === 3){
    console.log('Over expectation')
} else {
    console.log('Invalid rating')
}

// In Javascript these will have false value: false, 0, '', null, undefined, NaN else everything is true
console.log('****************************************')
if (false) {
    console.log('False is Falsy'); // will not print
}
if (0) {
    console.log('0 is Falsy'); // will not print
}
if ('') {
    console.log(`'' is Falsy`); // will not print
}
if (null) {
    console.log('null is Falsy'); // will not print
}
if (undefined) {
    console.log('undefined is Falsy'); // will not print
}
if (NaN) {
    console.log('NaN is Falsy'); // will not print
}


// logical operator AND (&&), OR (||), NOT (!) which evaluate both side
console.log('****************************************')
if ((1 <= 5) && (6 >= 5)) {
    console.log('Yes')
}
if ((8 <= 5) || (6 >= 5)) {
    console.log('Yes')
}
if ((8 <= 5) && (6 >= 5) || (1 <= 5)) {
    console.log('Yes')
}
if(!null) {
    console.log('Yes')
}

//  operator precedence: ! > && > || we can alter this using ()

// Switch
console.log('****************************************');
let day = 1;
if (day === 1) {
    console.log('MONDAY');
} else if (day === 2) {
    console.log('TUESDAY');
} else if (day === 3) {
    console.log('WEDNESDAY');
} else if (day === 4) {
    console.log('THURSDAY');
} else if (day === 5) {
    console.log('FRIDAY');
} else if (day === 6) {
    console.log('SATURDAY');
} else if (day === 7) {
    console.log('SUNDAY');
} else {
    console.log('Invalid Day');
}

switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
        console.log('SATURDAY');
        break;
    case 7:
        console.log('SUNDAY');
        break;
    default:
        console.log('Invalid Day');
}

// Ternary Operator condition ? true : false we can use this to write if else in 1 line
console.log('****************************************');
console.log( 2===8 ? 'Yes' : 'No' )