/*
String Methods:
-about
-parameters
-return value
-example
*/

let str = "a sample string, hello world!";
console.log("The string to be used:\n%s\n\n\n", str);

// string.length:
// calculates length
// returns the length
console.log("string.length: %d", str.length);

// String.fromCharCode(char_code)
// returns a string from the character codes received
// receives character codes
// returns a string
console.log("String.fromCharCode(): %s", String.fromCharCode(65, 66, 32, 68));

// string.charAt(index)
// returns a string consisting of a single UTF-16 code unit located at the specified offset into the string. Returns an empty string if the index is out of range.
// receives an index
// returns a string
console.log("string.charAt: %s", str.charAt(2));

// string.charCodeAt(index)
// returns the char code at the specified index. If the string is not a number it returns 0, if index specified out of range, it returns NaN.
// receives an index number
// returns a number
console.log("string.charCodeAt(): %d", str.charCodeAt(2));

// string.endsWith(string)
// determines whether a string ends with a character of a specified string.
// receives characters to be searched for
// returns boolean true or false
console.log("string.endsWith():", str.endsWith("d!"));

// string.concat(string)
// concatenates the string argument to the calling string and returns a new string.
// receives strings to concatenate to the calling string
// returns the concatenated string
let newStr = str.concat(" hello again");
console.log("New string after concatenation: %s", newStr);

// string.includes(string)
// checks if the mentioned string exists in the string to be searched in
// receives the string to search for
// returns boolean true if the string exists else returns false
console.log("To check if \"hello\" exists in the string: ", str.includes("hello"));

// string.indexOf(string1, fromIndex)
// checks if the string1 exists in string starting the search from fromIndex. Returns -1 if string not found.
// receives a string to search for and index to start searching from
// returns the index where the first occurrence of string is found
console.log("Index of first occurrence of s:", str.indexOf("s"));
console.log("Index of s after it's first occurrence: ", str.indexOf("s", (str.indexOf("s") + 1)));

// string.lastIndexOf(string1, fromIndex)
// returns the index of the last occurrence of the specified string search backwards from fromIndex
// receives a string to search for and an index to start search from
// returns index
console.log("Index of last occurrence of s: ", str.lastIndexOf("s"));
console.log("Index of the second last occurrence of s: ", str.lastIndexOf("s", str.lastIndexOf("s") - 1));

// string.padEnd(targetLength, string1);
// padEnd pads the string with string1 starting from right, repeated if needed, until string reaches the desired length
// receives the tagetLength and a string to be padded with
// returns a string of desired length with padding applied to the end
let str0 = "a string";
console.log("Applying padding: ", str0.padEnd(10, '.'));
console.log("Applying multi char padding: ", str0.padEnd(15, '._'));

// string.padStart(targetLength, string1);
// applies padding to the target string, multiple times if needed starting from the left until the target string reaches the desired length
// receives targetLength and a string to be padded with
// returns the padded string of desired length
console.log("Applying padding: ", str0.padStart(10, '.'));
console.log("Applying multi char padding: ", str0.padStart(15, '._'));

// string.repeat(count);
// constructs and returns a new string which contains the specified number of copies of the string on which it was called upon concatenated together
// receives the count i.e. number of desired copies
// returns a newly contructed string
console.log("Repeated string: ", str0.repeat(5));

// string.replace(pattern, replacement);
// replaces all the existing patterns in a string with the replacement string. If the pattern is a string, only the first occurrence is replaced. Use regular expression to replace all occurrences
// receives a pattern and a replacement string
// returns a string with all patterns dealt with
let replacedString = str.replace("s", "S");
console.log("Replaced the first s: ", replacedString);
// regex to replace all occurrences
replacedString = replacedString.replace(/\b(s|S)[A-Za-z]+/g, "s.REplaceMENT");
console.log("Replacing all occurrences of string: ", replacedString);

// string.search(regex)
// this method executes a search for a match between a regular expression and a string object
// receives a regex. If a non regex object is passed it is converted to a regex using new regex(object) implicitly.
// returns index of the first match between the regular expression and the given string. If not found, returns -1.
// to return index:
console.log("Any character that is not a word or number or underscore or a whitespace: ", str.search(/[^\w\s]/g));
// to return the matched character
console.log("The character:", str[str.search(/[^\w\s]/g)]);

