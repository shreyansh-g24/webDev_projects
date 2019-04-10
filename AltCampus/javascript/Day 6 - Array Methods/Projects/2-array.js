var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  let longest = "";
  arr.every((val) => val.length > longest.length ? (longest = val) : longest);
  return longest;
}

console.log("\nThe longest word in the array: ", findLongestWord(words));

///////////////
var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray(arr){
  return arr.reduce(((acc, val) => acc += val), 0);
}
let sumResult = sumArray(numbers1);
console.log("\nSum of all the numbers: ", sumResult);
console.log("Average: ", (sumResult / numbers1.length));

///////////////
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(arr){
  let len = arr.length;
  return arr.reduce(((acc, val) => acc += val / len), 0);
}

console.log("\nAverage of numbers 2 array: ", averageNumbers(numbers2));

//////////////
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr){
  let len = arr.length;
  return arr.reduce(((acc, val) => acc += val.length / len), 0);
}

console.log("\nAverage length of the words in the words array: ", averageWordLength(words2));
