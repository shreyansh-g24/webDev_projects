// starting a server //

// importing modules
const HTTP = require("http");
const PORT = process.env.PORT || 4000;
const HOSTNAME = "localhost" || "127.0.0.1";

// initialising a server
const server = {};
const httpServer = HTTP.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    res.write("Welcome to CLI");
    res.end();
});

server.init = () => {
    httpServer.listen(PORT, HOSTNAME, () => {
        console.log("Server listening on port: ", PORT);
    });
};

module.exports = server;
