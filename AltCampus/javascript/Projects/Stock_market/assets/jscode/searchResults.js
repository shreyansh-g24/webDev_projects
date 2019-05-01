/*
searchResults.html
*/

/*
    successfully display the search result of query on index page,here    
    approaches: 
    save the result in local storage and access it here
    or
    declare a global variable with the value of that variable/promise and access that global variable here.
*/
let a = require(main.gFetchedStockPrice);   
a.then(jsonData => console.log(jsonData));


