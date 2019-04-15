// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
// Define a function name calculateAge which returns the age of the person
class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        return ((new Date()).getYear() + 1900) - this.yearOfBirth;
    }
}

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher') and,
// call the calculateAge function on each object
let personArr = [
    new Person('John', 1990, 'teacher'),
    new Person("ABC", 1998, "student"),
    new Person("zxc", 2016, "anb"),
];

// printing the persons and their ages
for(let i = 0; i < 3; i++){
    console.log(personArr[i]);
    console.log("age: ", personArr[i].calculateAge(), "\n\n");
}
