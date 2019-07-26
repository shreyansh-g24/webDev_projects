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

## Priority Queue
Same as queue, uses FIFO by default, but if anything has priority it is treated first (prioritised), after that continuing to FIFO.
Using Patients as an example, e.g. in an hospital the patients will be treated on FIFI unless a patient has a priority higher than that of the rest.

```js

  // Using object as a storage
  class Patient {
    constructor(name, priority = 0){
      this.name = name;
      this.priority = priority;
    }
  }

  class PriorityQueue_object {
    constructor(){
      this.storage = [];
    }

    // time complexity: O(1), constant
    push(name, priority){
      this.storage.push(new Patient(name, priority));
      return this.storage.length;
    }

    // calculates the earliest occurrance of the element with the highest priority in the queue and removes it first
    // time complexity: O(5N), linear time complexity
    // forEach, shift, slice and concat, all have O(N) time complexity each.
    pop(){
      let highest = this.storage[0].priority;
      let index = 0;

      this.storage.forEach((p, i) => {
        if(p.priority > highest && p.priority !== highest) {
          highest = p.priority;
          index = i;
        }
      });

      if(index === 0) return this.storage.shift();
      else if(index === this.storage.length - 1) return this.storage.pop();
      else {
        let pop = this.storage[index];
        this.storage = this.storage.slice(0, index).concat(this.storage.slice(index+1));
        return pop;
      }
    }

    // time complexity: O(N), linear time complexity
    peek(){
      let highest = this.storage[0].priority;
      let index = 0;

      this.storage.forEach((p, i) => {
        if(p.priority > highest && p.priority !== highest) {
          highest = p.priority;
          index = i;
        }
      });
      return this.storage[index];
    }
  }
  // alternatively, you can do the loop, every time a new element is added, and save its priority and index that can be used as is in pop and peek, and upon every pop, loop again to update the highest priority and index of the same.

  // Using object as a storage
  class Patient {
    constructor(name, priority = 0){
      this.name = name;
      this.priority = priority;
    }
  }

  class PriorityQueue_object {
    constructor(){
      this.storage = [];
      this.highestPriority = 0;
      this.index = 0;
    }

    // time complexity: O(1), constant
    push(name, priority){
      this.storage.push(new Patient(name, priority));

      if(priority > this.highestPriority) {
        this.highestPriority = priority;
        this.index = this.storage.length - 1;
      }

      return this.storage.length;
    }

    // calculates the earliest occurrance of the element with the highest priority in the queue and removes it first
    // time complexity: O(5N), linear time complexity
    // forEach, shift, slice and concat, all have O(N) time complexity each.
    pop(){
      let pop;
      if(this.index === 0) pop = this.storage.shift();
      else if(this.index === this.storage.length - 1) pop = this.storage.pop();
      else {
        pop = this.storage[this.index];
        this.storage = this.storage.slice(0,this.index).concat(this.storage.slice(this.index+1));
      }

      // calculates new highest priority
      this.storage.forEach((p, i) => {
        if(p.priority > this.highest && p.priority !== this.highest) {
          this.highest = p.priority;
          this.index = i;
        }
      });

      return pop;
    }

    // time complexity: O(1), constant time complexity
    peek(){
      return this.storage[this.index];
    }
  }
```

### Exercise 1
Using two stacks, and pop, push and peek methods available in each stack, make a queue data structure

```js
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

  // A Queue using stacks
  class Queue_stacks {
    constructor(){
      this.storagePrimary = new Stack_object();
      this.storageSecondary = new Stack_object();
    }

    // time complexity: O(1), constant
    push(val){
      return this.storagePrimary.push(val);
    }

    // A Queue uses FIFO and Stack uses LIFO, so to pop in a queue with stack as it's storage, need to transfer to secondary stack before pop, and then back into primary stack
    // time complexity: O(2N), linear time complexity
    pop(){
      // transfers to secondary stack
      while(this.storagePrimary.peek() !== undefined){
        this.storageSecondary.push(this.storagePrimary.pop());
      }
      // pops the next element in line
      let pop = this.storageSecondary.pop();
      // initialises a new stack and transfers back to primary stack
      this.storagePrimary = new Stack_object();
      while(this.storageSecondary.peek() !== undefined){
        this.storagePrimary.push(this.storageSecondary.pop());
      }
      // returns the popped element
      return pop;
    }

    // time complexity: O(N), linear time complexity
    peek(){
      this.storageSecondary = new Stack_object();
      // transfers to secondary storage
      while(this.storagePrimary.peek() !== undefined){
        this.storageSecondary.push(this.storagePrimary.pop());
      }
      return this.storageSecondary.peek();
    }
  }
```

