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