// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

class Cat{
  constructor(tiredness, hunger, lonliness, happiness){
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
  }
  incrementProps(prop){
    if(this[prop] >= 3){
      this[prop] = 3;
      return "Maximum " + prop + " achieved";
    }
    else if(prop === "happiness") {
      this.happiness++;
      this.lonliness--;
    }
    else if(prop === "lonliness") {
      this.lonliness++;
      this.happiness--;
    }
    else if(prop === "hunger" || prop === "tiredness"){
      this.hunger++;
      this.tiredness++;
    }
    else{
      return "Property not recognized";
    }
  }
  decrementProps(prop){
    if(this[prop] <= 0){
      this[prop] = 0;
      return "Minimum " + prop + " achieved";
    }
    else if(prop === "happiness") {
      this.happiness--;
      this.lonliness++;
    }
    else if(prop === "lonliness") {
      this.lonliness--;
      this.happiness++;
    }
    else if(prop === "hunger" || prop === "tiredness"){
      this.hunger--;
      this.tiredness--;
    }
    else{
      return "Property not recognized";
    }
  }
  displayStatus(){
    let arr = ["not", "a little", "really", "VERY"];
    console.log("The cat is ", arr[this.tiredness], " tired and ", arr[this.hunger], " hungry. It is ", arr[this.happiness], " happy and ", arr[this.lonliness], " lonely");
  }
}

let aCat = new Cat(0, 0, 2, 1);
aCat.displayStatus();
aCat.incrementProps("happiness");
aCat.decrementProps("tired");
aCat.displayStatus();

console.log("\n\n\n\n");

// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object

// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books

class BookLists{
  constructor(read, next, current, last, booksArr){
    this.next = next;
    this.current = current;
    this.last = last;
    this.books = booksArr;
    this.read = read;
    this.notRead = this.books.length - read;
  }
  add(book){
    this.books.push(book);
    let counter = 0;
    for(let i = 0, n = this.books.length; i < n; i++){
      if(this.books[i].read) counter++;
    }
    this.read = counter;
    this.notRead = this.books.length - this.read;
  }
  finishCurrentBook(){
    let finishedBook = this.current;
    finishedBook.read = true;
    finishedBook.readDate = new Date();
    this.last = finishedBook;
    this.current = this.next;
    for(let i = 0, n = this.books.length; i < n; i++){
      if(!this.books[i].read && this.books[i] !== this.current){
        this.next = this.books[i];
        break;
      }
    }
    let counter = 0;
    for(let i = 0, n = this.books.length; i < n; i++){
      if(this.books[i].read) counter++;
    }
    this.read = counter;
    this.notRead = this.books.length - this.read;
  }
}

let arrOfBooks = [
  {
    title: "abc",
    read: false,
    readDate: 0,
  },
  {
    title: "def",
    read: false,
    readDate: 0,
  },
  {
    title: "xyz",
    read: true,
    readDate: new Date(0),
  },
  {
    title: "ghk",
    read: false,
    readDate: 0,
  },
  {
    title: "opq",
    read: false,
    readDate: 0,
  },
  {
    title: "lmn",
    read: false,
    readDate: 0,
  },
];

let booklist = new BookLists(1, arrOfBooks[0], arrOfBooks[3], arrOfBooks[2], arrOfBooks);

// tests
console.log(booklist);
let newBook = {
  title: "New Book",
  read: false,
  readDate: 0,
};
booklist.add(newBook);
console.log(booklist);
booklist.finishCurrentBook();
console.log(booklist);
