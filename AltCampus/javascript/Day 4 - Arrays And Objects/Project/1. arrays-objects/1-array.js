"use strict";

//1. Create an array named colors that contains five different names of colors as strings.
let color = ["red", "orange", "blue", "violet", "purple"];
for(let i = 0, n = color.length; i < n; i++) console.log("%d: %s", i, color[i]);

//2. Access the first color in the array and print it to the console using console.log()
console.log("first color:", color[0]);

//3.Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log("third color", color[2]);

//4.Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
color[color.length - 1] = "ultraviolet";
console.log("New last color:", color[4]);

//5. Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = color[3];
console.log("fourth color: %s", fourthColor);

//6.Add another color to the end of the list.
color.push("yellow");
for(let i = 0, n = color.length; i < n; i++) console.log("New list=> %d: %s", i, color[i]);

//7.Add another color to the beginning of the list.
// manually appending to the beginning of the list
function addBeginning(array, item){
    let temp = [];
    for(let i = 0, n = array.length; i < n; i++) temp[i] = array[i];
    color[0] = item;
    for(let i = 0, n = temp.length; i < n; i++) array[i+1] = temp[i];
}
addBeginning(color, "black");
for(let i = 0, n = color.length; i < n; i++) console.log("%d: %s", i, color[i]);

// adding to the beginning of the list unshift()
color.unshift("white");
for(let i = 0, n = color.length; i < n; i++) console.log("%d: %s", i, color[i]);

//8. Print the length of the array to the console with console.log()
console.log("length of the array: %d", color.length);

//9.Remove the last color from the end of list, and then print the length of the array to the console one more time.
color.pop();
console.log("New length of the array: %d", color.length);

//10.Write a for loop to iterate through every color in the array and print each color's value to the console.
//11.Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for(let i = 0, n = color.length; i < n; i++) console.log("%d: %s", i, color[i]);

//12.Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
// using array length
let lastColor = color[color.length - 1];
console.log(lastColor);
