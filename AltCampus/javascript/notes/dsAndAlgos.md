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

## Doubly Linked List
Same as linked list, except the fact that in this each node has a pointer to both next and previous element. The first node's previous points to null and next of last node points to null. Also as storage, we define both head and tail pointers.

```js

// Declares class node
// receives, the data, pointer to the next node and pointer to the previous node
class Node {
  constructor(data, previous, next){
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding to the end of the list, so the next will always point to null;
  // time complexity: O(1), constant
  push(val){
    let previous, next;
    // if there's no node in the linked list yet, previous node will also be null, and head will point to the newNode
    if (!this.length) previous = null;
    else if (this.length) previous = this.tail;
    // newNode's next will always point to null
    next = null;
    // creates a newNode
    let newNode = new Node(val, previous, next);
    // if no nodes yet, head will also be updated to point to the newNode
    if(!this.length) this.head = newNode;
    // current tail's next will point to the newNode
    this.tail.next = newNode;
    // the tail will be updated, the new tail will be the newNode
    this.tail = newNode;
    // updates and returns length
    this.length++;
    return this.length;
  }

  // removes the last node
  // time complexity: O(1), constant
  pop(){
    let removedNode;
    // if no nodes, return undefined
    if(!this.length) return undefined;
    // if only one node, return that node and update head and tail to point to null
    else if(this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    }
    // else if there are multiple nodes
    // updates the tail to point to the previous node of the current tail. And updates the next of previous of current tail, to point to null
    else {
      removedNode = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    // updates the length
    this.length--;
    // returns removedNode
    return removedNode;
  }

  // returns the element to be removed on next push
  // time complexity: O(1), constant
  peek(){
    return this.tail;
  }

  // adds node to the beginning
  // time complexity: O(1), constant
  prepend(val){
    // if no nodes, next point's to null else next will be the current head
    let next, previous;
    if(!this.length) next = null;
    else if(this.length) next = this.head;
    // previous will always be null since adding to the beginning of the list
    previous = null;
    // creates new node with pre-defined val, previous and next.
    let newNode = new Node(val, previous, next);
    // if no nodes, the tail also needs to be updated to point to the newNode
    if(!this.length) this.tail = newNode;
    // current head's previous will point to the new node
    this.head.previous = newNode;
    // updates head to point to the new node
    this.head = newNode;
    // updates and returns length.
    this.length++;
    return this.length;
  }
}

```

## Tree
There's one root, and root has one or more branches, and each branches have one or more sub-branches and so on.
There's only one way flow, each node is uni-directional, ie. a lower level branch cannot point to an upper level branch or one on the same level, (otherwise this would create a circular structure).
Binary Search Tree: A type of tree but each node can only have 2 children.

Searching approaches:
BFT (better algo) : Breadth First Traversal: Traverses over one entire level first before moving to the next level
DFT: Depth First Traversal: Traverses over on entire branch until you reach the next element in the branch, then switch branches.

```js

  // declares stack
  // LIFO
  class Stack {
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

  // declares queue
  // FIFO
  class Queue {
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
  }

  // declares node class
  class Node {
    constructor(data){
      this.data = data;
      // by default each new node will not have any children
      this.children = [];
    }

    // adds new Node
    // time complexity: O(1), constant
    addChild(data){
      let childNode = new Node(data);
      // updates the children array of the current node to include a new child
      this.children.push(childNode);
      // returns the current node with updated children array
      return this;
    }

    // removed all children nodes with data equal to the value passed
    // In a normal tree, it's still fine but in binary search tree, each node's data need to be unique to uniquely identify the node to be removed by data value. In tree, you can have mutiple nodes with same data value but they cannot be on the same level. On a given level, data values need to be unique for each node.
    // time complexity: O(N), linear time complexity (better would be to use for loop if you add check to ensure unique data value on a level, so if you find a match in the for loop, break out since there's no other nodes in the children array with the given data.)
    removeChildren(data){
      // updates the children array to remove nodes with data equal to the given data
      this.children = this.children.filter(node => node.data !== data);
      // returns the current node with updated children array
      return this; 
    }
  }

  // declares class tree
  class Tree {
    constructor(){
      // initially the root will point to null
      this.root = null;
    }

    // in bft, we take an entry point from where to start search, usually it is the root node. Then we traverse over all the children of the root, then the children of each of those children and so on, moving down level by level.
    // currently, just traversing over the tree and printing all data values
    // defaults start point to root node
    // time complexity: 
    bft(start = this.root){
      let position = start;
      let queue = new Queue();
      queue.push(position);

      // continues the loop until there's no elements left in the queue
      while(queue.count !== 0){
        // Using FIFO, removes the first added node from the stack and adds it's children to the stack.
        // Consequently, it traverses over an entire generation or level before moving over to a deeper level/generation
        let removedNode = queue.pop();
        let chilren = removedNode.children;

        for(let i = 0, n = children.length; i < n; i++){
          queue.push(children[i]);
        }

        // prints the removed Node
        console.log(removedNode);
      };
    }

    // In dft, we take an entry point from where to start search, usually it is the root node. Then we traverse over an entire branch first until we reach element with no children, then we move on to the next branch, instead of moving level by level.
    // currently, just traversing over the tree and printing all the data values
    // defaults start point to the root node
    // time complexity:
    dft(start = this.root){
      let position = start;
      let stack = new Stack();
      stack.push(position);

      // continues the loop, until there's no elements left in the stack
      while(stack.count !== 0){
        // Using LIFO, removes the last added elements from the stack and adds it's elements in the stack
        // consequently traversing over until the last element in one branch before moving onto next branch
        let removedNode = stack.pop();
        let children = removedNode.children;

        for(let i = 0, n = children.length; i < n; i++){
          stack.push(children[i]);
        }

        // prints the removedNode
        console.log(removedNode);
      }
    }

  }

```
