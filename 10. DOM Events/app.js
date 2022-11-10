const colors = ['red','green','blue'];

const container = document.querySelector('#boxes');

const changeColor = function() {
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}

for (const color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);

    box.addEventListener('click', changeColor);
}

// USE KEYPRESS, INSTEAD OF KEYUP & KEYDOWN AS THESE EMIT TOO MUCH EVENT
// EVEN FOR TAB, COMMAND, SHIFT THESE WILL EMIT EVENT
// ALSO IF WE NEED A CAPS LETTER THEN IT EMIT 2 EVENT ONE FOR SHIFT KEY & ONE FOR KEY PRESSED
// WHEREAS KEYPRESS WILL ONLY GIVE CAPS LETTER KEY AND IT DOESN'T FIRE EVENT FOR CAPS,TABS,SHIFT...

// WHENEVER NEW ITEM ENTERED, ADD IT TO SHOPPING LIST
const shoppingInput = document.querySelector('#item');
const ul = document.querySelector('#shoppingList');
shoppingInput.addEventListener('keypress', function(e) {


    if(e.key === 'Enter') {

        console.log(this.value)
        if (!this.value) return

        const value = this.value;

        const newLi = document.createElement('li');
        newLi.innerText = value;

        ul.appendChild(newLi);

        shoppingInput.value='';
    }
});

// FORM EVENTS
const signUp = document.querySelector('#signUp');
const ccInput = document.querySelector('#cc');
const termsInput = document.querySelector('#terms');
const veggieInput = document.querySelector('#veggie');
signUp.addEventListener('submit', function(e) {
    e.preventDefault();
    const creditCard = ccInput.value;
    const termsCheck = termsInput.checked;
    const veggieList = veggieInput.value;
    console.log(creditCard, termsCheck, veggieList)
});

// READ FORM EVENTS ON THE FLY INSTEAD OF WAITING FOR THE FORM SUBMIT
const formData = {};

// THIS IS THE NAIVE WAY OF DOING THIS
// ccInput.addEventListener('input',(e) => {
//     formData['cc'] = e.target.value;
//     console.log(formData)
// });
// termsInput.addEventListener('input',(e) => {
//     formData['terms'] = e.target.checked;
//     console.log(formData)
// });
// veggieInput.addEventListener('input',(e) => {
//     formData['veggie'] = e.target.value;
//     console.log(formData)
// });

// BETTER WAY: WE NEED NAME FIELD ON ALL INPUT
// for(let input of [ccInput,termsInput,veggieInput]) {
//     input.addEventListener('input', (e) => {
//         formData[e.target.name] = e.target.value;
//         console.log(formData);
//     })
// };

// BUT PROBLEM WITH ABOVE IS CHECKED IS COMING AS ON EVERYTIME
for(let input of [ccInput,termsInput,veggieInput]) {
    input.addEventListener('input', ({target}) => {
        const {name,value,checked,type} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
};

// CHANGE EVENT : ONCE FOCUS IS OUT OF INPUT BOX THEN ONLY IT'S VALUE WILL BE CHANGED AND REFLECTED
// for(let input of [ccInput,termsInput,veggieInput]) {
//     input.addEventListener('change', ({target}) => {
//         const {name,value,checked,type} = target;
//         formData[name] = type === 'checkbox' ? checked : value;
//         console.log(formData);
//     })
// };