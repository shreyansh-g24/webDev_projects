////////////////////////
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
let dogAge = +prompt("Age of the dog in human years:", 0);
let conRate = +prompt("Number of dog years equivalent to 1 human year:", 0);
function calculateDogAge(dgAg, rate){
  let dogAgeInDogYears = dgAg * rate;
  alert(`Dog age in dog years: ${dogAgeInDogYears}`);
}
calculateDogAge(dogAge, conRate);

/////////////////////////
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.
const MAX_AGE = 80;
let currentAge = +prompt("Your current age:", 0), amtPerDay = +prompt("Consumption per day:", 0);
function calculateSupply(age, amt){
  let remainingAge = age > MAX_AGE ? 1 : MAX_AGE - age;
  let consumption = age * 355.25 * amt;
  consumption = Math.round(consumption);
  alert(`You're gonna need another ${consumption} for next ${remainingAge} years.`);
}
calculateSupply(currentAge, amtPerDay);

//////////////////////////
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(){
  let degCel = +prompt("Enter the temp in celsius", 0);
  let degFah = (degCel * 9/5) + 32;
  alert(`${degCel} degree Celsius is ${degFah} degree Fahrenheit.`);
}
function fahrenheitToCelsius(){
  let degFah = +prompt("Enter the temp in fahrenheit:", 0);
  let degCel = (degFah - 32) * 5/9;
  alert(`${degFah} degree Fahrenheit is ${degCel} degree Celsius.`);
}
celsiusToFahrenheit();
fahrenheitToCelsius();

//////////////////////////
//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
// Is there any difference in the behavior of these two variants?
// ANS: NO IT WONT WORK ANY DIFFERENTLY. THE ONLY DIFFERENCE BETWEEN THE BEHAVIOUR OF THE TWO IS THAT THE FORMER CHECKS THE ELSE STATEMENT IF THE IF STATEMENT IS FALSE AND IN THE LATTER IT ACTS LIKE A DEFAULT STATEMENT WHICH IS ONLY ACCESSED IF THE IF STATEMENT IS FALSE.

/////////////////////////
// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge2(){
  let age = +prompt("Enter your age:", 0);
  return (age > 18 ? "welcome" : "Do you have your parent's permission?");
}
alert(checkAge2());

function checkAge3(){
  let age = +prompt("Enter your age again:", 0);
  return (age > 18 || "Do you have your parent's permission?");
}
alert(checkAge3());

/////////////////////////
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.
let x = Math.round(+prompt("Enter an integer:", 0));
let n = Math.round(+prompt("Enter the power:", 0));

function pow(x, n){
  let sol = 1;
  for(let i = 0; i < n; i++) sol *= x;
  alert(`${x} raised to ${n} is ${sol}`);
}
pow(x, n);

//////////////////////////
// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
function vowel(){
  let inputString = prompt("Enter a string:", "");
  let tempString = inputString.toLowerCase();
  let sumString = "";
  let len = inputString.length;
  for(let i = 0; i < len; i++){
    if(tempString[i] === 'a' || tempString[i] === "e" || tempString[i] === "i" || tempString[i] === "o" || tempString[i] === "u"){
      sumString += inputString[i];
    }
  }
  alert(`${sumString}`);
}
vowel();

/////////////////////////
// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”
function palindrome(){
  let inputString = prompt("Palindrome check, enter a string:", "");
  let len = inputString.length;
  len = len % 2 === 0 ? (len / 2) : ((len - 1) / 2);
  for(let i = 0, n = inputString.length - 1; i < len; i++){
    if(inputString[i] !== inputString[n]){
      alert("Not a palindrome");
      return 0;
    }
    n--;
  }
  alert("Yes it is a paindrome");
  return 0;
}
palindrome();

/////////////////////////
// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10
let numberString = "";
for(let i = 1, n = 11; i < n; i++){
  if(i == (n - 1)/2 || i == n - 1) numberString += (i + "\n");
  else numberString += (i + ", ");
}
console.log(numberString);

///////////////////////////
// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
//  DONE IN PREVIOUS ASSIGNMENT

////////////////////////////
// Write a function that returns the largest element in a list.
let list = [
    "zebra",
    "Banana",
    "Apple",
    "Pineapple",
    "ape"
  ];
let listLen = list.length;

function largestInList(aList, aListLen){
  let largest = aList[0];
  for(let i = 0; i < aListLen; i++){
    if(aList[i] > largest) largest = aList[i];
  }
  console.log("Largest element in the list:", largest);
}
largestInList(list, listLen);

//////////////////////////////
// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
let number = +prompt("Enter a number to add upto:", 0);
function sumOfN(num){
  if(num === 0) return 0;
  else return num + sumOfN(num - 1);
}
console.log("Total till N: %d", sumOfN(number));

//////////////////////////////
// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
let n5And7 = +prompt("Enter a number to search for mulitples upto:", 0);
function mul5And7(num){
  if(num === 0) return 0;
  else if(num % 5 === 0 || num % 7 === 0) return num + mul5And7(num - 1);
  else return mul5And7(num - 1);
}
console.log("Sum of multiples of 5 and 7 upto %d is %d", n5And7, mul5And7(n5And7));

/////////////////////////////
// Write a program that takes a number under (25) and prints the multiplication table for the number.
let multiNumber = +prompt("Enter a table to display the multiplication table for under 25: ", 0);
function multiTable(num){
  if(num >= 25){
    console.log("Enter a valid number");
    return 1;
  }
  for(let i = 1; i < 11; i++){
    console.log("%d * %d = %d", num, i, num * i);
  }
}

multiTable(multiNumber);
