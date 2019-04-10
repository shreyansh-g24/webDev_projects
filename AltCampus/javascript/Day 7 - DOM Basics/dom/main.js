// // For selection elements
// var headingById = document.getElementById("heading");
// // One Element
// // console.log(headingById);

// // selecting with class
// var child = document.querySelector("div.child-1");
// // Example .parent / #heading or any complex css selector
// // Similar to css selector
// // One Element
// // console.log(parent);

// // select by using tags
// var tag = document.getElementsByTagName("div");
// // Returns Collection
// // HTMLCollection

// // console.log(Array.from(tag)); // Converts HTMLCollection to array

// var tag = document.getElementsByClassName("parent");
// // HTMLCollection

// // console.log(tag); // Converts HTMLCollection to array

// var tag = document.querySelectorAll("div");
// // Collection of elements
// // NodeList

// // console.log(tag); // Converts HTMLCollection to array

// // DOM Manipulation

// // child.style.color = "red";
// // child.style.fontSize = "50px";
// // child.innerText = "I'm 💩 💩";

// // console.dir(child);

// // Add or remove

// var listInput = document.querySelector(".list-input");
// var addBtn = document.querySelector(".add-btn");
// var ul = document.querySelector(".lists");
// addBtn.onclick = function() {
//   var li = document.createElement("li");
//   li.textContent = listInput.value;
//   if (listInput.value !== "") {
//     ul.appendChild(li);
//   }
//   listInput.value = "";
// };

// console.log(listInput.value);

// Clock
var elm = document.getElementById("time");
var p = document.createElement("p");
// p.innerText = `Time is : ${hours}:${minutes}:${seconds}`;
elm.appendChild(p);

function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  p.innerText = `Time is : ${hours}:${minutes}:${seconds}`;
  setInterval(showTime, 1000);
}
showTime();