// string.slice();
// this method extracts section of the string and returns it without modifying the original string
// receives the beginning and the end index in the same order. If negative index, it is treated as solved as (length of the string + index value). End undex is optional, in absense of which the entire remaining string till end is returned. The beginning index if greater than the length of the string, an empty string is returned.
// returns the extracted string, starting from the beginning index value, upto and not including the end index value
console.log("Extracted string: ", str.slice(2, 8));

// string.split(separator, limit);
// This method splits a strings object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split
// receives a separator (optional) which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array having one element for each character of str.
// also receives a limit (optional) which is an integer specifying a limit on the number of splits to be found. The resultant array may contain entries lesser than what's specified by the limit if the string ends before that. The left over text is not returned in the new array.
// returns an array of strings split at each point where the separator occurs in the given string.
console.log("Spliting by whitespaces: ", str.split(' '));
console.log("Spliting by character with 5 as a limit: ", str.split('', 5));
console.log("Spliting by the char s: ", str.split("s"));

// string.startsWith(searchString, position);
// This method determines whether a string begins with the specified set of characters
// receives a searchString that specifies the characters to be searched for. Also receives an optional position that is the index that the method start searching from
// returns boolean true or false
console.log("Checking if the string starts with 'string': ", str.startsWith('string'));

// string.substring(start, end);
// this method returns the substring between the start and end indices
// receives a start index, and an optional end index in absense of which it returns the substring to the end of the string.
// returns a new string containing the specified part of the given string
console.log("Substring between indices 3 and 8: ", str.substring(3, 8));

// string.toLowerCase();
// converts the entire specified string into lower case
// no parameters
// returns the string converted into lower case
console.log("String in lower case: ", str.toLowerCase());

// string.toUpperCase();
// converts the entire specified string to upper case
// no parameters
// returns the string converted into upper case
console.log("String in upper case: ", str.toUpperCase());

// var.toString();
// converts the calling object into a string
// no parameters
// returns a string representincg|consisting of the calling object
let num = 10;
console.log(num.toString());
console.log(typeof(num.toString()));

// string.trim();
// this method removes whitespaces from both ends of the string. Whitespaces here include spaces, tabs, no-break spaces etc.
// no paramters
// returns a new string representing the calling string stripped of whitespaces from both ends
let whiteSpacedString = "   Hello World!   ";
console.log(whiteSpacedString);
console.log("stripped of whitespaces: ", whiteSpacedString.trim());

// string.trimStart() or string.trimLeft();
// removes whitespaces only from the left | start
// no parameters
// returns a string representing the calling string stripped of whitespaces from the left | start
// console.log("Stripped from the Start: ", whiteSpacedString.trimStart());
// ^^ error no trimStart() function
console.log("Stripped from the left: ", whiteSpacedString.trimLeft());

// string.trimEnd() or string.trimRight();
// removes whitespaces only from the right | end
// no parameters
// returns a string representing the calling string stripped of whitespaces from the right | end
// console.log("Stripped from the end: ", whiteSpacedString.trimEnd());
// ^^ error no trimEnd() function
console.log("Stripped from the right: ", whiteSpacedString.trimRight());

// string.match(regex);
// the match() method retrieves the result of a matching string against a regex
// receives a regex. If a non regex object is passed, it is implicitly converted into a regex by using "new RegExp(object)". If you dont give any parameters and use the match method directly, you will get an Array with an empty string [""]
// returns an array whose contents depend on the inclusion or ommittion of the global(g) flag or null if no match found. If g flag is used, all resukts matching the regex are returned else the first complete match and its additional properties are returned; additional properties include:
    // 1. groups: An array of named capturing groups or undefined if no named capturing groups were defined.
    // 2. index: The index of the search at which the result was found.
    // 3. input: A copy of the search string.
let regex = /\b(s|S).[A-Za-z]+/g;
console.log("Matching the string for s in beginning: ", replacedString.match(regex));

