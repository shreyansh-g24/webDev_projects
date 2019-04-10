// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']
// ANS;
// let chopStr = prompt("Enter the string to chop: ");
// let chr = +prompt("Enter the number of char in each element of the resultant array: ");
let chopStr = "Hello World!";
let chr = 3;

function chopString(str, numChar){
    let arr = [], j = 0;
    // let regex = /[.]{2}/;
    for(let i = 0; i + numChar <= str.length; i += numChar){
        arr[j] = str.slice(i, i+numChar);
        j++;
    }
    return arr;
}

console.log("\nChopping string into arrays of characters: ", chopString(chopStr, chr));

//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2
function stringCount(str, search){
    str = str.toLowerCase();
    search = search.toLowerCase();
    let count = 0;
    for(let i = 0, n = str.length; i < n;){
        i = str.indexOf(search, i);
        if(i !== -1){
            count++;
            i += 1;
        }
        else if(i === -1) return count;
    }
    return count;
}

console.log("\nNumber of times \"the\" appears in the string: ", stringCount("The quick fox jumped over the lazy dog.", "the"));


//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"
function stripSpaces(str){
    return str.trim();
}

console.log("\nReturning a string stripped of whitespaces off both ends: ", stripSpaces("   A string.   "));

// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"
function truncateString(str, num){
    let arr = str.split(" ", num);
    return arr.join(" ");
}

console.log("\nReturning a string of specified num of words: ", truncateString("The lazy fox jumped over the quick dog.", 5));

// Write a JavaScript function to alphabetize a given string.(A - z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'
function alphabetize(str){
    // spliting each character of the string into an array, then sorting the array as per unicode and joining the resultant characters in the array into a string.
    return str.split("").sort().join("");
}

console.log("\nReturning the alphabetized string: ", alphabetize("SomeStringZ"));

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false
function compareString(str1, str2){
    lowerStr1 = str1.toLowerCase();
    lowerStr2 = str2.toLowerCase();
    if(lowerStr1 === lowerStr2) return true;
    else return false;
}
let string1 = "ABcd";
let string2 = "ABCE";
console.log("\nComparing strings: %s === %s :", string1, string2, compareString(string1, string2));
