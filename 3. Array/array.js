let arr = ['red','black'];

console.log('****************** Push **********************');
arr.push('yellow'); // goes at the end and return count
arr.forEach(c => console.log(c));

console.log('****************** Pop **********************');

arr.pop(); // remove from the end and return true or undefined if arr is empty
arr.forEach(c => console.log(c));

console.log('*************** Unshift *************************');

arr.unshift('green'); // add at the start and return new length
arr.forEach(c => console.log(c));

console.log('******************* Shift *********************');
arr.shift(); // remove from start and return removed element
arr.forEach(c => console.log(c));

console.log('***************** Concat ***********************');
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
console.log(arr1.concat(arr2)); // merge 2 array and create a new array
console.log(arr1.concat(arr2,arr3)); // merge 2 array and create a new array

console.log('****************** Includes & Index Of **********************');
let arr4 = [1,2,3];
console.log(arr4.includes(1)); // return true if present
console.log(arr4.includes(4)); // return false if not present

console.log(arr4.indexOf(1)); // return index of element
console.log(arr4.indexOf(2));



console.log('***************** Reverse ***********************');
let arr5 = [1,2,3];
console.log(arr5.reverse()); // changes original array

arr5 = [1,2,3];
console.log(arr5.join()); // joins array default is comma "1,2,3"
console.log(arr5.join('.')); // joins array "1.2.3"

console.log('***************** Slice ***********************');
let arr6 = [1,2,3,4,5,6];
console.log(arr6.slice(0,3)); // slice will include start and exclude end and return new array
arr6 = [1,2,3,4,5,6];
console.log(arr6.slice(0,1));
console.log(arr6.slice(-3)); // gives 3 element from end

console.log('***************** Splice remove/replace or add ***********************');
let arr7 = [1,2,3,4,5,6];
console.log(arr7.splice(1,0,10)); // return deleted elements
console.log(arr7) // at index 1 don't delete anything and add 10

arr7 = [1,2,3,4,5,6];
console.log(arr7.splice(1,1,10)); // return deleted elements
console.log(arr7) // at index 1 don't delete anything and add 10

arr7 = [1,2,3,4,5,6];
console.log(arr7.splice(1,0,10,20)); // return deleted elements
console.log(arr7) // at index 1 don't delete anything and add 10

console.log('***************** Sort ***********************');
let arr8 = ['z','m','d','b','a'];
console.log(arr8.sort());

arr8 = [5,10000,4,3,2,1]; // it converts num into char code and then sort
console.log(arr8.sort());

console.log('***************** Sort ***********************');
let arr9 = [1,2,3,4];
let arr10 = arr9;
arr9.push(5);
console.log(arr10); // array are reference type

let fruit = 'orange';
let newFruit = fruit;
fruit = 'grapes';
console.log(newFruit); // primitive are value type

console.log('***************** Const with Array ***********************');
const arr11 = [1,2,3,4];
arr11.push(5); // Here const refer to array location and not the array
console.log(arr11); // that's why we can change the array, but we can't change array address is const
// arr11 = [1,2,3,4]; // not allowed with const

console.log('***************** Nested Array ***********************');
let arr12 = [ [1,2], [3,4] ];
console.log(arr12);
console.log(arr12[0]); // gives first nested array
console.log(arr12[0][0]); // gives first nested array, first element
console.log(arr12[0][1]); // gives first nested array, second element