/*
Index.js
*/

// accessing daily most active stock companies
// https://financialmodelingprep.com/api/stock/actives?datatype=json


// function declarations //
// initialising
function pageLoadInit(){
    let url = urlConst("actives", "multipleDaily");
    let jsonResponse = fetchSync(url);
    jsonResponse.then(data => displayHeroData(data));
}

// displaying stocks on index.html load
function displayHeroData(stockInfo){
    stockInfo = parseFetchedData(stockInfo);
    let printStockInfo = "";
    for(let key0 in stockInfo){
        printStockInfo += key0 + ":-\n";
        for(let key1 in stockInfo[key0]){
            printStockInfo += key1 + ": " + stockInfo[key0][key1] + "\n";
        }
    }

    // displaying the data
    let indexStockContainer = document.querySelector(".indexStockContainer");
    indexStockContainer.innerText = printStockInfo;
}

// parsing the data
function parseFetchedData(data){
    let dataCopy = data;
    data = {};
    for(let key0 in dataCopy){
        data[key0] = {};
        for(let key1 in dataCopy[key0]) {
            if(key1 === "Ticker" || key1 === "Price" || key1 === "companyName"){
                data[key0][key1] = dataCopy[key0][key1]; 
            }
        }
    }
    return data;
}

// variable declarations //



// function calls //
pageLoadInit();
inputEventHandler();