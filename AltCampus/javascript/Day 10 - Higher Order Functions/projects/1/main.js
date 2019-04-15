// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArr = [];
    for(let i = 0, n = array.length; i < n; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(let i = 0, n = array.length; i < n; i++){
        array[i] = callback(array[i]);
    }
}

// see for yourself if your forEach works!
let arr = [1, 2, 3];
forEach(arr, (value) => addTwo(value));
console.log(arr);

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArr = [];
    forEach(array, (value) => newArr.push(callback(value)));
    return newArr;
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue = array[0]) {
    let acc = initialValue;
    for(let i = 0, n = array.length; i < n; i++){
        acc = callback(acc, array[i]);
    }
    return acc;
}

console.log(reduce([1, 2, 3], (acc, value) => acc += value, 0));

//Extension 3
function intersection(arrays) {
    let matchedArr = [];
    let match = 0;
    let matchBool = [];
    for(let i = 0, n = arrays[0].length; i < n; i++){
        matchBool = [];
        match = arrays[0][i];
        nextArr: for(let j = 1, m = arrays.length; j < m; j++){
            for(let k = 0, o = arrays[j].length; k < o; k++){
                if(arrays[j][k] === match) {
                    matchBool.push(true);
                    continue nextArr;
                }
            }
        }
        if(matchBool.length === arrays.length - 1) matchedArr.push(match);
    }
    return matchedArr;
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
    let newArr = [];
    let updatedArr = [];
    for(let i = 0, n = arrays.length; i < n; i++){
        for(let j = 0, m = arrays[i].length; j < m; j++){
            newArr.push(arrays[i][j]);
        }
    }
    let matchBool = true;
    for(let i = 0, n = newArr.length; i < n; i++){
        matchBool = true;
        for(let j = 0, m = updatedArr.length; j < m; j++){
            if(i !== j && newArr[i] === updatedArr[j]) matchBool = false;
        }
        if (matchBool) updatedArr.push(newArr[i]);
    }
    return updatedArr;
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let obj = {};
    for(let i = 0, n = array1.length; i < n; i++){
        if(callback(array1[i]) === array2[i]) obj[array1[i]] = array2[i];
    }
    return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    for(let i = 0, n = arrVals.length; i < n; i++){
        obj[arrVals[i]] = [];
        for(let j = 0, m = arrVals.length; j < m; j++){
            obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
        }
    }
    return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
