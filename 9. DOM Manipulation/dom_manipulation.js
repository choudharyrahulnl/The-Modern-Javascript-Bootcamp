// ################################################################################################
//                                          DOM
// ###############################################################################################

// HTML + CSS -> BROWSER -> DOM

// A web page is a document that can be either displayed in the browser window or as the HTML source
// DOM represents an HTML document in memory
// Document Object Model (DOM) representation allows it to be manipulated
// The Document Object Model (DOM) is a programming interface for web documents
// It represents the page so that programs can change the document structure, style, and content

// DOM IS A JAVASCRIPT REPRESENTATION OF A WEB-PAGE
// DOM IS BUNCH OF OBJECTS THAT WE CAN INTERACT WITH VIA JAVASCRIPT

// DOCUMENT, BODY, H1, P ... -> BROWSER ->  JAVASCRIPT OBJECTS (DOCUMENT, BODY, H1, P ...)
// WHICH HAS BUNCH OF PROPERTIES LIKE WHAT TEXT HAS P OR H1, WE CAN CHANGE TEXT USING PROPERTIES...

// ROOT OF THE TREE IS DOCUMENT OBJECT


// ################################################################################################
//                                          SELECTING
// ################################################################################################
console.log('########################################################')
console.log('##################### SELECTING #####################')
console.log('########################################################')
// document.getElementById();
// document.getElementsByTagName();
// document.getElementsByClassName();

// IF id IS NOT PRESENT WE GET NULL
const p1 = document.getElementById("main");
console.log(p1)
console.log(p1.textContent);

// IF tag IS NOT PRESENT WE GET EMPTY HTML COLLECTION BACK
// HTML COLLECTION ITS LIKE ARRAY BUT NOT AN ARRAY
// HTML COLLECTION HAS PROPERTIES LIKE ARRAY HTML-COLLECTION[index], WE CAN ITERATE OVER IT
// WE CAN CONVERT THIS INTO ARRAY, IF WE WANT
const p2 = document.getElementsByTagName("p")[1];
console.log(p2);
console.log(p2.textContent);

// IF ClassName IS NOT PRESENT WE GET EMPTY HTML COLLECTION BACK
const byClassName = document.getElementsByClassName('special');
console.log(byClassName);
for (let cn of byClassName) {
    console.log(cn.textContent);
}

// QUERY SELECTOR
// querySelector GIVES THE FIRST MATCHING ELEMENT
// document.querySelector('element')
// document.querySelector('#id')
// document.querySelector('.className')
// document.querySelectorAll('') - RETURNS A COLLECTIONS
const h1 = document.querySelector('h1');
console.log(h1);
console.log('Using querySelector for Element',h1.textContent);

const img = document.querySelector('#bear-photo');
console.log(img);
console.log('Using querySelector for ID',img.src);

const li1 = document.querySelector('.special');
console.log(li1);
console.log('Using querySelector for ClassName',li1.textContent);

const li2 = document.querySelector('ul li.special');
console.log(li2);
console.log('Using querySelector for Nested ClassName',li2.textContent);

// QUERY SELECTOR ALL
// IT RETURN NODE-LIST COLLECTION
console.log('Using querySelectorAll for Class Name')
const lis = document.querySelectorAll('.special');
for (const li of lis) {
    console.log(li.textContent);
}

// ################################################################################################
//                                          MANIPULATING
// ################################################################################################
console.log('########################################################')
console.log('##################### MANIPULATING #####################')
console.log('########################################################')
// InnerText IS AWARE OF WHAT IS SHOWN ON THE PAGE LIKE FORMATTING,
// DON'T SHOW CONSOLE LOG AS TEXT, HIDE DISPLAY NONE ELEMENT
// USE THIS INSTEAD OF TextContent

// InnerText GIVES TEXT BETWEEN THE TAGS <h1>InnerText</h1>
// FOR ul InnerText WILL GIVE TEXT FOR ALL li
// FOR body InnerText WILL GIVE TEXT FOR WHOLE PAGE
const oldH1 = document.querySelector('h1');
const newH1 = oldH1.innerText + '!';
oldH1.innerText = newH1;

