"use strict";
//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
let myPenguin = {
    character: "WhiteBlack",
    origin: "WhiteBlack the Penguin sees the world",
    author: "Margret Rey",
    notes: "Children's book about a travelling penguin"
};

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
myPenguin.sayHello = (name) => console.log("Hello, I'm a penguin and my name is %s", name);

//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
myPenguin.canFly = false;

//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
myPenguin.chirp = () => console.log("CHIRP CHIRP! Is this what penguins sound like?");

//6. Next, call your penguin's sayHello() method and make sure that it works!
myPenguin.sayHello(myPenguin.character);

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.character = "Penguin McPenguinFace";
myPenguin.sayHello(myPenguin.character);

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = (ability) => {
    if(ability) console.log("I can fly");
    else if(!ability) console.log("I cannot fly");
}

//9. Call your penguin's fly() method and make sure it works!
myPenguin.fly(myPenguin.canFly);

//10. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canFly = true;

//11. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly(myPenguin.canFly);

//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
console.log("\n\nKEYS");
for(let i in myPenguin){
    console.log(i);
}

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
console.log("\n\nKEY\tVALUES");
for(let i in myPenguin){
    console.log("%s : %s", i, myPenguin[i]);
}

// Exercise 2
// 14.
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
let recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};
for(let prop in recipe){
    if(Array.isArray(recipe[prop])){
        console.log("Ingredients:");
        for(let i = 0, n = recipe[prop].length; i < n; i++)
            console.log("%s", recipe[prop][i]);
    }
    else
        console.log("%s", recipe[prop]);
}

// 15.
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
function addBook(title, author, alreadyRead){
    return {
        title,
        author,
        alreadyRead
    };
}

let library = [
    addBook("The stand", "Stephen king", true),
    addBook("some book", "an author", false),
    addBook("Another book", "unknown author", true)
];

function libraryStatus(arr){
    let count = 0;
    for(let i = 0, n = arr.length; i < n; i++){
        if(arr[i].alreadyRead === true) count++;
        else if(arr[i].alreadyRead === false){
            console.log("Not Yet Read: %s by %s", arr[i].title, arr[i].author);
        }
    }
    console.log("Number of books read: %d", count);
}
libraryStatus(library);
