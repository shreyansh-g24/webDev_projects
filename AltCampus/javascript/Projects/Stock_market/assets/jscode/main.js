// Main JSCode
// function declarations //
// initialising
function inputEventHandler(){
    // event listener for input container to display search results
    let inputContainer = document.querySelector(".inputContainer");
    inputContainer.addEventListener("submit", (event) => {
        // fetching data
        event.preventDefault();
        let inputSearch = document.querySelector(".inputSearch");
        let url = urlConst(inputSearch.value, "stockPrice");
        let jsonResponse = fetchSync(url);
        // displaying data if on search results page
        if(window.location.pathname.split("/").pop() === "searchResults.html"){
            jsonResponse.then(jsonData => displayPrimaryData(JSON.stringify(jsonData)));
            inputSearch.value = "";
        }
        // redirecting to search results page if not on it
        else{    
            window.gFetchedStockPrice = jsonResponse;
            setTimeout(() => redirect("searchResults.html", inputSearch.value), 1000);
        }
    });

    return 0;
}

/*
FIX THE REDIRECTION USING THE QUERY ETC. EXTRACT THE TICKER AND UPDATE THE PAGE
*/

// redirecting to the target page
function redirect(target, ticker){
    let currentPage = window.location.pathname.split("/").pop();
    if(target === "searchResults.html" && currentPage !== target){
        window.location = "./searchResults.html?ticker="+ticker;
    }

    return 0;
}

// contructing url
function urlConst(info, infoType){
    if(infoType === "stockPrice"){
       return ("https://financialmodelingprep.com/api/company/real-time-price/" + info + "?datatype=json");
    }
    else if(infoType === "multipleDaily"){
        return ("https://financialmodelingprep.com/api/stock/" + info + "?datatype=json");
    }
}


// synchronous fetch
async function fetchSync(url){
    // let response = await fetch(url);
    // let json = await response.json();
    // return json;

    let jsonResponse = 0;
    await fetch(url)
            .then(response => jsonResponse = response.json())
            .catch(err => {
                console.log(err);
                jsonResponse = "Unable to resolve the request";
            });
    return jsonResponse;
}

// displaying data
function displayPrimaryData(data){
    let displayPrimaryResult = document.querySelector(".displayPrimaryResult");
    displayPrimaryResult.innerText = data;

    return 0;
}

// global variables
window.gFetchedStockPrice;

// execution //
// inputEventHandler();
