console.log(this.document === document); // Output: TRUE

console.log(this === window); // Output: TRUE


var myFunction = function () {
  console.log(this);
};
myFunction(); // Output: WINDOW


function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //Output: FALSE




function foo () {
	console.log("Simple function call");
	console.log(this === window);
}

foo();	//Output ??: TRUE




// This for IIFE
(function(){
	console.log("Anonymous function invocation");
	console.log(this === window);
})(); // Output: TRUE


// This for IIFE in strict mode
(function() {
	'use strict';
	console.log("Simple function call")
	console.log(this === window);
})(); // Output: FALSE



var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); // Value Of This: undefined



// This refers to the New Instance

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Output: Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Output: Name: Paul Adams



//This refers to the invoker Object
function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window);
}

let user = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user.foo()  // Output: FALSE
let fun1 = user.foo1;
fun1() // Output ??: TRUE (NOT STRICT MODE)
user.foo1()  // Output ??: FALSE (STRICT MODE ENABLED FOR THE USER)


//this will call apply and bind


this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // Output ??: 81

var retrieveX = module.getX;
retrieveX(); // Output ??: 9 as the function retrieveX has the statement (return this.x;). When executed the this in retrieveX refers to the window.

var boundGetX = retrieveX.bind(module);
boundGetX(); // Output ??: 81 as now the retrieveX function is bound with the module object.


// Call with new constructor


function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName(); // Output: Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output: Name: Paul Adams

person.displayName.call(person2); // Output ??: Name: Paul Adams

// Guess the output of the following

const a = {
  a: 'a'
};
const obj = {
  getThis: () => this,
  getThis2 () {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output: WINDOW : AS ARROW NOTATION DOESNT WORK IN METHODS
obj.getThis();

// Output: WINDOW : AS ARROW NOTATION DOESNT WORK IN METHODS
obj.getThis.call(a);

// Output: returns the obj object
obj.getThis2();

// Output: returns the a object
obj.getThis2.call(a);

// Output: WINDOW : AS ARROW FUNCTION AGAIN
obj.getThis3();

// Output: WINDOW
obj.getThis3.call(a);

// Output: returns the obj object
obj.getThis4();

// Output: returns the obj object as it is bound to the obj object
obj.getThis4.call(a);
