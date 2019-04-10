// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
function printProperties(obj){
    for(let key in obj) console.log("%s > %s", key, obj[key]);
    return 0;
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};

console.log("\nBefore deletion:");
printProperties(student);

delete student.rollno;

console.log("\nAfter deletion:");
printProperties(student);

// 3. Write a function to get the length of an object.
function getLength(obj){
    let size = 0;
    for(let key in obj) size++;
    return size;
}

console.log("\nLength of the object: ", getLength(student));
