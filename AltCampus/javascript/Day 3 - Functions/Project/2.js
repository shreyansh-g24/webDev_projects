// Practice different way of writing function
// i.e.
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces

//////////////////////// EXAMPLES
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString1(n) {
  return String(n);
}

// Function Expression
let convertToString2 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString3 = n => String(n);
let convertToString4 = n => {
  return String(n);
};

/////////////////////////////// EXERCISES
///////////////////////////////
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
console.log("=======Increment======");
 // Function Declaration
function increment1(n) {
    return ++n;
}
console.log(increment1(1));

 // Function expression
let increment2 = function(n){
    return ++n;
};
console.log(increment2(2));

 // Arrow function without braces
 let increment3 = n => ++n;
 console.log(increment3(3));

 // Arrow function with braces
let increment4 = n => {
    return ++n;
};
console.log(increment4(4));

//////////////////////////////////
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
console.log("======Decrementing=======");

// function declaration
function decrement1(n){
    return --n;
}
console.log(decrement1(1));

// function expression
let decrement2 = function(n){
    return --n;
};
console.log(decrement2(2));

// arrow function without braces
let decrement3 = n => --n;
console.log(decrement3(3));

// arrow function with braces
let decrement4 = n => {
    return --n;
};
console.log(decrement4(4));

//////////////////////////////////
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
console.log("==========Add two Number==========");

// function declaration
function addTwo1(x, y){
    return x + y;
}
console.log(addTwo1(0, 1));

// function expression
let addTwo2 = function(x, y){
    return x + y;
};
console.log(addTwo2(1, 2));

// arrow function without braces
let addTwo3 = (x, y) => x + y;
console.log(addTwo3(2, 3));

// arrow function with braces
let addTwo4 = (x, y) => {
    return x + y;
};
console.log(addTwo4(3, 4));

//////////////////////////////////
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 console.log("==========subtract second number from first============");

 // function declaration
 function subtract1(x, y){
    return x - y;
 }
 console.log(subtract1(1, 0));

 // function expression
 let subtract2 = function(x, y){
    return x - y;
 };
 console.log(subtract2(2, 0));

// arrow function without braces
let subtract3 = (x, y) => x - y;
console.log(subtract3(3, 0));

// arrow function with braces
let subtract4 = (x, y) => {
    return x - y;
};
console.log(subtract4(4, 0));

//////////////////////////////////
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
console.log("======mulitplies two numbers=========");

// function declaration
function multiply1(x, y){
    return x * y;
}
console.log(multiply1(1, 2));

// function expression
let multiply2 = function(x, y){
    return x * y;
};
console.log(multiply2(2, 3));

// arrow function without braces
let multiply3 = (x, y) => x * y;
console.log(multiply3(3, 4));

// arrow function with braces
let multiply4 = (x, y) => {
    return x * y;
};
console.log(multiply4(4, 5));

//////////////////////////////////
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 console.log("=========== divides the first number by the second==========");

 // function declaration
 function divide1(x, y){
    return x / y;
 }
 console.log(divide1(2, 1));

 // function expression
 let divide2 = function(x, y){
    return x / y;
 };
 console.log(divide2(3, 2));

 // arrow function without braces
 let divide3 = (x, y) => x / y;
 console.log(divide3(4, 2));

 // arrow function with braces
 let divide4 = (x, y) => {
    return x / y;
 };
 console.log(divide4(5, 2));

//////////////////////////////////
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 console.log("========multiplies a number by itself=============");

 // function declaration
 function square1(x){
    return x**2;
 }
 console.log(square1(1));

 // function expression
 let square2 = function(x){
    return x**2;
 };
 console.log(square2(2));

 // arrow function without braces
 let square3 = x => x**2;
 console.log(square3(3));

 // arrow function with braces
 let square4 = x => {
    return x**2;
 };
 console.log(square4(4));

/////////////////////////////////
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 console.log("==mathematical operation on two numbers and outputs string==");

 // function decalaration
 function math1(x, y){
    console.log("%d + %d = %d", x, y, x+y);
    return x+y;
 }
 console.log(math1(1, 2));

 // function expression
 let math2 = function(x, y){
    console.log("%d + %d = %d", x, y, x+y);
    return x+y;
 };
 console.log(math2(2, 3));

// arrow function without braces
// cannot return the value here as well since only one statement is allowed
let math3 = (x, y) => console.log("%d + %d = %d", x, y, x+y);
console.log(math3(3, 4));

// arrow functon with braces
let math4 = (x, y) => {
    console.log("%d + %d = %d", x, y, x+y);
    return x + y;
};
console.log(math4(4, 5));

////////////////////////////////
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
 console.log("=====returns true if a is larger than b ==========");

 // function declaration
 function boolean1(a, b){
    return (a > b);
 }
 console.log(boolean1(1, 2));

// function expression
let boolean2 = function(a, b){
  return (a > b);
};
console.log(boolean2(24, 4));

// arrow function without braces
let boolean3 = (a, b) => (a > b);
console.log(boolean3(6, 3));