## Linked Lists
Each element in the linked list has a value to store the value of the element and a pointer to the next element in the line.
Each element in the linked list is called a node.
The first element is called either the head or root.
The last element points to null and is at the end. The first element is at the top with head pointed to it.

```js

// Declares class Node
class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

// Declares class LinkedList
class LinkedList {
  constructor(){
    this.head = null;
    this.count = 0;
  }

  // time complexity: O(1), constant
  // returns the new head
  insertFirst(val){
    this.head = new Node(val, this.head);
    this.count++;
    return this.head
  }

  // time complexity: O(1), constant
  // returns the length of the linked list
  count(){
    return this.count;
  }

  // clears the linked list
  // time complexity: O(1), constant
  clear(){
    this.head = null;
    this.count = 0;
    return this.head;
  }

  // inserts a value to the end of the linked list
  // time complexity: O(N), linear time complexity
  insertLast(val){
    let newNode = new Node(val, null);
    // initialises and taken the pointer to the end
    let pointer = this.head;
    while(pointer.next !== null){
      pointer = pointer.next;
    }
    // adds the new element
    pointer.next = newNode;
    // increments the count
    this.count++;
    // returns the new node
    return newNode;
  }

  // returns the first element in the linked list
  // time complexity: O(1), constant
  getFirst(){
    return this.head;
  }

  // returns the last element in the linked list
  // time complexity: O(N), linear time complexity
  getLast(){
    // initialises and takes the pointer to the end
    let pointer = this.head;
    while(pointer.next !== null){
      pointer = pointer.next;
    }
    // returns the pointer
    return pointer;
  }

  // removes and returns the first element of the linked list
  // time complexity: O(1), constant
  removeFirst(){
    let removedElement = this.head;
    this.head = this.head.next;
    this.count--;
    return removedElement;
  }

  // removes and returns the last element of the linked list
  // time complexity: O(N), linear time complexity
  removeLast(){
    // initialises and takes the pointer to the end
    let pointer = this.head;
    let removedElement = undefined;
    while(pointer.next !== null){
      pointer = pointer.next;
    }
    // stores the removed element and removes it from the linked list
    removedElement = pointer;
    pointer = null;
    // updates the counter
    this.count--;
    // returns the removed element
    return removedElement;
  }

  // returns the element at the specified index
  // time complexity: O(N), linear time complexity
  getAt(index){
    // handles negative indices
    if(index < 0) index = this.count - index;
    // extracts the element at the target index
    let pointer = this.head;
    let pointerIndex = 0;
    while(pointerIndex !== index && pointer.next !== null){
      pointer = pointer.next;
      pointerIndex++;
    }
    // returns the requested element
    return pointer;
  }

  // removes and returns the element at the specified index
  // time complexity: O(N), linear time complexity
  removeAt(index){
    // handles negative indices
    if(index < 0) index = this.count - index;
    // adds the element at the target index
    let pointer = this.head;
    let previousElement = pointer;
    let pointerIndex = 0;
    while(pointerIndex !== index && pointer.next !== null){
      previousElement = pointer;
      pointer = pointer.next;
      pointerIndex++;
    }
    // stores the removed element, and removes it
    let removedElement = pointer;
    previousElement.next = pointer.next;
    // decrements the counter
    this.count--;
    // returns the removed element
    return removedElement;
  }

  // inserts the element at the specified index in the linked list and returns the new length of the linked list
  // time complexity: O(N), linear time complexity
  insertAt(value, index){
    // handles negative indices
    if(index < 0) index = this.count - index;
    // adds the element at the target index
    let pointer = this.head;
    let previousElement = pointer;
    let pointerIndex = 0;
    while(pointerIndex !== index && pointer.next !== null){
      previousElement = pointer;
      pointer = pointer.next;
      pointerIndex++;
    }
    // creates a new node
    let newNode = new Node(value, pointer);
    // updates the linked list
    previousElement.next = newNode;
    // updates the counter
    this.count++:
    // returns the new length of the linked list
    return this.count;
  }

  // returns the middle element of the linked list if odd number of elements, if even number of elements, returns the middle two elements using two slow and fast pointers
  // time complexity: O(N/2), linear time complexity
  getMiddle(){
    // declares and positions the pointers
    let slowPointer = this.head;
    let fastPointer = this.head;
    while(fastPointer.next !== null && fastPointer.next.next !== null){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    // checks the number of elements left after fast pointer
    // if even length, one element would remain
    // if odd length, fastPointer.next would be null
    if(fastPointer.next === null) return slowPointer;
    else if(fastPointer.next.next === null) return [slowPointer, slowPointer.next];
  }
}


```