/////////////////
// spacing out
console.log("\n\n\n\n\n\n");
/////////////////
// string.matchAll(regex);
// returns an iterator of all the results matching a string against a regular expression.
// receives a regex. If a non regex onject passed, it's converted into a regex implicitly
// returns an iterator(which is not a restartable iterator)
// let matches = replacedString.matchAll(/\b(s|S)[A-Za-z]+/);
// console.log("Matching string for S or s in beginning of the word: \n", matches);
// NOT SUPPORTED BY NODE YET
/////////////////
// spacing out
console.log("\n\n\n\n\n\n");
/////////////////

/*
===============================================================================
Array Methods
-About
-Parameters
-Return Value
-Example
===============================================================================
*/

/////////////////
// spacing out
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
/////////////////

let arr = [1, 4, 6, 8, 9, 24, 85];

// arr.length
// A property to calculate the length of an array
// No parameters
// Returns the length of the array
console.log("Length of the array: ", arr.length);

// Array.from();
// Creates a new shallow-copied array instance from an array like or iterable object.
// OPTIONAL parameter: A mapFn to call on every element of the calling array
// An array like or iterable object to convert into an array
// Returns a new array instance
console.log("\nArray.from(\"foo\")", Array.from("foo"));
console.log("Array.from(given array, every item * 2)", Array.from(arr, (x) => x * 2));
console.log()

// Array.isArray(value);
// Determines whether the value passed is an Array
// Receives the value to be checked
// Returns boolean true or false
console.log("\nArray.isArray(arr): ", Array.isArray(arr));

// Array.of(value0, value1 ....);
// Creates an array from the variable number of arguments passed to it
// Receives elements of which to create an array of
// Returns a new instance of an array
console.log("\nArray.of(1, 2, 3, 54, 100): ", Array.of(1, 2, 3, 54, 100));

// arr.concat(anotherArray);
// Is used to merge two or more arrays. Does not change the existing array
// Receives values or array instances which are to be merged
// Returns a new instance of a merged array.
console.log("\narr.concat(1, 3, 54): ", arr.concat(1, 3, 54));

// arr.copyWithin(target, start, end);
// Copies "shallow copies"(<- google for term explanation) the part of an array to another location in the same array and returns it without modifying its size
// Receives a target index (zero based) to start copying the sequence to. If negative, target will be counted from the end. If target is greater than the arr.length, nothing will be copied. If positioned after start the copied, the copied sequence will be trimmed to fit arr.length
// OPTIONAL parameter: start: zero based index at which to start copying the sequence from. If negative it will be counted from the end. If omitted, copyWithin will copy from the default start ie, 0.
// OPTIONAL parameter: end: Zero based index at which to end copying elements from. CopyWithin copies up to but not including the end index. If negative, end will be counted from the end. If omitted copyWithin will copy until the end ie the last index.
// Returns the modified array
console.log("\nPasting the second to last element to front: ", arr.copyWithin(0, arr.length-2, arr.length-1));

// arr.entries();
// This method returns an iterator object that contains the key-value pairs for each index in the array
// Receives no parameters
// Returns the array iterator object
let iterator0 = arr.entries();
console.log("\n");
for(let i = 0; i < arr.length; i++)
    console.log(iterator0.next().value);

// arr.every(callback);
// Checks whether all elements of the array pass the test implemented by the provided function
// Receives a callback function to test each element, taking three arguments:
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// Returns boolean true or false depending upon if the function returns a truthy value for every element of the array or a falsy element.
console.log("\narr.every(callback- even numbers): ", arr.every((x) => x % 2 === 0));

// arr.fill(value, start, end);
// Modifies every element of the array from a start index (default zero) to an end index (default array length) with a static value
// Receives a value to fill the array with
// OPTIONAL start: start index default zero
// OPTIONAL end: end index dafault arr.length - 1, modifies upto but not including this index
// Returns the modified array
console.log("\nModifying the first value to 0: ", arr.fill(0, 0, 1));

// arr.filter(callback);
// Creates a new array with all the elements that pass the test implemented by the provided function
// Receives a callback function to test each element of the array with. It accepts three arguments:
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// Returns a new array with the elements that pass the test. If no elements pass the test, returns an empty array
console.log("\nFiltering even numbers: ", arr.filter((x) => x % 2 === 0));