// TextContent IS NOT AWARE OF WHAT IS SHOWN ON THE PAGE LIKE FORMATTING,
// DON'T SHOW CONSOLE LOG AS TEXT, HIDE DISPLAY NONE ELEMENT
// IT GIVE TextContent FROM ACTUAL HTML FILE
// IT FASTER
const oldH2 = document.querySelector('h1');
const newH2 = oldH2.innerText + '!';
oldH2.textContent = newH2;

// WE CAN USE EITHER 1 InnerText OR TextContent

// InnerHTML GIVES NEXTED HTML WITH TEXT
// InnerText, TextContent & InnerHTML ALL 3 RETURN STRING BACK
const form = document.querySelector('form');
console.log(form.innerHTML);

// THIS WILL REMOVE FORM AND ADD TEXT abcd
//form.innerHTML = 'abcd'

const ulInnerHTML = document.querySelector('ul');
console.log(ulInnerHTML.innerHTML);

// IF WE USE InnerText OR TextContent THE IT WILL SHOW BOLD TAG AS IT IS <b>by Rahul</b> WHICH WE DON't WANT
// WITH InnerHTML WHEN WE UPDATE SOMETHING WE NEED TO PASS THE HTML AS STRING
// WHICH BROWSER UNDERSTAND AND FORMAT ACCORDING TO THAT
const oldH3 = document.querySelector('h1');
const newH3 = oldH3.innerHTML + '! <b> by Rahul</b>';
oldH3.innerHTML = newH3;


// ################################################################################################
//                                          PROPERTIES
// ################################################################################################
console.log('########################################################')
console.log('##################### PROPERTIES #####################')
console.log('########################################################')
// VALUE
const inputs = document.querySelectorAll('input');
// Username: inputs[0].value OR inputs[0].placeholder
// Password: inputs[1].value
// Email: inputs[1].value
// CheckBox: inputs[2].checked
// Range: inputs[3].value

// WE HAVE ACCESS TO ELEMENT ATTRIBUTES
const imgTag = document.querySelector('#bear-photo');
console.log(imgTag.src);
// imgTag.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';

// THERE ARE SOME ATTRIBUTES WHICH WE CAN'T ACCESS DIRECTLY LIKE imgTag.src
// FOR THESE ATTRIBUTES WE USE
// getAttributes() & setAttributes()
console.log('##################### getAttributes() & setAttributes() #####################')
const range = inputs[4];
console.log(range);
console.log(range.min);
console.log(range.max);
console.log(range.type);

console.log(range.getAttribute('min'));
console.log(range.getAttribute('max'));
console.log(range.getAttribute('type'));

range.min = '150';
console.log(range.getAttribute('min'));

range.setAttribute('max', '550');
console.log(range.getAttribute('max'));

range.setAttribute('type', 'radio');
console.log(range.getAttribute('type'));

range.setAttribute('type', 'checkbox');
console.log(range.getAttribute('type'));

// FIND PARENT/CHILD/SIBLING OF AN ELEMENT
// parentElement, children, nextSibling(gives next node), nextElementSibling(gives next element), previousSibling

// SIBLING
console.log('##################### SIBLING #####################')
const firstLi = document.querySelector('li');
console.log(firstLi.nextSibling);
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.nextElementSibling);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);

const firstUl = document.querySelector('ul');
console.log(firstUl.children);
console.log(firstUl.children[2]);
console.log(firstUl.children[2].innerText);

// CHANGE MULTIPLE ELEMENT
console.log('##################### CHANGE MULTIPLE ELEMENT #####################')
const allLis = document.querySelectorAll('li');
// for (const allLi of allLis) {
//     //console.log(allLi.innerText);
//     //allLi.innerText = 'This is updated list!';
//     allLi.innerHTML = 'This is <b>updated</b> list!';
// }

// CHANGE STYLE USING JAVASCRIPT
console.log('##################### CHANGE STYLE USING JAVASCRIPT #####################')

// STYLE
// WE CAN'T USE style PROPERTY TO READ STYLE OF AN ELEMENT IF IT'S NOT A INLINE PROPERTY
// THAT MEAN IF STYLE ARE DEFINED IN A CSS FILE READING style PROPERTY WON'T HELP
// BUT SETTING A style WILL WORK ON ELEMENT FOR INLINE AND STYLE DEFINE IN CSS FILE
// IF WE USE style PROPERTY TO SET STYLE, IT WILL ADD A INLINE STYLE
const h1Style = document.querySelector('h1');
console.log(h1Style.style.color); // WE DON'T GET ANYTHING AS IT'S A STYLE COMING FROM A CSS FILE
// h1Style.style.color='orchid';
// h1Style.style.border='1px solid black';

