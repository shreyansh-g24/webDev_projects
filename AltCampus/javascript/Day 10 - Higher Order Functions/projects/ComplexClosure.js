// Create the execution flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();

/*
1. In the first phase, the variables and function will be loaded in the memory stack. Hence skipping the execution statements, the first variable declaration ie. counter will be loaded with a default value of undefined.
2. In the second phase, assign the initialised value of counter that is a variable by the name privateCounter along with a function namely changeBy in the bagge and the object of functions that's being returned as the function is being executed at the time of declaration itself.
3. counter.value() will return the value of private counter ie. 0
4. counter.increment() will increment the value of private counter.
5. another counter.increment();
6. counter.value() will print the updated value ie. 2
7. counter.decrement the privateCounter value
8. counter.value() will print the fincal privateCounter value ie 1
*/
