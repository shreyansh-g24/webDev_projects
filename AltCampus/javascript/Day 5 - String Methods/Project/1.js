// JavaScript String Exercises

/*
### is_string
Write a JavaScript function to check whether an `input` is a *string or not*.

    console.log(is_string('w3resource'));
    true
    console.log(is_string([1, 2, 4, 0]));
    false
*/
function checkString(val){
    if(typeof(val) === "string") return true;
    else return false;
}
console.log("\nTo check is the passed value is a string: ", checkString(124));
/*
### is_Blank
Write a JavaScript function to check whether a string *is blank or not*.

    console.log(is_Blank(''));
    console.log(is_Blank('abc'));
    true
    false
*/
function isBlank(val){
    if(typeof(val) === "string" && !Boolean(val)) return true;
    else return false;
}
console.log("\nIs the passed value an empty string: ", isBlank(""));
/*
### string_Array
Write a JavaScript *function to split a string and convert it into an array* of words.

    console.log(string_to_array("Robin Singh"));
    ["Robin", "Singh"]
*/
function stringToArray(str){
    return str.split(" ");
}
console.log("\nSplitting the string into an array of words: ", stringToArray("The fox jumped over the lazy dog."));
/*
### truncate
Write a JavaScript function to remove specified number of characters from a string.

    console.log(truncate_string("Robin Singh",4));
    "Robi"
*/
function truncateString(str, num){
    // splitting all characters of the string into an array upto the specified number limit and joining the array of characters back into a string
    return str.split("", num).join("");
}
console.log("\nTruncating the string upto specified number of characters: ", truncateString("A String", 5));
/*
### abbrev_name
Write a JavaScript function *to convert* a string in *abbreviated form*.

    console.log(abbrev_name("Robin Singh"));
    "Robin S."
*/
function abbrev_name(name){
    let arr = name.split(' '), str = "" + arr[0] + " " ;
    for(let i = 1, n = arr.length; i < n; i++){
        str += arr[i][0] + ".";
    }
    return str;
}
console.log("\nAbbrevating names: ", abbrev_name("Robin Singh"));
/*
### protect
Write a JavaScript function to hide email addresses to protect from unauthorized user.

    console.log(protect_email("robin_singh@example.com"));
    "robin...@example.com"
*/
function hideEmail(email){
    let regex = /@/;
    let emailArr = email.split(regex), user = "";
    if(emailArr[0].length <= 8){
        user = truncateString(emailArr[0], 2);
    }
    else{
        user = truncateString(emailArr[0], 5);
    }
    let hiddenEmail = user + "..." + "@" + emailArr[1];
    return hiddenEmail;
}
console.log("\nHiding the email address: ", hideEmail("someuser_123@gmail.com"));
/*
### parameterize
Write a JavaScript function to *parameterize a string*.

    console.log(string_parameterize("Robin Singh from USA."));
    "robin-singh-from-usa"
*/
function parameterize(str){
    // Converting the string lower case, splitting the string by non word characters into an array of words, joining back the array elements by a dash, then splitting the string into an array with "." as a separator
    return str.toLowerCase().split(/\W/).join("-");
}
console.log("\nParameterizing a string: ", parameterize("someuser123@gmail.com"));
/*
### capitalize_first
Write a JavaScript function to *capitalize the first letter of a string*.

    console.log(capitalize('js string exercises'));
    "Js string exercises"
*/
function capitalize(str){
    // Assuming that the string passed starts with an alphabet.
    // Replacing the first instance of an alphabet with the uppercase version of the same alphabet which has been obtained using slice and converted to upper case and returning the modified string.
    return str.replace(/[A-Za-z]/, str.slice(0, 1).toUpperCase());
}
console.log("\nCapitalizing the string passed to the function: ", capitalize("some string"));
/*
### capitalize_words
Write a JavaScript function to *capitalize* the first letter *of each word* in a string.

    console.log(capitalize_Words('js string exercises'));
    "Js String Exercises"
*/
function capitalizeWords(str){
    // splitting the string into an array of words, for each word capitalizing the first alphabet using the previously made custom function and then joining the words into a string.
    return str.split(" ").map((val) => capitalize(val)).join(" ");
}
console.log("\nCapitalizing all words of the string: ", capitalizeWords("a non-capitalized string."));
/*
### swapcase
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and *converts upper case letters to lower case*, and lower case letters to upper case.

    console.log(swapcase('AaBbc'));
    "aAbBC"
*/
function swapCase(str){
    // splitting every character of the string into an array of characters, checking if the value is uppercase then converting it into lowercase if true else into uppercase, then joining the characters back into a string.
    return str.split("").map((val) => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()).join("");
}
console.log("\nSwapping the case in a string: ", swapCase("SomE StrInG."));
/*
### camelize
Write a JavaScript function *to convert a string into camel case*.

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"
*/
function camelCase(str){
    return str.split(" ").map((val) => capitalize(val)).join("");
}
console.log("\nCoverting the passed string into camel case: ", camelCase("Java script exercises."));
/*
### uncamelize
Write a JavaScript function to *uncamelize* a string.

    console.log(uncamelize('helloWorld','_'));
    "hello_world"
*/
function uncamelize(str, connector){
    // splitting the string into an array of characters, if the value is upper case, appending the connector and converting to lower case, joining the characters back into a string.
    return str.split("").map((val, index) => (val === val.toUpperCase() && index !== 0) ? (connector + val.toLowerCase()) : val).join("");
}
console.log("\nUncamelizing the string: ", uncamelize("JavaScriptExercises", "_"));
/*
### repeat
Write a JavaScript function to *concatenates a given string n times* (default is 1).

    console.log(repeat('Ha!',3));
    "Ha!Ha!Ha!"
*/
function repeat(str, times){
    return str.repeat(times);
}
console.log("\nRepeating the string 'ha' 3 times: ", repeat("ha", 3));
/*
### insert
Write a JavaScript function to insert a string within a string at a *particular position* (default is 0).


    console.log(insert('We are doing some exercises.','JavaScript ',18));
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."
*/
function insert(str, add, index){
    // replacing the string at the given index with the added string + the character there, accessing the characters at previous and next indices to short down the matchable string patterns
    return str.replace(str.charAt(index - 1) + str.charAt(index) + str.charAt(index + 1), str.charAt(index - 1) + add + str.charAt(index) + str.charAt(index + 1));
}
console.log("\nInserting word in a string: ", insert("Complete the exercises", " JavaScript", 12));
/*
### humanized
Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

    console.log(humanize_format(301));
    console.log(humanize_format(402));
    "301st"
    "402nd"
*/
function humanized(num){
    let suffix = "";
    switch(num%10){
        case 1:
            suffix = "st";
            break;
        case 2:
            suffix = "nd";
            break;
        case 3:
            suffix = "rd";
            break;
        default:
            suffix = "th";
    }
    return num.toString() + suffix;
}
console.log("\nHumanizing numbers: ", humanized(303));
/*
### truncate
Write a JavaScript function to *truncates a string if it is longer than the specified number of characters*. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

    console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
    "We are doing !!"
*/
function truncate(str){
    if(str.length > 12) return str.slice(0, 11) + "...";
}
console.log("\ntTruncating the string: ", truncate("We are doing JavaScript Exercises."));
/*
### chop
Write a JavaScript function *to chop a string into chunks of a given length*.

    console.log(string_chop('w3resource',2));
    ["w3", "re", "so", "ur", "ce"]
*/
// DONE
/*
### count
Write a JavaScript function to *count the occurrence of a substring* in a string.

    console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    Output :
    2
*/
// DONE
/*
### HTML_scape
Write a JavaScript function to *escape a HTML* string.

```
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
```
*/
/*
### formatted_string
Write a JavaScript function that can pad (left, right) *a string to get to a determined length*.

    console.log(formatted_string('00000000',123,''));
    "12300000"
*/
function formatted_string(str){
    while(str.length < 15)
        str = insert(str, "0", str.length);
    return str;
}
console.log("\nPadding the string: ", formatted_string("abc"));
/*
### repeat II
Write a JavaScript function to *repeat a string a specified times*.

    console.log(repeat_string('a', 4));
    "aaaa"
*/
// DONE
/*
### special_chars
Write a JavaScript function to get a part of a string after a specified character.

    console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a');
    "w3resource"
*/
// REPETITIVE
/*
### strip
Write a JavaScript function to *strip leading and trailing spaces* from a string.

    console.log(strip(' w3resource '));
    "w3resource"
*/
// BASIC
/*
### truncate II
Write a JavaScript function to truncate a string to a certain number of words.

    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    "The quick brown fox"
*/
// DONE
/*
### alphabetize
Write a JavaScript function to alphabetize a given string.

*Hint:Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.*

    console.log(alphabetize_string('United States'));
    "SUadeeinsttt"
*/
// DONE
/*
### remove_first
Write a JavaScript function to r*emove the first occurrence* of a given 'search string' from a string.

    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    "The quick brown fox jumps over lazy dog"
*/
// REPETITIVE
/*
### ASCIItoHEX
Write a JavaScript function to *convert ASCII to Hexadecimal* format.

    console.log(ascii_to_hexa('12'));
    "3132"
*/
/*
### HEXtoASCII
Write a JavaScript function to *convert Hexadecimal to ASCII format*.

    console.log(hex_to_ascii('3132'));
    console.log(hex_to_ascii('313030'));
    "12"
    "100"
*/
/*
### search
Write a JavaScript function to find a word within a string.

    console.log(search_word('The quick brown fox', 'fox'));
    "'fox' was found 1 times."
*/
/*
### check_ifEnds
Write a JavaScript function *check if a string ends with specified suffix*.

    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    true
*/
/*
### scape_HTML II
Write a JavaScript function to *escapes special characters* **(&, <, >, ', ")** for use in HTML.

    console.log(escape_html('PHP & MySQL'));
    "PHP &amp; MySQL"
*/
/*
### remove II
Write a JavaScript function to *remove non-printable ASCII* chars.

    console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    "PHP-MySQL"
*/
/*
### remove III
Write a JavaScript function to *remove non-word characters*.

    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))
    "PHP - MySQL"
*/
/*
### sentence
Write a JavaScript function to *convert a string to title case*.

    console.log(sentenceCase('PHP exercises. python exercises.'));
    "Php Exercises. Python Exercises."
*/
/*
### remove_HTMLorXML
Write a JavaScript function to *remove HTML/XML tags* from string.

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"
*/
/*
### zeroFill
Write a JavaScript function to create a *Zerofilled value with optional +, - sign*.

    console.log(zeroFill(120, 5, '-'));
    "+00120"
*/
/*
### compare
Write a JavaScript function to *test case insensitive* (except special Unicode characters) string comparison.

    console.log(compare_strings('abcd', 'AbcD'));
    true
*/
/*
### search II
Write a JavaScript function to *create a case-insensitive search*.

    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'))
    "Not Matched"
*/
/*
### uncapitalize
Write a JavaScript function to *Uncapitalize the first character of a string*.

    console.log(Uncapitalize('Js string exercises'));
    "js string exercises"
*/
/*
### uncapitalize II
Write a JavaScript function to *Uncapitalize the first letter of each word* of a string.

    console.log(unCapitalize_Words('Js String Exercises'));
    "js string exercises"
*/
/*
### capitalize
Write a JavaScript function to *capitalize each* word in the string.

    console.log(capitalizeWords('js string exercises'));
    "JS STRING EXERCISES"
*/
/*
### capitalize II
Write a JavaScript function to *uncapitalize each word* in the string.

    console.log(unCapitalizeWords('JS STRING EXERCISES'));
    "js string exercises"
*/
/*
### isUpper
Write a JavaScript function to *test whether the character at the provided* (character) index is upper case.

    console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
    false
*/
/*
### isLower
Write a JavaScript function to *test whether the character at the provided (character) index is lower case*.

    console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
    true
*/
/*
### humanize II
Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

    console.log(humanize(1));
    console.log(humanize(20));
    "1st"
    "20th"
*/
/*
### startsWith
Write a JavaScript function to test whether a *string starts with a specified string*.

    console.log(startsWith('js string exercises', 'js'));
    true
*/
/*
### endsWith
Write a JavaScript function to *test* whether a string *ends with a specified string*.

    console.log(endsWith('JS string exercises', 'exercises'));
    true
*/
/*
### guid
Write a JavaScript function to *get unique guid*(an acronym for 'Globally Unique Identifier’) of the specified length, or 32 by default.

    console.log(guid(15));
    "b7pwBqrZwqaDrex"
*/
