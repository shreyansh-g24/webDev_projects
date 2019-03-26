//For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end of your code:

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

//  custom penguin
let myPenguin = {
    name: "WhiteBlack",
    origin: "WhiteBlack the Penguin sees the world",
    author: "Margret Rey",
    notes: "Children's book about a travelling penguin"
};


// 1.Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)
let penguins = [gunter, ramon, fred];

// 2. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)
console.log("The first penguin\n", penguins[0]);

// 3.Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
let secondPenguin = penguins[1];
console.log("Second penguin:\n", secondPenguin);

// 4 Print to the console the name of the last penguin in the list.
console.log("Last penguin:\n", penguins[penguins.length - 1]);

// 5. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!
// 6. Print the length of the penguins array to the console.
console.log("old length: ", penguins.length);
penguins.push(myPenguin);
console.log("New length: ", penguins.length);

// 7. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
console.log("Old abilities: ", penguins[0]);
penguins[0].canFly = true;
console.log("Updated ability: ", penguins[0]);

// 8.Call the sayHello method of the first penguin in your penguins array!
// calling using array index
penguins[0].sayHello();
// calling using the penguin name
gunter.sayHello();

// 9.Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
for(let i = 0, n = penguins.length; i < n; i++)
  console.log(penguins[i].name);

// 10.Write a for loop to call the sayHello method of every penguin in the array!
for(let i = 0, n = penguins.length; i < n; i++){
  if(penguins[i].sayHello !== undefined) penguins[i].sayHello();
}

// 11.Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
for(let i = 0, n = penguins.length; i < n; i++)
  penguins[i].numberOfFeet = 2;

//  console logging to check
for(let i = 0, n = penguins.length; i < n; i++)
  console.log("\n\n", penguins[0], "\n\n");

// 12.Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)
for(let i = 0, n = penguins.length; i < n; i++){
  if(penguins[i].canFly) console.log("%s can fly", penguins[i].name);
  else console.log("%s cannot fly", penguins[i].name);
}