// arr.find(callback);
// Returns the value of the first element in the array that satisfies the provided testing function
// Receives the callback function to execute. It accepts three arguments:
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// Returns the value of the first element that satifies the callback function. If no element satisfies, undefined is returned
console.log("\nFind the first even number: ", arr.find((x) => x % 2 === 0));

// arr.findIndex(callback);
// Same as arr.find(callback) except that it returns the index of the matching element. If no match found it returns -1.
console.log("\nIndex of the first even number: ", arr.findIndex((x) => x % 2 === 0));

// arr.flat(depth);
// Creates a new array with all sub-array elements concatenated into it recursively up to specified depth.
// Receives the depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
// Returns a new array with the sub-array elements concatenated into it.
// console.log("\nFlattening the nested arrays: ", [1, 2, 3 [3, 5, 5]].flat(1));
// NOT SUPPORTED YET

// arr.forEach(callback);
// Executes a provided function once for each array element
// Receives a callback function to execute for each element. The function receives three arguments:
    // the current element to be processed.
    // OPTIONAL: the index ofsorting array in javascript using sort the current element being passed
    // OPTIONAL: The array itself
// Returns undefined. Modifies the existing array
arr.forEach((val, index) => arr[index] = val * 2);
console.log("\n2 * forEach element of the array: ", arr);

// arr.includes(valueToFind, fromIndex);
// Checks whether an array contains a certain value in its entries
// Receives the value to search for
// OPTIONAL parameter: fromIndex: The position in the array from where to begin searching. The first character to be searched is found at fromIndex for positive values of fromIndex or at (arr.length + fromIndex) for negative values of fromIndex. Default value is 0.
// Returns boolean true or false.
console.log("\nChecking if 18 is included in the array: ", arr.includes(18));

// arr.indexOf(valueToFind, fromIndex);
// Returns the first index at which the given element can be found
// Receives the value to find
// OPTIONAL parameter: fromIndex: where to begin the search from include the index mentioned
// Returns the index of the first match. -1 if not found.
console.log("\nIndex of 18: ", arr.indexOf(18));

// arr.join(separator);
// Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified string separator. If the array only has one item, it's returned without the separator.
// Receives a string (optional) to separate each pair of the adjacent elements of the array. The separator is converted to a string if necessary. If omitted the array elements are separated with a comma. If separator is omitted, the array characters are joined without any characters in between them.
// Returns a string with all the array elements joined. If arr.length is zero, empty string is returned.
console.log("\nJoined array elements with a space and comma: ", arr.join(", "));

// arr.keys();
// Returns a new array interator onject that contains the keys for each index.
// Receives no parameters
// Returns a new array iterator object
let iterator1 = arr.keys();
console.log("\n");
for(let key of iterator1)
    console.log(key);

// arr.lastIndexOf(valueToFind, fromIndex);
// Returns the last index at which an element can be found.
// Receives the element to locate.
// OPTIONAL parameter: fromIndex: The index at which to start searching backwards. Defaults to arr.length - 1. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
// Returns the index of the last occurrence of the element.
console.log("\nIndex of last instance of 18: ", arr.lastIndexOf(18));

// arr.map();
// Creates a new array with the results of calling a provided function on every element in the calling array.
// Receives the callback function which accepts 3 arguments:
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// Returns a new array with each element being the result of the callback function.
console.log("\nEach element divided by 2: ", arr.map((val) => val / 2));

// arr.pop();
// Removes the last element
// Receives no parameters
// Returns the popped value
console.log("\nPoping last value: ", arr.pop());

// arr.push(elements);
// Adds a value or more to the end of the array and returns the new length of the array
// Receives the elements to be added into the array
// Returns the new length of the object upon which the method was called
console.log("\nPushing 200 value to the array: ", arr.push(200));

// arr.reduce(callback, initialValue);
// Executes a reducer function that you provide on each member of the array resulting in a single output value.
// Receives the callback function to execute on every element. It receives 4 arguments:
    // accumulator: The accumulator accumulates the callbacks return values. It is the accumulated value previously returned in the last invocation of the callback or initialValue if supplied (see below).
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// OPTIONAL parameter: initialValue: Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element of the array will be used. Calling reduce() on an empty array without an initial value is an error.
// Returns the value that results from the reduction
console.log("\nReducing the array: adding the values with 100 as initial value: ", arr.reduce(((acc, val) => acc += val), 100));

