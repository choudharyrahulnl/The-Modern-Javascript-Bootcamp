console.log("****************** CREATE OBJECT ********************");
// OBJECT: GROUP OF PROPERTIES
// ARE GROUP OF KEY-VALUE PAIR
// OBJECTS STORES KEY AS STRING
// EX
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    5: 'five'
}
console.log(fitBitData);

console.log("****************** ACCESS PROPERTIES ********************");

// ACCESS PROPERTY FROM OBJECT
console.log('Total Steps: ',fitBitData["totalSteps"]);
// OR
console.log('Total Steps: ',fitBitData.totalSteps);

// WE CAN'T ACCESS NUMERIC KEY USING DOT ACCESS
console.log('Last Property: ',fitBitData["5"]);
// IF PROPERTY DOES NOT EXIST THEN WE GET UNDEFINED
console.log('Last Property: ',fitBitData["100"]);


console.log("****************** SET PROPERTIES ********************");
const userReviews = {};
userReviews['upVotes'] = 10
userReviews['downVotes'] = 8;
console.log(userReviews);

console.log("****************** NESTED ARRAY PROPERTIES ********************");
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music','Art'],
    exams: {
        midterm: 92,
        final: 80
    }
}
console.log(student);
console.log(student.strengths);
console.log(student.strengths[0]);

console.log("****************** OBJECT ARE REFERENCE TYPE ********************");
const user = {
    name: 'rahul'
}
const user2 = user;
user2.name = 'changed';
console.log(user);
console.log(user2);

console.log("****************** OBJECT EQUALITY ********************");
let num1 = [1,2,3];
let num2 = [1,2,3];
console.log(num1 === num2);

const users = {
    username: 'rahul',
    email: 'the@gmail.com',
    notification: []
}

// DON'T WORK: AS RIGHT SIDE [] POINT TO DIFFERENT ADDRESS FROM users.notification
if (users.notification === []) {
    console.log('Do we have notification');
}
// THIS WORKS
if (!users.notification.length) {
    console.log('No new notification');
}

