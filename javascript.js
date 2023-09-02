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

function apple() {
  return "apple"; // local scope
}

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