// arr.reduceRight(callback, initialValue);
// Same at the reduce() method except it start reduction from the right
console.log("\nReducing values from right into a string: ", arr.reduceRight(((acc, val) => acc += val.toString()), "String:"));

// arr.reverse();
// Reverses the array
// Receives no parameter
// Returns the reversed array
console.log("\nReversing the array: ", arr.reverse());

// arr.shift();
// Removes the first element of the array and returns the removed element consequently changing the length of the array
// Receives no parameter
// Returns the removed element
console.log("\nRemoving the first element: ", arr.shift());

// arr.slice(begin, end);
// Returns the shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array stays unmodified.
// OPTIONAL parameter: begin: Zero based index at which to begin extraction. A negative index can be used indicating an offset from the end of the sequence. slice(-2) will extract the last two elements of the array. If undefined, begins at 0. If greater than the arr.length, an empty array is returned.
// OPTIONAL parameter: end: zero based index before which to end the extraction. Extracts upto but not including the end index. A negative index means an offset from end of the array. Defaults to arr.length. If greater than arr.length, extracts through to the end of the array.
// Returns a new array containing the extracted elements
console.log("\nExtracting first 3 elements: ", arr.slice(0, 3));

// arr.some(callback);
// Checks whether atleast one element in the array passes the test implemented by the provided function
// Receives a callback function to check the elements. It accepts three arguments:
    // the current element to be processed.
    // OPTIONAL: the index of the current element being passed
    // OPTIONAL: The array itself
// Returns true if any element satisfies the array else false.
console.log("\nIf any element is odd: ", arr.some((val) => val % 2 === 1));

// arr.sort(compareFunction);
// Sorts the array elements in place and returns the array. Default sort order is built upon converting the elements into strings and then comparing their UTF-16 codes
// OPTIONAL parameter: compareFunction: Specifies a function that defines the sort order. If omitted the array is sorted according to each character's UNICODE. It receives two arguments:
    // firstE1: The first element for comparision.
    // secondE1: The second element for comparision.
// Returns: The sorted array
console.log("\nSorting [1, 4, 64, 32]: ", [1, 4, 64, 32].sort());

// arr.splice(start, deleteCount, item1, item2 ...);
// Changes the contents of the array by removing or replacing existing elements and/or adding new elements
// Receives start index at which to start changing the array. If greater than the length of the array, actual starting index is arr.length. If negative, will begin that many elements from the end of the array (arr.length - n) and set to 0 if absolute value is greater than the length of the array.
// OPTIONAL deleteCount: An integer indicating the number of old array elements to remove. If omitted, or if larger than or equal to arr.length - start, then all elements from start through the end of the array will be deleted. If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element.
// OPTIONAL item1, item2 ... : The elements add to the array beginning at the start index. If none specified, splice() will only remove elements from the array.
// Returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If none removed an empty array is returned.
console.log("\nPrinting the last deleted element, and adding 1 in its place: ", arr.splice(arr.length - 1, 1, 1));
console.log("Updated array: ", arr);

// arr.toSource();
// Returns a string representing the source code of the array
// No parameters.
// Returns a string representing the source code of the array
// console.log("\nSource code of the array: ", arr.toSource());
// NOT SUPPORTED YET

// arr.toString();
// Returns a string representing the specified array and its elements
// No parameters
// Returns the string representing the specified array and its elements
console.log("\nString representing the array elements: ", arr.toString());

// arr.unshift(elements...);
// Adds one or more elements to the beginning of an array and returns the new length of the array.
// Receives the elements to be added to the front of the array.
// Returns the new length of the array.
console.log("\nAdding 50 to the beginning of the array: ", arr.unshift(50));
console.log("New array: ", arr);

// arr.values();
// Returns a new array iterator object that contains the values for each index in the array.
// No parameters
// Returns a new array iterator object
// console.log("\n");
// let iterator2 = arr.values();
// for(let key in iterator2) console.log(iterator2.next().value);
// NOT SUPPORTED YET
