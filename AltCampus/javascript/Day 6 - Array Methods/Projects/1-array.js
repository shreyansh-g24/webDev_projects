// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods:
// Find largest number in numbers
function largestInArray(arr){
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log("\nPrinting the largest number in the array: ", largestInArray(numbers));

// Find longest string in strings
function longestInStrings(strArr){
    let longest = strArr[0].length;
    let index = strArr[0];
    for(let i = 1; i < strArr.length; i++){
        if(strArr[i].length > longest) {
            longest = strArr[i].length;
            index = strArr[i];
        }
    }
    return index;
}
console.log("\nPrinting the largest number in the array: ", longestInStrings(strings));

// Find all the even numbers
// ANS: Using arr.filter()
console.log("\nPrinting an array of all even numbers: ", numbers.filter((val) => val % 2 === 0));

// Find all the odd numbers
// ANS: Using arr.filter()
console.log("\nPrinting an array of all odd numbers: ", numbers.filter((val) => val % 2 === 1));

// Find all the words that contain 'is' use string method 'includes'
// ANS: Using string.includes()
function findString(str, strArr){
    let matches = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].includes(str)) matches.push(strArr[i]);
    }
    return matches;
}

console.log("\nReturning all the strings with \"is\" using includes(): ", findString("is", strings));

// Find all the words that contain 'is' use string method 'indexOf'
// Using string.indexOf()
function findStringIndex(str, strArr){
    let matches = [];
    for(let index = 0, n = strArr.length; index < n; index++){
        let matchIndex = strArr[index].indexOf(str, 0);
        if(matchIndex !== -1)
            matches.push(strArr[index]);
    }
    return matches;
}

console.log("\nReturning all the strings with \"is\" using indexOf(): ", findStringIndex("is", strings));

// Check if all the numbers in numbers array are divisible by three use array method (every)
// ANS: Using array.filter() method
function divisibleBy3(arr){
    return arr.filter((value) => value % 3 === 0);
}

console.log("\nNumbers divisible by 3 in the numbers array: ", divisibleBy3(numbers));

//  Sort Array from smallest to largest
// ANS: Using arr.sort() method
function sortingAscendingOrder(arr){
    return arr.sort((val1, val2) => val1 - val2);
}

console.log("\nSorting the array in ascending order: ", sortingAscendingOrder(numbers));

// Remove the last word in strings
// ANS: Using arr.pop() method
console.log("\nThe last word: ", strings.pop());
console.log("New strings array: ", strings);

// Add a new word in the array
// ANS: Using arr.push() method
console.log("\nNew strings array length after adding a new word: ", strings.push("words"));
console.log("The new strings array: ", strings);

// Remove the first word in the array
// ANS: Using shift method
console.log("\nThe first word removed: ", strings.shift());
console.log("The new array: ", strings);

// Place a new word at the start of the array use (unshift)
// ANS: Using unshift();
console.log("\nArray length after adding a new word: ", strings.unshift("This"));
console.log("New array: ", strings);

// Make a subset of numbers array [18,9,7,11]
// ANS: Using for loops and push()
function subsetOfArray(arr, subset){
    let matches = [];
    for(let i = 0, n = arr.length; i < n; i++){
        for(let j = 0, m = subset.length; j < m; j++){
            if(arr[i] === subset[j]) matches.push(arr[i]);
        };
    }
    return matches;
}

let subsetToMatch = [18, 9, 7, 11];
console.log("\nThe subset of numbers array: ", subsetOfArray(numbers, subsetToMatch));

// Make a subset of strings array ['a','collection']
// ANS: Using the same function as above
subsetToMatch = ['a', 'collection'];
console.log("\nThe subset of strings array: ", subsetOfArray(strings, subsetToMatch));

// Replace 12 & 18 with 1221 and 1881
// ANS: Using indexOf and includes to find the values and replace them
function replace(arr, replacementArr, replacementValues){
    for(let i = 0, n = replacementArr.length; i < n; i++){
        if(arr.includes(replacementArr[i])){
            let target = arr.indexOf(replacementArr[i]);
            arr[target] = replacementValues[i];
        }
    }
    return 0;
}
replace(numbers, [12, 18], [1221, 1881]);
console.log("\nReplacing 12 and 18 with 1221 and 1881 respectively: ", numbers);

// Replace words with string in strings array
// ANS: Using the same function as above
replace(strings, ["words"], ["string"]);
console.log("\nThe new strings array after replacement: ", strings);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
// ANS: Using startsWith method to match the values
function findNames(arr, key, valueToMatch){
    for(let i = 0, n = arr.length; i < n; i++){
        if(arr[i][key].startsWith(valueToMatch)) console.log("Match found: %d > %s", i + 1, arr[i][key]);
    }
    return 0;
}

console.log("\nPrinting all customers with names starting with J: ");
findNames(customers, "firstname", "J");

// Create new array with firstname and lastname
function newArrayFromObject(objArr){
    let arr = {};
    for(let i = 0, n = objArr.length; i < n; i++){
        for(let key in objArr[i]){
            if(arr[key] === undefined) arr[key] = [];
            arr[key].push(objArr[i][key]);
        }
    }
    return arr;
}

let namesObj = newArrayFromObject(customers);
console.log("\nNew array with all the firstnames and lastnames:\n", namesObj);

// Sort the array created above alphabetically
function sortingObj(obj){
    for(let key in obj) obj[key].sort();
    return obj
}

console.log("\nSorting the names in object: ", sortingObj(namesObj));