// NOTE: INLINE STYLE WINS WITH STYLE DEFINED IN A CSS FILE, THAT'S WHY THESE STYLE WORKS

// GET COMPUTED STYLE: getComputedStyle(element)
// THIS CAN READ STYLE FROM BOTH INLINE & STYLE DEFINED IN A CSS FILE
const h1ComputedStyle = getComputedStyle(h1Style);
console.log(h1ComputedStyle.color);
console.log(h1ComputedStyle.border);

// TODOS
const firstTodo = document.querySelector('#todos .todo');

// USING STYLE WE CAN APPLY STYLE 1 AT A TIME
// firstTodo.style.color='gray';
// firstTodo.style.textDecoration='line-through';
// firstTodo.style.opacity='50%';

// USING SET ATTRIBUTE WE COMPLETELY OVERRIDE THE todo CLASS
// THIS IS NOT WHAT WE WANT OFTEN
//firstTodo.setAttribute('class','done');

// CLASS LIST - add,remove,toggle ...
// THIS ADDS THE NEW STYLE WITHOUT REMOVING THE OTHER CSS
// WE CAN USE OUR CSS FROM CSS FILE
firstTodo.classList.add('done');

console.log('##################### INSERT ELEMENT USING JAVASCRIPT #####################');

// CREATE ELEMENT
const newElementH2 = document.createElement('h2');
console.log(newElementH2);

// ADD PROPERTY TO THIS NEW H2 ELEMENT
newElementH2.innerText = 'This is H2 Tag created using JavaScript';
newElementH2.classList.add('special');

// APPEND THIS NEW ELEMENT
// IT WILL ALWAYS APPEND IN THE END OF THAT ELEMENT
const oldH1Element = document.querySelector('h1');
oldH1Element.appendChild(newElementH2);

// ADD A NEW IMAGE
const newElementImg = document.createElement('img');
newElementImg.classList.add('imgCss');
newElementImg.src='https://images.unsplash.com/photo-1667858534759-49a5f7c1ec0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
console.log(newElementImg);
const h2Element = document.querySelector('h2');
h2Element.appendChild(newElementImg);

// ADD NEW LINK
const newElementLink = document.createElement('a');
newElementLink.innerText='Youtube';
newElementLink.href='https://www.youtube.com/';
const oldPElement = document.querySelector('p');
oldPElement.appendChild(newElementLink);

// WHAT IF WE WANT TO APPEND A li IN BEGINNING OF AN ul
const newElementLi = document.createElement('li');
newElementLi.innerText='Li created using JS';
const oldULElement = document.querySelector('ul');
oldULElement.insertBefore(newElementLi,oldULElement.children[0]);

// NEW APPEND & PREPEND
// append() and prepend()
const newElementLi2 = document.createElement('li');
newElementLi2.innerText='Prepending Li at first';
const newElementLi3 = document.createElement('li');
newElementLi3.innerText='Appending Li at end';
const oldULElement2 = document.querySelector('ul');
// prepend MAKES IT AS FIRST CHILD
// append MAKES IT AS LAST CHILD
oldULElement2.prepend(newElementLi2);
oldULElement2.append(newElementLi3);

// append() allows you to add multiple items while appendChild() allows only a single item

// REMOVE ELEMENTS
// remove() & removeChild()
// remove() allows you to remove multiple items while removeChild() allows only a single item
const parentULForRemoveChild = document.querySelectorAll('ul')[1];
let elementWithClassSpecial = parentULForRemoveChild.querySelector('.special');
parentULForRemoveChild.removeChild(elementWithClassSpecial);

// SELECT WHAT YOU WANT TO REMOVE AND CALL remove() ON THAT ELEMENT
const removeH2Element = document.querySelector('h2');
removeH2Element.remove();

const elementNodeListOf = document.querySelectorAll('.special');
for (const elementNodeListOfElement of elementNodeListOf) {
    elementNodeListOfElement.remove();
}