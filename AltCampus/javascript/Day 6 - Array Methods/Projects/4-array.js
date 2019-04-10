var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Pochi',
    age: 3,
    type: 'dog'
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// Solution is 112
function sumAllForLoop(arrObj){
  let sum = 0;
  for(let i = 0, n = arrObj.length; i < n; i++){
    sum += arrObj[i].age * 7;
  }
  return sum;
}

console.log("\nSum of all ages using for loop: ", sumAllForLoop(data));


// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
// Solution 112

// Using filter
function sumAllFilter(arrObj){
  let sum = 0;
  arrObj.filter((val) => sum += val.age * 7);
  return sum;
}

console.log("\nSum of all ages using filter method: ", sumAllFilter(data));

// Using map method
function sumAllMap(arrObj){
  let sum = 0;
  arrObj.map((val) => sum += val.age * 7);
  return sum;
}

console.log("\nSum of ages using map method: ", sumAllMap(data));

// Using reduce method
function sumAllReduce(arrObj){
  return arrObj.reduce(((acc, val) => acc += val.age * 7), 0);
}

console.log("\nSum of ages of dogs using reduce method: ", sumAllReduce(data));
