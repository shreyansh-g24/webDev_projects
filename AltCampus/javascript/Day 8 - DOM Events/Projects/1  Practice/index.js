//Select the section with an id of container without using querySelector.
let section = document.getElementById("container");
console.log("\n", section);

//Select the section with an id of container using querySelector.
let section0 = document.querySelector("#container");
console.log("\n", section0);

//Select all of the list items with a class of "second".
let second = document.querySelectorAll(".second");
console.log("\n", second);

//Select a list item with a class of third, but only the list item inside of the ol tag.
let olThirdLi = document.querySelector("ol > .third");
console.log("\n", olThirdLi);

//Give the section with an id of container the text "Hello!".
section0.innerHTML += "<p>Hello!</p>";

//Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.className += " main";
console.log("\n", footer.className);

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");
console.log("\n", footer.className);

//Create a new li element.
let newLi = document.createElement("li");

//Give the li the text "four".
newLi.innerText = "four";

//Append the li to the ul element.
document.querySelector("ul").appendChild(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".
[...document.querySelectorAll("ol > li")].forEach((listItem) => listItem.style.backgroundColor = "green");

//Remove the div with a class of footer.
footer.parentNode.removeChild(footer);
