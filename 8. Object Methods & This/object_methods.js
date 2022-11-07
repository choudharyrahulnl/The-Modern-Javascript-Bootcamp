console.log("****************** SHORTHAND OBJECT PROPERTIES ********************");

// SHORTHAND PROPERTIES: WHEN KEY & VALUE ARE OF SAME NAME
const firstName = 'Rahul';
const lastName = 'Choudhary';
const rahul = {firstName,lastName};
console.log(rahul);

console.log('\n');
console.log("****************** COMPUTED PROPERTIES ********************");

// COMPUTED PROPERTIES
const role = 'Admin';
const person = 'Rahul';

// WE CAN'T USE KEY AS role(Admin)
// KEY WILL BE role ONLY
// const aws = {
//     role: person
// };

// IF WE HAVE TO USE role(Admin) WE NEED TO USE THIS WAY
const aws = {};
aws[role] = person;
console.log(aws);

// USING COMPUTED PROPERTY
const awsComputed = {
    [role]: person,
};
console.log(awsComputed);

console.log('\n');
console.log("****************** ADD FUNCTION AD PROPERTIES TO OBJECT ********************");

const math = {
    add: function (x,y) {
        return x + y;
    },
    subtract: function (x,y) {
        return x - y;
    },
    multiply: function (x,y) {
        return x * y;
    }
}

console.log(math.add(5,3));
console.log(math.subtract(5,3));
console.log(math.multiply(5,3));

// SHORTHAND

const math2 = {
    add(x,y) {
        return x + y;
    },
    subtract(x,y) {
        return x - y;
    },
    multiply(x,y) {
        return x * y;
    }
}

console.log(math2.add(5,3));
console.log(math2.subtract(5,3));
console.log(math2.multiply(5,3));


console.log('\n');
console.log("****************** THIS KEYWORD ********************");

// THIS KEYWORD
// this REFERS TO THE WINDOW OBJECT (CURRENT EXECUTION SCOPE) WHICH IS A GLOBAL OBJECT

// VARIABLE CREATED USING var ARE ALSO ADDED AS A PROPERTY TO WINDOW OBJECT
// VARIABLE CREATED USING LET & CONST ARE NOT ADDED TO WINDOW OBJECT

// FUNCTION sayHi() ADDED AS A PROPERTY TO THE WINDOW OBJECT
function sayHi() {
    console.log(this);
}
// WILL RUN IN BROWSER
// window.sayHi();

// FUNCTION greet() ADDED AS A PROPERTY TO THE WINDOW OBJECT
const greet = function () {
    console.log(this);
}
// WILL RUN IN BROWSER
// window.greet();

// this IN FUNCTION fullName() REFER TO OBJECT personData
const personData = {
    first: 'Rahul',
    last: 'Choudhary',
    fullName() {
        return this;
    }
}
console.log(personData.fullName());

// this CAN BE USED TO REFER TO THE PROPERTIES OF THE OBJECT INSIDE OF FUNCTION
const personData2 = {
    first: 'Rahul',
    last: 'Choudhary',
    fullName() {
        return `${this.first} ${this.last}`;
    }
}
console.log(personData2.fullName());

// USING SHORTHAND
const personData3 = {
    first: 'Rahul',
    last: 'Choudhary',
    fullName() {
        const {first,last} = this;
        return `Hi ${first} ${last}!`;
    }
}
console.log(personData3.fullName());

// USING this FOR CALLING FUNCTION fullName() INSIDE FUNCTION printBio()
const personData4 = {
    first: 'Rahul',
    last: 'Choudhary',
    fullName() {
        const {first,last} = this;
        return `Hi ${first} ${last}!!`;
    },
    printBio() {
        return this.fullName();
    },
    // laugh: () => {
    //     return this.printBio()
    // }
}
console.log(personData4.printBio());

// IN ARROW FUNCTION this REFERS TO FROM WHERE IT'S CALLED
// IN THIS CASE this REFERS TO GLOBAL WINDOW OBJECT ON WHICH laugh() FUNCTION DOESN'T EXIST
//console.log(personData4.laugh());

// RULE 1: IF this IS CALLED IN THE FUNCTION sayHi() IT REFER TO THE GLOBAL WINDOW OBJECT
// EX sayHi() : this REFERS TO THE GLOBAL WINDOW OBJECT
// RULE 2: IF this IS CALLED LIKE something.function() THEN this REFERS TO WHAT IS ON THE LEFT i:e. something
// EX: person.fullName() : this REFERS TO THE person OBJECT

// THIS WON'T WORK AS personBio REFERS TO GLOBAL WINDOW OBJECT
// const personBio = personData4.printBio();

const annoyer = {
    phrases: ['hi','bye','ti'],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        setInterval(function () {
            // this REFERS TO GLOBAL WINDOW OBJECT
            // setInterval IS A GLOBAL FUNCTION WHICH CALLS THIS ANONYMOUS FUNCTION
            // THAT'S WHY this REFERS TO GLOBAL WINDOW OBJECT
            console.log(this.pickPhrase())
        },3000)
    },
    startAgain() {
        this.timerId = setInterval(() => {
            // IN ARROW FUNCTION this REFERS TO FROM WHERE ITS CALLED
            // HERE ARROW FUNCTION IS CALLED FROM FUNCTION WHICH IS INSIDE annoyer OBJECT
            // SO this REFERS TO annoyer OBJECT
            console.log(this.pickPhrase())
        },3000)
    },
    stop() {
        clearInterval(this.timerId);
    }
}

// GIVE ERROR pickPhrase NOT FOUND ON THIS WHICH REFERS TO GLOBAL WINDOW OBJECT
// annoyer.start();

// COMMENT OTHERWISE THIS WILL RUN EVERY 3 SEC
// annoyer.startAgain();


console.log('\n');
console.log("****************** EXERCISE ********************");

// DECK FACTORY METHOD
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {deck, suits, values} = this;
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    deck.push({value, suit});
                }
            }
        },
        drawCard() {
            const drawn = this.deck.pop();
            this.drawnCards.push(drawn)
            return drawn;
        },
        drawMultiple(nums) {
            const cards = []
            for (let i = 0; i < nums; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        addCard(value, suit) {
            return this.deck.push({value, suit});
        },
        shuffle() {
            const {deck} = this;
            // loop over array backward
            for (let i = deck.length - 1; i > 0; i--) {
                // pick random index before current element
                let j = Math.floor(Math.random() * (i + 1));
                // swap
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            return deck;
        }
    }
}

// CREATE DECK FROM DECK FACTORY
const myDeck = makeDeck();

myDeck.initializeDeck();
console.log(myDeck);

const card1 = myDeck.drawCard();
console.log(card1);
console.log(myDeck.deck.length);
console.log(myDeck.drawnCards);

console.log(myDeck.drawMultiple(3))
console.log(myDeck.deck.length);
console.log(myDeck.drawnCards);

// IT WORKS, COMMENT AS IT TAKE FULL CONSOLE SPACE
// console.log(myDeck.shuffle());

// CREATE NEW DECK FROM DECK FACTORY
const myNewDeck = makeDeck();
console.log(myNewDeck);
myNewDeck.initializeDeck();
console.log(myNewDeck);


