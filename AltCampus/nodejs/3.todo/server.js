// Initialising a server & rendering the html page //

// importing modules
let fs = require("fs");
let indexPath = __dirname + "/index.html";
let dataPath = __dirname + "/data.json";

// file reading function
function readFile(path){
    return fs.readFileSync(path);
}

// file write function
function writeFile(path, data){
    fs.writeFileSync(path, data);
    return 0;
}

// creating html elements
function createHtml(element, data){
    let html = "<ol>";
    for(let i = 0; i < data.length; i++){
        html += "<li data-id=" + data[i]._id + ">" + data[i].todo + "</li>";
    }
    html += "</ol>";
    return html;
}

// defining callback function
let handleEvent = (req, res) => {
    let todos = readFile(dataPath);
    todos = JSON.parse(todos);
    if(req.method === "POST"){
        let inputText = "";
        req.on("data", (chunk) => {
            inputText += chunk;
        });
        req.on("end", () => {
            let todo = inputText.split("=").pop();
            if(todo !== ""){
                todos.push({
                    todo: todo,
                    _id: todos.length,
                });
                writeFile(dataPath, JSON.stringify(todos));
            }
        });
    }

    // reading and rendering the html page
    let htmlData = readFile(indexPath);
    // reading todos
    let todoLi = createHtml("li", todos);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(htmlData + todoLi);
    res.end();
};

// Exporting server
module.exports = {
    serverInit: function(){
        // importing modules
        const http = require("http");
        const port = process.env.PORT || 4000;

        // defining a host
        let hostname = "localhost" || "127.0.0.1";

        // instantiating a server
        let server = http.createServer(handleEvent);
        server.listen(port, hostname, () => {
            console.log("Server listening on port: ", port);
        });

        return server;
    },
};