// arrow function with braces
let boolean4 = (a, b) => {
    return (a > b);
};
console.log(boolean4(34, 145));

//////////////////////////////////
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 console.log("======true if a is less than b=======");

 // function declaration
 function lessThan1(a, b){
    return a < b;
 }
 console.log(lessThan1(12, 43));

 // function expression
 let lessThan2 = function(a, b){
    return a < b;
 };
 console.log(lessThan2(144, 3));

 // arrow function without braces
 let lessThan3 = (a, b) => a < b;
 console.log(lessThan3(233, 4));

 // arrow function with braces
 let lessThan4 = (a, b) => {
    return a < b;
 };
 console.log(lessThan4(2, 54));

/////////////////////////////////
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
 console.log("====true is a and b are equal=====");

 // function declaration
 function equal1(a, b){
    return a === b;
 }
 console.log(equal1(12, 12));

 // function expression
 let equal2 = function(a, b){
    return a === b;
 };
 console.log(equal2(1, 34));

 // arrow function without braces
 let equal3 = (a, b) => a === b;
 console.log(equal3(23, 34));

 // arrow function with braces
 let equal4 = (a, b) => {
    return a === b;
 };
 console.log(equal4(12, 12));

////////////////////////////////
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 console.log("=====smallest of two numbers======");

 // function declaration
 function smallest1(x, y){
    return (x < y ? x : y);
 }
 console.log(smallest1(12, 24));

 // function expression
 let smallest2 = function(x, y){
    return (x < y ? x : y);
 };
console.log(smallest2(23, 12));

// arrow function without braces
let smallest3 = (x, y) => (x < y ? x : y);
console.log(smallest3(122, 4356));

// arrow function with braces
let smallest4 = (x, y) => {
    return (x < y ? x : y);
};
console.log(smallest4(122, 3));

///////////////////////////////
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
console.log("====largest of two numbers=====");

// function declarations
function largest1(x, y){
    return (x > y ? x : y);
}
console.log(largest1(12, 53));

// function expression
let largest2 = function(x, y){
    return (x > y ? x : y);
};
console.log(largest2(23, 554));

// arrow function without braces
let largest3 = (x, y) => (x > y ? x : y);
console.log(largest3(12, 6));

// arrow function with braces
let largest4 = (x, y) => {
    return (x > y ? x : y);
};
console.log(largest4(144, 65));

////////////////////////////////
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 console.log("===== true if n is even======");

 // function declaration
 function isEven1(n){
    return (n % 2 === 0 ? true : false);
 }
 console.log(isEven1(2));

 // function expression
 let isEven2 = function(n){
    return (n % 2 === 0 ? true : false);
};
console.log(isEven2(423));

// arrow function without braces
let isEven3 = n => (n % 2 === 0 ? true : false);
console.log(isEven3(244));

// arrow function with braces
let isEven4 = n => {
    return (n % 2 === 0 ? true : false);
};
console.log(isEven4(5));

///////////////////////////////
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
 console.log("=======returns a number grade=========");

 // function declaration
 function letterGrade1(score){
    return (score >= 90 && score <= 100 ? "A" : score < 90 ? "B" : score < 80 ? "C" : score < 70 ? "D" : score < 60 ? "F" : "invalid score");
 }
 console.log(letterGrade1(101));

 // function expression
 let letterGrade2 = function(score){
    return (score >= 90 && score <= 100 ? "A" : score < 90 ? "B" : score < 80 ? "C" : score < 70 ? "D" : score < 60 ? "F" : "invalid score");
};
console.log(letterGrade2(95));

// arrow function without braces
let letterGrade3 = score => (score >= 90 && score <= 100 ? "A" : score < 90 ? "B" : score < 80 ? "C" : score < 70 ? "D" : score < 60 ? "F" : "invalid score");
console.log(letterGrade3(54));

// arrow function with braces
let letterGrade4 = score => {
    return (score >= 90 && score <= 100 ? "A" : score < 90 ? "B" : score < 80 ? "C" : score < 70 ? "D" : score < 60 ? "F" : "invalid score");
};
console.log(letterGrade4(67));

//////////////////////////////
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 console.log("====check if restaurant object has reviews property========");

 // TODO

 // function declaration

 // function expression

 // arrow function without braces

 // arrow function with braces

///////////////////////////////
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 console.log("===Join two strings with a space=====");

 // function declaration
 function joinStrings1(word1, word2){
    return (word1 + " " + word2);
 }
 console.log(joinStrings1("one", "two"));

 // function expression
 let joinStrings2 = function(word1, word2){
    return (word1 + " " + word2);
};
console.log(joinStrings1("one", "two"));

// arrow function without braces
let joinStrings3 = (word1, word2) => (word1 + " " + word2);
console.log(joinStrings1("one", "two"));

// arrow function with braces
let joinStrings4 = (word1, word2) => {
    return (word1 + " " + word2);
};
console.log(joinStrings1("one", "two"));

///////////////////////////////
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
 console.log("====returns circle object with properties object and area=====");

// TODO

// function declaration

// function expression

// arrow function without braces

// arrow function with braces

