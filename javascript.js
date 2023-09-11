// Q1 - What is Function declarations?

function name(params) {
  return params;
}

// Q2 - What is function expression?

const square = function (num) {
  return num * num;
};

square();

// Q3 - What are First Class function?

function displaySquare(fn) {
  console.log("Square is " + fn(2));
}

displaySquare(square);

// Q4 - What is IIFE (Immediately Invoked Function Expression)?

(function cube(n) {
  console.log(n * n * n);
})(3);

// Q5 - IIFE - O/P (Output) based question?

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Q6 - Scope

let a = 1,
  b = 2,
  c = 3; // Global scope

{
  // block scope
}

function apple() {
  return "apple"; // local scope
}

/* if (true) {
  var d = 1;
  let g = 1;
}
console.log(d);
console.log(g); */

/* function apple() {
  var a = 1;
  let b = 1;
}
console.log(a);
console.log(b); */

// Q7 - function scope - O/P based question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
/* Output:
0
1
...
4 
*/

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
/* Output:
5
5
...
5 
*/

// Q8 - function hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// https://www.geeksforgeeks.org/javascript-hoisting/

// Q9 - function hoisting - O/P based question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();

// Create new Object from another one
let obj1 = {
  test: "hello",
};

let obj2 = { ...obj1 };

obj2.test = "hi";
console.log(obj1.test);

// slice vs splice array methods
// https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

let arr = ["educative", 4, [1, 3], { type: "animal" }];
let returnedArr = arr.splice(2, 1, { name: "educative" });
console.log(arr); // modified array
console.log(returnedArr); // deleted element

// Set vs Map vs WeakMap vs WeakSet
//https://medium.com/@jimmyfarillo/keyed-collections-in-javascript-set-vs-map-vs-weakset-vs-weakmap-f50d86052da2#:~:text=As%20you%20can%20tell%20by,are%20weakly%20held%20object%20references.

// call() bind() apply()
// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb

// JS data types
// Primitive types: null undefined boolean string number symbol bigInt
// Object (Non-primitive) types: object

// Symbol
// https://learn.javascript.ru/symbol
// https://www.programiz.com/javascript/symbol

/* The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. */

// Type conversion
// https://www.programiz.com/javascript/type-conversion
// https://javascript.info/type-conversions

// true -> 'true'

// null + 1
console.log(null + 1); // 1
// null + "1"
console.log(null + "1"); // null1
// null + true
console.log(null + true); // 1
// true + 0
console.log(true + 0); // 1

// null vs undefined
// https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
// https://flexiple.com/javascript/undefined-vs-null-javascript/

// Primitive vs Object types
// https://medium.com/@junshengpierre/javascript-primitive-values-object-references-361cfc1cbfb0#:~:text=Data%20types%20that%20are%20known,and%20non%2Dprimitives%20are%20mutable.

// Object yaratilishi qanday bo`ladi
// https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/

// Object reference
// https://javascript.info/object-copy

// Heap & Callstack
// https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204

// Some vs every
// https://www.educative.io/answers/what-are-the-every-and-some-methods-in-javascript
// https://linuxhint.com/difference-between-every-and-some-methods-javascript/
// https://www.freecodecamp.org/news/learn-the-every-and-some-array-methods-in-javascript/

// reduce, shift, unshift, push, pop, slice, splice
// https://www.programiz.com/javascript/library/array/reduce
// https://www.programiz.com/javascript/library/array/shift
// https://www.programiz.com/javascript/library/array/unshift
// https://www.programiz.com/javascript/library/array/push
// https://www.programiz.com/javascript/library/array/pop
// https://www.programiz.com/javascript/library/array/slice
// https://www.programiz.com/javascript/library/array/splice

/* 
Arraylarga boshidan element qo`shishdan ko`ra oxiridan element qo`shish yaxshiroq chunki, 
 oldindan qo`shilgan element qolgan elementlarni +1 ga o`rnini surib yuboradi 
*/

// Garbage collection
// https://www.tutorialspoint.com/garbage-collection-gc-in-javascript#:~:text=JavaScript%20automatically%20collects%20the%20information,in%20the%20future%20or%20not.
// https://javascript.info/garbage-collection

// Array.from()
// https://www.programiz.com/javascript/library/array/from

// JS ARRAY
// https://www.programiz.com/javascript/library/array

// this keyword
// https://www.freecodecamp.org/news/the-this-keyword-in-javascript/
// https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-this-keyword

