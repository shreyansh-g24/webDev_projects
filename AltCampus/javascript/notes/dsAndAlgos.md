# Data Structures and Algorithms

## Stack
Array like simple DS but uses LIFO
```js

  // Using Array as the storage
  class Stack_array {
    constructor(){
      // defines the data structure's properties
      this.storage = []; // the data structure's store
    }

    // defines methods for the data structure
  
    // time complexity: O(1), constant
    push(val){
      this.storage.push(val);
      return this.storage.length;
    }

    // time complexity: O(1), constant
    pop(){
      if(this.storage.length === 0) return undefined;

      return this.storage.pop();
    }

    // returns the next element to be removed (since stack follows, LIFO, cannot use unshift)
    // time complexity: O(1), constant
    peek(){
      if(this.storage.length === 0) return undefined;

      return this.storage[this.storage.length - 1];
    }
  }

  let newStackArray = new Stack_array();

  // Using Object as the storage
  class Stack_object {
    constructor(){
      this.storage = {};
      this.count = 0;
    }

    // time complexity: O(1), constant
    push(val) {
      this.storage[this.count] = val;
      this.count++;
      return this.count;
    }

    // time complexity: O(1), constant
    pop(){
      if(this.count === 0) return undefined;

      this.count--;
      let pop = this.storage[this.count];
      delete this.storage[this.count];
      return pop;
    }

    // returns the next elemenet to be deleted
    // time complexity: O(1), constant
    peek(){
      if(this.count === 0) return undefined;

      return this.storage[this.count - 1];
    }
  }

  let newStackObject = new Stack_object();

  // Using String as storage
  class Stack_string {
    constructor(){
      this.storage = "";
    }

    // time complexity: O(2N), linear complexity (running time and number of elements increase proportionally)
    // split is: O(N)
    // concat is: O(N)
    push(val){
      this.storage = this.storage.concat("**" + val);
      return this.storage.split("**").length - 1;
    }

    // time complexity: O(2N), linear time complexity (running time and number of elements increase proportionally)
    // slice: O(N)
    // replace: O(N), in the worst case, it'll traverse the whole string and still not find any match
    pop(){
      if(this.storage.length === 0) return undefined;

      let pop = this.storage.slice(this.storage.lastIndexOf("**"));
      this.storage = this.storage.slice(0, this.storage.lastIndexOf("**"));
      return pop.replace("**", "");
    }

    // returns the next element to be popped.
    // time complexity: O(2N), linear time complexity
    peek(){
      if(this.storage.length === 0) return undefined;

      let peek = this.storage.slice(this.storage.lastIndexOf("**"));
      return peek.replace("**", "");
    }
  }

  let newStackString = new Stack_string();
```

## Queue
Stack like DS but uses FIFO to remove the elements (still adds elements at the end)

```js
  // Using Array as a Data Structure
  class Queue_array{
    constructor(){
      this.storage = [];
    }

    // time complexity: O(1), constant
    push(val){
      this.storage.push(val);
      return this.storage.length;
    }

    // time complexity: O(N), linear time complexity
    pop(){
      if(this.storage.length === 0) return undefined;

      return this.storage.shift();
    }

    // time complexity: O(1), constant
    peek(){
      if(this.storage.length === 0) return undefined;

      return this.storage[0];
    }
  }

  let newQueueArray = new Queue_array();

  // Using Object as a Data Structure
  class Queue_object {
    constructor(){
      this.head = 0;
      this.storage = {};
      this.tail = 0;
    }

    // time complextiy: O(1), constant
    push(val){
      this.storage[this.tail] = val;
      this.tail++;
      return this.tail - this.head;
    }

    // time complexity: O(1), constant
    pop(){
      if(this.head === this.tail) return undefined;

      let pop = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return pop;
    }

    // time complexity: O(1), constant
    peek(){
      if(this.head === this.tail) return undefined;

      return this.storage[this.head];
    }

    // time complexity: O(N), linear time complexity (running time and number of elements increase proportionally), in the worst case scenario the for loop will iterate through all the elements and still not find any match
    includes(val){
      if(this.head === this.tail) return false;

      for(let index in this.storage){
        if(this.storage[index] === val) return true;
      }

      return false;
    }
  }
  let newQueueObject = new Queue_object();
```