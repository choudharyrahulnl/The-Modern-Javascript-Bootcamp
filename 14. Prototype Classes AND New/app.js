// FACTORY FUNCTION
// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.hex = function () {
//         const {r,g,b} = this;
//         return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }
//     color.rgb = function () {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     return color;
// }
// const firstColor = makeColor(255,140,160);
// console.log(firstColor);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());


// IN FACTORY WAY OF CREATING, PROBLEM WAS, WE ARE CREATING A COPY EVERY TIME
// WHEN WE CREATE A NEW OBJECT THIS COPY HAS THE FUNCTIONS AS WELL
// AND 2 DIFFERENT OBJECT FUNCTIONS ARE ALSO DIFFERENT IN MEMORY

// CONSTRUCTOR
// function Color(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
//
// // ADD METHODS TO OBJECT: THESE METHODS WILL BE ON PROTOTYPE A
// // ND EVERY NEW COLOR OBJECT USE THE SAME METHOD
// Color.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
//
// Color.prototype.hex = function() {
//     const {r,g,b} = this;
//     return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }
//
// Color.prototype.rgba = function(a=1.0) {
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
//
// // CREATE OBJECT
// const myNewColor = new Color(255,0,0);
// console.log(myNewColor.rgb());
// console.log(myNewColor.hex());
// console.log(myNewColor.rgba(0.5));
// console.log(myNewColor);
// // document.body.style.backgroundColor = myNewColor.rgb();
// document.body.style.backgroundColor = myNewColor.rgba(0.3);
//
// const myNewColor2 = new Color(255,255,0);
// console.log(myNewColor.hex === myNewColor2.hex);


// CLASS: CLEAN WAY OF CREATING OBJECT
// class Color {
//
//     constructor(r,g,b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
//
//     hex() {
//         const {r,g,b} = this;
//         return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }
//
//     innerRGB() {
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//
//     rgba(a=1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
// }
// const myNewColor = new Color(255,0,0);
// console.log(myNewColor);
// console.log(myNewColor.hex());
// console.log(myNewColor.rgb());
// console.log(myNewColor.rgba(0.5));



// EXTENDS
class Pet {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {

    constructor(name,age,color='Black') {
        super(name,age);
        this.color = color;
    }
    meow() {
        return 'MEOWWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOFFF!!';
    }

    // OVERRIDE EAT METHOD
    eat() {
        return `${this.name} started eating the food!`
    }
}

const cat = new Cat('catty', 5);
console.log(cat);
console.log('Cat color is ', cat.color);
console.log(cat.meow());
console.log(cat.eat());

const dog = new Dog('doggy', 5);
console.log(dog);
console.log(dog.bark());
// FIRST IT LOOKS IN Dog CLASS, IF NOT FOUND THEN IN Pet CLASS
console.log(dog.eat());