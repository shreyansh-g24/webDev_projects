// Log message in console saying "I'm Learning Javascript"
console.log("I'm learing JavaScript");

// var name = "Mark";  "Mark" is a string.  What is name?
// ANS: name is a variable containing string
console.log("type of mark:", typeof(name));

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
var name = "John";
var admin = name;
alert(`Admin: ${admin}`);

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm
alert("Hello World");

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"
function greet(){
    var name0 = prompt("Enter your name:", "");
    alert(`Welcome ${name0}`);
}
greet();

// Modify the previous program such that only the users Alice and Bob are greeted with their names.
function specificGreeting(){
    var name0 = prompt("Enter your name:", "");

    if(name0.toLowerCase() == "bob" || name0.toLowerCase() == "alice") alert(`Hello ${name0}`);
    else alert("Hello Stranger");
}
specificGreeting();

// Find the error if any (var product cost = 3.45;)
// ANS: No spaces allowed in variable names.

// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"
var user = prompt("Enter your name: ", "");
function greet2(user) {
    console.log("Hello,", user, "How are you doing?");
}
greet2(user);

// Right or Wrong
//   "Hello World"
//   'Hello World"
//   "Hello World'
//   'Hello World'
// ANS: right all of them

// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
var inputString = prompt("Enter a string: ", "");
function stringLen(inputString) {
    var index = 0;
    var len = 0;
    while(inputString[index] != undefined){
        len++;
        index++;
    }
    console.log("Length of the string using custom function:", len);
}

stringLen(inputString);
console.log("Length of string using predefined function:", inputString.length);

// Age of the owner
var age = 26;

// Calculate the age of the dog if owner's age is 7 times of dog
// Use console.log() function to log the age of the dog
console.log("Age of the dog:", age*7);

// Marks and max marks of the student
var studentScore = 41;
var maxScore = 100;
// Calculate the percentage of marks the student got
// log the percentage in console using console.log()
var percent = studentScore*100/maxScore;
console.log("Student's percentage: %d%", percent);

var city = "Dharamshala";
var country = "India";
// Make a function which can alert the message "Dharamshala, India"
function alertFunction(city, country){
    alert(`${city}, ${country}`);
}
alertFunction(city, country);
