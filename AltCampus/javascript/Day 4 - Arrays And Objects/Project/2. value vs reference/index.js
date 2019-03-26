// Value of x, y, a, b
var x = 10;
var y = 'abc';
var a = x;
var b = y;
/*
passed by values
x = 10
y = "abc"
a = 10
b = "abc"
*/


// Value of x, y, a, b
var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
/*
passed by values
x = 10
y = "abc"
a = 10
b = "abc"
a = 5
b = "def"
*/


// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
/*
passed by reference
arr = [1];
arrcopy same as array, changes in arr can be seen from arrcopy
*/


// Value of obj
var obj = { name: 'ryan' };
obj = { surname: 'florance' };
/*
obj = {surname: "florance"};
the second statement overwrites the first statement as obj is not a const object hence the code is VALID
*/


// What's the output.
var arr = ['Hi'];
var arr2 = arr;
console.log(arr === arr2);
/*
passed by reference
console log will output true as the second arr has been passed the first arr via reference
*/


// What's the output.
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2);
console.log(arr1 == arr2);
/*
Both the statements will output false as the arrays may have same values but theyre pointing to different memory locations containing their respective values.
*/


//What's the output
console.log([10] === [10]);
//  false as again theyre pointing to different memory locations albeit with the same values


// What's the output?
function personDetails(person) {
  person.age = 25;
  person = {
      name: 'John',
      age: 50,
  };
  return person;
}
//  first the function hasn't been called so no execution. However the object person will be returned with the updated values, i.e. the name John and age 50


var personObj1 = {
  name: 'Alex',
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
/*
personObj1 will return the same old name but the new age ie 25
personObj2 will return new values ie the name John and age 50
The reason being that the person object is passed as a reference to the function. That is, the address where the object properties have been stored has been passed to the function. So the function has access to the properties and can change them, as was the case with age 25. However by reinitialising the object person, the function is basically assigning a new memory address to the object variable with new values. The function might have access to the properties of the object via the address passed in the function, but the function does not have access to the address where the address of the properties has been stored. Hence it can change individual properties as it did with age but it cannot change the object as a whole by reinitialising it. The reinitialised object address is returned and stored in the personObj2 which has the name John and age 50 values.
*/

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
/*
True as the old array has been passed to the new array of the object via reference so the updates in the old array are reflected in the new array
*/

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);
// passed by value so the values are copied and thus changes in the values of one variable does not affect the other primitive variables
// a = 10
// b = 5


// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a);
console.log(b);
/*
the object has been passed to b via reference hence the addition of the property a with value 1 is also reflected in the object b.
*/

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);
/*
true, again passed by reference.
*/

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
}

var clone = {};
/*
We can use:

for(let prop in person){
  clone[prop] = person[prop];
}

and that would work just fine except for the fact that the nested object will be passed by reference so the clone and person would both have access to same address where the properties of the nested object are stored
Now to use:

Object.assign(clone, person);

would leave us with the same issue. So we'll have to use deep cloning algorithm.
The following custom made function will work for objects and nested objects but yet to be updated to support nested arrays.
*/
// TODO
function cloning(obj, destination){
  for(let prop in obj){
    if(typeof(obj[prop]) === "object") cloning(obj[prop], destination[prop]);
    else destination[prop] = obj[prop];
  }
}