// Constructor function
// https://rollbar.com/blog/javascript-constructors/#:~:text=A%20constructor%20is%20a%20special,for%20any%20existing%20object%20properties.e
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function

// JS Class
// https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/

// Higher order function
// https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=Higher%20order%20functions%20are%20functions,use%20them%20in%20practical%20applications.
// https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet

// Closure
// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
// https://www.javascripttutorial.net/javascript-closure/

// Pure vs impure functions
// https://www.freecodecamp.org/news/pure-function-vs-impure-function/
// https://www.programiz.com/javascript

// Currying
// https://javascript.info/currying-partials
// https://builtin.com/software-engineering-perspectives/currying-javascript
const curryingFn = (a) => (b) => (c) => a + b + c;

console.log(curryingFn(1)(2)(3));

// Temporal dead zone
// https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/

// How many ways create object in js?
const object = {};

const object1 = new Object();

const object2 = Object.create({}, object);

/* function CreateObjects(name, age) {
  this.name = name
  this.age = age
}

const newObject = new CreateObjects("John", 15) */

/* Deeply answer (without new)*/
// function CreateObjects(name, age) {
//   this.name = name;
//   this.age = age;
//   if (!new.target) {
//     return new CreateObjects(name, age);
//   }
// }

// Prototypes
/* https://www.programiz.com/javascript/prototype */

// Prototype chaining
let array = []
// __proto__ => Array Prototype => Object Prototype => null

// Declarative vs Imperative programming
/* What to do? */ // Imperative
/* How to do? */ //Declarative

// console.log("Hello Imperative")

// const h1 = document.querySelector("h1")
// h1.textContent = "Hello declarative"

/* OOP Conceptions */
// Abstraction, Encapsulation, Inheritances, Polymorphism

// Programming paradigms deep

/* OOP Setters vs getters */

/* WHAT is Functional Programming? */

// use strict
// https://learn.javascript.ru/strict-mode
// https://www.programiz.com/javascript/use-strict

// alert({}) //return [object Object]

// +, -, -- etc
// https://www.javascripttutorial.net/javascript-unary-operators/
// https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful

// == vs ===
// https://www.freecodecamp.org/news/loose-vs-strict-equality-in-javascript/#:~:text=The%20%3D%3D%20operator%20performs%20a,well%20as%20the%20same%20value).

// https://learn.javascript.ru/logical-operators
// https://stackoverflow.com/questions/66883181/difference-between-and-operators

// https://www.educative.io/answers/what-are-falsy-values-and-truthy-in-javascript

// https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4

// && - search false and return
// || - search true and return
// ?? - https://www.freecodecamp.org/news/what-is-the-nullish-coalescing-operator-in-javascript-and-how-is-it-useful/#:~:text=What%20are%20%22nullish%22%20values%3F,example%2C%200%20)%20are%20nullish.

// Destructing assignment
// https://javascript.info/destructuring-assignment

// Arrow function vs regular function
// https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/

// event bubbling / capturing

// strict mode

// Event loop

// deep cloning methods
/* 1-WAY (optimal way)*/
let student1 = {
  name: "Manish",
  company: "Gfg",
};

let student2 = { ...student1 };

/* 2-WAY */
let student3 = {
  name: "Manish",
  company: "Gfg",
};

let student4 = Object.assign({}, student3);

student3.name = "Rakesh";

console.log("student 1 name is", student3);
console.log("student 2 name is ", student4);

/* 3-WAY */
// var student1 = {
//   name: "Manish",
//   company: "Gfg",
// };

// var student2 = JSON.parse(JSON.stringify(student1));

// student1.name = "Rakesh";

// console.log("student 1 name is", student1.name);
// console.log("student 2 name is ", student2.name);

/* Frontend */
// HTML Collection vs Node List

// inline-block vs flex

/* REACT JS */
// Unidirectional data flow
// Bidirectional data flow

// What is DOM?

// Virtual DOM vs DOM?

// What is JSX?

// What is Transpiler?
/* Convert to code one programming language to another one */

// Send data child to parent component

// useContext

// Pros & cons

// Functional based vs Class based component

// lifecycle hooks

// props vs state

// Higher order components

// componentDidMount()

// useEffect()

// cleanUp()

// useMemo() vs useEffect()

// useMemo() vs useCallback()

// useRef()

// redux vs redux toolkit

// redux thunk

// react optimization

// react best practices

// props drilling

// useContext()

// how to decrease load time in react

// how to decrease bundle size in react

// lazy load component

// preloading

// import qilinmagan componentalar bundle fileda keladimi?

// tree shaking

// clear target answer for question
