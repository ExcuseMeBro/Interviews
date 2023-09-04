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

if (true) {
  var d = 1;
  let g = 1;
}
console.log(d);
console.log(g);

function apple() {
  var a = 1;
  let b = 1;
}
console.log(a);
console.log(b);

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

// call() bind() apply()

// JS data types
// Primitive types: null undefined boolean string number symbol bigInt
// Object (Non-primitive) types: object

// Symbol

// Type conversion

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

// Primitive vs Object types

// Object yaratilishi qanday bo`ladi

// Object reference

// Heap & Callstack

// Some vs every

// reduce, shift, unshift, push, pop, slice, splice

/* 
Arraylarga boshidan element qo`shishdan ko`ra oxiridan element qo`shish yaxshiroq chunki, 
 oldindan qo`shilgan element qolgan elementlarni +1 ga o`rnini surib yuboradi 
*/

// Garbage collection

// Array.from()

// this keyword

// Constructor function

// JS Class

// Higher order function

// Closure

// Pure vs impure functions

// Currying
const curryingFn = (a) => (b) => (c) => a + b + c;

console.log(curryingFn(1)(2)(3));

// Temporal dead zone



