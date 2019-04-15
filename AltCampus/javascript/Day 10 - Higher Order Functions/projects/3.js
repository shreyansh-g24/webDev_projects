// What’s the result of executing this code and why.
// ANS: undefined for the variable value as it doesnt exist at the time of call and 2 for foo function call, probably because the functions are loaded in stack before executing any code, so the function exists during its call in console.log
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// What is result?
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
// ANS: someFunction is literally returning a function that's being stored in the variable firstResult.
var result = firstResult(2);
// ANS: Calling the firstResult variable as a function executed otherFunction which is returning a irrespective of the value being passed to it, so it will return a whose value is 5.
console.log(firstResult, result);

// What is the result of the following code? Explain your answer.
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());
// ANS: this.fullname in the function in the nested object refers to the nested object and hence returns the fullname Aurelio De Rosa.

var test = obj.prop.getFullname;

// What will you see in the console for the following example?
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
// ANS: no output while calling b
console.log(a);
// ANS: Prints the value of a ie 1
